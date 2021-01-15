const expect = require("chai").expect;
const caesar = require("../src/caesar");

describe("caesar", () => {
    it("should encode a string where letters move to the right if shift is positive", () => {
      const input = "Gulyuza gulyuza!";
      const shift = 3;
      const expected = "jxobxcd jxobxcd!";
      let actual = caesar(input, shift, encode = true);
      expect(actual).to.eql(expected);
    });
});

describe("caesar", () => {
    it("should encode a string where letters move to the left if shift is negative", () => {
        const input = "Gulyuza gulyuza!";
        const shift = -3;
        const expected = "drivrwx drivrwx!";
        let actual = caesar(input, shift, encode = true);
        expect(actual).to.eql(expected);
    });
});


describe("caesar", () => {
    it("should decode a string where letters move to the left if the shift is positive", () => {
        const input = "jxobxcd jxobxcd";
        const shift = 3;
        let actual = caesar(input, shift, encode = false);
        const expected = "gulyuza gulyuza";
        expect(actual).to.eql(expected);
    });
});

describe("caesar", () => {
    it("should decode a string where letters move to the right if yhr shift is negative", () => {
        const input = "drivrwx drivrwx";
        const shift = -3;
        const expected = "gulyuza gulyuza";
        let actual = caesar(input, shift, encode = false);
        expect(actual).to.eql(expected);
    });
});

describe("caesar", () => {
    it("should return false if no shift is given", () => {
        const input = "gulyuza";
        let actual = caesar(input, undefined, encode = true);
        expect(actual).to.be.false;
    });
});

describe("caesar", () => {
    it("should return false if shift equals 0", () => {
        const input = "gulyuza";
        const shift = 0;
        let actual = caesar(input, shift, encode = true);
        expect(actual).to.be.false;
    });
});

describe("caesar", () => {
    it("should return false if shift is more than 25", () => {
        const input = "gulyuza";
        const shift = 30;
        let actual = caesar(input, shift, encode = true);
        expect(actual).to.be.false;
    });
});

describe("caesar", () => {
    it("should return false if shift is less than -25", () => {
        const input = "gulyuza";
        const shift = -30;
        let actual = caesar(input, shift, encode = true);
        expect(actual).to.be.false;
    });
});