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





