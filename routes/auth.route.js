import express from 'express';
import { login, register } from '../controllers/auth.controller.js';
import { body } from 'express-validator';

const router = express.Router();

router.post(
    '/register',
    [
        body('email',"Fromato email incorrecto")
            .isEmail()
            .normalizeEmail(),
        body('password',"Formato de constraseña incorrecta")
            .trim()
            .isLength({min:6})
            .custom(
                (value,{req}) => {
                    if(value!=req.body.repassword) {
                        throw new Error('No coinciden las contraseñas')
                    }
                    return value
                }
            )
    ],
    register
);
router.put('/login',login);


export default router;