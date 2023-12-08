import skill_line_items from "../modal/skill_line_items.js";

const createSkillLineItems = async (req, res) => {
  const data = await skill_line_items.create(req.body);
  try {
    if (data) {
      return res.status(200).json({ Response: "sucessfully created" });
    }
    return res.status(400).json({ Response: "data not inserted" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
export  {createSkillLineItems};
