import { Commande } from "./commande";
import { ProduitFournisseur } from "./ProduitFournisseur";

export class LingneCommande {

  id : number ;
  quantite ?: number ;
  prixUnit ?: number ;
  montantHT ?: number ;
  tva ?: number ;
  produitFournisseur : ProduitFournisseur ;
  totalHt ?: number ;
  totalTVA ? : number ;
  totalTTc ?: number ;
  commande : Commande ;
}








