export interface TopArtists {
  topartists: {
    '@attr': Attr;
    artist: Artist[];
  }
  
}

export interface Artist {
  name: string;
  url: string;
  streamable: string;
  image: Image[];
  '@attr': {
    rank: string;
  };
}

export interface Image {
  '#text': string;
  size: 'samll' | 'medium' | 'large' | 'extralarge'
}

interface Attr {
  tag: string;
  page: string;
  perPage: string;
  totalPages: string;
  total: string;
}
