import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { cloneDeep } from 'lodash-es';
import { tableConfig } from 'src/app/core/config/table.config';
import { Artist } from 'src/app/core/models/artist.model';
import { LastfmService } from 'src/app/core/services/lastfm.service';
import { SaveHistoryService } from 'src/app/core/services/save-history.service';




@Component({
  selector: 'app-search-artist',
  templateUrl: './search-artist.component.html',
  styleUrls: ['./search-artist.component.scss']
})
export class SearchArtistComponent implements OnInit {
  dtOptions: any = cloneDeep(tableConfig);


  form!: FormGroup;
  isLoading: boolean = false;
  artists: Artist[] = [];
  noResults: boolean = false;

  constructor(
    private lastfmservice: LastfmService,
    private fb: FormBuilder,
    private saveHistoryService: SaveHistoryService
  ) { }

  ngOnInit(): void {
    this.createForm();
  }

  createForm() {
    this.form = this.fb.group({
      search: ['', Validators.required]
    })
  }

  onSubmit() {
    const searchValue = this.form.get('search')?.value;
    if (!searchValue || searchValue.trim() === '') {
      alert('Por favor, preencha o campo de busca!');
      this.isLoading = false;
      return;
    }

    this.isLoading = true;

    this.lastfmservice.getArtist(searchValue).subscribe((res: any) => {
      this.artists = res;
      this.isLoading = false;
      this.noResults = this.artists.length === 0;
      this.onSearch();
    })
  }

  onSearch() {
    const searchArtist = this.form.get('search')?.value;
    this.saveHistoryService.saveSearch(searchArtist)
  }

}
