const Skill = require('../models/skill')

function listskills (req, res) {
  Skill.find((error, skillsArray) => {
    if (error) return res.status(404).json({message: 'Skill not found, Please try again'})
    const fewskills = []
    for (let i = 0; i < skillsArray.length; ++i) {
      fewskills.push({
        id: skillsArray[i].id,
        name: skillsArray[i].name,
        score: skillsArray[i].score,
        category: skillsArray[i].category
      })
    }
    res.status(200).json(fewskills)
  })
}
function showskills (req, res) {
  Skill.findById({_id: req.params.id}, (err, skill) => {
    if (err) return res.status(404).json({message: 'Skill not found'})

    res.status(200).json(skill)
  })
}
module.exports = {
  index: listskills,
  show: showskills
}
