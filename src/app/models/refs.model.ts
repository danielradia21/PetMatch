import { User } from "./user.model";
import { Org } from "./org.model";
import { AngularFirestoreCollection } from "@angular/fire/compat/firestore";

export interface refs {
    userRef:AngularFirestoreCollection<User>,
    orgsRef:AngularFirestoreCollection<Org>
}


export interface itemRefs{
    user:User,
    org:Org

}