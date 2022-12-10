import User from "../model/User.js";

export const saveUserCart = async (req,res,next)=>{
  try {
    const saveUserCart = new User({...req.body});
    const response = await saveUserCart.save()
    res.status(200).json(saveUserCart);
  } catch (err) {
    next(err);
  }
}