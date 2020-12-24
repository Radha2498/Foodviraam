// const Profile = require('../Model/profile');  


// exports.profile = (req, res,next) => {
//     const uname = req.params.uname;
//     Profile.find({uname}).then(result => {
//         res.status(200).json({ message: " User Profile Fetched Sucessfully",User : result })
//     }) .catch(err => console.log(err));
// }