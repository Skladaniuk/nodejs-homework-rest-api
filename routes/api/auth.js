const express = require("express");
const  {ctrlWrapper} = require('../../heplers')
const {  validateBody, authenticate, upload } = require('../../middlewares')

const {schemas} = require('../../models/user')


const router = express.Router();

const ctrl = require('../../controllers/auth')

router.post('/register', validateBody(schemas.registerSchema), ctrlWrapper(ctrl.register) );
router.post('/login', validateBody(schemas.loginSchema), ctrlWrapper(ctrl.login));
router.get('/current', authenticate , ctrlWrapper(ctrl.getCurrent));
router.get('/logout',  authenticate , ctrlWrapper(ctrl.logout))
router.patch('/avatars', authenticate, upload.single('avatar'),  ctrlWrapper(ctrl.updateAvatar))

module.exports = router; 