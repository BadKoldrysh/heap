// src/user/user.repository.test.js

import expect from "chai";
import { stub as _stub } from "sinon";
import { random, internet, date } from "faker";
import { UserModel } from "../database";
import UserRepository from "./user.repository";
describe("UserRepository", function() {
    const stubValue = {
        id: random.uuid(),
        name: random.findName(),
        email: internet.email(),
        createdAt: date.past(),
        updatedAt: date.past(),
    };
    describe("create", function() {
        it("should be a new user to the db", async function() {
            const stub = _stub(UserModel, "create").returns(stubValue);
            const userRepository = new UserRepository();
            const user = await userRepository.create(stubValue.name, stubValue.email);
            expect(stub.calledOnce).to.be.true;
            expect(user.id).to.equal(stubValue.id);
            expect(user.name).to.equal(stubValue.name);
            expect(user.email).to.equal(stubValue.email);
            expect(user.createdAt).to.equal(stubValue.createdAt);
            expect(user.updatedAt).to.equal(stubValue.updatedAt);
        });
    });

    describe("getUser", function() {
        it("should retrieve a user with specific id", async function() {
            const stub = _stub(UserModel, "findOne").returns(stubValue);
            const userRepository = new UserRepository();
            const user = await userRepository.getUser(stubValue.id);
            expect(stub.calledOnce).to.be.true;
            expect(user.id).to.equal(stubValue.id);
            expect(user.name).to.equal(stubValue.name);
            expect(user.email).to.equal(stubValue.email);
            expect(user.createdAt).to.equal(stubValue.createdAt);
            expect(user.updatedAt).to.equal(stubValue.updatedAt);
        });
    });
});
