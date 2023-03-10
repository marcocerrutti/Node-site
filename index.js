const express = require('express');
const app = express();

app.set('view engine', 'ejs');
//app.set('views', __dirname + '/views');



app.get('/', (req, res) => {

    res.render('default', {
        title: 'Home',
        classname: 'home',
        users: ['Steve', 'Marco', 'Herm']
    });
});

app.get('/about', (req, res) => {
    res.render('default', {
        title: 'About Us',
        classname: 'about'
    });
});

app.get('*', (req, res) => {
    res.send('Bad Route');
});

const server = process.env.PORT || 3000
app.listen(server, () => {
    console.log(`Listening at port port ${server}...`);
});

