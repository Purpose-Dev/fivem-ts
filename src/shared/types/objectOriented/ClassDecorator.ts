import { Constructor } from '../core';

export type ClassDecorator<T> = (target: Constructor<T>) => Constructor<T> | void;
