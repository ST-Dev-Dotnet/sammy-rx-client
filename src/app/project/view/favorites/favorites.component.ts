import { Component, OnInit } from '@angular/core';
import { FavoriteService } from 'src/app/project/service/favorite.service';
import { Favorites,FavoritePrescriptions } from '../../models/favorites';

@Component({
    selector: 'app-favorites',
    templateUrl: 'favorites.component.html',
    styleUrls:['./favorites.component.scss']
})
export class FavoritesComponent implements OnInit {
    favorites:Favorites;
    favoritePrescriptions:FavoritePrescriptions;
    isFavourite = false;

    constructor(private favoriteService: FavoriteService){}

    ngOnInit() {
        this.getAllFavorites();
    }
    addFavourite(event: any, id: any) {
        // alert(event.target.checked);
        // alert(id);
    this.favoriteService.updateFavoritePrescriptions(event.target.checked,id)
    .subscribe(
        (result: any) => {
          if (result) {
              console.log(result);
            debugger;
            //this.processing = false;
            //this.submitted = false;
          }
        },
        err => {
          //this.submitted = false;
          //this.processing = false;
        }
      );
    }

    getAllFavorites() {
        this.favoriteService
            .getAll()
            .subscribe((prf: Favorites) => {
                this.favorites = prf;
                console.log(
                    'favorites records by id',
                    this.favorites
                );
                console.log(prf.favoritePrescriptions)
            }); 
}

}
