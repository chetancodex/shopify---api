const mongoose  = require('mongoose');
const UserDetails = require('../models/users/userupdatemodel');





exports.userdetails = (req,res,next) => {
    const userUpdate  = new UserDetails({
        username: req.body.username,
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
                username : data.username,
                contactNumber : data.contactNumber,
                city : data.city,
                street : data.street,
                houseNumber : data.houseNumber,
                zipcode : data.zipcode
            }
        })
    })

}
