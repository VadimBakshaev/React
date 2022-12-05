import React from 'react';
import ReactDOM from 'react-dom/client';
import {Message} from './app';
import './index.css';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Message text = 'its text'/>
);

