/**
 * @constructor Queue
 * @summary Queue class constructor. Creates one empty queue object.
 * @example var queue = new Queue();
 * @property {object} first - pointer to first element in queue (==null for emty queue)
 * @property {object} last - pointer to last element in queue
 *                          == null for emty queue
 *                          == this.first for single element queue
 */
function Queue() {
    this.first = null;
    this.last = null;
}

/**
 * @function
 * @name isEmpty()
 * @summary checks if queue is empty or not
 * @example queue.isEmpty();
 * @returns {boolean} 'true' - if queue is empty
 * @returns {boolean} 'false' - if queue is not empty
 */
Queue.prototype.isEmpty = () => {
    if (!this.first) {
        return true;
    }
    return false;
};

/**
 * @function
 * @name peek()
 * @summary shows first element in queue without moving it out
 * @example queue.peek();
 * @returns {Object} value - value of first element
 * @returns {RangeError} 'Queue is empty' - if queue is empty
 */
Queue.prototype.peek = () => {
    if (!this.first) {
        throw new RangeError('Queue is empty');
    }
    return this.first.value;
};

/**
 * @function
 * @name enqueue(value)
 * @summary adds new element in queue
 * @example queue.enqueue('Hello, world!');
 * @param {object} value - any object , that should be stored in queue element
 * @returns {number} '0' - when element added
 */
Queue.prototype.enqueue = (addValue) => {
    const element = {
        value: addValue,
        next: null,
    };
    if (!this.first) {
        this.first = element;
        this.last = this.first;
    } else {
        this.last.next = element;
        this.last = this.last.next;
    }
    return 0;
};

/**
 * @function
 * @name dequeue()
 * @summary shows value of first element and takes it away from queue
 * @example queue.dequeue();
 * @returns {Object} value - value of first element
 * @returns {RangeError} 'Queue is empty' - if queue is empty
 */
Queue.prototype.dequeue = () => {
    if (!this.first) {
        throw new RangeError('Queue is empty');
    }
    const value = this.first.value;
    if (this.first.next) {
        this.first = this.first.next;
    } else {
        this.first = null;
        this.last = null;
    }
    return value;
};

/**
 * @exports Queue constructor
 */
module.exports = Queue;
