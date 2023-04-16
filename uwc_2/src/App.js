import { useCallback, useEffect, useRef, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { publicRoutes, privateRoutes } from './routes';
import { Account } from '~/class';
import styles from './App.module.scss';
import clsx from 'clsx';
import { SideBar } from './components';
function App() {
    const urlAccounts = 'http://localhost:3000/accountData';
    const urlEmoloyees = 'http://localhost:3000/employeeData';
    const urlMCPs = 'http://localhost:3000/MCP';
    const urlVehicle = 'http://localhost:3000/vehicle';
    const account = useRef(new Account());

    const [page, setPage] = useState(publicRoutes);
    const [accountData, setAccountData] = useState([]);
    const [employeeData, setemployeeData] = useState([]);
    useEffect(() => {
        fetch(urlAccounts)
            .then((respond) => {
                return respond.json();
            })
            .then((accountData) => {
                accountData = accountData.accountData;
                setAccountData(accountData);
                localStorage.setItem('accountData', JSON.stringify(accountData));
            });

        fetch(urlEmoloyees)
            .then((respond) => {
                return respond.json();
            })
            .then((employeeData) => {
                setemployeeData(employeeData);
                localStorage.setItem('employeeData', JSON.stringify(employeeData));
            });
        ///////////////////////
        fetch(urlMCPs)
            .then((respond) => {
                return respond.json();
            })
            .then((MCP) => {
                localStorage.setItem('MCPData', JSON.stringify(MCP));
            });
        fetch(urlVehicle)
            .then((respond) => {
                return respond.json();
            })
            .then((vehicle) => {
                localStorage.setItem('vehicleData', JSON.stringify(vehicle));
            });
    }, []);
    const handleLogout = useCallback((a) => {
        account.current.loginStatus = false;
        setPage(publicRoutes);
    });
    const handleLogin = useCallback((accountParameter) => {
        account.current.loginStatus = true;
        account.current.setAccountName(accountParameter.getAccountName());
        account.current.setAccountPassWord(accountParameter.getAccountPassWord());
        const valid = accountData.some((accounts) => {
            if (
                account.current.getAccountPassWord() == accounts.passWord &&
                account.current.getAccountName() == accounts.accountName
            ) {
                account.current.setAccountId(accounts.id);
                account.current.setBackOfficer(accounts.backOfficer);
                return 1;
            }
            return 0;
        });
        setPage(publicRoutes);
        if (valid) {
            alert(`hello ${account.current.getAccountName()}`);
            localStorage.setItem('account', JSON.stringify(account.current));
            setPage(privateRoutes);
        } else {
            alert(`Sai rồi ${account.current.getAccountName()}`);
        }
    });
    console.log(page == publicRoutes);
    if (page == publicRoutes) {
        return (
            <Router>
                <div className={clsx(styles.container)}>
                    <div className={styles.page}>
                        <Routes>
                            {page.map((route, index) => {
                                const Page = route.component;
                                return (
                                    <Route
                                        key={index}
                                        path={route.path}
                                        element={<Page onLogin={handleLogin} onLogout={handleLogout} />}
                                    />
                                );
                            })}
                        </Routes>
                    </div>
                </div>
            </Router>
        );
    }
    return (
        <Router>
            <div className={clsx(styles.container)}>
                <div className={styles.sidebar}>
                    <SideBar />
                </div>
                <div className={styles.page}>
                    <Routes>
                        {page.map((route, index) => {
                            const Page = route.component;
                            return (
                                <Route
                                    key={index}
                                    path={route.path}
                                    element={<Page onLogin={handleLogin} onLogout={handleLogout} />}
                                />
                            );
                        })}
                    </Routes>
                </div>
            </div>
        </Router>
    );
}

export default App;
