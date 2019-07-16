const adjuster = require("./lib")

describe("Neon difficulty test", () => {
    it("should have same resuilt", () => {
        var workema = 184555992.82315296
        var tema = 22711.847256807654
        const returned_value = adjuster.adjust(workema,tema)
        const expected_result = 5.686676352034681e-9
        expect(returned_value).toEqual(expected_result)
    })
})