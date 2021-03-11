import React, { useState } from "react"
import {useHistory} from "react-router-dom"
function NewForm({onAddCartoon}) {
    const history = useHistory()
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
        history.push("/")
    }

    return(
        <div className = "new-form-page">
            <div className = "new-form-box">
              <form className = "new-form" onSubmit ={handleSubmit} > 
                <label htmlFor="tv_show">TV Show Name</label>
                <input 
                type="text" 
                name="tv_show" 
                placeholder="Enter Tv Show" 
                value={formData.tv_show}
                onChange={handleFormChange}/>

                <label htmlFor = "title">Episode Name</label>
                <input 
                type="text" 
                name="title" 
                placeholder="Title" 
                value={formData.title} 
                onChange={handleFormChange}/>

                <label htmlFor = "year">Year</label>
                <input 
                type="number" 
                name="year" 
                placeholder="Year" 
                value={formData.year} 
                onChange={handleFormChange}/>

                <label htmlFor = "era"> Select An Era </label>
                <select name = "era"  placeholder ="era" value = {formData.era} onChange={handleFormChange} > 
                    <option hidden selected> Era </option>
                    <option value="1990s" > 1990's </option>
                    <option value="2000s" > 2000's </option>
                    <option value="2010s" > 2010's </option>
                </select>

                <label htmlFor = "episode" >Episode Number</label>
                <input 
                type="number"
                name="episode" 
                placeholder="episode # " 
                value={formData.episode} 
                onChange={handleFormChange}/>

                <label htmlFor = "clip" >Clip</label>
                <input 
                type="text" 
                name="clip" 
                placeholder="Video Url" 
                value={formData.clip} 
                onChange={handleFormChange} />

                <label htmlFor = "image" >Image</label>
                <input 
                type="text" 
                name="image" 
                placeholder="Image Url" 
                value={formData.image}
                onChange={handleFormChange}/>

                <label htmlFor = "description" > Description </label>
                <textarea 
                name="description" 
                placeholder="Enter A Description" 
                value={formData.description}
                onChange={handleFormChange}/>
                    <br></br>
                <button type="submit"> Upload Clip </button>
             </form>
            </div>
        </div>
    )
}

export default NewForm;

///child of MainPage