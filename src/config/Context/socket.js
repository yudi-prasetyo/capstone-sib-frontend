import {io} from 'socket.io-client';
import React from 'react';

const SOCKET_URL = 'http://localhost:5000';

export const socket = io(SOCKET_URL, {transports: ['websocket']});
export const SocketContext = React.createContext();
