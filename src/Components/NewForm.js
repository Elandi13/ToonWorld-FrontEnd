import React from "react"

function NewForm() {
    return(
        <div>
            <form className = "new-form"> 
                <label htmlFor="tv_show">  </label>
                <input type="text" name="tv_show" placeholder="Enter Tv Show" />

                <label htmlFor = "title"> </label>
                <input type="text" name="title" placeholder="Title" />

                <label htmlFor = "year"> </label>
                <input type="number" name="year" placeholder="Year" />

                <label htmlFor = "episode" > </label>
                <input type="number" name="episode" placeholder="episode # " />

                <label htmlFor = "clip" >  </label>
                <input type="text" name="clip" placeholder="Paste Url" />

                <label htmlFor = "description" > </label>
                <textarea name="description" placeholder="Enter A Description" />

                <button type="submit"> Upload Clip </button>
             </form>
        </div>
    )
}

export default NewForm;

///child of MainPage