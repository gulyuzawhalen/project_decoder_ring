const expect = require("chai").expect;
const polybius = require("../src/polybius");

describe("polybius", () => {
    it("should return false if the number of characters in the string is odd when decoding", () => {
      const input = "225413455455110 ";
      let actual = polybius(input, encode = false);
      expect(actual).to.be.false;
    });
});

describe("polybius", () => {
    it("should encode a string according to the Polybius Square", () => {
      const input = "Gulyuza is";
      const expected = "22541345545511 4234";
      let actual = polybius(input, encode = true);
      expect(actual).to.eql(expected);
    });
});

describe("polybius", () => {
    it("should decode a string according to the Polybius Square", () => {
      const input = "22541345545511 4234";
      const expected = "gulyuza (i/j)s";
      let actual = polybius(input, encode = false);
      expect(actual).to.eql(expected);
    });
});