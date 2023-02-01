const recipe = require ('../database/models/recipe')

module.exports ={
  
    retrieveAll : function(req, res){
       recipe.retrieve(function(error, results){
           if(error) res.status(500).send(error)
           if(results) res.json(results)
       })
    },

    createRecipe : function(req, res){
        recipe.create(function(error, results){
            if(error) res.status(500).send(error)
            if(results) res.json(results)
        },req.body)
     },

     updateRecipe : function(req, res){
        recipe.update(function(error, results){
            if(error) res.status(500).send(error)
            if(results) res.json(results)
        },req.body,req.params.idrecipe)
     },

     deleteRecipe : function(req, res){
        recipe.delete(function(error, results){
            if(error) res.status(500).send(error)
            if(results) res.json(results)
        },req.params.id)
     },

}