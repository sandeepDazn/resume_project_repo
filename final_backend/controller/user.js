import user from "../modal/user.js";

const UserProfileCreating = async (req, res)=>{

    try {

        const data = await user.create(req.body);

        if(!data){
            
            return res.status(404).json({responce:"data is not inserted"})
        }
        return res.status(200).json({responce:"data is inserted successfully"});

    } catch (error) {
        return res.status(500).json({responce:error.message})
    }
}

export default UserProfileCreating;