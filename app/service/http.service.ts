import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, ResponseContentType, Response } from '@angular/http';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/share';

@Injectable()
export class HttpService {

    constructor( private http: Http ) { }

    searchResults( params: any, action: string ) {
        let headers = new Headers( { 'Content-Type': 'application/json' });
        let options = new RequestOptions( { headers: headers });
        console.log(params);
        return this.http.post( "http://localhost:8080/" + action, params, options ).map( res => res.json() );
    }

    findHotels( params: any) {
        let headers = new Headers( { 'Content-Type': 'application/json' });
        let options = new RequestOptions( { headers: headers });
        console.log(params);
        return this.http.get("http://localhost:8080/" + params).map( res => res.json() );
    }

    confirmBooking( params: any, action: string ){
         let headers = new Headers( { 'Content-Type': 'application/json' });
        let options = new RequestOptions( { headers: headers });
        console.log(params);
        return this.http.post( "http://localhost:8080" + action, params, options ).map( res => res.json() );
    }

    
}