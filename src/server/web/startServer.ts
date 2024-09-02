import { container } from '../ioc';
import { HttpRequest, HttpResponse } from './';

export function startServer(request: HttpRequest, response: HttpResponse) {
    SetHttpHandler(() => {
        container.handleHttpRequest(request, response);
    })
}
