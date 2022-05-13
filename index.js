const express = require('express')
const app = express()
const port = 5000

const mongoose = require('mongoose')
mongoose.connect('mongodb+srv://jihey:gkgk1352@boilerplate.ootow.mongodb.net/myFirstDatabase?retryWrites=true&w=majority',{
    useNewUrlParser : true
}).then(()=>console.log('mongoDB Connected..'))
    .catch(err => console.log(err))

app.get('/', (req, res) => {
    res.send('Hello World! 안녕앙녕녕녕')
})


app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})