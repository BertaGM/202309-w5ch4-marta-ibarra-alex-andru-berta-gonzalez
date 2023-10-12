class CodersArray {
  elements;

  constructor(...elements) {
    this.elements = elements;
  }

  length() {
    return this.elements.length;
  }

  textFilter(maxCharacterText) {
    for (let i = 0; i < this.elements.length; i++) {
      if (maxCharacterText(this.elements[i])) {
        console.log(this.elements[i]);
      }
    }
  }
}

export default CodersArray;
