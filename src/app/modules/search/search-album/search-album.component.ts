import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Album } from 'src/app/core/models/album.model';
import { LastfmService } from 'src/app/core/services/lastfm.service';
import { SaveHistoryService } from 'src/app/core/services/save-history.service';
import { cloneDeep } from 'lodash-es';
import { tableConfig } from 'src/app/core/config/table.config';

@Component({
  selector: 'app-search-album',
  templateUrl: './search-album.component.html',
  styleUrls: ['./search-album.component.scss']
})
export class SearchAlbumComponent implements OnInit {

  dtOptions: any = cloneDeep(tableConfig);

  albums: Album[] = [];
  form!: FormGroup;
  isLoading: boolean = false;
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
    this.lastfmservice.getAlbum(searchValue).subscribe((res: any) => {
      console.log(res)
      this.albums = res;
      this.isLoading = false;
      this.noResults = this.albums.length === 0;
      this.onSearch();
    }
    )
  }

  onSearch() {
    const searchAlbum = this.form.get('search')?.value;
    this.saveHistoryService.saveSearch(searchAlbum);
  }

}
