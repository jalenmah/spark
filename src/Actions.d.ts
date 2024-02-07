import { InputMap } from "./InputMap";
import { InputState } from "./InputState";
import { Signal } from "./Signal";

export declare class Actions<T extends readonly string[]> {
	axis2d(action: T[number]): Vector2;
	clampedAxis2d(action: T[number]): Vector2;
	hold(action: T[number]): void;
	justPressedSignal(action: T[number]): Signal;
	justReleasedSignal(action: T[number]): Signal;
	move(action: T[number], vector2: Vector2): Vector2;
	normalizedAxis2d(action: T[number]): Vector2;
	pressed(action: T[number]): boolean;
	released(action: T[number]): boolean;
	update(inputState: InputState, inputMap: InputMap): void;
	value(action: T[number]): number;

	constructor(actions: T);
}
