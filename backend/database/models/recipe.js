const connection = require ('../index')


module.exports ={
 
    retrieve: function(callback){
        const syntax = 'select * from recipe '
        connection.query(syntax, function(error,results){
          if(error)callback(error,null)
          if(results) callback(null,results)
        })
    },

    create : function(callback,values){
        const syntax = 'insert into recipe set name =?,category=?,ingredients=? , description=? , image =? '
        connection.query(syntax,[values.name,values.category,values.ingredients,values.description, values.image], function(error,results){
          if(error)callback(error,null)
          if(results) callback(null,results)
        })
    },

    update : function(callback,values , id){
        const syntax = 'update recipe set name =?,category=?,ingredients=?  , description=? , image =? where idrecipe=? '
        connection.query(syntax,[values.name,values.category,values.ingredients,values.description, values.image, id], function(error,results){
          if(error)callback(error,null)
          if(results) callback(null,results)
        })
    },

    delete : function(callback,id){
        const syntax = 'delete from recipe where idrecipe=? '
        connection.query(syntax,[id], function(error,results){
          if(error)callback(error,null)
          if(results) callback(null,results)
        })
    }


}