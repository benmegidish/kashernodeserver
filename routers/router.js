const express = require('express');
const route = express.Router();
const dataUtile = require('../data');

route.route('/').get(function(req,res){
    return res.send("hello")
});


route.route('/').post(async function(req,res){
    let cityName = req.body.name;
    dataUtile.searchData(cityName);
    return res.json("done!")
});


module.exports=route;