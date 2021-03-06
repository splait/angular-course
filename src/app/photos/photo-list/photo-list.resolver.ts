import { PhotoService } from '../photo/photo.service';
import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Photo } from '../photo/photo';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class PhotoListResolver implements Resolve<Observable<Photo[]>>{
    
    constructor(private service: PhotoService){}

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Photo[]>  {
        const userName = route.params.userName;
        return this.service.listFromUser(userName);
    }
}