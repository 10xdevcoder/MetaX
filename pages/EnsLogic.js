import React from 'react';


class EnsLogic extends React.Component {
    render() {
        return (
            <>
                <h1>This is a simple ENS resolution</h1>
                <form >
                    <input
                        className="mt-2 border rounded p-4"
                        type="text"
                        id="header-search"
                        placeholder="Input ENS name or an address"

                    />
                    <button type="submit">Search</button>
                </form>
            </>
        )
    };
}

export default EnsLogic;
