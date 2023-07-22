const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const User = require('./../models/newuser');

exports.register = (req,res,next) => {
        const newUser = new User({
          firstName : req.body.firstName,
          lastName : req.body.lastName,
          email :  req.body.email,
          password : req.body.password
        });
        newUser.hash_password = bcrypt.hashSync(req.body.password,10);
        newUser.save().then((err,user) => {
            if(err) {
                return res.status(400).json({
                    message : err
                })
            } else {
                user.hash_password = undefined;
                return res.status(200).json({
                    message : "USER CREATED",
                    UserDetails : {
                        firstName : user.firstName,
                        lastName : user.lastName,
                        email : user.email,
                        password : user.hash_password
                    }
                })
            }
        })
}


