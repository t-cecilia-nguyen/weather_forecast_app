import React, { useState } from "react";

const SearchCity = ({ setCity }) => {
    const [input, setInput] = useState("");

    const handleSearch = (e) => {
        e.preventDefault();
        console.log("Search triggered with:", input);
        if (input) {
            setCity(input);
            setInput("");
        }
    };
    
    return (
        <div className="search-container">
            <form onSubmit={handleSearch} className="search-form">
                <input
                    type="text"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    placeholder="Enter city..."
                    className="search-input"
                />
                <button type="submit" className="search-button">
                    Search
                </button>
            </form>
        </div>
    );
};

export default SearchCity;
