import { SideBar } from '~/components';
import clsx from 'clsx';
import { useEffect, useRef, useState } from 'react';
function McpMap() {
    const urlMCPs = 'http://localhost:3000/MCP';
    const [MCPid, setMCPid] = useState('');
    const [address, setAddress] = useState('');
    const [state, setState] = useState('');
    const [render, setRender] = useState(0);
    fetch(urlMCPs)
        .then((respond) => {
            return respond.json();
        })
        .then((MCPData) => {
            localStorage.setItem('MCPData', JSON.stringify(MCPData));
        });
    const MCPData = useRef(JSON.parse(localStorage.getItem('MCPData')));
    if (state && render) {
        if (MCPData.current.MCP[MCPid - 1].address == address) {
            MCPData.current.MCP[MCPid - 1].status = state;
        } else alert('Sai thông tin MCP');
        setRender(0);
        setAddress('');
        setMCPid('');
        setState('');
    }

    return (
        <div>
            <h1>MCP Data</h1>
            <SideBar />
            {MCPData.current.MCP.map((MCP, index) => {
                return (
                    <ul key={index}>
                        <li key={MCP.MCPid}>MCP id: {MCP.MCPid}</li>
                        <li key={MCP.address}>Address: {MCP.address}</li>
                        <li key={MCP.status}>Status: {MCP.status}</li>
                    </ul>
                );
            })}
            {
                <div>
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
            }
        </div>
    );
}
export default McpMap;
