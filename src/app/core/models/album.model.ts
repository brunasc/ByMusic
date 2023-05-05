export interface Album {
  artist: string;
  image: Image[];
  mbid: string;
  name: string;
  streamable: string;
  url: string;
}

interface Image {
  '#text': string
  size: 'samll' | 'medium' | 'large' | 'extralarge'
}
