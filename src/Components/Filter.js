import React from "react"
import styled from 'styled-components'

function Filter({onSearch, onEraSelect}){

    const FilterLayout = styled.div`
        padding: 25px;
        display: grid;
        grid-template-columns: 300px auto 300px;
        background-color: green;
        color: white;
        
        `

    return(
        <FilterLayout>
            <div>
                <input type = "text" placeholder = "Search..." onChange={onSearch}/>
                {/* <button className = "search-button"> 🔍 </button> */}
            </div>

            <div className="era-dropdown">
                <label htmlFor="value"> Era:</label>
                <select name = "era" onChange={onEraSelect} > 
                    <option value= "all" > All </option>
                    <option value= "1990s"> 1990's </option>
                    <option value="2000s" > 2000's </option>
                    <option value="2010s" > 2010's </option>
                </select>
            </div>

        </FilterLayout>
    )
}

export default Filter;