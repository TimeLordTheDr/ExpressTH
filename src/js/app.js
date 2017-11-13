const express = require('express');

const app = express();

let name = 'Paul';

const colors = ['red',
'blue',
'green'];

app.set('view engine', 'pug');

app.set('views', 'src/views');

app.locals.position = 'NodeJS';

app.get('/', (req, res)=>{
    res.render('index', { title: 'Altered title', message: 'Altered message' });//Somehow this obj params has no effect
});

app.get('/hello', (req, res)=>{
    res.locals.score =10;
    res.render('card', {name: 'Paul', colors})
});

app.get('/root', (req, res)=>{
    res.send("<h1>This is the root route! It appears we don't need the dist folder yet to reload the page. Which task runs first?</h1>");
});

let dt = Date();
console.log('   ' + dt);

app.listen(3000, ()=>{
    console.log('Changes have been reloaded - '+dt );
});

