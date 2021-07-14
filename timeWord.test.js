const timeWord = require("./timeWord")

describe("Timeword Function", () => {
  test("Handles noon and midnight", () => {
    expect(timeWord("12:00")).toBe('noon')
    expect(timeWord("00:00")).toBe('midnight')
  })
  test("Handles AM and PM", () => {
    expect(timeWord("11:09")).toBe("eleven oh nine am");
    expect(timeWord("23:23")).toBe("eleven twenty three pm");
  });
  test("Handles time to text", () => {
    expect(timeWord("12:34")).toBe("twelve thirty four pm")
    expect(timeWord("23:45")).toBe('eleven forty five pm')
    expect(timeWord("01:23")).toBe('one twenty three am')
    expect(timeWord("02:10")).toBe('two ten am')
  });
});