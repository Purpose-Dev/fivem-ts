export interface HttpRequest {
    address: string;
    headers: Record<string, string>;
    method: string;
    path: string;
    body?: unknown;
    setDataHandler(handler: (data: string) => void): void;
    setDataHandler(handler: (data: ArrayBuffer) => void, binary: 'binary'): void;
    setCancelHandler(handler: () => void): void;
}
