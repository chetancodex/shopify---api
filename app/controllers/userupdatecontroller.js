const mongoose  = require('mongoose');
const UserDetails = require('../models/users/userupdatemodel');
const UserAddress = require('../models/users/useraddress');

exports.userdetails = (req,res,next) => {
    const userUpdate  = new UserDetails({
        username: req.body.username,
        contactNumber: req.body.contactNumber,
    });
    userUpdate.save().then((data)=> {
        return res.status(200).json({
            message : "details updated",
            detials : {
                username : data.username,
                contactNumber : data.contactNumber
            }
        })
    })

}

exports.useraddress = (req,res,next) => {
    const userAddress = new UserAddress({
        city : req.body.city,
        street : req.body.street,
        number : req.body.number,
        zipcode : req.body.zipcode
    });
    userAddress.save().then((data)=> {
       return res.status(200).json({
        message : "details Updated",
        address: {
            city: data.city,
            street : data.street,
            number : data.number,
            zipcode : data.zipcode
        }
       })
    });
}