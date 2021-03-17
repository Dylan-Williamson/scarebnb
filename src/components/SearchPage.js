import { Button } from '@material-ui/core';
import React from 'react';
import '../SearchPage.css';
import SearchResult from './SearchResult';

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
            <SearchResult
                img="https://i.pinimg.com/736x/8d/b7/34/8db73469f2014a2e4c8929b74efee654.jpg"
                location="Private space in the heart of Melbourne"
                title="A True House of Horror"
                description="1 guest • 1 bedroom • 1 bathroom • WiFi • Kitchen • Free Parking"
                star={4.89}
                price="$85 / night"
                total="$85 total"
            />

            <SearchResult
                img="https://i.pinimg.com/736x/8d/b7/34/8db73469f2014a2e4c8929b74efee654.jpg"
                location="Private space in the heart of Melbourne"
                title="A True House of Horror"
                description="1 guest • 1 bedroom • 1 bathroom • WiFi • Kitchen • Free Parking"
                star={4.89}
                price="$85 / night"
                total="$85 total"
            />
            <SearchResult
                img="https://i.pinimg.com/736x/8d/b7/34/8db73469f2014a2e4c8929b74efee654.jpg"
                location="Private space in the heart of Melbourne"
                title="A True House of Horror"
                description="1 guest • 1 bedroom • 1 bathroom • WiFi • Kitchen • Free Parking"
                star={4.89}
                price="$85 / night"
                total="$85 total"
            />
            <SearchResult
                img="https://i.pinimg.com/736x/8d/b7/34/8db73469f2014a2e4c8929b74efee654.jpg"
                location="Private space in the heart of Melbourne"
                title="A True House of Horror"
                description="1 guest • 1 bedroom • 1 bathroom • WiFi • Kitchen • Free Parking"
                star={4.89}
                price="$85 / night"
                total="$85 total"
            />
            <SearchResult
                img="https://i.pinimg.com/736x/8d/b7/34/8db73469f2014a2e4c8929b74efee654.jpg"
                location="Private space in the heart of Melbourne"
                title="A True House of Horror"
                description="1 guest • 1 bedroom • 1 bathroom • WiFi • Kitchen • Free Parking"
                star={4.89}
                price="$85 / night"
                total="$85 total"
            />
            <SearchResult
                img="https://i.pinimg.com/736x/8d/b7/34/8db73469f2014a2e4c8929b74efee654.jpg"
                location="Private space in the heart of Melbourne"
                title="A True House of Horror"
                description="1 guest • 1 bedroom • 1 bathroom • WiFi • Kitchen • Free Parking"
                star={4.89}
                price="$85 / night"
                total="$85 total"
            />
        </div>
    )
}

export default SearchPage
