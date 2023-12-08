import skills from "../modal/skills.js";
import uuid from "../utils/utils.js";

const createSkills = async (req, res) => {

  const data = await skills.create(req.body);

  try {

    if (!data) {

      return res.status(200).json({ response: "not inserted" });
    }

    return res.status(200).json({ response: "successly created" }); 

  } catch (error) {

    return res.status(500).json({ error: error.message });
  }
};

const getSkillsbyPK = async (req, res) =>{
    
    const data = await skills.findByPk(req.body.pk);
    try {
        return  res.status(200).json({response:"getting records successfully",data:data});
    } catch (error) {
        return  res.status(500).json({error:error.message});
    }
}

export {createSkills,getSkillsbyPK}