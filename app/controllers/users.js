const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const User = require('./../models/newuser');

exports.register = (req,res,next) => {
        const newUser = new User(req.body);
        newUser.hash_password = bcrypt.hashSync(req.body.password,10);
        newUser.save((err,user) => {
            if(err) {
                return res.status(400).json({
                    message : err
                })
            } else {
                user.hash_password = undefined;
                return res.status(200).json(user)
            }
        })
}


