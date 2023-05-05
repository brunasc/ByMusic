
export interface TopAlbums {
  topalbums: {
    '@attr': Attr;
    album: Album[];
  }
}

export interface Album {
  artist: Artist,
  image: Image[],
  mbid: string,
  name: string,
  playcount: number,
  url: string
}

interface Artist {
  mbid: string,
  name: string,
  url: string
}

interface Image {
  '#text': string,
  size: 'samll' | 'medium' | 'large' | 'extralarge'
}

interface Attr {
  artist: string;
  page: string;
  perPage: string;
  totalPages: string;
  total: string;
}