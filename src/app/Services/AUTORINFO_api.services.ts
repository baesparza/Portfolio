import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import { AUTORINFO } from '../Common/autorinfo';

@Injectable()

export class AUTORINFO_api {
    constructor(private http: Http) {
        
    }

    getAUTORINFO(){
        let url = '/Data/AutorInfo.json';
        return this.http.get(url)
        .toPromise()
        .then(response => response.json()) 
        .catch(this.error);
    }

    error(error:any){
        return Promise.reject(error.messaje || error);
    }
}