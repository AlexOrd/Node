/**
 * Created by dr on 16.15.6.
 */
var request = require('supertest')
    , app = require(__dirname + '/../app');

describe('GET /', function () {
    it('should contain text "Hello, Express!"', function (done) {
        request(app)
            .get('/')
            .expect(/Hello, Express!/, done)
    })
});

describe('Правда', function () {
    it('Должно быть true', function () {
        true.should.be.true
    });

    it('Должно быть false', function () {
        true.should.not.be.false
    })
});