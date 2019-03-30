let greetPeople = require('./greet-people');

test("print list of names prefixed with Hello", function() {
  people = ['szykol', 'Tom', 'Stephen'];

  let output = 'Hello szykolTomStephen';
  expect(greetPeople(people)).toEqual(output);
});
