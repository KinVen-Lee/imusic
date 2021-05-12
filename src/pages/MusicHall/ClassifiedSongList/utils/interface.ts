/*
 * @Author: KinVen
 * @Date: 2021-05-12 01:57:05
 * @LastEditors: KinVen
 * @LastEditTime: 2021-05-12 23:38:39
 * @Description:
 * @Version: 1.0
 */
export interface ClassifiedSongListResult {
  code: number;
  all: All;
  sub: All[];
  categories: Categories;
}

export interface Categories {
  "0": string;
  "1": string;
  "2": string;
  "3": string;
  "4": string;
}

export interface All {
  name: string;
  resourceCount: number;
  imgId: number;
  imgUrl?: any;
  type: number;
  category: number;
  resourceType: number;
  hot: boolean;
  activity: boolean;
}

export interface TopListResult {
  playlists: Playlist[];
  total: number;
  code: number;
  more: boolean;
  cat: string;
}

export interface Playlist {
  name: string;
  id: number;
  trackNumberUpdateTime: number;
  status: number;
  userId: number;
  createTime: number;
  updateTime: number;
  subscribedCount: number;
  trackCount: number;
  cloudTrackCount: number;
  coverImgUrl: string;
  coverImgId: number;
  description?: string;
  tags: string[];
  playCount: number;
  trackUpdateTime: number;
  specialType: number;
  totalDuration: number;
  creator: Creator;
  tracks?: any;
  subscribers: (Subscriber | Subscribers2)[];
  subscribed: boolean;
  commentThreadId: string;
  newImported: boolean;
  adType: number;
  highQuality: boolean;
  privacy: number;
  ordered: boolean;
  anonimous: boolean;
  coverStatus: number;
  recommendInfo?: any;
  shareCount: number;
  commentCount: number;
}

export interface Subscribers2 {
  defaultAvatar: boolean;
  province: number;
  authStatus: number;
  followed: boolean;
  avatarUrl: string;
  accountStatus: number;
  gender: number;
  city: number;
  birthday: number;
  userId: number;
  userType: number;
  nickname: string;
  signature: string;
  description: string;
  detailDescription: string;
  avatarImgId: number;
  backgroundImgId: number;
  backgroundUrl: string;
  authority: number;
  mutual: boolean;
  expertTags?: any;
  experts?: any;
  djStatus: number;
  vipType: number;
  remarkName?: any;
  authenticationTypes: number;
  avatarDetail?: any;
  avatarImgIdStr: string;
  backgroundImgIdStr: string;
  anchor: boolean;
  avatarImgId_str: string;
}

export interface Subscriber {
  defaultAvatar: boolean;
  province: number;
  authStatus: number;
  followed: boolean;
  avatarUrl: string;
  accountStatus: number;
  gender: number;
  city: number;
  birthday: number;
  userId: number;
  userType: number;
  nickname: string;
  signature: string;
  description: string;
  detailDescription: string;
  avatarImgId: number;
  backgroundImgId: number;
  backgroundUrl: string;
  authority: number;
  mutual: boolean;
  expertTags?: any;
  experts?: any;
  djStatus: number;
  vipType: number;
  remarkName?: any;
  authenticationTypes: number;
  avatarDetail?: any;
  avatarImgIdStr: string;
  backgroundImgIdStr: string;
  anchor: boolean;
}

export interface Creator {
  defaultAvatar: boolean;
  province: number;
  authStatus: number;
  followed: boolean;
  avatarUrl: string;
  accountStatus: number;
  gender: number;
  city: number;
  birthday: number;
  userId: number;
  userType: number;
  nickname: string;
  signature: string;
  description: string;
  detailDescription: string;
  avatarImgId: number;
  backgroundImgId: number;
  backgroundUrl: string;
  authority: number;
  mutual: boolean;
  expertTags?: any;
  experts?: any;
  djStatus: number;
  vipType: number;
  remarkName?: any;
  authenticationTypes: number;
  avatarDetail?: any;
  avatarImgIdStr: string;
  backgroundImgIdStr: string;
  anchor: boolean;
  avatarImgId_str?: string;
}
