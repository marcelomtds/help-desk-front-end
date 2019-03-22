import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { SharedService } from 'src/app/services/shared.service';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

    sharedService: SharedService;

    constructor() {
        this.sharedService = SharedService.getInstance();
    }

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        let authRequest: any;
        if (this.sharedService.isLoggedIn()) {
            authRequest = req.clone({
                setHeaders: {
                    'Authorization': this.sharedService.token
                }
            });
            return next.handle(authRequest);
        }
        return next.handle(req);
    }

}