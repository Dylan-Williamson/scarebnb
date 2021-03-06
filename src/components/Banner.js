import { Button } from '@material-ui/core';
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router';
import '../Banner.css';
import { setShowSearch } from '../features/appSlice';
import Search from './Search'

const Banner = () => {
    const dispatch = useDispatch();
    const history = useHistory();
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
                    Get out and tackle your greatest fears
                </h1>
                <h5>
                    Plan a different kind of getaway to unconver the hidden horrors near you.
                </h5>
                <Button onClick={() => history.push('/search')} variant="outlined">
                    Explore Nearby
                </Button>
            </div>
        </div>
    )
}

export default Banner
