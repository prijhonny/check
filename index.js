// console.log("Learning javascipt");/

require('dotenv').config()

const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/prince',(req,res)=>{
    res.send('Learning Backend in progress')
})

app.get('/learning',function(req,res){
    res.send('second page loading')
})


app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`)
})
