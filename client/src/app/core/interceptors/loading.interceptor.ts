import {Injectable} from '@angular/core';
import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http';
import {Observable} from 'rxjs';
import {BusyService} from "../services/busy.service";
import {finalize} from "rxjs/operators";

@Injectable()
export class LoadingInterceptor implements HttpInterceptor {

  constructor(private busyService: BusyService) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    /*request = request.clone({
      setHeaders: {
        'Sec-Fetch-Dest': 'none',
        'Sec-Fetch-Site': 'same-origin',
        'Sec-Fetch-Mode': 'navigate'
      }
    });*/


    if (request.method === 'POST' && request.url.includes('orders')) {
      return next.handle(request);
    }

    if (request.method === 'DELETE') {
      return next.handle(request);
    }

    if (request.url.includes('emailexists')){
      return next.handle(request);
    }

    this.busyService.busy();
    return next.handle(request).pipe(
      finalize(() => {
        this.busyService.idle();
      })
    );
  }
}
