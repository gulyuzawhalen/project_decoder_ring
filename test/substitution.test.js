const expect = require("chai").expect;
const substitution = require("../src/substitution");

describe("substitution", () => {
  it("should encode a string according to the substitution alphabet", () => {
      const input = "Gulyuza is";
      const alphabet = "xoyqmcgrukswaflnthdjpzibev";
      const expected = "gpwepvx ud";
      let actual = substitution(input, alphabet, encode = true);
      expect(actual).to.eql(expected);
    });
});

describe("substitution", () => {
  it("should decode a string according to the substitution alphabet", () => {
      const input = "gpwepvx ud";
      const alphabet = "xoyqmcgrukswaflnthdjpzibev";
      const expected = "gulyuza is";
      let actual = substitution(input, alphabet, encode = false);
      expect(actual).to.eql(expected);
    });
});

describe("substitution", () => {
  it("should return false if the substitution alphabet doesn't equal 26 characters", () => {
      const input = "gpwepvx ud";
      const alphabet = "short";
      let actual = substitution(input, alphabet, encode = false);
      expect(actual).to.be.false;
    });
});

describe("substitution", () => {
  it("should return false if the substitution alphabet has repetitive characters", () => {
      const input = "gulyuza is";
      const alphabet = "abcabcabcabcabcabcabcabcyz";
      let actual = substitution(input, alphabet, encode = true);
      expect(actual).to.be.false;
    });
});

describe("substitution", () => {
  it("should return false if the substitution alphabet isn't given", () => {
      const input = "gpwepvx ud";
      const alphabet = "short";
      let actual = substitution(input, undefined, encode = false);
      expect(actual).to.be.false;
    });
});