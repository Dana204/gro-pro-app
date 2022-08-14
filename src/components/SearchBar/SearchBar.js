import React from 'react';
import './SearchBar.css';
import searchImg from '../../assets/search.png';

const SearchBar = ({className}) => {
    return (
        <form className={`${className ? className : ''} search-bar`}>
            <fieldset>
                <input placeholder='Search'/>
                <img src={searchImg} alt='search icon' />
            </fieldset>
        </form>
    )
}

export default SearchBar