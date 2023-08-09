import User from '../Models/User.js'
import jwt from 'jsonwebtoken'


class UserController{


    async create(req,res){

        try{

           const  user= await User.query().insert(req.body);

            return res.json({status:true,message:'user created Successfully',user:user})
        }
        catch(e){
            return res.json({status:false,message:e.message})
        }
    }

    async index(req,res){


        try{

           const  users= await User.query();

            return res.json({status:true,message:'user created Successfully',users:users})
        }
        catch(e){
            return res.json({status:false,message:e.message})
        }
    }


    async show(req,res){


        try{

           const  users= await User.query().findById(parseInt(req.params.id));


            return res.json({status:true,message:'user created Successfully',users:users})
        }
        catch(e){
            return res.json({status:false,message:e.message})
        }
    }


    async update(req,res){


        try{

           const  users= await User.query().where('id',parseInt(req.params.id))
           .update(req.body);

            return res.json({status:true,message:'user created Successfully',users:users})
        }
        catch(e){
            return res.json({status:false,message:e.message})
        }
    }

    async login(req,res){

        const {email,password}=req.body;
        try{

           const  user= await User.query().where('email',email)
           .first();
           if(!user || !(await user.verifyPassword(password))){
            return res.json({status:false,message:'Crediential Error!'})
       }


    else{
       const id=user.id
       const email =user.email
       const token=jwt.sign({
        id,
        email            
    },
    'u9u261eu5d5u29u261eu5d5u2u9u261eu5d5u29u261eu5d5u2',
    {
        expiresIn:'4h'
    })

    
    user.token = token;
    }



            return res.json({status:true,message:'Login In Successfully',user:user})
        }
        catch(e){
            return res.json({status:false,message:e.message})
        }
    }

    async byEmail(email){


    }
}

export default new UserController()