class CodersArray {
  length;
  data;

  constructor(...coderArguments) {
    console.log(coderArguments);
    this.length = 0;
    this.data = {};

    for (let index = 0; index < coderArguments.length; index++) {
      this.data[index] = coderArguments[index];
      this.length += 1;
    }
  }
}

export default CodersArray;
