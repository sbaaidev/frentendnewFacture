import { Component, OnInit } from '@angular/core';
import { BonService } from '../../entities/bonService';
import { BonServiceService } from './bon-service.service';
@Component({
  selector: 'app-bon-service',
  templateUrl: './bon-service.component.html',
  styleUrls: ['./bon-service.component.css']
})
export class BonServiceComponent implements OnInit {

  bonservice: BonService = new BonService();
  dataSource: BonService[];

  settings = {
    add: {
      addButtonContent: '<i class="nb-plus"></i>',
      createButtonContent: '<i class="nb-checkmark"></i>',
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
        title: 'numBS',
        type: 'string',
      },
      dateBS: {
        title: 'dateBS',
        type: 'Date',
      },
      Client: {
        title: 'Client',
        type: 'idClient',
      },
    },
  };

  constructor(private bonServiceService : BonServiceService) { }

  ngOnInit(): void {
    this.getAllBonServices();
  }

  getAllBonServices(){
    this.bonServiceService.getBonServices().subscribe(data=> this.dataSource = data)
  }

  delete(bonService: BonService): void {
    this.dataSource = this.dataSource.filter(i => i !== bonService);

    this.bonServiceService.deleteBonService(bonService).subscribe();

  }


}





