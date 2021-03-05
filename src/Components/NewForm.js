import React, { useState } from "react"

function NewForm({onAddCartoon}) {
    const [formEraSelection, setformEraSelection] = useState("")
    const[formData, setFormData] = useState({
        tv_show: "", 
        title: "", 
        year: "", 
        era: "",
        episode: "",
        clip: "",
        image: "",
        description: ""
    })

    function handleFormChange(event){
        setFormData({...formData,
             [event.target.name]: event.target.value })
    }

    function handleSubmit(event){
        event.preventDefault()
        const newCartoon = {
            tv_show: formData.tv_show,
            title: formData.title,
            year: formData.year,
            era: formData.era,
            episode: formData.episode,
            clip: formData.clip,
            image: formData.image,
            description: formData.description
        }
        

        fetch('http://localhost:3000/cartoons', {
        method: 'POST', 
        headers: {
            'Content-Type': 'application/json',
                },
        body: JSON.stringify(newCartoon),
            })
        .then(response => response.json())
        .then(onAddCartoon) 
    }

    return(
        <div>
            <form className = "new-form" onSubmit ={handleSubmit} > 
                <label htmlFor="tv_show">  </label>
                <input type="text" name="tv_show" placeholder="Enter Tv Show" value={formData.tv_show} onChange={handleFormChange}/>

                <label htmlFor = "title"> </label>
                <input type="text" name="title" placeholder="Title" value={formData.title} onChange={handleFormChange}/>

                <label htmlFor = "year"> </label>
                <input type="number" name="year" placeholder="Year" value={formData.year} onChange={handleFormChange}/>

                <label htmlFor = "era"> </label>
                <select placeholder="Select an Era" > 
                    <option > Era </option>
                    <option value="1990s" name ="era" onClick={handleFormChange}> 1990's </option>
                    <option value="2000s" name ="era" onClick={handleFormChange}> 2000's </option>
                    <option value="2010s" name ="era" onClick={handleFormChange}> 2010's </option>
                </select>

                <label htmlFor = "episode" > </label>
                <input type="number" name="episode" placeholder="episode # " value={formData.episode} onChange={handleFormChange}/>

                <label htmlFor = "clip" >  </label>
                <input type="text" name="clip" placeholder="Video Url" value={formData.clip} onChange={handleFormChange} />

                <label htmlFor = "image" >  </label>
                <input type="text" name="image" placeholder="Image Url" value={formData.image} onChange={handleFormChange}/>

                <label htmlFor = "description" > </label>
                <textarea name="description" placeholder="Enter A Description" value={formData.description} onChange={handleFormChange}/>

                <button type="submit"> Upload Clip </button>
             </form>
        </div>
    )
}

export default NewForm;

///child of MainPage