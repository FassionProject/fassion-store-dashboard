export type ReponseData = {
	data: object | null;
	status: number;
	statusText: string | null;
	headers: object | null;
	config: object | null;
	request: object | null;
	errorMsg: string | null;
};