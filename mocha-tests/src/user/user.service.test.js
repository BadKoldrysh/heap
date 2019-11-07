// src/user/user.service.test.js

import expect from "chai";
import { stub as _stub } from "sinon";
import UserRepository from "./user.repository";
import { random, name, internet, date } from "faker";
import UserService from "./user.service";

describe("UserService", function() {
    describe("create", function() {
        it("should create a new user", async function() {
            const stubValue = {
                id: random.uuid(),
                name: name.findName(),
                email: internet.email(),
                createdAt: date.past(),
                updatedAt: date.past(),
            };
            const userRepo = new UserRepository();
            const stub = _stub(userRepo, "create").returns(stubValue);
            const userService = new UserService(userRepo);
            const user = await userService.create(stubValue.name, stubValue.email);
            expect(stub.calledOnce).to.be.true;
            expect(user.id).to.equal(stubValue.id);
            expect(user.name).to.equal(stubValue.name);
            expect(user.email).to.equal(stubValue.email);
            expect(user.createdAt).to.equal(stubValue.createdAt);
            expect(user.updatedAt).to.equal(stubValue.updatedAt); 
        });
    });

    describe("getUser", function() {
        it("should return a user that matches the provided id", async function() {
            const stubValue = {
                id: random.uuid(),
                name: name.findName(),
                email: internet.email(),
                createdAt: date.past(),
                updatedAt: date.past(),
            };
            const userRepo = new UserRepository();
            const stub = _stub(userRepo, "getUser").returns(stubValue);
            const userService = new UserService(userRepo);
            const user = await userService.create(stubValue.id);
            expect(stub.calledOnce).to.be.true;
            expect(user.id).to.equal(stubValue.id);
            expect(user.name).to.equal(stubValue.name);
            expect(user.email).to.equal(stubValue.email);
            expect(user.createdAt).to.equal(stubValue.createdAt);
            expect(user.updatedAt).to.equal(stubValue.updatedAt); 
        });
    });
});
