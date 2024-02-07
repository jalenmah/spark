import { InputMap } from "./InputMap";
import { InputState } from "./InputState";
import { Signal } from "./Signal";

export declare class Actions<T extends readonly string[]> {
	axis2d(action: keyof T): Vector2;
	clampedAxis2d(action: keyof T): Vector2;
	hold(action: keyof T): void;
	justPressedSignal(action: keyof T): Signal;
	justReleasedSignal(action: keyof T): Signal;
	move(action: keyof T, vector2: Vector2): Vector2;
	normalizedAxis2d(action: keyof T): Vector2;
	pressed(action: keyof T): boolean;
	released(action: keyof T): boolean;
	update(inputState: InputState, inputMan: InputMap): void;
	value(action: keyof T): number;

	constructor(actions: T);
}
