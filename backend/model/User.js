import mongoose from "mongoose";
const Scheme = mongoose.Schema;

const userScheme = new Scheme({
    
    username:{
        type: String,
        required: true,
    },
    cart:{
        type:Object,
        require:true
    }

    },
    {
        timestamps:true
    },
    
)

export default mongoose.model("UserHistory",userScheme)

