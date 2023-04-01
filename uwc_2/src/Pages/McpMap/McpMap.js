import { SideBar } from '~/components';
import clsx from 'clsx';
import { useEffect, useRef, useState } from 'react';
import styles from './McpMap.module.scss';
import { id1, id2, id3, id4, id5, id6, id7 } from '~/image/MCP';
function McpMap() {
    const MCP_img = [id1, id2, id3, id4, id5, id6, id7];
    const urlMCPs = 'http://localhost:3000/MCP';
    const [MCPid, setMCPid] = useState('');
    const [address, setAddress] = useState('');
    const [state, setState] = useState('');
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

    function UpdateMCPApi(method, body, url, id) {
        fetch(`${url}/${id}`, {
            method: method,
            body: JSON.stringify(body),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        }).then((response) => response.json());
    }
    if (state && render) {
        if (MCPData.current[MCPid - 1].address == address) {
            MCPData.current[MCPid - 1].status = state;
            UpdateMCPApi('PATCH', MCPData.current[MCPid - 1], urlMCPs, MCPid);
        } else alert('Sai thông tin MCP');
        setRender(0);
        setAddress('');
        setMCPid('');
        setState('');
    }

    return (
        <div className={clsx(styles.container)}>
            <div className={clsx(styles.fixed)}>
                <h1>MCP Data</h1>
                <SideBar />
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
                    return (
                        <ul className={clsx(styles.flex_item)} key={index}>
                            <li key={MCP.MCPid}>MCP id: {MCP.MCPid}</li>
                            <li key={MCP.address}>Address: {MCP.address}</li>
                            <li key={MCP.status}>Status: {MCP.status}</li>
                            <img className={clsx(styles.MCP_img)} src={MCP_img[index]} />
                        </ul>
                    );
                })}
            </div>
        </div>
    );
}
export default McpMap;
