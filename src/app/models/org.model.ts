import { Pet } from "./pet.model";

export interface Org {
    name: string,
    description: string,
    members: string[],
    pets: Pet[],
    location: string,
    imgUrl: string,
    contact: {
        phone: string,
        email: string,
        website?: string,
        twitter?: string,
        facebook?: string,
    },
    authorized: boolean,
}
