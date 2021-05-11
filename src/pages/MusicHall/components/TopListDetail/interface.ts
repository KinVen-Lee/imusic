export interface Track {
	first: string;
	second: string;
}

export interface List {
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
	cloudTrackCount: number;
	subscribedCount: number;
	userId: number;
	createTime: number;
	highQuality: boolean;
	coverImgId: number;
	newImported: boolean;
	anonimous: boolean;
	updateTime: number;
	trackCount: number;
	coverImgUrl: string;
	specialType: number;
	trackUpdateTime: number;
	trackNumberUpdateTime: number;
	commentThreadId: string;
	totalDuration: number;
	privacy: number;
	playCount: number;
	adType: number;
	description: string;
	ordered: boolean;
	status: number;
	tags: any[];
	name: string;
	id: number;
	coverImgId_str: string;
	toplistType: string;
}

export interface RootObject {
	list: List[];
}