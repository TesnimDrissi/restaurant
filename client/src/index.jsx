import React, { useEffect, useState } from 'react'
import ReactDOM from 'react-dom'
import axios from 'axios'
import $ from 'jquery'
import List from './components/List.jsx'

const App = () => {
  const [recipe, setRecipe] = useState([])
  const [update,setUpdate] = useState(false)
  useEffect(() => {
    axios
      .get("http://localhost:3000/api/recipes/getAll")
      .then((response) => {
        setRecipe(response.data);
        console.log(response.data);
      })
      .catch((err) => {
        console.error(err);
      });
  }, [update])

  const create = function (name,category,ingredients,description,image){
   
    axios.post("http://localhost:3000/api/recipes/create", 
      {name:name, 
      category:category,
      ingredients:ingredients,
      description:description,
      image:image})
    .then((response)=>(
      //setItems( response.data)
      setUpdate(!update)
    ))
    .catch((err) => {
      console.error(err);
    })
  }

  const updateRecipe = function (name,category,ingredients,description,image,idrecipe){
   
    axios.put(`http://localhost:3000/api/recipes/${idrecipe}`, 
      {name:name, 
      category:category,
      ingredients:ingredients,
      description:description,
      image:image,
      idrecipe:idrecipe
      })
    .then((response)=>(
      //setItems( response.data)
      setUpdate(!update)
    ))
    .catch((err) => {
      console.error(err);
    })
  }

  const deleteRecipe = function (id){
   
    axios.delete(`http://localhost:3000/api/recipes/${id}`, 
      {
      idrecipe:id
      })
    .then((response)=>(
      //setItems( response.data)
      setUpdate(!update)
    ))
    .catch((err) => {
      console.error(err);
    })
  }

  return (
    <section class= "list" id= "list">
    <div class= "list-list" id= "list-list">
      <h2>Welcome To 'Bon Appétit' Recipes</h2>
      <List recipe={recipe} create={create} updateRecipe={updateRecipe} deleteRecipe={deleteRecipe} />
    </div>
    </section>
  )
}

ReactDOM.render(<App />, document.getElementById('app'))
