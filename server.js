//Imports
import express from 'express';
import minimist from 'minimist';
import {roll} from "./lib/roll.js"

//initialize args of command line reader
const args = minimist(process.argv.slice(2));

const app =express()
const port = args.port || 5000;

// defines middleware we use json 
//app.use(express.json());
app.use(express.urlencoded({extended: true}))

const defaultroll = {"sides":6,"dice":2,"rolls":1};

// //defines middleware allows use of URL or json
// app.use(express.urlencoded({extended: true}));

// //sending data in the url string
app.get('/app/', (req,res,next)=>{
    res.send("200 OK")
    res.status(200)
    res.end
})
app.get('/app/roll',(req,res,next)=>{
    const answer = roll(defaultroll.sides,defaultroll.dice,defaultroll.rolls)
    //console.log(answer)
    res.send(answer)
    res.status(200)
    res.end
})

app.post('/app/roll/', (req,res,next) =>{
    var sides = parseInt(req.body.sides);
    var dice = parseInt(req.body.dice);
    var rolls = parseInt(req.body.rolls);
    const answer = roll(sides,dice,rolls)
    //console.log(answer)
    res.send(answer)
    res.status(200)
    res.end
})

app.get('/app/roll/:sides/', (req,res,next)=>{

    const sides = parseInt(req.params.sides);
    const answer = roll(sides,defaultroll.dice,defaultroll.rolls)
    //console.log(answer);
    res.send(answer);
    res.status(200);
    res.end;

})


app.get('/app/roll/:sides/:dice/',(req,res,next)=>{
    const sides = parseInt(req.params.sides);
    const dice = parseInt(req.params.dice);
    const answer = roll(sides,dice,defaultroll.rolls);
    //console.log(answer);
    res.send(answer);
    res.status(200);
    res.end;
})

app.get('/app/roll/:sides/:dice/:rolls/',(req,res,next)=>{
    const sides = parseInt(req.params.sides);
    const dice = parseInt(req.params.dice);
    const rolls = parseInt(req.params.rolls);
    const answer = roll(sides,dice,rolls);
    //console.log(answer);
    res.send(answer);
    res.status(200);
    res.end;
})

app.get('*',(req, res, next)=>{
    res.send('404 NOT FOUND');
    res.status(400);
    res.end;
});
//console.log(roll(args.sides,args.dice,args.rolls))
app.listen(port, ()=>{
    console.log("Server listening on port " + port)
})

