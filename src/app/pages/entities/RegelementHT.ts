import { Devis } from "./Devis";

export class RegelementHT {
 id :number ;
 dateRegelement : Date ;
 montantTTC : number;
 solde : number ;
 credit : number ;
 debit : number ;
 totalDebit : number;
 modeRegelement : string;
 numCheque : string;
 numEffet : string;
 devis : Devis ;
}
