// MIT © 2017 azu
import { push } from "../src/push";
import * as assert from "assert";

describe("push", () => {
    it("can push element to empty array", () => {
        const originalArray = [];
        const resultArray = push(originalArray, "a");
        assert.deepStrictEqual(resultArray, ["a"]);
    });
    it("can push multiple elements", () => {
        const originalArray = ["a", "b", "c", "d", "e"];
        const addingArray = ["f", "g"];
        const resultArray = push(originalArray, ...addingArray);
        assert.deepStrictEqual(resultArray, ["a", "b", "c", "d", "e", "f", "g"]);
    });
    it("should return empty array when adding empty element to empty array", () => {
        const originalArray = [];
        const resultArray = push(originalArray);
        assert.strictEqual(resultArray.length, 0);
    });
    it("should return immutable result array", () => {
        const originalArray = ["a", "b", "c", "d", "e"];
        const resultArray = push(originalArray, "f", "g");
        assert.ok(originalArray !== resultArray);
    });
    it("should return result array have length = original + adding", () => {
        const originalArray = ["a", "b", "c", "d", "e"];
        const addingArray = ["f", "g"];
        const resultArray = push(originalArray, ...addingArray);
        assert.strictEqual(resultArray.length, originalArray.length + addingArray.length);
    });
});
