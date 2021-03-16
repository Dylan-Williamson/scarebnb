import { Button } from '@material-ui/core';
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import '../Banner.css';
import { setShowSearch } from '../features/appSlice';
import Search from './Search'

const Banner = () => {
    const dispatch = useDispatch();
    const showSearch = useSelector(state => state.app.showSearch);

    return (
        <div className="banner">
            <div className="banner__search">
                {showSearch && <Search />}
                <Button
                    onClick={() => dispatch(setShowSearch({
                        showSearch: !showSearch
                    }))}
                    variant="outlined"
                    className="banner__searchButton"
                >
                    {showSearch? "Hide" : "Search"}
                </Button>
            </div>
            <div className="banner__info">
                <h1>
                    Get out and stretch your imagination
                </h1>
                <h5>
                    Plan a different kind of getaway to unconver the hidden gems near you.
                </h5>
                <Button variant="outlined">
                    Explore Nearby
                </Button>
            </div>
        </div>
    )
}

export default Banner
