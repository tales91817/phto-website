import React from "react";

const Search = () => {
    const Search = () => {
        const initialURL = "https://api.pexels.com/v1/curated?page=1&per_page=15"
        const searchURL = `https://api.pexels.com/v1/search?query=${input}&per_page=15&page=1`
    }

    return (
        <div className="search">
            <input type="text" />
            <button onClick={search}>Search</button>
        </div>
    )
}

export default Search