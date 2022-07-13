export class PatientProfile{
    id:number;
    imageURL:string;
    name:string;
    phoneNumber:string;    
    city:string;
    state:string;
    pinCode:string; 
    address:string;
    currentMedications:currentMedications[];
    allergies:allergies[];
}

export class currentMedications{
    name:string;
}

export class allergies{
    name:string;
}

export class MedicationHistory{
    id:number;
    dateEntered:string;
    prescription:string;
    doctor:string;
}

export class History{
    medicationHistoryId:number;
    date:string;
    status:string;
    user:string;
}

export class Allergies{
    id:number;
    name:string;
}