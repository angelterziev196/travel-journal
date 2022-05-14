import './styles/index.scss';
import React from 'react';
import ReactDOM from 'react-dom';
import Destinations from './components/destinations/Destination';
import data from 'D:/Coding/travel-journal/src/data';
import Nav from 'D:/Coding/travel-journal/src/components/nav/Nav';

export default function App() {
    const destination = data.map((dest) => {
        return <Destinations key={dest.key} {...dest} />;
    });
    return (
        <div className='wrapper'>
            <Nav />
            {destination}
        </div>
    );
}

ReactDOM.render(<App />, document.getElementById('root'));
