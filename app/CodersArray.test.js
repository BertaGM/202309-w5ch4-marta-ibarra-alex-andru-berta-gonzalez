describe("Given a CodersArray class", () => {
  describe("When it recives 1, 2, 3 and 4", () => {
    test("Then it should return the length 4", () => {
      const text = [1, 2, 3, 4];
      const expectedLenght = 4;

      const codersArray = text.lenght;

      expect(codersArray).toBe(expectedLenght);
    });
  });

  describe("When it recives 'Marta', 'Andru', 'Berta'", () => {
    test("Then it should return the length 3", () => {
      const text = ["Marta", "Andru", "Berta"];
      const expectedLenght = 3;

      const codersArray = text.lenght;

      expect(codersArray).toBe(expectedLenght);
    });
  });

  describe("When it recives 'Marta', 'Andru', 'Pol'", () => {
    test("Then it should return an array with the text with 5 characters or more", () => {
      const text = ["Marta", "Andru", "Pol"];
      const moreThanFiveText = ["Marta", "Andru"];

      const codersArray = text.textFilter((name) => name >= 5);

      expect(codersArray).toBe(moreThanFiveText);
    });
  });
});
