const mongoose = require('mongoose');
const jsonwebtoken = require("jsonwebtoken");
const secretKey = "your_secret_key_here";


exports.profileDetails =(req,res,next) => {
    const token = req.body.token;
    jsonwebtoken.verify(
        token , secretKey
    )

    let data=jsonwebtoken.decode(token,secretKey);
     console.log(data)
    return res.status(200).json(data);
    
}
