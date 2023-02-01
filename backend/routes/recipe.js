const express = require('express')
const router=express.Router()

const {retrieveAll,createRecipe,updateRecipe,deleteRecipe} = require ('../controllers/recipe')

router.get('/getAll',retrieveAll)
router.post('/create',createRecipe)

router.put('/:idrecipe',updateRecipe)
router.delete('/:id', deleteRecipe)

module.exports = router