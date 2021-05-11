export interface Mv {
  id: number;
  type: number;
  name: string;
  copywriter: string;
  picUrl: string;
  canDislike: boolean;
  trackNumberUpdateTime: null;
  duration: number;
  playCount: number;
  subed: boolean;
  artists: Artist[];
  artistName: string;
  artistId: number;
  alg: string;
}

export interface Artist {
  id: number;
  name: string;
}
