import { DevisComponent } from "../model/devis/devis.component";
import { Devis } from "./Devis";
import { ProduitClient } from "./ProduitClient";

export class LigneDBF {
id : number;
quantite : number ;
prixUnit : number ;
montantHT : number ;
tva : number ;
devis : Devis;
produitClient : ProduitClient ;
ht : number ;
totalHt : number ;
totalTVA : number ;
totalTTc : number ;

}
