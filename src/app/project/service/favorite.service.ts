import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Favorites,FavoritePrescriptions} from 'src/app/project/models/favorites';

@Injectable()
export class FavoriteService {
    private readonly path = '/favorites/';
    private readonly favoritePrescriptionPath = '/favoritePrescriptions/';

    constructor(
        private http: HttpClient) { }
    //get newrx by id
    getAll() {
        return this.http.get<Favorites>(`${environment.serverApiBase}${this.path}`);
    }   

    updateFavoritePrescriptions(event:any, id:number){
        var Indata = {'name':'aa','refills':'aa','isFavorite':event, 'id': id };
        console.log(Indata);
        return this.http.post<FavoritePrescriptions>(`${environment.serverApiBase}${this.favoritePrescriptionPath}`, Indata)
    }
}
    