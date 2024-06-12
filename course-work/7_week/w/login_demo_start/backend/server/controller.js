import { User } from '../database/models.js'
import bcryptjs from 'bcryptjs'

export const handlerFunctions = {
  sessionCheck: async (req, res) => {
    req.session.userid? res.send({
      message:"user logged in",
      success:true,
      userID: req.session.userId
    }) : res.send({
      message: "no usser in session",
      success: false, 
    })
    
  },

  register: async (req, res) => {
    
  },

  login: async (req, res) => {
    const { username, password } = req.body;

    const user = await User.findOne({
      where: {
        username: username
      }
    });

    const success = () => {
      res.send({ message: "login successful", success: true, userId: user.userId }); 
      req.session.userId = user.userId  
    }

    return !user ? 
      res.send({ message: "no username found", success: false}):  
        user.password !== password ? 
        res.send({ message: "password incorrect", success: false }):  
        success()    
        },

  logout: async(req, res) => {
    req.session.destroy()

    return res.send({
      message: "User logged out", 
      success: true
    })
  },
}