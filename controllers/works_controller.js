const Work = require('../models/work')

function listWorks (req, res) {
  Work.find((error, workArray) => {
    if (error) return res.status(404).json({message: 'Work not found, Please try again'})
    const fewWork = []
    for (let i = 0; i < workArray.length; ++i) {
      fewWork.push({
        id: workArray[i].id,
        company: workArray[i].company,
        role: workArray[i].role,
        start_monthyear: workArray[i].start_monthyear,
        end_monthyear: workArray[i].end_monthyear })
    }
    res.status(200).json(fewWork)
  })
}
function showWork (req, res) {
  Work.findById({_id: req.params.id}, (err, work) => {
    if (err) return res.status(404).json({message: 'Work not found'})

    res.status(200).json(work)
  })
}
module.exports = {
  index: listWorks,
  show: showWork
}
