import {expect} from "chai";
import "mocha";
import {helloWorld} from "./index";

describe("Hello World", () => {
    it("should say hello", () => {
        const result = helloWorld();

        expect(result).to.equal("Hello there");
    });
});
