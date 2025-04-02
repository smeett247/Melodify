export interface Song {
  id: string;
  title: string;
  artist: string;
  album: string;
  duration: string;
  coverUrl: string;
}

export interface PlaylistType {
  id: string;
  name: string;
  songs: Song[];
}