import {validationResult} from 'express-validator';

export const register =  async(req, res) => {
    
    const errors = validationResult(req)

    if(!errors.isEmpty()) {
        return res.status(400).json(
            {
                errors: errors.array()
            }
        );
    }

    console.log(req.body);
    
    res.json({ok: true})
}

export const login = async(req, res) => {
    res.json({ok: "chauu huheeeu"})
}

