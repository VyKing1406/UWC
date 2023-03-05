import { useCallback, useEffect, useRef, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { publicRoutes, privateRoutes } from './routes';
import { Account } from '~/class';
function App() {
    const urlAccount = 'http://localhost:3000/accountData';
    const urlEmoloyee = 'http://localhost:3000/employeeData';
    const account = useRef(new Account());

    const [page, setPage] = useState(publicRoutes);
    const [accountData, setAccountData] = useState([]);
    const [employeeData, setemployeeData] = useState([]);
    useEffect(() => {
        fetch(urlAccount)
            .then((respond) => {
                return respond.json();
            })
            .then((accountData) => {
                accountData = accountData.accountData;
                setAccountData(accountData);
            });

        fetch(urlEmoloyee)
            .then((respond) => {
                return respond.json();
            })
            .then((employeeData) => {
                employeeData = employeeData.employeeData;
                setemployeeData(employeeData);
            });
    }, []);
    const handleLogin = useCallback((accountParameter) => {
        account.current.loginStatus = true;
        account.current.setAccountName(accountParameter.getAccountName());
        account.current.setAccountPassWord(accountParameter.getAccountPassWord());
        var valid = accountData.some((accounts) => {
            if (
                account.current.getAccountPassWord() == accounts.passWord &&
                account.current.getAccountName() == accounts.accountName
            ) {
                account.current.setAccountId(accounts.id);
                return 1;
            }
            return 0;
        });
        setPage(privateRoutes);
        if (valid) {
            alert(`hello ${account.current.getAccountName()}`);
            setPage(privateRoutes);
        } else {
            alert(`Sai rồi ${account.current.getAccountName()}`);
        }
    });

    return (
        <Router>
            <div className="App">
                <Routes>
                    {page.map((route, index) => {
                        const Page = route.component;
                        return (
                            <Route
                                key={index}
                                path={route.path}
                                element={<Page onLogin={handleLogin} employeeData={{ employeeData, account }} />}
                            />
                        );
                    })}
                </Routes>
            </div>
        </Router>
    );
}

export default App;
