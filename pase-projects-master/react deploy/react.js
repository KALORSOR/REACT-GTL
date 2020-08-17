import React from 'react'
import ReactDOM from 'react-dom';
class App extends React.Component {
    render() {
        return (
            <div>
                <h1>Header</h1>
                <h2>Content</h2>
                <p>This is the content!!!</p>
            </div>
        );
    }
}
ReactDOM.render(<App/>,
document.getElementById('root'));