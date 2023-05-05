import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { TopArtists } from '../models/top-artists.model';


@Injectable({
  providedIn: 'root'
})
export class LastfmService {
  private apiKey: string = '7db15e00efc83f19611fd8a89b9b1afb';
  readonly urlBase: string = ' http://ws.audioscrobbler.com/2.0/';

  constructor(
    private http: HttpClient
  ) { }

  getTopArtists(limit: number): Observable<TopArtists[]> {
    let url = `${this.urlBase}?method=tag.gettopartists&tag=disc&api_key=${this.apiKey}&limit=${limit}&format=json`;
    return this.http.get<TopArtists[]>(url).pipe(map((res: any) => {
      return res.topartists.artist;
    }));
  }

  getTopAlbums(limit: number): Observable<any> {
    let url = `${this.urlBase}?method=artist.gettopalbums&artist=cher&api_key=${this.apiKey}&limit=${limit}&format=json`;
    return this.http.get(url).pipe(
      map((res: any) => {
        return res.topalbums.album;
      })
    )
  }

  getAlbum(album: string): Observable<any> {
    let url = `${this.urlBase}?method=album.search&album=${album}&api_key=${this.apiKey}&format=json`;
    return this.http.get(url).pipe(
      map((res: any) => {
        return res.results.albummatches.album;
      })
    )
  }

  getArtist(artist: string): Observable<any> {
    let url = `${this.urlBase}?method=artist.search&artist=${artist}&api_key=${this.apiKey}&format=json`;
    return this.http.get(url).pipe(
      map((res: any) => {
        return res.results.artistmatches.artist;
      })
    )
  }
}

