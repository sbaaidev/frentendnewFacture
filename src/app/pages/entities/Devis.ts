import { Client } from "./client";
import { LigneDBF } from "./LigneDBF";

export class Devis{
  id : number ;
  numDevis : string ;
  dateDevis : Date;
  client : Client ;
  ligneDBF: LigneDBF ;
}
