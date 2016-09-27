'use strict';

const expect = require('chai').expect,
      Queue = require('../queue');

let queue = new Queue();

describe('Queue tests', () => {

  it('Newly initialized queue should be empty', () => {
    expect(queue.isEmpty()).to.be.true;
  });
  it('Add new element to queue should return zero', () => {
    expect(queue.enqueue('Hello')).to.be.equal(0);
  });
  it('Now queue should not be empty', () => {
    expect(queue.isEmpty()).to.be.false;
  });
  it('Peek element from queue should return "Hello"', () => {
    expect(queue.peek()).to.be.equal('Hello');
  });
  it('Queue still should not be empty', () => {
    expect(queue.isEmpty()).to.be.false;
  });
  it('Take element from queue should return "Hello"', () => {
    expect(queue.dequeue()).to.be.equal('Hello');
  });
  it('And queue should be empty', () => {
    expect(queue.isEmpty()).to.be.true;
  });
  it('Add new element', () => {
    expect(queue.enqueue('first')).to.be.equal(0);
  });
  it('Add another one element', () => {
    expect(queue.enqueue('second')).to.be.equal(0);
  });
  it('Take element from queue', () => {
    expect(queue.dequeue()).to.be.equal('first');
  });
  it('Add another one element', () => {
    expect(queue.dequeue()).to.be.equal('second');
  });
  it('Peek element from empty queue should throw error', () => {
    expect(queue.peek()).to.throw('Queue is empty');
  });
  it('Take element from empty queue should throw error', () => {
    expect(queue.dequeue()).to.throw('Queue is empty');
  });

});
