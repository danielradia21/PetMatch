import { Pet } from "./pet.model";
import { User } from "./user.model";

export interface Match {
  _id: string;
  user: User;
  pet: Pet;
  createdAt: number;
  msgs: Array<object>;
  isAdopted: boolean;
}
