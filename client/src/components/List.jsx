import React,{useState} from "react";
import ListItem from "./ListItem.jsx";

const List = (props) => {
 const [name,setName]=useState("")
 const [category,setCategory]=useState("")
 const [ingredients,setIngredients]=useState("")
 const [description,setDescription]=useState("")
 const [image,setImage]=useState("")
 
  
  return(
  <section>
  <div class = "recipe" id= "recipe">
    <h4> Recipes List:</h4>
       
    <input
          type="text"
          name="name"
          placeholder= "name"
          onChange={(e)=>(setName(e.target.value))}
        />
    <input
          type="text"
          name="category"
          placeholder= "category"
          onChange={(e)=>(setCategory(e.target.value))}
        />
    <input
        type="text"
        name="ingredients"
        placeholder= "ingredients"
        onChange={(e)=>(setIngredients(e.target.value))}
      />
  <input
      type="text"
      name="description"
      placeholder= "description"
      onChange={(e)=>(setDescription(e.target.value))}
    />
  <input
      type="text"
      name="image"
      placeholder= "image"
      onChange={(e)=>(setImage(e.target.value))}
    />  

<button class="create" id="create" onClick={()=>(props.create(name,category,ingredients,description,image))}> Create  </button>

  <div>
  <h9>You Have {props.recipe.length} Recipes Chef!</h9>
  </div>
    
  
    {props.recipe.map((recipe, index) => (
      <div key={index}>
        <ListItem recipe={recipe} updateRecipe={props.updateRecipe} deleteRecipe={props.deleteRecipe}/>
      </div>
    ))}
  </div>
  </section>
  )
}

export default List;
