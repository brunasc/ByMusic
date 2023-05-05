import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SearchAlbumComponent } from './search-album/search-album.component';
import { SearchArtistComponent } from './search-artist/search-artist.component';
import { ConsultHistoryComponent } from '../consult-history/consult-history.component';
import { DeleteHistoryComponent } from '../delete-history/delete-history.component';

const routes: Routes = [
  { path: 'album', component: SearchAlbumComponent },
  { path: 'artist', component: SearchArtistComponent },
  { path: 'consult-history', component: ConsultHistoryComponent },
  { path: 'delete-history', component: DeleteHistoryComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SearchRoutingModule { }
