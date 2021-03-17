import React, { useState } from 'react';
import '../Search.css';
import { DateRangePicker } from "react-date-range";
import 'react-date-range/dist/styles.css'
import 'react-date-range/dist/theme/default.css';
import { People } from '@material-ui/icons';
import { Button } from '@material-ui/core';
import { useHistory } from 'react-router';

const Search = () => {

    const history = useHistory();

    const [startDate, setStartDate] = useState(new Date());
    const [endDate, setEndDate] = useState(new Date());

    const selectionRange = {
        startDate: startDate,
        endDate: endDate,
        key: "selection"
    };

    const handleSelect = (ranges) => {
        setStartDate(ranges.selection.startDate);
        setEndDate(ranges.selection.endDate);
    }

    return (
        // date picker
        <div className="search">
            <DateRangePicker
                ranges={[selectionRange]}
                onChange={handleSelect}
            />
            <h2>
                Number of Guests
                <People />
            </h2>
            <input
                min={1}
                defaultValue={2}
                type="number"
            />
            <Button onClick={() => history.push('/search')} id="search__button">
                Search Scarebnb
            </Button>
        </div>
    )
}

export default Search
