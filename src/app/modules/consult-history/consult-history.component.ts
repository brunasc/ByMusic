import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { SaveHistoryService } from 'src/app/core/services/save-history.service';

@Component({
  selector: 'app-consult-history',
  templateUrl: './consult-history.component.html',
  styleUrls: ['./consult-history.component.scss']
})
export class ConsultHistoryComponent implements OnInit {
  @Output() searchesData =  new EventEmitter<boolean>();
  searches: string[] = [];

  constructor(
    private saveHistoryService: SaveHistoryService
  ) { }

  ngOnInit(): void {
    this.getHistory();
  }

  getHistory () {
    this.searches = this.saveHistoryService.getSearches();
  }


}
