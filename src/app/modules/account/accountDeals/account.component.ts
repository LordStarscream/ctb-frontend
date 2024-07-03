import { Component, Input, OnInit } from '@angular/core';
import { DealService } from '../../services/deal.service';
import { Deal } from '../../models/deal.model';

@Component({
  selector: 'account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.scss']
})

export class AccountComponent implements OnInit{
  @Input() accountId: number | null = null;


  dataset: Deal[] = [
  this.createEmptyDeal()
  ];

  datasetInput: any[] = [
    { }
    ];


  constructor(private dealService: DealService) {}

  ngOnInit(): void {
    if (this.accountId !== null){
      this.loadData();
    }
  }

  ngOnChanges() {
    if (this.accountId !== null) {
      this.loadData();
    }
  }

  createEmptyDeal(): Deal {
    return new Deal({
      id: undefined,
      openTime: undefined,
      type: '',
      size: undefined,
      item: '',
      price: undefined,
      orderNumber: undefined,
      comment: '',
      entry: '',
      commission: undefined,
      swap: undefined,
      profit: undefined,
      });
  }

  loadData() {
    this.dealService.getDeals(this.accountId!).subscribe(data => {
      if(data.length === 0){
        this.dataset = [new Deal(this.createEmptyDeal())];
      }
      this.dataset = data;
      this.dataset.push(this.createEmptyDeal());
    });
  }

  saveData() {
    const tableData = this.dataset.filter(deal => deal !==  this.createEmptyDeal());
    this.dealService.saveDeals(tableData).subscribe(response => {
      console.log('Data saved', response);
    }, error => {
      console.error('Fehler beim Speichern der daten', error)
    });
  }

  newEmptyLine() {
    //this.dataset.push(this.emptyDeal);
    this.dataset = [...this.dataset, this.createEmptyDeal()];
  }
}
