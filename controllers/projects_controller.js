const Project = require('../models/project')

function listProjects (req, res) {
  Project.find((error, projectsArray) => {
    if (error) return res.status(404).json({message: 'Project not found, Please try again'})
    const fewProjects = []
    for (let i = 0; i < projectsArray.length; ++i) {
      fewProjects.push({
        id: projectsArray[i].id,
        name: projectsArray[i].name,
        github_link: projectsArray[i].github_link,
        html_link: projectsArray[i].html_link })
    }
    res.status(200).json(fewProjects)
  })
}
function showProjects (req, res) {
  Project.findById({_id: req.params.id}, (err, project) => {
    if (err) return res.status(404).json({message: 'Project not found'})

    res.status(200).json(project)
  })
}
module.exports = {
  index: listProjects,
  show: showProjects
}
