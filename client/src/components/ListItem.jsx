import React,{useState} from 'react';

const ListItem = (props) => {

  const [name,setName]=useState("")
  const [category,setCategory]=useState("")
  const [ingredients,setIngredients]=useState("")
  const [description,setDescription]=useState("")
  const [image,setImage]=useState("")


  return(
  <section class = "description" id= "description">

  <div class = "description" id= "description">
    <h5>{props.recipe.name } : </h5>
    <h6> Categorie : {props.recipe.category }</h6>
    <h7>Ingredients : </h7>
    {props.recipe.ingredients}
<div>
<h8>How To Cook :</h8>
    {props.recipe.description}
</div>

<div class="recipeImg" id="recipeImg">
<img id="recipeImg" src={props.recipe.image} alt=""/>
   </div>

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

<button class="edit" id="edit" onClick={()=>(props.updateRecipe(name,category,ingredients,description,image,props.recipe.idrecipe))} > Edit  </button>
<button class="delete" id="delete" onClick={()=>(props.deleteRecipe(props.recipe.idrecipe))} > Delete  </button>
  </div>
  </section>
)}

export default ListItem;