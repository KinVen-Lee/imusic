/*
 * @Author: KinVen
 * @Date: 2021-05-13 02:19:26
 * @LastEditors: KinVen
 * @LastEditTime: 2021-05-14 01:36:40
 * @Description:
 * @Version: 1.0
 */
export interface SingerDetailResult {
  code: number;
  message: string;
  data: Data;
}

interface Data {
  videoCount: number;
  artist: Artist;
  blacklist: boolean;
  showPriMsg: boolean;
}

export interface Artist {
  id: number;
  cover: string;
  name: string;
  transNames: any[];
  identities: string[];
  identifyTag?: any;
  briefDesc: string;
  rank: Rank;
  albumSize: number;
  musicSize: number;
  mvSize: number;
}

interface Rank {
  rank: number;
  type: number;
}
