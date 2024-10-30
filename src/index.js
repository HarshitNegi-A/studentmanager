import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/App';
import StudentProvider from './store/StudentProvider';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <StudentProvider>
    <App />
    </StudentProvider>
);

