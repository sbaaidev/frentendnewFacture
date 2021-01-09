import { Component, OnInit } from '@angular/core';
import { BonService } from '../../entities/bonService';
import { BonServiceService } from './bon-service.service';
import { Router } from '@angular/router';
import { debounceTime, distinctUntilChanged, filter, switchMap } from 'rxjs/operators';
import { Client } from 'app/pages/entities/client';
import { ClientMorale } from 'app/pages/entities/clientMorale';
import { clientPhysique } from 'app/pages/entities/clientPhysique';
import { ClientMoraleService } from '../client-morale/client-morale.service';
import { ClientPhysiqueService } from '../client-physique/client-physique.service';
import { ClientService } from '../client/client.service';
import { Observable, Subject } from 'rxjs';

@Component({
  selector: 'app-bon-service',
  templateUrl: './bon-service.component.html',
  styleUrls: ['./bon-service.component.css']
})
export class BonServiceComponent implements OnInit {

  bonservice: BonService = new BonService();
  clientphysique: clientPhysique = new clientPhysique();
  clientPhysiques : clientPhysique [];
  clientMorale: ClientMorale = new ClientMorale();
  clientmorales: ClientMorale[];
  client: Client = new Client();
  datasource: Client[];

  dataSource: BonService[];
  data = null  ;


  data8 = [
    {
      id: 4,
      name: 'Patricia Lebsack',
      email: 'Julianne.OConner@kory.org',
      passed: 'Yes',
    },
    {
      id: 5,
      name: 'Chelsey Dietrich',
      email: 'Lucio_Hettinger@annie.ca',
      passed: 'No',
    },
    {
      id: 6,
      name: 'Mrs. Dennis Schulist',
      email: 'Karley_Dach@jasper.info',
      passed: 'Yes',
    },
    {
      id: 7,
      name: 'Kurtis Weissnat',
      email: 'Telly.Hoeger@billy.biz',
      passed: 'No',
    },
    {
      id: 8,
      name: 'Nicholas Runolfsdottir V',
      email: 'Sherwood@rosamond.me',
      passed: 'Yes',
    },
    {
      id: 9,
      name: 'Glenna Reichert',
      email: 'Chaim_McDermott@dana.io',
      passed: 'No',
    },
    {
      id: 10,
      name: 'Clementina DuBuque',
      email: 'Rey.Padberg@karina.biz',
      passed: 'No',
    },
    {
      id: 11,
      name: 'Nicholas DuBuque',
      email: 'Rey.Padberg@rosamond.biz',
      passed: 'Yes',
    },
  ];

  settings = {
    add: {
      addButtonContent: '<i class="nb-plus"></i>',
      createButtonContent: '<i class="nb-checkmark"></i> ',
      cancelButtonContent: '<i class="nb-close"></i>',

    },
    edit: {
      editButtonContent: '<i class="nb-edit"></i>',
      saveButtonContent: '<i class="nb-checkmark"></i>',
      cancelButtonContent: '<i class="nb-close"></i>',
    },
    delete: {
      deleteButtonContent: '<i class="nb-trash"></i>',
      confirmDelete: true,
    },

    columns: {
      id: {
        title: 'id',
        type: 'number',
      },
      numBS: {
        title: 'Numero BonService',
        type: 'string',
      },
      dateBS: {
        title: 'Date BonService',
        type: 'Date',
      },
      idClient:{
        title:"Client",
        type :  'list',
        valuePrepareFunction: (idClient) => {
            return idClient.nom;
        },

        },

      email: {
        title: 'Email',
        filter: {
          type: 'completer',
          config: {
            completer: {
              data: this.data ,
              searchFields: 'email',
              titleField: 'email',
            },
          },
        },


      }
    }
  };

  clients$: Observable<Client[]>;
  private searchTerms = new Subject<string>();


  constructor(
    private bonServiceService : BonServiceService,
    private clienMoraletService: ClientMoraleService,
    private clientPhysiqueService: ClientPhysiqueService,
    private clientService: ClientService,
    public router: Router,) {

  }
  // Push a search term into the observable stream.
  search(term: string): void {

    let idContent = document.getElementById('dropdown-content');
    idContent.style.display = "block";

    this.searchTerms.next(term);
    // let tableselect = document.getElementsByClassName('tableselect');
    // tableselect[0].style.display = block;
  }


  ngOnInit(): void {
    this.getAllBonServices();
    this.getListClientsPhysiques();
    this.getListClientMorales();

    this.clients$ = this.searchTerms.pipe(
      // wait 300ms after each keystroke before considering the term
      debounceTime(300),

      // ignore new term if same as previous term
      distinctUntilChanged(),

      // switch to new search observable each time the term changes
      switchMap((term: string) => this.clientService.searchC(term)),
    );
  }

  getAllBonServices(){
    this.bonServiceService.getBonServices().subscribe(data=> this.dataSource = data)
  }

  public getListClientsPhysiques(){
    return this.clientPhysiqueService.getClientPhysiques().subscribe(clientPhysique => this.clientPhysiques = clientPhysique);
  }

  public getListClientMorales(){
    return this.clienMoraletService.getClientMorales().subscribe(clientMorale => this.clientmorales = clientMorale)
  }

  addBonService(){
    if (this.clientphysique.id !== undefined && this.clientMorale.id === undefined) {
      this.client = this.clientphysique;
    }
    else if (this.clientphysique.id === undefined && this.clientMorale.id !== undefined) {
      this.client = this.clientMorale;
    }
    else if (this.clientMorale.id !== undefined && this.clientphysique.id !== undefined) {
      this.client = this.clientMorale;
    }
  }



}





