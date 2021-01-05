import { Client } from "./client";

export class ClientMorale extends Client{

  FormeJuridique ?: string ;
  TVA?:string;
	faitgeneratuer?:string;
	IFF?: number;
	IP?: number;
	NumRC?:number;
	numCSS?: number;
	TP?: number;
  tribunal?: string ;
	ICE?: number;
	capital?:number ;
	Banque?: number;
  numRIB?: number;
  codepostal?: number;
	tel?: number;
	fax?: number;
	nomContact?:string ;
  prenomContact?: string;
	GMS?: number ;
	gerant?: number;
	siteweb?: number;
}
