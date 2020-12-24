const express = require('express');

var userController = require('../Controller/user');

const router = express.Router();

router.post('/signup' , userController.signUp);
router.post('/login', userController.login);
router.get('/profile/:_id',userController.profile )
router.patch('/:_userId', userController.changePassword);



module.exports = router;





