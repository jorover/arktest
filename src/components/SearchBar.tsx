import React from 'react'
import SearchIcon from '../search.png'

const SearchBar = () => {
  return (
    <form>
        <input type="text" placeholder="Search" className="search-sm" />
        <img src={SearchIcon} alt="search-logo" className="search-logo" />
    </form>
  )
}

export default SearchBar