import mongoose from "mongoose"
import bcrypyjs from "bcryptjs"

const {Schema,model} = mongoose;

const userSchema = new Schema({
    email: {
        type: String,
        required: true,
        trim: true,
        unique: true,
        lowercase: true,
        index: {unique: true}
    },
    password: {
        type: String,
        required: true
    }
})

userSchema.pre(
    'save',
    async function(next) {
        
        const user = this;

        if(!user.isModified('password')) return next();
        
        try {
            const salt = await bcrypyjs.genSalt(10)
            user.password = await bcrypyjs.hash(user.password,salt)
            next();
        } catch(error) {
            console.log(error)
            throw new Error('Falló el hash contraseña')
        }
    }
)

export const User = model('user', userSchema)