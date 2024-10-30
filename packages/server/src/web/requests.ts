import { makeRequest, RequestData, RequestHeaders } from './makeRequest';

export async function get<T>(url: string, headers?: RequestHeaders): Promise<T> {
    return makeRequest<T>(url, 'GET', undefined, headers);
}

export async function post<T>(
    url: string,
    data: RequestData,
    headers?: RequestHeaders,
): Promise<T> {
    return makeRequest<T>(url, 'POST', data, headers);
}

export async function put<T>(url: string, data: RequestData, headers?: RequestHeaders): Promise<T> {
    return makeRequest<T>(url, 'PUT', data, headers);
}

export async function del<T>(url: string, headers?: RequestHeaders): Promise<T> {
    return makeRequest<T>(url, 'DELETE', undefined, headers);
}
