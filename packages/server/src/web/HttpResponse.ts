export interface HttpResponse {
	writeHead(code: number, headers?: Record<string, string | string[]>): void;
	write(data: string): void;
	send(data?: string): void;
}
