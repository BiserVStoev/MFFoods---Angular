import { HttpClient } from '@angular/common/http';

export class BaseService {
    public readonly baseKinveyUrl = 'https://baas.kinvey.com';
    public readonly appKey = 'kid_ry67d6EXX';
    public readonly appSecret = 'a4ecc0867207424dba98f9ef7823fd84';

    constructor(protected http: HttpClient) { }

    constructRequestUrl(module: string, endpoint: string, query?: string) {
        let url = `${this.baseKinveyUrl}/${module}/${this.appKey}/${endpoint}`;
        if (query) {
            url += '?query=' + query
        }
        console.log(url)
        return url;
    };
}