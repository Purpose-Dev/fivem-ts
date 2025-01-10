import fetch from 'cross-fetch';

/**
 * Defines the headers to include in the HTTP request
 *
 * This interface represents an object where the keys are header names
 * and the values are header values
 *
 * @example
 * ```ts
 * const headers: RequestHeaders = {
 *  'Authorization': 'Bearer token',
 *  'Accept': 'application/json'
 * }
 * ```
 */
export interface RequestHeaders {
    [key: string]: string;
}

/**
 * Represents the data to be included in the HTTP request body
 *
 * This interface represents an object where the keys are property names
 * and the values are property values. The structure of the data is flexible
 * and can vary depending on the API endpoint and the data being sent
 *
 * @example
 * ```ts
 * const data: RequestData = {
 *  'name': 'John Doe',
 *  'age': 30
 * }
 * ```
 */
export interface RequestData {
    [key: string]: unknown;
}

/**
 * Defines the allowed Http methods for make requests.
 *
 * This type restricts the values to common HTTP methods. It is used
 * to specify which HTTP method will be used for the request.
 *
 * Possible Values:
 * - 'GET': Retrieves data from the server
 * - 'POST': Submit data to the server
 * - 'PUT': Update existing data on the server
 * - 'DELETE': Removes data from the server.
 *
 * @example
 * ```ts
 * const methods: RequestMethods = 'POST';
 * ```
 */
export type RequestMethods = 'GET' | 'POST' | 'PUT' | 'DELETE';

export async function makeRequest<T>(
    url: string,
    method: RequestMethods,
    data?: RequestData,
    headers?: RequestHeaders,
): Promise<T> {
    const options: RequestInit = {
        method,
        headers: {
            'Content-Type': 'application/json',
            ...headers,
        },
    };

    if (data) options.body = JSON.stringify(data);

    const response: Response = await fetch(url, options);

    if (!response.ok) {
        throw new Error(`Http error! Status: ${response.status}`);
    }

    return await response.json();
}
