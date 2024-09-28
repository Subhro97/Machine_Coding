function replace(str, character, index) {
  return str.substring(0, index) + character + str.substring(index + 1);
}
function removeDuplicates(sentence) {
  let set = new Set([]);

  let readPointer = 0,
    writePointer = 0;

  while (readPointer < sentence.length) {
    if (!set.has(sentence[readPointer].toLowerCase())) {
      set.add(sentence[readPointer].toLowerCase());
      sentence =
        readPointer !== writePointer
          ? replace(sentence, sentence[readPointer], writePointer)
          : sentence;
      writePointer++;
    }
    readPointer++;
  }

  return sentence.substring(0, writePointer);
}

let str = "Hello World!";
console.log(removeDuplicates(str));
