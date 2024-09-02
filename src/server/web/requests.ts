import { makeRequest, RequestData, RequestHeaders } from './makeRequest';

/**
 * Makes a GET request.
 *
 * @param url - The URL to which the request is sent.
 * @param headers - Optional headers to include in the request.
 * @returns A promise that resolves to the response data of type T.
 */
export async function get<T>(url: string, headers: RequestHeaders = {}): Promise<T> {
    return makeRequest<T>(url, 'GET', undefined, headers);
}

/**
 * Makes a POST request.
 *
 * @param url - The URL to which the request is sent.
 * @param data - The request body data.
 * @param headers - Optional headers to include in the request.
 * @returns A promise that resolves to the response data of type T.
 */
export async function post<T>(
    url: string,
    data: RequestData,
    headers: RequestHeaders = {},
): Promise<T> {
    return makeRequest<T>(url, 'POST', data, headers);
}

/**
 * Makes a PUT request.
 *
 * @param url - The URL to which the request is sent.
 * @param data - The request body data.
 * @param headers - Optional headers to include in the request.
 * @returns A promise that resolves to the response data of type T.
 */
export async function put<T>(
    url: string,
    data: RequestData,
    headers: RequestHeaders = {},
): Promise<T> {
    return makeRequest<T>(url, 'PUT', data, headers);
}

/**
 * Makes a DELETE request.
 *
 * @param url - The URL to which the request is sent.
 * @param headers - Optional headers to include in the request.
 * @returns A promise that resolves to the response data of type T.
 */
export async function del<T>(url: string, headers: RequestHeaders = {}): Promise<T> {
    return makeRequest<T>(url, 'DELETE', undefined, headers);
}
