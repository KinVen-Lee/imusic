export interface TopListResult {
  code: number;
  list: TopListItem[];
  artistToplist: ArtistToplist;
  rewardToplist: RewardToplist;
}

interface RewardToplist {
  coverUrl: string;
  songs: Song[];
  name: string;
  position: number;
}

export interface Song {
  name: string;
  id: number;
  position: number;
  alias: any[];
  status: number;
  fee: number;
  copyrightId: number;
  disc: string;
  no: number;
  artists: Artist2[];
  album: Album;
  starred: boolean;
  popularity: number;
  score: number;
  starredNum: number;
  duration: number;
  playedNum: number;
  dayPlays: number;
  hearTime: number;
  ringtone: string;
  crbt?: any;
  audition?: any;
  copyFrom: string;
  commentThreadId: string;
  rtUrl?: any;
  ftype: number;
  rtUrls: any[];
  copyright: number;
  transName?: any;
  sign?: any;
  mark: number;
  originCoverType: number;
  originSongSimpleData?: any;
  single: number;
  noCopyrightRcmd?: any;
  rtype: number;
  rurl?: any;
  mvid: number;
  bMusic: BMusic;
  mp3Url?: any;
  hMusic: BMusic;
  mMusic: BMusic;
  lMusic: BMusic;
}

interface BMusic {
  name?: any;
  id: number;
  size: number;
  extension: string;
  sr: number;
  dfsId: number;
  bitrate: number;
  playTime: number;
  volumeDelta: number;
}

interface Album {
  name: string;
  id: number;
  type: string;
  size: number;
  picId: number;
  blurPicUrl: string;
  companyId: number;
  pic: number;
  picUrl: string;
  publishTime: number;
  description: string;
  tags: string;
  company?: string;
  briefDesc: string;
  artist: Artist2;
  songs: any[];
  alias: any[];
  status: number;
  copyrightId: number;
  commentThreadId: string;
  artists: Artist2[];
  subType: string;
  transName?: any;
  onSale: boolean;
  mark: number;
  picId_str: string;
}

interface Artist2 {
  name: string;
  id: number;
  picId: number;
  img1v1Id: number;
  briefDesc: string;
  picUrl: string;
  img1v1Url: string;
  albumSize: number;
  alias: any[];
  trans: string;
  musicSize: number;
  topicPerson: number;
}

interface ArtistToplist {
  coverUrl: string;
  artists: Artist[];
  name: string;
  upateFrequency: string;
  position: number;
  updateFrequency: string;
}

interface Artist {
  first: string;
  second: string;
  third: number;
}

export interface TopListItem {
  subscribers: any[];
  subscribed?: any;
  creator?: any;
  artists?: any;
  tracks: Track[];
  updateFrequency: string;
  backgroundCoverId: number;
  backgroundCoverUrl?: any;
  titleImage: number;
  titleImageUrl?: any;
  englishTitle?: any;
  opRecommend: boolean;
  recommendInfo?: any;
  adType: number;
  trackNumberUpdateTime: number;
  userId: number;
  cloudTrackCount: number;
  subscribedCount: number;
  createTime: number;
  highQuality: boolean;
  updateTime: number;
  coverImgId: number;
  newImported: boolean;
  anonimous: boolean;
  totalDuration: number;
  trackCount: number;
  coverImgUrl: string;
  specialType: number;
  commentThreadId: string;
  trackUpdateTime: number;
  privacy: number;
  playCount: number;
  tags: any[];
  description: string;
  ordered: boolean;
  status: number;
  name: string;
  id: number;
  coverImgId_str: string;
  ToplistType: string;
}

export interface Track {
  first: string;
  second: string;
}
