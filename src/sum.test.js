import {sum} from "./sum";

describe("sum", () => {
    it('should sum two numbers', function () {
        expect(sum(1, 2)).toEqual(3)
    });
});