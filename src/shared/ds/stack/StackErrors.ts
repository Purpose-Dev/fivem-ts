/**
 * Represents an error thrown when a stack exceeds its capacity.
 *
 * The StackOverflowError extends the standard Error object and is used to indicate
 * that an operation could not be completed because the stack is full.
 *
 * @param {string} [message='Stack Overflow: The stack is full'] - The error message to be displayed.
 */
export class StackOverflowError extends Error {
    constructor(message = 'Stack Overflow: The stack is full') {
        super(message);
        this.name = 'StackOverflowError';
    }
}

/**
 * Represents an error thrown when an operation is attempted on an empty stack.
 *
 * This specific type of error should be thrown to indicate that
 * the stack does not have enough elements to satisfy the requested operation.
 *
 * @extends Error
 * @param {string} [message='Stack Underflow: The stack is empty'] - Custom error message.
 */
export class StackUnderflowError extends Error {
    constructor(message = 'Stack Underflow: The stack is empty') {
        super(message);
        this.name = 'StackUnderflowError';
    }
}
