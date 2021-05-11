/*
 * @Author: KinVen
 * @Date: 2021-05-12 01:57:05
 * @LastEditors: KinVen
 * @LastEditTime: 2021-05-12 02:00:13
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
