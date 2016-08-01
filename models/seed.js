// load in the environment vars
require('dotenv').config()

var seeder = require('mongoose-seed')

// conneting to MongoDB via Mongoose
seeder.connect(process.env.MONGODB_URI, function () {
  // Load Mongoose models
  seeder.loadModels([
    'models/profile.js',
    'models/project.js',
    'models/skill.js',
    'models/work.js'
  ])
  // Clear all the specified colletions
  seeder.clearModels(['Profile', 'Project', 'Skill', 'Work'], function () {
    // Callbac,k to populate DB once collections have been cleared
    seeder.populateModels(data)
  })
})

var data = [
  {
    'model': 'Profile',
    'documents': [
      {
        'first_name': 'Ariel',
        'last_name': 'Tay',
        'picture': 'profile.png',
        'tagline': "You don't talk the talk, till you walk the walk",
        'github_profile': 'https://github.com/arieltsq',
        'email': 'shihqian@gmail.com',
        'linkedIn': 'https://sg.linkedin.com/in/tayshihqian'
      }]
  },
  {
    'model': 'Project',
    'documents': [
      {'name': 'Biography', 'github': 'https://github.com/arieltsq/biography', 'html': 'http://arieltsq.github.io/biography/', 'img': ''},
      {'name': 'Tic Tac Toe with Simple Computer AI', 'github': 'https://github.com/arieltsq/TicTacToe_AI', 'html': 'http://arieltsq.github.io/TicTacToe_AI', 'img': ''},
      {'name': 'Tic Tac Toe', 'github': 'https://github.com/arieltsq/TicTacToe', 'html': 'http://arieltsq.github.io/TicTacToe/', 'img': ''},
      {'name': 'How Well Do You Know Singapore? (Quiz)', 'github': 'https://github.com/arieltsq/Project1A', 'html': 'http://arieltsq.github.io/Project1A', 'img': ''},
      {'name': 'Unicorn the Thief vs Space Police (Canvas Game)', 'github': 'https://github.com/arieltsq/Project1B', 'html': 'http://arieltsq.github.io/Project1B', 'img': ''},
      {'name': 'Wikipedia Tribute to Snoopy', 'github': 'https://github.com/arieltsq/wiki', 'html': 'https://snoopy-tribute.herokuapp.com/', 'img': ''},
      {'name': 'Bloglah! (Blog)', 'github': 'https://github.com/arieltsq/Blog', 'html': 'https://project2a-blog.herokuapp.com/', 'img': ''},
      {'name': 'Resummary', 'github': 'https://github.com/arieltsq/Resummary', 'html': 'https://resummary.herokuapp.com', 'img': ''},
      {'name': 'My Dashboard (API)', 'github': 'https://github.com/arieltsq/dashboard', 'html': 'https://arieltsq.github.io/dashboard/', 'img': ''}
    ]
  },
  {
    'model': 'Skill',
    'documents': [
      {'name': 'Html', 'score': '8', 'category': 'technical'},
      {'name': 'CSS', 'score': '8', 'category': 'technical'},
      {'name': 'Javascript', 'score': '6.5', 'category': 'technical'},
      {'name': 'C#', 'score': '7', 'category': 'technical'},
      {'name': 'Java', 'score': '4.5', 'category': 'technical'},
      {'name': 'Ruby', 'score': '7', 'category': 'technical'},
      {'name': 'Node', 'score': '6', 'category': 'technical'}
    ]
  },
  {
    'model': 'Work',
    'documents': [
      {'company': 'General Assembly', 'role': 'Web Development Immersive', 'start_monthyear': 'May 2016', 'end_monthyear': 'August 2016'},
      {'company': 'Brainchild Pte Ltd', 'role': 'Account Manager', 'start_monthyear': 'March 2016', 'end_monthyear': 'May 2016'},
      {'company': 'Impetus Marketing Group Pte Ltd', 'role': 'Account Executive', 'start_monthyear': 'September  2015', 'end_monthyear': 'February 2016'},
      {'company': 'ST Electronics (Info-Software Systems)', 'role': 'Software Engineer', 'start_monthyear': 'August 2011', 'end_monthyear': 'October 2011'}
    ]
  }
]
