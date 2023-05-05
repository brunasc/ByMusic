import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SaveHistoryService } from 'src/app/core/services/save-history.service';

@Component({
  selector: 'app-delete-history',
  templateUrl: './delete-history.component.html',
  styleUrls: ['./delete-history.component.scss']
})
export class DeleteHistoryComponent implements OnInit {
  searches: string[] = []

  constructor(
    private saveHistoryService: SaveHistoryService,
    private router: Router
  ) { 
    this.searches = this.saveHistoryService.getSearches();
  }

  ngOnInit(): void {
  }

  deleteSearches() {
    this.saveHistoryService.removeSearches();
    this.router.navigate(['/']);
  }

}
