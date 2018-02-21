let should = require('should');
let request = require('supertest');
let app = require('../app.js');
let mongoose = require('mongoose');
let Book = mongoose.model('Book');
let agent = request.agent(app);

describe('Book Crud Test', () => {
    it('Should allow a book to be posted and return a read and _id', (done) => {
        let bookPost = {title: 'New Book', author: 'Jon', genre: 'Fiction'};

        agent.post('/api/books')
            .send(bookPost)
            .expect(200)
            .end((err, results) => {
                results.body.read.should.equal(false);
                results.body.should.have.property('_id');
                done();
            });
    });

    afterEach((done) => {
        Book.remove().exec();
        done();
    });
});