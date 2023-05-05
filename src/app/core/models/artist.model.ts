export interface Artist {
  name: string;
  streamable: string;
  url: string;
  mbid: string;
  listeners: string;
  image: Image[];
}

interface Image {
  '#text': string
  size: 'samll' | 'medium' | 'large' | 'extralarge'
}
