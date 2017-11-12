const express = require('express');

const app = express();

let name = 'Paul';

app.set('view engine', 'pug');

app.set('views', 'src/views');


app.get('/', (req, res)=>{
    res.render('index', { title: 'Altered title', message: 'Altered message' });//Somehow this obj params has no effect
});


app.get('/root', (req, res)=>{
    res.send("<h1>This is the root route! It appears we don't need the dist folder yet to reload the page. Which task runs first?</h1>");
});

app.get('/hello', (req, res)=>{
    res.send(`<p>Hello ${name}. You are an awesome developer ${name}!!!</p>`);
});

let dt = Date();
console.log('   ' + dt);

app.listen(3000, ()=>{
    console.log('Changes have been reloaded - '+dt );
});

