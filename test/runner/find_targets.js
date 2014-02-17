const findTargets = require('../../runner/lib/find_targets');

describe('findTargets', function () {

  it('should extract valid targets from a task config', function () {
    var config = {
      options: {},
      targetOne: ['test/fixtures/files/*.js'],
      targetTwo: {
        src: ['test/fixtures/files/*.js']
      }
    };
    expect(findTargets(config)).to.deep.equal(['targetOne','targetTwo']);
  });

});
