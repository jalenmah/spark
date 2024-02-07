import { Multiply2d } from "./Multiply2d";
import { VirtualAxis } from "./VirtualAxis";
import { VirtualAxis2d } from "./VirtualAxis2d";

export type Button = Enum.KeyCode | Enum.UserInputType;

export type Input =
	| Enum.KeyCode
	| Enum.UserInputType
	| VirtualAxis<{}>
	| VirtualAxis2d<{}>
	| Multiply2d;

export type Input2d = Enum.UserInputType | VirtualAxis2d<{}>;

export type Device = "Keyboard" | "Mouse" | "Gamepad";
