import { Pipe, PipeTransform } from '@angular/core';
import { Photo } from '../photo/photo';

@Pipe({
    name: 'filterByDescription'
})
export class FilterByDescription implements PipeTransform{
    
    transform(photos: Photo[], descritionQuery: string): Photo[] {
        descritionQuery = descritionQuery.trim().toLowerCase();
        if(descritionQuery){
            return photos.filter(photo => photo.description.toLowerCase().includes(descritionQuery));
        }else{
            return photos;
        }
    }
}