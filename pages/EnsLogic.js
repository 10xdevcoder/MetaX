import React from 'react';


const EnsLogic = () => {
    return (
        <form action="/" method="get">
        <label htmlFor="header-search">
            <span className="visually-hidden"></span>
        </label>
        <input
            type="text"
            id="header-search"
            placeholder="Input ENS name or an address"
            name="s" 
        />
        <button type="submit">Search</button>
    </form>
    ) 
};

export default EnsLogic;
