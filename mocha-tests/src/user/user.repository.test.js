// src/user/user.repository.test.js

const chai = require("chai");
const sinon = require("sinon");
const expect = chai.expect;
const faker = require("faker");
const { UserModel } = require("../database");
const UserRepository = require("./user.repository");
describe("UserRepository", function() {
    const stubValue = {
        id: faker.random.uuid(),
        name: faker.random.findName(),
        email: faker.internet.email(),
        createdAt: faker.date.past(),
        updatedAt: faker.date.past(),
    };
    describe("create", function() {
        it("should be a new user to the db", async function() {
            const stub = sinon.stub(UserModel, "create").returns(stubValue);
            const userRepository = new UserRepository();
            const user = await userRepository.create(stubValue.name, stubValue.email);
            expect(stub.calledOnce).to.be.true;
            expect(user.id).to.equal(stubValue.id);
            expect(user.name).to.equal(stubValue.name);
            expect(user.email).to.equal(stubValue.email);
            expect(user.createdAt).to.equal(stubValue.createdAt);
            expect(user.updatedAt).to.equal(stubValue.updatedAt);
        })
    })
})
