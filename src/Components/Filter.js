import React from "react"
// import styled from 'styled-components'

function Filter({search, onSearch, onEraSelect}){

    return(
        <div class="filter-container">
            <div class="search-bar">
                <input class="search-input" name="search" value={search} placeholder = "Search..." onChange={onSearch}/>
            </div>
    
            <div class="era-dropdown">
                <label htmlFor="value"> Era:</label>
                <select name = "era" onChange={onEraSelect} > 
                    <option value= "all" > All </option>
                    <option value= "1990s"> 1990's </option>
                    <option value="2000s" > 2000's </option>
                    <option value="2010s" > 2010's </option>
                </select>
            </div>      
        </div>
    )
}

export default Filter;