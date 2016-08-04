const Work = require('../models/work')

function listWorks (req, res) {
  Work.find((error, workArray) => {
    if (error) return res.status(404).json({message: 'Work not found, Please try again'})
    const fewWork = []
    for (let i = 0; i < workArray.length; ++i) {
      fewWork.push({
        _id: workArray[i].id,
        company: workArray[i].company,
        role: workArray[i].role,
        startMonthyear: workArray[i].start_monthyear,
        endMonthyear: workArray[i].end_monthyear,
        img: workArray[i].img,
        index: workArray[i].index })
    }
    res.status(200).json({works: fewWork})
  })
}
function showWork (req, res) {
  Work.findById({_id: req.params.id}, (err, work) => {
    if (err) return res.status(404).json({message: 'Work not found'})

    res.status(200).json(work)
  })
}
function updateWork (req, res) {
  const id = req.params.id
  Work.findById({_id: id}, function (err, work) {
    if (err || !work) return res.status(401).json({error: '/get editProject error'})
    if (req.body.company) work.company = req.body.company
    if (req.body.role) work.role = req.body.role
    if (req.body.startMonthyear) work.startMonthyear = req.body.startMonthyear
    if (req.body.endMonthyear) work.endMonthyear = req.body.endMonthyear
    if (req.body.img) work.img = req.body.img
    if (req.body.index) work.img = req.body.index
    work.save((err) => {
      if (err) return res.status(401).json({error: err})
      res.status(200).json({works: 'Work updated', work})
    })
  })
}
module.exports = {
  index: listWorks,
  show: showWork,
  update: updateWork
}
