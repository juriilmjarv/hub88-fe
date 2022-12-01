export type Country = {
	name: string;
	code: string;
};

export type Countries = {
	[key: string]: Country[];
};
