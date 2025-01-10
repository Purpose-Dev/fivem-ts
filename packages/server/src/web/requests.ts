import { makeRequest, RequestData, RequestHeaders } from './makeRequest';

export async function get<T>(url: string, headers?: RequestHeaders): Promise<T> {
    try {
        return await makeRequest<T>(url, 'GET', undefined, headers);
    } catch (error) {
        console.error(`Get request error on URL ${url}: `, error);
        throw error;
    }
}

export async function post<T>(
    url: string,
    data: RequestData,
    headers?: RequestHeaders,
): Promise<T> {
    try {
        return await makeRequest<T>(url, 'POST', data, headers);
    } catch (error) {
        console.error(`Post request error on URL ${url}: `, error);
        throw error;
    }
}

export async function put<T>(url: string, data: RequestData, headers?: RequestHeaders): Promise<T> {
    try {
        return await makeRequest<T>(url, 'PUT', data, headers);
    } catch (error) {
        console.error(`Put request error on URL ${url}: `, error);
        throw error;
    }
}

export async function del<T>(url: string, headers?: RequestHeaders): Promise<T> {
    try {
        return await makeRequest<T>(url, 'DELETE', undefined, headers);
    } catch (error) {
        console.error(`Delete request error on URL ${url}: `, error);
        throw error;
    }
}
