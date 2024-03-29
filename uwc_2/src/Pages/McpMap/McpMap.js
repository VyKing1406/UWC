import { SideBar } from '~/components';
import clsx from 'clsx';
import { useEffect, useRef, useState } from 'react';
import styles from './McpMap.module.scss';
import { id1, id2, id3, id4, id5, id6, id7 } from '~/image/MCP';
function McpMap() {
    const MCP_img = [id1, id2, id3, id4, id5, id6, id7];
    const urlMCPs = 'http://localhost:3000/MCP';
    const [MCPid, setMCPid] = useState('');
    const [MCPid1, setMCPid1] = useState('');
    const [address1, setAddress1] = useState('');
    const [deleteMCP, setDeleteMCP] = useState(0);
    const [address, setAddress] = useState('');
    const [state, setState] = useState('');
    const [image, setImage] = useState('');
    const [render, setRender] = useState(0);
    useEffect(() => {
        fetch(urlMCPs)
            .then((respond) => {
                return respond.json();
            })
            .then((MCPData) => {
                localStorage.setItem('MCPData', JSON.stringify(MCPData));
            });
    }, []);
    const MCPData = useRef(JSON.parse(localStorage.getItem('MCPData')));
    const accountData = useRef(JSON.parse(localStorage.getItem('account')));
    function UpdateMCPApi(method, body, url, id) {
        fetch(`${url}/${id}`, {
            method: method,
            body: JSON.stringify(body),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        }).then((response) => response.json());
    }
    function changeMCPApi(method, body, url, id) {
        fetch(`${url}`, {
            method: method,
            body: JSON.stringify(body),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        }).then((response) => response.json());
    }
    function deleteMCPApi(method, body, url, id) {
        fetch(`${url}/${id}`, {
            method: method,
        })
            .then((response) => {
                if (response.ok) {
                    alert(`Object with id ${id} has been deleted successfully.`);
                } else {
                    alert(`Failed to delete object with id ${id}.`);
                }
            })
            .catch((error) => {
                alert(`Failed to delete object with id ${id}.`, error);
            });
    }
    if (render) {
        if (accountData.current.backOfficer == false) {
            if (MCPData.current[MCPid - 1].address == address) {
                MCPData.current[MCPid - 1].status = state;
                UpdateMCPApi('PATCH', MCPData.current[MCPid - 1], urlMCPs, MCPid);
            } else alert('Sai thông tin MCP');
        }
        if (accountData.current.backOfficer == true && deleteMCP == 1) {
            if (address1 != '' && MCPid1 != '') {
                MCPData.current = MCPData.current.filter((item) => item.MCPid != MCPid1);
                deleteMCPApi('DELETE', {}, urlMCPs, MCPid1);
            } else alert('please fill in all information');
        } else if (accountData.current.backOfficer == true && deleteMCP == 0) {
            if (address != '' && MCPid != '' && state != '') {
                let newMCP = {
                    MCPid: MCPid,
                    address: address,
                    status: state,
                    url: image,
                };
                MCPData.current.push(newMCP);
                changeMCPApi('POST', newMCP, urlMCPs, MCPid);
            } else {
                alert('please fill in all information');
            }
        }
        setRender(0);
        setAddress('');
        setMCPid('');
        setAddress1('');
        setMCPid1('');
        setImage('');
        setState('');
        setDeleteMCP(0);
    }
    if (accountData.current.backOfficer == false) {
        return (
            <div className={clsx(styles.container)}>
                <div className={clsx(styles.fixed)}>
                    <div className={clsx(styles.change_box)}>
                        <div className={clsx(styles.change_box_container)}>
                            <input
                                placeholder="MCPid"
                                value={MCPid}
                                onChange={(event) => {
                                    setMCPid(event.target.value);
                                }}
                            ></input>
                            <input
                                placeholder="Address"
                                value={address}
                                onChange={(event) => {
                                    setAddress(event.target.value);
                                }}
                            ></input>
                            <input
                                placeholder="Status"
                                value={state}
                                onChange={(event) => {
                                    setState(Number(event.target.value));
                                }}
                            ></input>
                            <button
                                onClick={() => {
                                    setRender(1);
                                }}
                            >
                                Change
                            </button>
                        </div>
                    </div>
                </div>

                <div className={clsx(styles.flex_container)}>
                    {MCPData.current.map((MCP, index) => {
                        let temp = index % 7;
                        return (
                            <ul className={clsx(styles.flex_item)} key={index}>
                                <li key={MCP.MCPid}>MCP id: {MCP.MCPid}</li>
                                <li key={MCP.address}>Address: {MCP.address}</li>
                                <li key={MCP.status}>Status: {MCP.status}</li>
                                <img className={clsx(styles.MCP_img)} src={MCP_img[temp]} />
                            </ul>
                        );
                    })}
                </div>
            </div>
        );
    }
    if (accountData.current.backOfficer == true) {
        return (
            <div className={clsx(styles.container)}>
                <div className={clsx(styles.fixed)}>
                    <div className={clsx(styles.change_box)}>
                        <div className={clsx(styles.change_box_container)}>
                            <input
                                placeholder="MCPid"
                                value={MCPid}
                                onChange={(event) => {
                                    setMCPid(event.target.value);
                                }}
                            ></input>
                            <input
                                placeholder="Address"
                                value={address}
                                onChange={(event) => {
                                    setAddress(event.target.value);
                                }}
                            ></input>
                            <input
                                placeholder="Status"
                                value={state}
                                onChange={(event) => {
                                    setState(Number(event.target.value));
                                }}
                            ></input>
                            <input
                                placeholder="image"
                                value={image}
                                onChange={(event) => {
                                    setImage(event.target.value);
                                }}
                            ></input>
                            <button
                                onClick={() => {
                                    setRender(1);
                                }}
                            >
                                Add
                            </button>
                        </div>
                    </div>
                    <div className={clsx(styles.delete_box)}>
                        <div className={clsx(styles.delete_box_container)}>
                            <input
                                placeholder="MCPid"
                                value={MCPid1}
                                onChange={(event) => {
                                    setMCPid1(event.target.value);
                                }}
                            ></input>
                            <input
                                placeholder="Address"
                                value={address1}
                                onChange={(event) => {
                                    setAddress1(event.target.value);
                                }}
                            ></input>

                            <button
                                onClick={() => {
                                    setRender(1);
                                    setDeleteMCP(1);
                                }}
                            >
                                Delete
                            </button>
                        </div>
                    </div>
                </div>
                <div className={clsx(styles.flex_container)}>
                    {MCPData.current.map((MCP, index) => {
                        return (
                            <ul className={clsx(styles.flex_item)} key={index}>
                                <li key={MCP.MCPid}>MCP id: {MCP.MCPid}</li>
                                <li key={MCP.address}>Address: {MCP.address}</li>
                                <li key={MCP.status}>Status: {MCP.status}</li>
                                <img className={clsx(styles.MCP_img)} src={MCP_img[index % 7]} />
                            </ul>
                        );
                    })}
                </div>
            </div>
        );
    }
}
export default McpMap;
