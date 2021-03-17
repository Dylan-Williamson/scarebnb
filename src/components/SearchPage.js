import { Button } from '@material-ui/core';
import React from 'react';
import '../SearchPage.css';
import SearchResult from './SearchResult';
import { rentals } from './Rentals'

const SearchPage = () => {

    return (
        <div className="searchPage">
            <div className="searchPage__info">
                <p>
                    8 stays available
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
            {rentals.map(rental => <SearchResult {...rental} />)}
        </div>
    )
}

export default SearchPage
