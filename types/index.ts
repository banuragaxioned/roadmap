export type Quadrant = "Techniques" | "Tools" | "Platforms" | "Languages and Frameworks";

export type Ring = "Adopt" | "Trial" | "Assess" | "Hold";

export type Entry = {
	quadrant: number;
	ring: number;
	label: string;
};

export type Entries = Entry[];
