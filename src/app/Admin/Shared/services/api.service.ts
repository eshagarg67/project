import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse, HttpParams, HttpHeaders, HttpRequest } from '@angular/common/http';
import { isNullOrUndefined } from 'util';
import { filter, map } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable()
export class ApiService {

    domain = "";
    constructor(private http: HttpClient) {

    }

    sendRequest(apiPath: string, requestType: string, requestBody?: any, queryParameters?: any[]) {
    debugger;
        const _headers = new HttpHeaders();
        const headers = _headers.append('Content-Type', 'application/json')
            .append('Accept', 'application/json');

        let params = new HttpParams();
        if (!isNullOrUndefined(queryParameters) && queryParameters.length > 0) {
            queryParameters.forEach((parameter: any) => {
                debugger;
                params = params.set(parameter.key, parameter.value);
            });
        }
        if (isNullOrUndefined(requestBody)) {
            requestBody = {};
        }

        const request = new HttpRequest<any>(
            requestType,
            this.domain + apiPath,
            requestBody,
            {
                headers: headers,
                params: params,
                responseType: 'json'
            });
        debugger;
        return this.http.request<any>(request)
            .pipe(filter(r => r instanceof HttpResponse),
                map(r => {
                    const resp = r as HttpResponse<any>;
                    let responseBody: string = null;
                    responseBody = resp.body as string;
                    return responseBody;
                })
            );
    }
}



