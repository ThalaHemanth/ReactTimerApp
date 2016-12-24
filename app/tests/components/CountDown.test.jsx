var expect = require('expect');
var React = require('react');
var ReactDOM = require('react-dom');
var TestUtils = require('react-addons-test-utils');

var Countdown = require('Countdown');

describe('Countdown Test', ()=> {
  it('should exist', ()=> {
    expect(Countdown).toExist();
  });
  describe('handleSetCountDown',()=> {
      it('should set state to started and countdown',(done)=>{
        var countdown = TestUtils.renderIntoDocument(<Countdown/>);
        countdown.handleSetCountDown(10);
        expect(countdown.state.count).toBe(10);
        expect(countdown.state.countdownStatus).toBe('started');

        setTimeout(()=>{
          expect(countdown.state.count).toBe(9);
          done();
        },1001)
      });
      it('should never set count less than zero',(done)=>{
        var countdown = TestUtils.renderIntoDocument(<Countdown/>);
        countdown.handleSetCountDown(1);

        if(countdown.state.count < 0) {
          countdown.state.count = 0;
        }

        setTimeout(()=>{
          expect(countdown.state.count).toBe(0);
          done();
        },3001)
      });
  });
});
