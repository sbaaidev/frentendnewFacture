import { FactureClient } from "./FacturteClient";

export class RegelementClient {
  id : number ;
  factureClt : FactureClient ;
  dateRegelement : Date;
  montantTTC : number ;
  solde : number ;
  credit : number ;
  debit : number ;
  totalDebit : number;
  totalSolde : number ;
  modeRegelent : string ;
  numCheque : string ;
  numEffet : string ;
}
