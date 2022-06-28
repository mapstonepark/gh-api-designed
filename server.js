const express = require('express')
const app = express()
const PORT = process.env.PORT || 8000
const cors = require('cors')
const MongoClient = require('mongodb').MongoClient
require('dotenv').config()



app.use(express.static('public'))
app.use(cors())
app.use(express.json())



MongoClient.connect(process.env.CONNECTIONSTRING)
   .then(client => {
      console.log('You are now connected to Database')
      const db= client.db('ghCollection')
      const infoCollection = db.collection('stable')
    
app.get('/', (req, res)=>{
    res.sendFile(__dirname + '/index.html')
    
})

app.get('/api/:name', (req, res)=>{
   const ghCharacterName = req.params.name.toLowerCase()
  //   important! .find({query param in mongo:what they need to search for})
    infoCollection.find({character: ghCharacterName}).toArray()
    .then(results=> {
        console.log(results)
        res.json(results[0])
    })
    .catch(error => console.error(error))
})
    })

    .catch(error => console.error(error))

app.listen(PORT, (req, res)=>{
    console.log('The General Hospital Server is running now.')
})