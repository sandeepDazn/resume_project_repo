import contact from '../modal/contact.js'
import handleResponse from '../common/handleResponse.js'


// create contacts api
const createContact = async (req, res)=>{
    const data = await contact.create(req.body);
    handleResponse(res, data);
}
// get contacts by pk
const getContactByPk = async (req, res)=>{
    const data = await contact.findAll({where:{id:req.body.id}});
    handleResponse(res, data);
}

// get contacts by user primary key

const getContactByUserPrimaryKey =async (req, res)=>{
    const data = await contact.findAll({where:{user_primaryKey:req.body.user_primaryKey}});
    handleResponse(res, data);
}

export {createContact,getContactByUserPrimaryKey,getContactByPk}
