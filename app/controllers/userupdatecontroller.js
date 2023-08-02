const mongoose  = require('mongoose');
const UserDetails = require('../models/users/userupdatemodel');
const jsonwebtoken = require("jsonwebtoken");
const secretKey = "your_secret_key_here";


exports.username =(req,res,next) => {
    const token = req.body.token;
    jsonwebtoken.verify(
        token , secretKey
    )
    let data= jsonwebtoken.decode(token,secretKey);
     console.log(data)
    return res.status(200).json(data);  
}




exports.userdetails = (req,res,next) => {
    const userUpdate  = new UserDetails({
        username : req.body.username,
        contactNumber: req.body.contactNumber,
        city : req.body.city,
        street : req.body.street,
        houseNumber : req.body.houseNumber,
        zipcode : req.body.zipcode
    });
    userUpdate.save().then((data)=> {
        return res.status(200).json({
            message : "details updated",
            detials : {
                contactNumber : data.contactNumber,
                city : data.city,
                street : data.street,
                houseNumber : data.houseNumber,
                zipcode : data.zipcode
            }
        })
    })

};

exports.getdetails = async (req,res,next) => {
try {
    const userusername = await UserDetails.findOne({username : req.body.username})
    if(!userusername) {
        return res.status(401).json({
            message : "error occocured in get details"
        });
    }
    const data = {
        contactNumber : userusername.contactNumber,
        city : userusername.city,
        houseNumber : userusername.houseNumber,
        street : userusername.street,
        zipcode : userusername.zipcode
    }
    return res.status(200).json({data})
} catch (error) {
     console.log(error);
     return res.status(500).json({message : error})
}

}
