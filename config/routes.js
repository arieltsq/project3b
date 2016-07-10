const express = require('express')
const router = express.Router()

// for /
var summary = [{
  'name': 'Ariel',
  'tagline': "You don't talk the talk, till you walk the walk"}]
// for /profile
var profile_statement = ['Often known as the bubbly one, Ariel takes pride in being optimistic even when she meet setbacks in life. Filled with a "never say die" attitude, Ariel believes that nothing is impossible. She perseveres and sometimes it comes off as being stubborn for onlookers.  But she does not succumb to rumors nor negative comments . Instead, she works harder to show results. She believes in never over promising, as under delivering is not part of her dictionary.']
// for /links
var links = [{
  'Github_profile': 'https://github.com/arieltsq',
  'Email': 'shihqian@gmail.com',
  'LinkedIn': 'https://sg.linkedin.com/in/tayshihqian'
}]
// for /projects
var projects = [
  {'id': 1, 'name': 'Biography', 'github_link': 'https://github.com/arieltsq/biography', 'html_link': 'http://arieltsq.github.io/biography/', 'img_src': ''},
  {'id': 2, 'name': 'Tic Tac Toe with Simple Computer AI', 'github_link': 'https://github.com/arieltsq/TicTacToe_AI', 'html_link': 'http://arieltsq.github.io/TicTacToe_AI', 'img_src': ''},
  {'id': 3, 'name': 'Tic Tac Toe', 'github_link': 'https://github.com/arieltsq/TicTacToe', 'html_link': 'http://arieltsq.github.io/TicTacToe/', 'img_src': ''},
  {'id': 4, 'name': 'How Well Do You Know Singapore? (Quiz)', 'github_link': 'https://github.com/arieltsq/Project1A', 'html_link': 'http://arieltsq.github.io/Project1A', 'img_src': ''},
  {'id': 5, 'name': 'Unicorn the Thief vs Space Police (Canvas Game)', 'github_link': 'https://github.com/arieltsq/Project1B', 'html_link': 'http://arieltsq.github.io/Project1B', 'img_src': ''},
  {'id': 6, 'name': 'Wikipedia Tribute to Snoopy', 'github_link': 'https://github.com/arieltsq/wiki', 'html_link': 'https://snoopy-tribute.herokuapp.com/', 'img_src': ''},
  {'id': 7, 'name': 'Bloglah! (Blog)', 'github_link': 'https://github.com/arieltsq/Blog', 'html_link': 'https://project2a-blog.herokuapp.com/', 'img_src': ''},
  {'id': 8, 'name': 'Resummary', 'github_link': 'https://github.com/arieltsq/Resummary', 'html_link': 'https://resummary.herokuapp.com', 'img_src': ''},
  {'id': 9, 'name': 'My Dashboard (API)', 'github_link': 'https://github.com/arieltsq/dashboard', 'html_link': 'https://arieltsq.github.io/dashboard/', 'img_src': ''}
]
// for skills
var skills = [
  {'id': 1, 'name': 'Html', 'score': '8', 'category': 'technical'},
  {'id': 2, 'name': 'CSS', 'score': '8', 'category': 'technical'},
  {'id': 3, 'name': 'Javascript', 'skills': '6.5', 'category': 'technical'},
  {'id': 4, 'name': 'C#', 'skills': '7', 'category': 'technical'},
  {'id': 5, 'name': 'Java', 'skills': '4.5', 'category': 'technical'},
  {'id': 6, 'name': 'Ruby', 'skills': '7', 'category': 'technical'},
  {'id': 7, 'name': 'Node', 'skills': '6', 'category': 'technical'}
]
// for education
var education = [
  {'id': 1, 'school': 'Curtin University of Technology', 'specialise': 'Bachelor of Commerce (Marketing & Advertising)', 'start_year': '2013', 'end_year': '2015'},
  {'id': 2, 'school': 'Nanyang Polytechnic', 'specialise': 'Diploma in IT Engineering', 'start_year': '2009', 'end_year': '2012'}
]
// for work
var work = [
  {'id': 1, 'company': 'General Assembly', 'role': 'Web Development Immersive', 'start_monthyear': 'May 2016', 'end_monthyear': 'August 2016'},
  {'id': 2, 'company': 'Brainchild Pte Ltd', 'role': 'Account Manager', 'start_monthyear': 'March 2016', 'end_monthyear': 'May 2016'},
  {'id': 3, 'company': 'Impetus Marketing Group Pte Ltd', 'role': 'Account Executive', 'start_monthyear': 'September  2015', 'end_monthyear': 'February 2016'},
  {'id': 4, 'company': 'ST Electronics (Info-Software Systems)', 'role': 'Software Engineer', 'start_monthyear': 'August 2011', 'end_monthyear': 'October 2011'}
]
// Should return summary information about you: name, tagline etc
router.get('/', (req, res) => {
  res.status(200).json(summary)
})

// profile Should return your profile statement

router.get('/profile', (req, res) => {
  res.status(200).json(profile_statement)
})

// links Should return a list of named links to your presence online e.g. {"GithubProfile": "http://…"}

router.get('/links', (req, res) => {
  res.status(200).json(links)
})

// projects Should return a summary list of the projects you have built GA

router.get('/projects', (req, res) => {
  res.status(200).json(projects)
})

// projects/:id Should return the full details of a specific projects: name, github & heroku links, images etc

router.get('/projects/:id', (req, res) => {
  res.status(200).json(projects[req.params.id - 1])
})

// skills Should return a list of your skills/competencies each, a name and score 1-10 (so you can potentially do a cool chart with it)

router.get('/skills', (req, res) => {
  res.status(200).json(skills)
})

// education Should return a summary list of your education history

router.get('/education', (req, res) => {
  res.status(200).json(education)
})

// education/:id Should return the full details of a specific education

router.get('/education/:id', (req, res) => {
  res.status(200).json(education[req.params.id - 1])
})

// work Should return a summary list of your work experience

router.get('/work', (req, res) => {
  res.status(200).json(work)
})

// work/:id Should return the full details of a specific work experience

router.get('/work/:id', (req, res) => {
  res.status(200).json(work[req.params.id - 1])
})
module.exports = router
