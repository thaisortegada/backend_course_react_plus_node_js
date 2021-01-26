/* dependencias */
const express = require('express');
const app = express();
const bodyParser = require('body-parser');

/*
    ARRAY 
*/
var USERS = [
    { 'id': 1, 'username': 'thaisortega', 'password': '123456'},
    { 'id': 2, 'username': 'sebastian', 'password': '123456'},

];

var HELLO = [
    {'msg': 'Hello Express'}
];

function getHello(){
    return HELLO;
}

function getUsers(){
    return USERS;
}

app.use(bodyParser.json());

app.get('/', function(req, res){
    res.send(getHello());
});

app.get('/users', function(req, res){
    res.send(getUsers());
});

app.listen(4000, function(){
    console.log('Hello express listen on port 4000');
});