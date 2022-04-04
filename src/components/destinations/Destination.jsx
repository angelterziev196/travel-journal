import React from 'react';
import data from 'D:/Coding/travel-journal/src/data';
import locationIcon from 'D:/Coding/travel-journal/src/images/location-icon.png';
import Nav from 'D:/Coding/travel-journal/src/components/nav/Nav';

function Destinations(props) {
    return (
        <section className='destination'>
            <img
                className='destination__image'
                src={props.imageUrl}
                alt='image'
            />
            <div className='destination__wrap'>
                <div className='destination__wrap__location'>
                    <img src={locationIcon} alt='icon' />
                    <span>{props.location}</span>
                    <span>
                        <a href={props.googleMapsUrl}>See on Google Maps</a>
                    </span>
                </div>

                <div className='destination__wrap__description'>
                    <h1 className='destination__wrap__description__title'>
                        {props.title}
                    </h1>
                    <p>
                        {props.startDate} {props.endDate}
                    </p>
                    <p>{props.description}</p>
                </div>
            </div>
        </section>
    );
}

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
