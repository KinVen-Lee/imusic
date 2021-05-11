export interface BMusic {
	bitrate: number;
	sr: number;
	volumeDelta: number;
	dfsId: number;
	playTime: number;
	name?: any;
	id: number;
	size: number;
	extension: string;
}

export interface Artist {
	img1v1Id: number;
	topicPerson: number;
	briefDesc: string;
	followed: boolean;
	alias: any[];
	trans: string;
	albumSize: number;
	img1v1Url: string;
	picUrl: string;
	picId: number;
	musicSize: number;
	name: string;
	id: number;
	img1v1Id_str: string;
}

export interface MMusic {
	bitrate: number;
	sr: number;
	volumeDelta: number;
	dfsId: number;
	playTime: number;
	name?: any;
	id: number;
	size: number;
	extension: string;
}

export interface LMusic {
	bitrate: number;
	sr: number;
	volumeDelta: number;
	dfsId: number;
	playTime: number;
	name?: any;
	id: number;
	size: number;
	extension: string;
}

export interface HMusic {
	bitrate: number;
	sr: number;
	volumeDelta: number;
	dfsId: number;
	playTime: number;
	name?: any;
	id: number;
	size: number;
	extension: string;
}

export interface Artist {
	img1v1Id: number;
	topicPerson: number;
	briefDesc: string;
	followed: boolean;
	alias: any[];
	trans: string;
	albumSize: number;
	img1v1Url: string;
	picUrl: string;
	picId: number;
	musicSize: number;
	name: string;
	id: number;
	img1v1Id_str: string;
}

export interface Artist {
	img1v1Id: number;
	topicPerson: number;
	briefDesc: string;
	followed: boolean;
	alias: any[];
	trans: string;
	albumSize: number;
	img1v1Url: string;
	picUrl: string;
	picId: number;
	musicSize: number;
	name: string;
	id: number;
	img1v1Id_str: string;
}

export interface Album {
	songs: any[];
	paid: boolean;
	onSale: boolean;
	description: string;
	briefDesc: string;
	blurPicUrl: string;
	companyId: number;
	pic: number;
	tags: string;
	status: number;
	alias: any[];
	artists: Artist[];
	copyrightId: number;
	subType: string;
	publishTime: number;
	picUrl: string;
	company: string;
	picId: number;
	artist: Artist;
	commentThreadId: string;
	name: string;
	id: number;
	type: string;
	size: number;
	picId_str: string;
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
}

export interface Data {
	starred: boolean;
	popularity: number;
	starredNum: number;
	playedNum: number;
	dayPlays: number;
	hearTime: number;
	mp3Url: string;
	rtUrls?: any;
	audition?: any;
	ringtone: string;
	disc: string;
	no: number;
	crbt?: any;
	bMusic: BMusic;
	rtUrl?: any;
	status: number;
	alias: any[];
	artists: Artist[];
	score: number;
	copyrightId: number;
	position: number;
	duration: number;
	mMusic: MMusic;
	lMusic: LMusic;
	copyFrom: string;
	hMusic: HMusic;
	mvid: number;
	ftype: number;
	rtype: number;
	rurl?: any;
	album: Album;
	fee: number;
	commentThreadId: string;
	name: string;
	id: number;
	exclusive: boolean;
	privilege: Privilege;
}

export interface RootObject {
	data: Data[];
}