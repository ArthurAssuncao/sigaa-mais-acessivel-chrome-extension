const rewire = require ('rewire');
const gulpfile = rewire ('./gulpfile');
const jsTask = gulpfile.__get__ ('jsTask');
// @ponicode
describe ('jsTask', () => {
  test ('0', () => {
    let result = jsTask ();
    expect (result).toMatchSnapshot ();
  });
});
