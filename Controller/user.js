const User= require('../Model/user');  
const {findByIdAndUpdate}=require('../Model/user');
const bcrypt = require('bcrypt');

//login
exports.login = (req,res) =>{
    const email = req.body.email;
    const password = req.body.password;
   
    User.find({email: email, password: password})
    .then(result =>{ 
        if(result.length >=1){
        res.status(200).json({ message: "User Logged Sucessfully",  isAuthenticated:true , User: result})
        }
        else{
            res.status(200).json({ message: "User Not LoggedIn Sucessfully",   isAuthenticated:false, User: result}) 
        }
    }).catch(err => {
        res.status(500).json({ message: err })
    })

}

//signup
exports.signUp = (req, res, next) => {
    const email = req.body.email;
    const password = req.body.password;
    const firstname = req.body.firstname;
    const lastname = req.body.lastname;
    const contact_number = req.body.contact_number;
    const SignInUser = new User({ email: email, password: password, firstname: firstname, lastname: lastname,contact_number:contact_number });
    SignInUser.save().then(result => {
        res.status(200).json({ message: "User Signed Sucessfully", User: result })
    }).catch(err => {
        res.status(500).json({ message: err })
    })
}

//profile
exports.profile = (req, res,next) => {
    const _id= req.params._id;
    User.findById({_id}).then(result => {
        res.status(200).json({ message: " User Profile Fetched Sucessfully",User : result })
    }) .catch(err => console.log(err));
}


//change password
exports.changePassword =async (req,res,next) =>{
    console.log('change password');

    try{
        const {_userId} = req.params;
        const salt = await bcrypt.genSalt(10);
        const password=await bcrypt.hash(req.body.password,salt);
        const userPassword = await User.findByIdAndUpdate({_id:_userId},{password:password},{new:true});

        res.status(200).json({ status:true , isAuthenticated:true, data:userPassword })
    }catch(error) {
         res.status(400).json({ status:false,  isAuthenticated:false, error:"error occured"}) 
       

    }
    
}

