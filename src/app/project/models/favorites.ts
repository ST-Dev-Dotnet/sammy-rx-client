export class Favorites{
    showAllDoctors:boolean;
    showAllDoctors1:boolean;
    favoritePrescriptions:FavoritePrescriptions[];
    frequentlyUsedMedications:FrequentlyUsedMedications[];
}

export class FavoritePrescriptions{
    id:number;
    name:string;
    refills:string;
    isFavorite:boolean;
}

export class FrequentlyUsedMedications{
    id:number;
    name:string;
    refills:string;
    isFavorite:boolean;
}
