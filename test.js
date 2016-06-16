/*eslint-disable */

'use strict';

chai.should();

describe('jquery-debug', function() {
  beforeEach(function() {
    sinon.stub(console, 'error');
  });

  afterEach(function() {
    console.error.restore();
  });

  it('should not log an error in the console', function(done) {
    $('#mocha').debug();

    console.error.calledOnce.should.not.be.true;

    done();
  });

  it('should log an error in the console', function(done) {
    var errorMsg = 'Error: The jQuery selector \'p\' was not found in the context of \'#document\'.';

    $('p').debug();

    console.error.calledOnce.should.be.true;
    console.error.calledWith(errorMsg).should.be.true;

    done();
  });
});
