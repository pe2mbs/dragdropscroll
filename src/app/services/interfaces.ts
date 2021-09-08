export interface ILabel {
    Key: number;
    Value: string;
}

export interface ILicensor {
    Key: number;
    Value: string;
}

export interface IURL {
    AspectRatio: string;
    BandWidth: number;
    ServerLoad: number;
    StreamType: string;
    URL?: any;
}

export interface IMediaProduct {
    Costs: string;
    Id: number;
    LicensePeriod: number;
    TypeId: number;
    URLS: URL[];
}

export interface IMovieField {
    Key: string;
    Value: string;
}

export interface IMetaData {
    Actors: any[];
    AnimatedGif: string;
    AvailableWebApp: boolean;
    Categories: any[];
    Category: string;
    ContentType: string;
    Description: string;
    Directors: any[];
    EndPubDate: Date;
    FromPrice: number;
    GroupLevel: number;
    HasPromo: boolean;
    IMDB: string;
    Id: number;
    Labels: ILabel[];
    LargeArtwork: string;
    LargeBackCover: string;
    LargeFrontCover: string;
    LargeVisual: string;
    Licensors: ILicensor[];
    MediaProducts: IMediaProduct[];
    MediumFrontCover: string;
    MovieFields: IMovieField[];
    PopularityIndex: number;
    PromoProductId: number;
    PromoProductTypeId: number;
    PubDate: Date;
    ReplayAvailable: boolean;
    RestartAvailable: boolean;
    Screenshots: string[];
    SeasonCount: number;
    ShowTVGuideOTT: boolean;
    SmallArtwork: string;
    SmallFrontCover: string;
    Smartlists: any[];
    Title: string;
    TopRated: number;
    UserRating: string;
    WatchAheadAvailable: boolean;
}

export class xMetaData {
  Actors: any[] = [];
  AnimatedGif: string = '';
  AvailableWebApp: boolean = false;
  Categories: any[] = [];
  Category: string = '';
  ContentType: string = '';
  Description: string = '';
  Directors: any[] = [];
  EndPubDate: string = '';
  FromPrice: number = 0;
  GroupLevel: number = 0;
  HasPromo: boolean = false;
  IMDB: string = '';
  Id: number = 0;
  Labels: ILabel[] = [];
  LargeArtwork: string = '';
  LargeBackCover: string = '';
  LargeFrontCover: string = '';
  LargeVisual: string = '';
  Licensors: ILicensor[] = [];
  MediaProducts: IMediaProduct[] = [];
  MediumFrontCover: string = '';
  MovieFields: IMovieField[] = [];
  PopularityIndex: number = 0;
  PromoProductId: number = 0;
  PromoProductTypeId: number = 0;
  PubDate: string = '';
  ReplayAvailable: boolean = false;
  RestartAvailable: boolean = false;
  Screenshots: string = '';
  SeasonCount: number = 0;
  ShowTVGuideOTT: boolean = false;
  SmallArtwork: string = '';
  SmallFrontCover: string = '';
  Smartlists: any[] = [];
  Title: string = '';
  TopRated: number = 0;
  UserRating: string = '';
  WatchAheadAvailable: boolean = false;
}



export interface IGidsObject {
    MetaData: IMetaData[];
    PerformanceCost: number;
    ResultMessage: string;
    ServerTime: Date;
    SessionId: string;
    Success: boolean;
}

