import React, { useEffect, useState } from 'react';
import './Search.css';
import { useAlert } from 'react-alert';
import { useNavigate } from 'react-router-dom';
import MetaData from '../layout/MetaData';

function Search() {

    const alert = useAlert();
    const [query, setQuery] = useState("");
    const navigate = useNavigate();

    const handleSearch = (e) => {
        e.preventDefault();
        if (!query) {
            alert.error("Search query is required");
            return false;
        }
        navigate(`/home?query=${query}`);
    }

    useEffect(() => {
    }, [])


    return (
            <form className='searchRecipeContainer flex flex-col justify-center items-center space-y-4 px-4' onSubmit={handleSearch}>
                <MetaData title={"RecipeKing - Search Recipe"} />
                <input type="text" className='w-full max-w-xl border-2 border-gray-200 rounded p-3' placeholder='Search recipe name' value={query} onChange={(e) => { setQuery(e.target.value) }} />
                <button className='bg-blue-500 hover:bg-blue-600 px-5 py-2 rounded text-white text-lg' type='submit'>Search</button>
            </form>
    )
}

export default Search