const express = require('express')
const users = require('../utils/users');

const login = (req, res) => {
    const { email, password } = req.query;

    const userFound = users.find(user => user.email === email && user.password === password)

    return userFound 
    ? res.status(200).send({access: true})
    : res.status(200).send({access: false}) 
};

module.exports = login;