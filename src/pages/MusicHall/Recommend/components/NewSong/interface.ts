// Generated by https://quicktype.io

export interface NewSongResult {
  code: number;
  category: number;
  result: NewSong[];
}

export interface NewSong {
  id: number;
  type: number;
  name: string;
  copywriter: null;
  picUrl: string;
  canDislike: boolean;
  trackNumberUpdateTime: null;
  song: Song;
  alg: Alg;
}

export enum Alg {
  HotServer = "hot_server",
}

export interface Song {
  name: string;
  id: number;
  position: number;
  alias: string[];
  status: number;
  fee: number;
  copyrightId: number;
  disc: string;
  no: number;
  artists: Artist[];
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
  crbt: null;
  audition: null;
  copyFrom: string;
  commentThreadId: string;
  rtUrl: null;
  ftype: number;
  rtUrls: any[];
  copyright: number;
  transName: null;
  sign: null;
  mark: number;
  originCoverType: number;
  originSongSimpleData: null;
  single: number;
  noCopyrightRcmd: null;
  rtype: number;
  rurl: null;
  mvid: number;
  bMusic: Music;
  mp3Url: null;
  hMusic: Music;
  mMusic: Music;
  lMusic: Music;
  exclusive: boolean;
  privilege: Privilege;
}

export interface Album {
  name: string;
  id: number;
  type: Type;
  size: number;
  picId: number;
  blurPicUrl: string;
  companyId: number;
  pic: number;
  picUrl: string;
  publishTime: number;
  description: string;
  tags: string;
  company: string;
  briefDesc: string;
  artist: Artist;
  songs: any[];
  alias: string[];
  status: number;
  copyrightId: number;
  commentThreadId: string;
  artists: Artist[];
  subType: SubType;
  transName: null;
  onSale: boolean;
  mark: number;
  picId_str: string;
}

export interface Artist {
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

export enum SubType {
  Empty = "",
  录音室版 = "录音室版",
  现场版 = "现场版",
}

export enum Type {
  Ep = "EP",
  Single = "Single",
  合集 = "合集",
}

export interface Music {
  name: null;
  id: number;
  size: number;
  extension: Extension;
  sr: number;
  dfsId: number;
  bitrate: number;
  playTime: number;
  volumeDelta: number;
}

export enum Extension {
  Mp3 = "mp3",
}

export interface Privilege {
  id: number;
  fee: number;
  payed: number;
  st: number;
  pl: number;
  dl: number;
  sp: number;
  cp: number;
  subp: number;
  cs: boolean;
  maxbr: number;
  fl: number;
  toast: boolean;
  flag: number;
  preSell: boolean;
  playMaxbr: number;
  downloadMaxbr: number;
  freeTrialPrivilege: FreeTrialPrivilege;
  chargeInfoList: ChargeInfoList[];
}

export interface ChargeInfoList {
  rate: number;
  chargeUrl: null;
  chargeMessage: null;
  chargeType: number;
}

export interface FreeTrialPrivilege {
  resConsumable: boolean;
  userConsumable: boolean;
}
