import { LingneCommande } from "./LigneCommande";

export class ProduitFournisseur {
  id : number;
  designation: string;
  prixUnit : number;
  tva : number;
  ligneCommande : LingneCommande;
}
