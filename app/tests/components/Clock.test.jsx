var React = require('react');
var ReactDOM = require('react-dom');
var expect = require('expect');
var $ = require('jQuery');

var TestUtils = require('react-addons-test-utils');

var Clock = require('Clock');

describe('Clock', ()=> {
    it('should exist', ()=> {
        expect(Clock).toExist();
    });

    describe('render', ()=> {
      it('should render clock component',()=>{
        var clock = TestUtils.renderIntoDocument(<Clock totalSeconds = {90}/>);
        var $el = $(ReactDOM.findDOMNode(clock));
        var actualText = $el.find('.clock-test').text();
        expect(actualText).toBe('01:30');
      });
    });

    describe('formatSeconds', ()=> {
      it('should formatSeconds',()=> {
        var clock = TestUtils.renderIntoDocument(<Clock/>);
        var seconds = 615;
        var expected = '10:15';
        var actual = clock.formatSeconds(seconds);

        expect(actual).toBe(expected);
      });
    });

    describe('formatSeconds when seconds and minutes < 10', ()=> {
      it('should formatSeconds',()=> {
        var clock = TestUtils.renderIntoDocument(<Clock/>);
        var seconds = 61;
        var expected = '01:01';
        var actual = clock.formatSeconds(seconds);

        expect(actual).toBe(expected);
      });
    });
});
