const express = require('express');
const PORT = 3000;
const app = express();
const cors = require ('cors')
//const multer = require("multer");
const path = require('path')
const database = require ('./database/index')




app.use(cors())
app.use(express.static(__dirname + '/../client/dist'));
app.use(express.json());
app.use(express.urlencoded({extended: true}));

const recipeRouter = require ('./routes/recipe')
app.use('/api/recipes',recipeRouter)

// const storageEngine = multer.diskStorage({
//     destination: "./images",
//        filename: (req, file, cb) => {
//         cb(null, `${Date.now()}--${file.originalname}`);
//       },
//     })

// const upload = multer({
//   storage: storageEngine,
//     limits: { fileSize: 10000000 },
//     fileFilter: (req, file, cb) => {
//     checkFileType(file, cb);
//     },
//     });
    

    
// const checkFileType = function (file, cb) {
//     //Allowed file extensions
// const fileTypes = /jpeg|jpg|png|gif|svg/;
    
//     //check extension names
// const extName = fileTypes.test(path.extname(file.originalname).toLowerCase());
    
// const mimeType = fileTypes.test(file.mimetype);
    
//      if (mimeType && extName) {
//        return cb(null, true);
//       } else {
//         cb("Error: You can Only Upload Images!!");
//       }
//     };
// app.post("/upload", upload.single('image'), (req, res) => {
//     if (!req.file) {
//       console.log("Please upload a valid image");
//     } else {
//          console.log(req.file.filename)
//          var imgsrc = 'http://127.0.0.1:3000/images/' + req.file.filename
//          var insertData = "INSERT INTO images set imageSrc =?"
//          db.query(insertData, [imgsrc], (err, result) => {
//              if (err) throw err
//                console.log("image uploaded successfully")
//             })
//         }
//     });    

app.listen(PORT, () => {
    console.log(`Server listening at http://localhost:${PORT}`);
  });