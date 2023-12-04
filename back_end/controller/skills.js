import Skills from "../models/Skills.js";


export const getAllSkillsByUser = async (req, res) => {
try {
    const skillsData = await Skills.findAll()
    res.status(200).json({skillsData})
} catch (error) {
    res.status(500).json({message:error.message})
}
}

export const getAllSkillsByTitle = async(req, res) => {

try {
 return  await res.status(200).json({params:req.params.id});
} catch (error) {
 return  await res.status(500).json({error:error.message,params:req.params.id});
}

// 

console.log(req.params.id);
}