import { Component, OnInit } from '@angular/core';
import { Album } from 'src/app/core/models/top-albums.model';
import { TopArtists, Artist, Image } from 'src/app/core/models/top-artists.model';
import { LastfmService } from 'src/app/core/services/lastfm.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  artists: Artist[] = [];
  albums: Album[] = []

  constructor(
    private lastfmservice: LastfmService
  ) { }

  ngOnInit(): void {
    this.getTopArtists();
    this.getTopAlbums();
  }

  getTopArtists()  {
    this.lastfmservice.getTopArtists(5).subscribe((res: any) => {
      console.log('component', res)
      this.artists = res;
      this.artists.forEach((artist: Artist) => {
        artist.image = artist.image.filter((img: Image) => img.size === "medium");
      });
    })
  }
  
  getTopAlbums() {
    this.lastfmservice.getTopAlbums(5).subscribe((res: any) => {
      this.albums = res;
      this.albums.forEach((album: Album) => {
        album.image = album.image.filter((img: Image) => img.size === "medium");
      });
    })
  }

  
}
