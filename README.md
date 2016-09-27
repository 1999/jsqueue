# JS Test Task #2: Queue () [![Build Status](https://travis-ci.org/avkrash/jsqueue.svg?branch=master)](https://travis-ci.org/avkrash/jsqueue)

Queue is dynamical data structure add-on to JS that allows you to create queues and work with them.

# Module description

## Initializing the list
```javascript
const Queue = require('');
var queue = new Queue();
```
## Adding elements to the queue
```javascript
queue.enqueue(15);
queue.enqueue({'foo':1,'bar':'tender'});
```
## See first element of queue
```javascript
queue.peek(); //returns '15'
queue.peek(); //returns '15'
```
## Take first element from queue and show it value
```javascript
queue.dequeue(); //returns '15' and removes first element
queue.peek(); //returns "{'foo':1,'bar':'tender'}"
queue.dequeue(); //returns "{'foo':1,'bar':'tender'}" and removes last element from queue
```
## Check if queue is empty
```javascript
queue.isEmprty(); //returns 'true'
```

# Getting started
## Install
```
npm install
```

## Running tests
```
npm test
```

P.S.: for additional info see JSDocs
