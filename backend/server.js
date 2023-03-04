const express = require('express')
const dotenv = require('dotenv')
const port = process.env.PORT || 5000

const app = express()


//  app.get('/api/goals',(req,res) => { 
//     res.status(200).json({message:'GETTING GOALS YOU BITCH'})

//   })

app.use("/api/goals",require('./routes/goalRoutes'))




app.listen(port,() => { 
   return console.log('server started on port ' + port)
 })