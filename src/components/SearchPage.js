import { Button } from '@material-ui/core';
import React from 'react';
import '../SearchPage.css';

const SearchPage = () => {
    return (
        <div className="searchPage">
            <div className="searchPage__info">
                <p>
                    62 stays • 26 August to 30 August  • 2 guest
                </p>
                <h1>
                    Frights nearby
                </h1>
                <Button variant="outlined">
                    Cancellation Flexibility
                </Button>
                <Button variant="outlined">
                    Type of Place
                </Button>
                <Button variant="outlined">
                    Price
                </Button>
                <Button variant="outlined">
                    Rooms & Beds
                </Button>
                <Button variant="outlined">
                    More Filters
                </Button>
            </div>
        </div>
    )
}

export default SearchPage