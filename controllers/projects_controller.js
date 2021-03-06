const Project = require('../models/project')
const bodyParser = require('body-parser')

function listProjects (req, res) {
  Project.find((error, projectsArray) => {
    if (error) return res.status(404).json({message: 'Project not found, Please try again'})
    // const fewProjects = []
    // for (let i = 0; i < projectsArray.length; ++i) {
    //   fewProjects.push({
    //     _id: projectsArray[i].id,
    //     name: projectsArray[i].name,
    //     githubLink: projectsArray[i].github_link,
    //     htmlLink: projectsArray[i].html_link })
    //   }
      res.status(200).json({projects: projectsArray})
    })
  }
  function showProjects (req, res) {
    Project.findById({_id: req.params.id}, (err, project) => {
      if (err) return res.status(404).json({message: 'Project not found'})

      res.status(200).json(project)
    })
  }

  function updateProjects (req, res) {
    const id = req.params.id
    Project.findById({_id: id}, function (err, project) {
      if (err || !project) return res.status(401).json({error: '/get editProject error'})
      console.log(req.body)
      if (req.body.project.name) project.name = req.body.project.name
      if (req.body.project.github) project.github = req.body.project.github
      if (req.body.project.html) project.html = req.body.project.html
      if (req.body.project.img) project.img = req.body.project.img
      if(req.body.project.description) project.description = req.body.project.description
      project.save((err) => {
        if (err) return res.status(401).json({error: err})
        res.status(200).json({project: project})
      })
    })
  }
  module.exports = {
    index: listProjects,
    show: showProjects,
    update: updateProjects
  }
