// import { StrictMode } from 'react'; // w/ JSX
import { createElement } from 'react'; // w/o JSX
import { render } from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

render(
    // <StrictMode>
    //    <App />
    // </StrictMode>
    createElement(App),
    document.getElementById('root'),
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
