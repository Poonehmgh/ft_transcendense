import React, { createContext, useEffect, useState, useContext } from "react";
import PongersRoutes from "./Routes";
import { BrowserRouter } from "react-router-dom";
import { io } from "socket.io-client";
import backendUrl from "src/constants/backendUrl";

const SocketContext = createContext();

function SocketContextProvider(props) {
    const [socket, setSocket] = useState(null);

    useEffect(() => {
        // Code to initialize socket connection
        const newSocket = io(backendUrl.base);
        setSocket(newSocket);

        return () => {
            newSocket.disconnect();
        };
    }, []);

    return (
        <SocketContext.Provider value={socket}>
            {props.children}
        </SocketContext.Provider>
    );
}

function App() {
    return (
        <SocketContextProvider>
            <BrowserRouter>
                <PongersRoutes />
            </BrowserRouter>
        </SocketContextProvider>
    );
}

export default App;

export { SocketContext };
