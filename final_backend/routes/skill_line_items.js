import Router from 'express';
// import createSkillLineItems from '../controller/skill_line_items.js';
// import {createSkillLineItems} from '../controller/skill_line_items.js';
import {createSkillLineItems} from '../controller/skill_line_items.js'

const skill_line_items = Router();

skill_line_items.post('/createSkillLineItems', createSkillLineItems); 

export default skill_line_items;