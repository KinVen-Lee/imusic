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

export interface Album {
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
	company: string;
	briefDesc: string;
	artist: Artist;
	songs: any[];
	alias: any[];
	status: number;
	copyrightId: number;
	commentThreadId: string;
	artists: Artist[];
	subType: string;
	transName?: any;
	onSale: boolean;
	mark: number;
	picId_str: string;
}

export interface HMusic {
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

export interface MMusic {
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

export interface LMusic {
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

export interface BMusic {
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

export interface FreeTrialPrivilege {
	resConsumable: boolean;
	userConsumable: boolean;
}

export interface ChargeInfoList {
	rate: number;
	chargeUrl?: any;
	chargeMessage?: any;
	chargeType: number;
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
	hMusic: HMusic;
	mMusic: MMusic;
	lMusic: LMusic;
	bMusic: BMusic;
	mvid: number;
	rtype: number;
	rurl?: any;
	mp3Url?: any;
	exclusive: boolean;
	privilege: Privilege;
}

export interface Result {
	id: number;
	type: number;
	name: string;
	copywriter?: any;
	picUrl: string;
	canDislike: boolean;
	trackNumberUpdateTime?: any;
	song: Song;
	alg: string;
}

export interface RootObject {
	result: Result[];
}