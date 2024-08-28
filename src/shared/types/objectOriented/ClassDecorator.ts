import { Constructor } from '../core/Constructor';

export type ClassDecorator<T> = (target: Constructor<T>) => Constructor<T> | void;
