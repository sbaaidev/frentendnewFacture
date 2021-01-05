import { Fournisseur } from "./Fournisseur";
import { LingneCommande } from "./LigneCommande";

export interface Commande {

  numCMD : string ;
  dateCMD: Date;
  fournisseur :Fournisseur;
  ligneCommande : LingneCommande;


}
