import skills from "../modal/skills.js";
import { successResponse,errorMesssageResponse,noRecordsFoundResponse } from "../common/responseObjects.js";

// creating skills api

const createSkills = async (req, res) => {

  const data = await skills.create(req.body);

  try {
    if (data.length ==0) {
return noRecordsFoundResponse(res, data);
    }
    return successResponse(res, data);
  } catch (error) {
    return errorMesssageResponse( res, error);
  }
};

//  get skills by PK api

const getSkillsbyPK = async (req, res) =>{
    
    const data = await skills.findByPk(req.body.id);
    try {
      if(data.length ==0){
        return noRecordsFoundResponse(res, data);
      }
        return successResponse(res, data);
    } catch (error) {
        return errorMesssageResponse(res, error);
    }
}

const getSkillsByUserPrimaryKey = async (req,res)=>{

  const data = await skills.findAll({where:{user_primaryKey:req.body.user_primaryKey}});
  
  try {
    if(data.length ==0){
  return noRecordsFoundResponse(res, data);
    }
    return successResponse(res, data);
  } catch (error) {
    return errorMesssageResponse(res, error)
  }

}

export {createSkills,getSkillsbyPK,getSkillsByUserPrimaryKey}