/* globals describe it */
require('dotenv').config()

const expect = require('chai').expect
const supertest = require('supertest')
const api = supertest('http://localhost:3000')

describe('GET /', (done) => {
  it('should return a 200 response', () => {
    api.get('/')
    .set('Accept', 'application/json')
    .expect(200, done)
  })
  it('Should return summary information about you: name, tagline etc', () => {
    api.get('/')
    .set('Accept', 'application/json')
    .end((error, response) => {
      expect(error).to.be.a('null')
      expect(response.body[0]).to.be.property('name')
      expect(response.body[0]).to.be.property('tagline')
      done()
    })
  })
})

describe('GET /profile', (done) => {
  it('should return a 200 response', () => {
    api.get('/profile')
    .set('Accept', 'application/json')
    .expect(200, done)
  })
  it('Should return your profile statement', () => {
    api.get('/profile')
    .set('Accept', 'application/json')
    .end((error, response) => {
      expect(error).to.be.a('null')
      expect(response.body).to.be.an('array')
      done()
    })
  })
})

describe('GET /projects', (done) => {
  it('should return a 200 response', () => {
    api.get('/projects')
    .set('Accept', 'application/json')
    .expect(200, done)
  })
  it('Should return a summary list of the projects you have built GA', () => {
    api.get('/projects')
    .set('Accept', 'application/json')
    .end((error, response) => {
      expect(error).to.be.a('null')
      expect(response.body[0]).to.be.property('name')
      expect(response.body[0]).to.be.property('github_link')
      expect(response.body[0]).to.be.property('html_link')
      expect(response.body[0]).to.be.property('img_src')
      done()
    })
  })
})

// describe('GET /projects/:id', (done) => {
//   it('should return a 200 response', () => {
//     api.get('/projects/1')
//     .set('Accept', 'application/json')
//     .expect(200, done)
//   })
//   it('Should return a summary list of the projects you have built GA', (done) => {
//     api.get('/projects/1')
//     .set('Accept', 'application/json')
//     .end((error, response) => {
//       expect(error).to.be.a('null')
//       expect(response.body).to.be.property('id')
//       expect(response.body).to.be.property('name')
//       expect(response.body).to.be.property('github_link')
//       expect(response.body).to.be.property('html_link')
//       expect(response.body).to.be.property('img_src')
//       done()
//     })
//   })
// })

describe('GET /skills', (done) => {
  it('should return a 200 response', () => {
    api.get('/skills')
    .set('Accept', 'application/json')
    .expect(200, done)
  })
  it('Should return a list of your skills/competencies each, a name and score 1-10', () => {
    api.get('/skills')
    .set('Accept', 'application/json')
    .end((error, response) => {
      expect(error).to.be.a('null')
      expect(response.body[0]).to.be.property('id')
      expect(response.body[0]).to.be.property('name')
      expect(response.body[0]).to.be.property('score')
      done()
    })
  })
})

// describe('GET /education', (done) => {
//   it('should return a 200 response', () => {
//     api.get('/education')
//     .set('Accept', 'application/json')
//     .expect(200, done)
//   })
//   it('Should return a summary list of your education history', (done) => {
//     api.get('/education')
//     .set('Accept', 'application/json')
//     .end((error, response) => {
//       expect(error).to.be.a('null')
//       expect(response.body[0]).to.be.property('id')
//       expect(response.body[0]).to.be.property('school')
//       expect(response.body[0]).to.be.property('specialise')
//       expect(response.body[0]).to.be.property('start_year')
//       expect(response.body[0]).to.be.property('end_year')
//       done()
//     })
//   })
// })
//
// describe('GET /education/:id', (done) => {
//   it('should return a 200 response', () => {
//     api.get('/education/1')
//     .set('Accept', 'application/json')
//     .expect(200, done)
//   })
//   it('Should return the full details of a specific education', (done) => {
//     api.get('/education/1')
//     .set('Accept', 'application/json')
//     .end((error, response) => {
//       expect(error).to.be.a('null')
//       expect(response.body).to.be.property('id')
//       expect(response.body).to.be.property('school')
//       expect(response.body).to.be.property('specialise')
//       expect(response.body).to.be.property('start_year')
//       expect(response.body).to.be.property('end_year')
//       done()
//     })
//   })
// })

describe('GET /work', (done) => {
  it('should return a 200 response', () => {
    api.get('/work')
    .set('Accept', 'application/json')
    .expect(200, done)
  })
  it('Should return a summary list of your work experience', () => {
    api.get('/work')
    .set('Accept', 'application/json')
    .end((error, response) => {
      expect(error).to.be.a('null')
      expect(response.body[0]).to.be.property('id')
      expect(response.body[0]).to.be.property('company')
      expect(response.body[0]).to.be.property('role')
      expect(response.body[0]).to.be.property('start_monthyear')
      expect(response.body[0]).to.be.property('end_monthyear')
      done()
    })
  })
})

// describe('GET /work/:id', (done) => {
//   it('should return a 200 response', () => {
//     api.get('/work/1')
//     .set('Accept', 'application/json')
//     .expect(200, done)
//   })
//   it('Should return the full details of a specific work experience', (done) => {
//     api.get('/work/1')
//     .set('Accept', 'application/json')
//     .end((error, response) => {
//       expect(error).to.be.a('null')
//       expect(response.body).to.be.property('id')
//       expect(response.body).to.be.property('company')
//       expect(response.body).to.be.property('role')
//       expect(response.body).to.be.property('start_monthyear')
//       expect(response.body).to.be.property('end_monthyear')
//       done()
//     })
//   })
// })
