import skills from "../modals/skills.js";

const getSkillsController = async (req, res) => {
  const skillsData = await skills.findAll();
  console.log("testing logs json")
  try {
    if (!skillsData) {
      return res.status(200).json({ response: skillsData });
    }
    return res.status(200).json({ response: skillsData });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

export default getSkillsController;
