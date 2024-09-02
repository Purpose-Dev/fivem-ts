import fetch from 'cross-fetch';

/**
 * Defines the headers to include in the HTTP request.
 *
 * This interface represents an object where the keys are header names
 * and the values are header values.
 *
 * Example:
 * ```ts
 * const headers: RequestHeaders = {
 *   'Authorization': 'Bearer token',
 *   'Accept': 'application/json'
 * };
 * ```
 */
export interface RequestHeaders {
    [key: string]: string;
}

/**
 * Represents the data to be included in the HTTP request body.
 *
 * This interface represents an object where the keys are property names
 * and the values are property values. The structure of the data is flexible
 * and can vary depending on the API endpoint and the data being sent.
 *
 * Example:
 * ```ts
 * const data: RequestData = {
 *   name: 'John Doe',
 *   age: 30
 * };
 * ```
 */
export interface RequestData {
    [key: string]: any;
}

/**
 * Defines the allowed HTTP methods for making requests.
 *
 * This type restricts the values to common HTTP methods. It is used to
 * specify which HTTP method will be used for the request.
 *
 * Possible values:
 * - 'GET': Retrieves data from the server.
 * - 'POST': Submits data to the server.
 * - 'PUT': Updates existing data on the server.
 * - 'DELETE': Removes data from the server.
 *
 * Example:
 * ```ts
 * const method: RequestMethods = 'POST';
 * ```
 */
export type RequestMethods = 'GET' | 'POST' | 'PUT' | 'DELETE';

/**
 * A general-purpose function for making HTTP requests.
 *
 * This function performs HTTP requests using the Fetch API. It supports various HTTP methods
 * (GET, POST, PUT, DELETE) and allows you to include request headers and body data.
 *
 * @param url - The URL to which the request is sent.
 *   - Type: `string`
 *   - Description: The endpoint to which the HTTP request will be made.
 *
 * @param method - The HTTP method to use for the request.
 *   - Type: `RequestMethods` (a type alias for `'GET' | 'POST' | 'PUT' | 'DELETE'`)
 *   - Default: `'GET'`
 *   - Description: The HTTP method to be used for the request. Defaults to `'GET'` if not specified.
 *
 * @param data - The request body data.
 *   - Type: `RequestData` (an interface where keys are strings and values can be any type)
 *   - Default: `undefined`
 *   - Description: The data to be sent in the body of the request, used for POST and PUT requests. If not provided, no body is included in the request.
 *
 * @param headers - Optional headers to include in the request.
 *   - Type: `RequestHeaders` (an interface where keys are strings and values are strings)
 *   - Default: `{}`
 *   - Description: Additional headers to be included in the request. The `Content-Type` header is automatically set to `'application/json'`.
 *
 * @returns A promise that resolves to the response data of type `T`.
 *   - Type: `Promise<T>`
 *   - Description: The promise resolves to the parsed JSON response from the server. The type of the response data is specified by the generic type parameter `T`.
 *
 * @throws {Error} Throws an error if the response status is not OK or if there is an error during the fetch operation.
 *
 * @example
 * ```ts
 * interface User {
 *   id: number;
 *   name: string;
 * }
 *
 * async function fetchUser() {
 *   try {
 *     const user = await makeRequest<User>('https://api.example.com/user/1');
 *     console.log(user);
 *   } catch (error) {
 *     console.error('Error fetching user:', error);
 *   }
 * }
 * ```
 */
export async function makeRequest<T>(
    url: string,
    method: RequestMethods = 'GET',
    data?: RequestData,
    headers: RequestHeaders = {},
): Promise<T> {
    const options: RequestInit = {
        method,
        headers: {
            'Content-Type': 'application/json',
            ...headers,
        },
    };

    if (data) {
        options.body = JSON.stringify(data);
    }

    try {
        const response: Response = await fetch(url, options);

        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        return await response.json();
    } catch (error) {
        console.error('Fetch error:', error);
        throw error;
    }
}
