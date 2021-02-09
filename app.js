const express = require('express');
const bodyParser = require('body-parser');

const app = express();
 
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());

//Rootes here

app.get('/', (req, res)=>{
    res.send({"message": "Welcome to Expresso!"})
});

app.get('/api/users/user/:id', (req, res)=>{
	const userId = req.params.id;
    res.status(200).send(`User with ${userId} has been found!`);
});
        
//App port settings here
const port = process.env.PORT || 3000;

app.listen(port, () => console.log(`The app is listening on ${port}`))
