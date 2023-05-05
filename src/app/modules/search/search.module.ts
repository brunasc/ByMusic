import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SearchRoutingModule } from './search-routing.module';
import { SearchAlbumComponent } from './search-album/search-album.component';
import { SearchArtistComponent } from './search-artist/search-artist.component';
import { DataTablesModule } from 'angular-datatables';
import { ConsultHistoryComponent } from '../consult-history/consult-history.component';



@NgModule({
  declarations: [
    SearchAlbumComponent,
    SearchArtistComponent,
    ConsultHistoryComponent
  ],
  imports: [
    CommonModule,
    SearchRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    DataTablesModule
  ]
})
export class SearchModule { }
