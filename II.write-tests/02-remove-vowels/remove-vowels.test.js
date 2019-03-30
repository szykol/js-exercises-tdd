let removeVowels = require('./remove-vowels');

test("remove vowels from word", function() {
  let vowels      = 'bcdfg';
  let vowelsExOut = '_____';

  let simpleWord  = 'remove';
  let simpleExOut = '_e_o_e';

  expect(removeVowels(vowels)).toEqual(vowelsExOut);
  expect(removeVowels(simpleWord)).toEqual(simpleExOut);
});
