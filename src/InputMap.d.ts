import { Device, Input } from ".";
import { Actions } from "./Actions";

type ActionKey<T> = T extends Actions<infer K> ? K[number] : string;

export declare class InputMap<T = undefined> {
	static deserialize(seralized: buffer): InputMap;

	clone(): InputMap;
	get(action: ActionKey<T>): Input[];
	getByDevices(action: ActionKey<T>, devices: Device[]): Input[];
	insert(action: ActionKey<T>, ...inputs: Input[]): InputMap<T>;
	remove(action: ActionKey<T>, input: Input): void;
	serialize(): buffer;

	constructor();
}
