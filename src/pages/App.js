import React from 'react';
import {Routes} from "../config";
import {SocketContext, socket} from "../config/Context/socket";

function App(){
    return(
        <SocketContext.Provider value={socket}>
            <Routes />
        </SocketContext.Provider>
    )
}
export default App;
