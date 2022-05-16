const express = require('express')
const app = express()
const port = 5000
const bodyParser = require('body-parser')

const config = require('./config/dev')

const {User} = require("./models/user")

//bodyParser : 클라이언트에서 오는 정보를 서버에서 분석해서 가져올수 있게 해주는 것

//application/x-www-form-urlencoded 이렇게 된 데이터를 분석해서 가져올수 있게 하는것
app.use(bodyParser.urlencoded({extended:true}));

//application/json 타입으로 된 데이터를 분석해서 가져올수 있게 하는것
app.use(bodyParser.json());

const mongoose = require('mongoose')
mongoose.connect(config.mongoURI,{
    useNewUrlParser : true
}).then(()=>console.log('mongoDB Connected..'))
    .catch(err => console.log(err))

app.get('/', (req, res) => {
    res.send('Hello World!  안녕안녕~')
})

app.post('/register', (req, res)=>{
    //회원 가입 할때 필요한 정보들을 클라이언트에서 가져오면
    //그것들을 데이터베이스에 넣어준다

    const user = new User(req.body);

    user.save((err,doc,userInfo)=>{
        if(err) return res.json({success:false, err})
        return res.status(200).json({
            success:true
        })

    })
})


app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})