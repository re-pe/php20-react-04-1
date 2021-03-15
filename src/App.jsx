import './App.css';
import Header from './components/header';
import Main from './components/main';
import Tags from './helpers/tags';

const { div } = Tags;

// function App() {
//     return (
//         <div className="App container w-50">
//             <Header />,
//             <Main />
//         </div>
//     )
// }

function App() {
    return div(
        { className: 'App container w-50' },
        Header(),
        Main(),
    );
}

export default App;
