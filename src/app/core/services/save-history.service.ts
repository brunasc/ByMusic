import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SaveHistoryService {

  constructor() { }

  saveSearch(searchTerm: string): void {
    const searches = JSON.parse(localStorage.getItem('searches') || "[]");
    searches.unshift(searchTerm);
    localStorage.setItem('searches', JSON.stringify(searches));
  }

  getSearches(): string[] {
    const searches = localStorage.getItem('searches');
    return JSON.parse(searches || "[]");
  }

  removeSearches(): void {
    localStorage.removeItem('searches');
  }
  

}
