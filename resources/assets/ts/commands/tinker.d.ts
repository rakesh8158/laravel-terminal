import { Command, Interpreterable } from '../command';
export declare class Tinker extends Command implements Interpreterable {
    is(command: string): boolean;
    interpreterable(command: string): boolean;
    getInterpreter(): any;
}
