import { gql } from 'apollo-angular';
import { Injectable } from '@angular/core';
import * as Apollo from 'apollo-angular';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};



export type Query = {
  __typename?: 'Query';
  Info?: Maybe<InfoQryOps>;
  User?: Maybe<UserQryOps>;
  PublicUser?: Maybe<PublicUserQryOps>;
  Listing?: Maybe<ListingQryOps>;
  Search?: Maybe<SearchQryOps>;
  Web?: Maybe<WebQryOps>;
  News?: Maybe<NewsQryOps>;
  Rating?: Maybe<RatingQryOps>;
  Offices?: Maybe<OfficesQryOps>;
  LegalConsultation?: Maybe<LegalConsultationQryOps>;
  HomePlans?: Maybe<HomePlansOpenQryOps>;
  HomeFinancing?: Maybe<HomeFinancingQryOps>;
  ThreeDimensionalDesigns?: Maybe<ThreeDimensionalOpenQryOps>;
};

export type InfoQryOps = {
  __typename?: 'InfoQryOps';
  appVersion?: Maybe<AppVersion>;
  getUpdates?: Maybe<Updates>;
  agreement?: Maybe<Array<Maybe<Agreement>>>;
  specialMarketing?: Maybe<Scalars['String']>;
  listingTerms?: Maybe<Scalars['String']>;
  subscriptionTerms?: Maybe<Scalars['String']>;
  virtualToursCities?: Maybe<Array<Maybe<Scalars['Int']>>>;
  professionalPhotographyCities?: Maybe<Array<Maybe<Scalars['Int']>>>;
  configuration?: Maybe<Scalars['String']>;
  configurations?: Maybe<AppConfigurations>;
  stc_configurations?: Maybe<StcConfigurations>;
};


export type InfoQryOpsAppVersionArgs = {
  type: AppType;
};


export type InfoQryOpsStc_ConfigurationsArgs = {
  lang?: Maybe<Langs>;
};

export enum AppType {
  Iphone = 'iphone',
  Android = 'android'
}

export type AppVersion = {
  __typename?: 'AppVersion';
  version?: Maybe<Scalars['String']>;
  required?: Maybe<Scalars['Boolean']>;
  last_update_time?: Maybe<Scalars['Float']>;
};

export type Updates = {
  __typename?: 'Updates';
  list?: Maybe<Array<Maybe<Update>>>;
  last_update_time?: Maybe<Scalars['Float']>;
};

export type Update = {
  __typename?: 'Update';
  update_id?: Maybe<Scalars['Int']>;
  content?: Maybe<Scalars['String']>;
  excerpt?: Maybe<Scalars['String']>;
  img?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  create_time?: Maybe<Scalars['Float']>;
};

export type Agreement = {
  __typename?: 'Agreement';
  title?: Maybe<Scalars['String']>;
  content?: Maybe<Scalars['String']>;
};

export type AppConfigurations = {
  __typename?: 'AppConfigurations';
  show_bab_filters?: Maybe<Scalars['Boolean']>;
  promote_engineering_requests?: Maybe<Scalars['Boolean']>;
};

export enum Langs {
  Ar = 'ar',
  En = 'en'
}

export type StcConfigurations = {
  __typename?: 'StcConfigurations';
  header_text?: Maybe<Scalars['String']>;
  services?: Maybe<Array<Maybe<StcService>>>;
  banners?: Maybe<Array<Maybe<StcBanner>>>;
};

export type StcService = {
  __typename?: 'StcService';
  icon?: Maybe<Scalars['String']>;
  text?: Maybe<Scalars['String']>;
  link?: Maybe<Scalars['String']>;
};

export type StcBanner = {
  __typename?: 'StcBanner';
  img?: Maybe<Scalars['String']>;
  link?: Maybe<Scalars['String']>;
};

export type UserQryOps = {
  __typename?: 'UserQryOps';
  get?: Maybe<User>;
  relative?: Maybe<RelativeUser>;
  _get?: Maybe<RelativeUser>;
  reviews?: Maybe<UserReviews>;
  isRegisteredToken?: Maybe<Scalars['Boolean']>;
  getPhones?: Maybe<Array<Maybe<Scalars['String']>>>;
};


export type UserQryOpsGetArgs = {
  user_id?: Maybe<Scalars['Int']>;
  phone?: Maybe<Scalars['String']>;
};


export type UserQryOpsRelativeArgs = {
  user_id?: Maybe<Scalars['Int']>;
  phone?: Maybe<Scalars['String']>;
  current_user_id?: Maybe<Scalars['Int']>;
};


export type UserQryOps_GetArgs = {
  user_id?: Maybe<Scalars['Int']>;
  phone?: Maybe<Scalars['String']>;
  current_user_id?: Maybe<Scalars['Int']>;
};


export type UserQryOpsReviewsArgs = {
  user_id: Scalars['Int'];
  offset?: Maybe<Scalars['Int']>;
};


export type UserQryOpsIsRegisteredTokenArgs = {
  type: AppType;
  device_id: Scalars['String'];
};


export type UserQryOpsGetPhonesArgs = {
  user_id: Scalars['Int'];
};

export type User = {
  __typename?: 'User';
  user_id?: Maybe<Scalars['Int']>;
  phone?: Maybe<Scalars['Float']>;
  name?: Maybe<Scalars['String']>;
  img?: Maybe<Scalars['String']>;
  about?: Maybe<Scalars['String']>;
  create_time?: Maybe<Scalars['Int']>;
  verified?: Maybe<Scalars['Int']>;
  status?: Maybe<Scalars['Int']>;
  ability?: Maybe<Scalars['Int']>;
  type?: Maybe<Scalars['Int']>;
  paid?: Maybe<Scalars['Int']>;
  fee?: Maybe<Scalars['Int']>;
  role?: Maybe<Scalars['Int']>;
  ae?: Maybe<Scalars['Int']>;
  pe?: Maybe<Scalars['Int']>;
  le?: Maybe<Scalars['Int']>;
  ue?: Maybe<Scalars['Int']>;
  user_type?: Maybe<Scalars['Int']>;
  favs?: Maybe<Scalars['Int']>;
  review?: Maybe<Scalars['Float']>;
  manager_id?: Maybe<Scalars['Int']>;
  manager_paid?: Maybe<Scalars['Int']>;
  listings?: Maybe<Scalars['Int']>;
  crm?: Maybe<Scalars['Boolean']>;
  last_seen?: Maybe<Scalars['Float']>;
  can_boost?: Maybe<Scalars['Boolean']>;
  enable_video?: Maybe<Scalars['Int']>;
  iam_verified?: Maybe<Scalars['Boolean']>;
};

export type RelativeUser = {
  __typename?: 'RelativeUser';
  user_id?: Maybe<Scalars['Int']>;
  phone?: Maybe<Scalars['Float']>;
  name?: Maybe<Scalars['String']>;
  img?: Maybe<Scalars['String']>;
  about?: Maybe<Scalars['String']>;
  create_time?: Maybe<Scalars['Int']>;
  verified?: Maybe<Scalars['Int']>;
  status?: Maybe<Scalars['Int']>;
  ability?: Maybe<Scalars['Int']>;
  type?: Maybe<Scalars['Int']>;
  paid?: Maybe<Scalars['Int']>;
  fee?: Maybe<Scalars['Int']>;
  role?: Maybe<Scalars['Int']>;
  ae?: Maybe<Scalars['Int']>;
  pe?: Maybe<Scalars['Int']>;
  le?: Maybe<Scalars['Int']>;
  ue?: Maybe<Scalars['Int']>;
  user_type?: Maybe<Scalars['Int']>;
  favs?: Maybe<Scalars['Int']>;
  review?: Maybe<Scalars['Float']>;
  manager_id?: Maybe<Scalars['Int']>;
  manager_paid?: Maybe<Scalars['Int']>;
  listings?: Maybe<Scalars['Int']>;
  blocked?: Maybe<Scalars['Boolean']>;
  followed?: Maybe<Scalars['Boolean']>;
  last_seen?: Maybe<Scalars['Float']>;
};

export type UserReviews = {
  __typename?: 'UserReviews';
  reviews?: Maybe<Array<Maybe<Review>>>;
  total?: Maybe<Scalars['Int']>;
};

export type Review = {
  __typename?: 'Review';
  review_id?: Maybe<Scalars['Int']>;
  reviewer_id?: Maybe<Scalars['Int']>;
  content?: Maybe<Scalars['String']>;
  value?: Maybe<Scalars['Int']>;
  create_time?: Maybe<Scalars['Float']>;
  reason?: Maybe<Scalars['String']>;
  last_update?: Maybe<Scalars['Float']>;
};

export type PublicUserQryOps = {
  __typename?: 'PublicUserQryOps';
  get?: Maybe<PublicUserData>;
};


export type PublicUserQryOpsGetArgs = {
  user_id: Scalars['Int'];
};

export type PublicUserData = {
  __typename?: 'PublicUserData';
  user_id?: Maybe<Scalars['Int']>;
  status?: Maybe<Scalars['Int']>;
};

export type ListingQryOps = {
  __typename?: 'ListingQryOps';
  get?: Maybe<Listing>;
  relative?: Maybe<RelativeListing>;
  _get?: Maybe<RelativeListing>;
  views?: Maybe<Scalars['Int']>;
  getExtraInfo: ListingExtraInfo;
  bookings?: Maybe<Array<Maybe<Scalars['String']>>>;
  getAwqafReviewed?: Maybe<PListings>;
  getListingByOwnerOtp?: Maybe<Listing>;
  getVerifyListingByOwnerOtp?: Maybe<Listing>;
};


export type ListingQryOpsGetArgs = {
  id?: Maybe<Scalars['Int']>;
  uri?: Maybe<Scalars['String']>;
};


export type ListingQryOpsRelativeArgs = {
  id: Scalars['Int'];
  current_user_id?: Maybe<Scalars['Int']>;
};


export type ListingQryOps_GetArgs = {
  id: Scalars['Int'];
  current_user_id?: Maybe<Scalars['Int']>;
};


export type ListingQryOpsViewsArgs = {
  id: Scalars['Int'];
};


export type ListingQryOpsGetExtraInfoArgs = {
  id: Scalars['Int'];
};


export type ListingQryOpsBookingsArgs = {
  id: Scalars['Int'];
};


export type ListingQryOpsGetAwqafReviewedArgs = {
  polygon?: Maybe<Array<LocationInput>>;
  where?: Maybe<AwqafListingFilter>;
};


export type ListingQryOpsGetListingByOwnerOtpArgs = {
  owner_otp: Scalars['String'];
};


export type ListingQryOpsGetVerifyListingByOwnerOtpArgs = {
  owner_otp: Scalars['String'];
};

export type Listing = {
  __typename?: 'Listing';
  id?: Maybe<Scalars['Int']>;
  create_time?: Maybe<Scalars['Float']>;
  last_update?: Maybe<Scalars['Float']>;
  refresh?: Maybe<Scalars['Float']>;
  category?: Maybe<Scalars['Int']>;
  has_img?: Maybe<Scalars['Int']>;
  special?: Maybe<Scalars['Int']>;
  imgs?: Maybe<Array<Maybe<Scalars['String']>>>;
  imgs_desc?: Maybe<Array<Maybe<Scalars['String']>>>;
  status?: Maybe<Scalars['Int']>;
  support_imgs?: Maybe<Array<Maybe<Scalars['String']>>>;
  support_imgs_desc?: Maybe<Array<Maybe<Scalars['String']>>>;
  premium?: Maybe<Scalars['Int']>;
  price?: Maybe<Scalars['Float']>;
  wc?: Maybe<Scalars['Int']>;
  meter_price?: Maybe<Scalars['Float']>;
  age?: Maybe<Scalars['Int']>;
  area?: Maybe<Scalars['Float']>;
  fl?: Maybe<Scalars['Int']>;
  rent_period?: Maybe<Scalars['Int']>;
  beds?: Maybe<Scalars['Int']>;
  ketchen?: Maybe<Scalars['Int']>;
  livings?: Maybe<Scalars['Int']>;
  men_place?: Maybe<Scalars['Int']>;
  women_place?: Maybe<Scalars['Int']>;
  apts?: Maybe<Scalars['Int']>;
  stores?: Maybe<Scalars['Int']>;
  duplex?: Maybe<Scalars['Int']>;
  furnished?: Maybe<Scalars['Int']>;
  driver?: Maybe<Scalars['Int']>;
  maid?: Maybe<Scalars['Int']>;
  basement?: Maybe<Scalars['Int']>;
  lift?: Maybe<Scalars['Int']>;
  pool?: Maybe<Scalars['Int']>;
  stairs?: Maybe<Scalars['Int']>;
  fb?: Maybe<Scalars['Int']>;
  vb?: Maybe<Scalars['Int']>;
  tent?: Maybe<Scalars['Int']>;
  rooms?: Maybe<Scalars['Int']>;
  wells?: Maybe<Scalars['Int']>;
  trees?: Maybe<Scalars['Int']>;
  backyard?: Maybe<Scalars['Int']>;
  playground?: Maybe<Scalars['Int']>;
  family?: Maybe<Scalars['Int']>;
  family_section?: Maybe<Scalars['Int']>;
  street_direction?: Maybe<Scalars['Int']>;
  street_width?: Maybe<Scalars['Int']>;
  type?: Maybe<Scalars['Int']>;
  car_entrance?: Maybe<Scalars['Int']>;
  ac?: Maybe<Scalars['Int']>;
  location?: Maybe<Location>;
  boosted?: Maybe<Scalars['Int']>;
  address?: Maybe<Scalars['String']>;
  content?: Maybe<Scalars['String']>;
  services?: Maybe<Array<Maybe<Service>>>;
  uri?: Maybe<Scalars['String']>;
  city_id?: Maybe<Scalars['Int']>;
  direction_id?: Maybe<Scalars['Int']>;
  district_id?: Maybe<Scalars['Int']>;
  province_id?: Maybe<Scalars['Int']>;
  views?: Maybe<Scalars['Int']>;
  user?: Maybe<ListingUser>;
  user_id?: Maybe<Scalars['Int']>;
  user_type?: Maybe<Scalars['Int']>;
  extra_unit?: Maybe<Scalars['Int']>;
  verified?: Maybe<Scalars['Int']>;
  has_video?: Maybe<Scalars['Int']>;
  videos?: Maybe<Array<Maybe<Video>>>;
  subscription?: Maybe<ListingSubscription>;
  employee?: Maybe<ListingEmployee>;
  employee_user_id?: Maybe<Scalars['Int']>;
  mgr_user_id?: Maybe<Scalars['Int']>;
  stc_coverage?: Maybe<StcCoverage>;
  deed_id?: Maybe<Scalars['String']>;
  owner_name?: Maybe<Scalars['String']>;
  owner_id?: Maybe<Scalars['String']>;
  owner_id_type?: Maybe<DeedIdTypes>;
  is_rent?: Maybe<Scalars['Boolean']>;
  capacity?: Maybe<Scalars['Int']>;
  awqaf_answers?: Maybe<Array<Maybe<AwqafQuestionAnswer>>>;
  phone_1?: Maybe<Scalars['Int']>;
  phone_2?: Maybe<Scalars['Int']>;
  assigned_to?: Maybe<Scalars['Int']>;
  approved?: Maybe<Scalars['Int']>;
  inspector_images?: Maybe<Array<Maybe<Scalars['String']>>>;
  building_no?: Maybe<Scalars['Int']>;
  unique_listing?: Maybe<Scalars['Int']>;
  advertiser_type?: Maybe<AdvertiserTypes>;
  structure?: Maybe<Scalars['Int']>;
  appraisal_id?: Maybe<Scalars['Int']>;
  appraisal?: Maybe<Appraisal>;
  virtual_tour_link?: Maybe<Scalars['String']>;
  accurate_location?: Maybe<Scalars['Boolean']>;
};

export type Location = {
  __typename?: 'Location';
  lat: Scalars['Float'];
  lng: Scalars['Float'];
};

export type Service = {
  __typename?: 'Service';
  location?: Maybe<Location>;
  name?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
};

export type ListingUser = {
  __typename?: 'ListingUser';
  phone?: Maybe<Scalars['Float']>;
  name?: Maybe<Scalars['String']>;
  img?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['Int']>;
  paid?: Maybe<Scalars['Int']>;
  fee?: Maybe<Scalars['Int']>;
  review?: Maybe<Scalars['Float']>;
  iam_verified?: Maybe<Scalars['Boolean']>;
};

export type Video = {
  __typename?: 'Video';
  video: Scalars['String'];
  thumbnail?: Maybe<Scalars['String']>;
  orientation?: Maybe<Orientation>;
};

export enum Orientation {
  Landscape = 'landscape',
  Portrait = 'portrait'
}

export type ListingSubscription = {
  __typename?: 'ListingSubscription';
  phones?: Maybe<Array<Maybe<Scalars['Float']>>>;
  about?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  img?: Maybe<Scalars['String']>;
};

export type ListingEmployee = {
  __typename?: 'ListingEmployee';
  phone?: Maybe<Scalars['Float']>;
  name?: Maybe<Scalars['String']>;
  img?: Maybe<Scalars['String']>;
};

export type StcCoverage = {
  __typename?: 'StcCoverage';
  fifth_generation?: Maybe<Scalars['Boolean']>;
  fourth_generation?: Maybe<Scalars['Boolean']>;
  fiber?: Maybe<Scalars['Boolean']>;
};

export enum DeedIdTypes {
  Nid = 'nid',
  Iqama = 'iqama',
  Crno = 'crno'
}

export type AwqafQuestionAnswer = {
  __typename?: 'awqafQuestionAnswer';
  question?: Maybe<Scalars['String']>;
  answer?: Maybe<Scalars['String']>;
};

export enum AdvertiserTypes {
  Owner = 'owner',
  Agent = 'agent',
  ExclusiveMarketer = 'exclusive_marketer',
  NormalMarketer = 'normal_marketer'
}

export enum Appraisal {
  Bab = 'BAB'
}

export type RelativeListing = {
  __typename?: 'RelativeListing';
  id?: Maybe<Scalars['Int']>;
  create_time?: Maybe<Scalars['Float']>;
  last_update?: Maybe<Scalars['Float']>;
  refresh?: Maybe<Scalars['Float']>;
  category?: Maybe<Scalars['Int']>;
  has_img?: Maybe<Scalars['Int']>;
  special?: Maybe<Scalars['Int']>;
  imgs?: Maybe<Array<Maybe<Scalars['String']>>>;
  imgs_desc?: Maybe<Array<Maybe<Scalars['String']>>>;
  status?: Maybe<Scalars['Int']>;
  support_imgs?: Maybe<Array<Maybe<Scalars['String']>>>;
  support_imgs_desc?: Maybe<Array<Maybe<Scalars['String']>>>;
  premium?: Maybe<Scalars['Int']>;
  price?: Maybe<Scalars['Float']>;
  wc?: Maybe<Scalars['Int']>;
  meter_price?: Maybe<Scalars['Float']>;
  age?: Maybe<Scalars['Int']>;
  area?: Maybe<Scalars['Float']>;
  fl?: Maybe<Scalars['Int']>;
  rent_period?: Maybe<Scalars['Int']>;
  beds?: Maybe<Scalars['Int']>;
  ketchen?: Maybe<Scalars['Int']>;
  livings?: Maybe<Scalars['Int']>;
  men_place?: Maybe<Scalars['Int']>;
  women_place?: Maybe<Scalars['Int']>;
  apts?: Maybe<Scalars['Int']>;
  stores?: Maybe<Scalars['Int']>;
  duplex?: Maybe<Scalars['Int']>;
  furnished?: Maybe<Scalars['Int']>;
  driver?: Maybe<Scalars['Int']>;
  maid?: Maybe<Scalars['Int']>;
  basement?: Maybe<Scalars['Int']>;
  lift?: Maybe<Scalars['Int']>;
  pool?: Maybe<Scalars['Int']>;
  stairs?: Maybe<Scalars['Int']>;
  fb?: Maybe<Scalars['Int']>;
  vb?: Maybe<Scalars['Int']>;
  tent?: Maybe<Scalars['Int']>;
  rooms?: Maybe<Scalars['Int']>;
  wells?: Maybe<Scalars['Int']>;
  trees?: Maybe<Scalars['Int']>;
  backyard?: Maybe<Scalars['Int']>;
  playground?: Maybe<Scalars['Int']>;
  family?: Maybe<Scalars['Int']>;
  family_section?: Maybe<Scalars['Int']>;
  street_direction?: Maybe<Scalars['Int']>;
  street_width?: Maybe<Scalars['Int']>;
  type?: Maybe<Scalars['Int']>;
  car_entrance?: Maybe<Scalars['Int']>;
  ac?: Maybe<Scalars['Int']>;
  location?: Maybe<Location>;
  boosted?: Maybe<Scalars['Int']>;
  address?: Maybe<Scalars['String']>;
  content?: Maybe<Scalars['String']>;
  services?: Maybe<Array<Maybe<Service>>>;
  uri?: Maybe<Scalars['String']>;
  city_id?: Maybe<Scalars['Int']>;
  direction_id?: Maybe<Scalars['Int']>;
  district_id?: Maybe<Scalars['Int']>;
  province_id?: Maybe<Scalars['Int']>;
  views?: Maybe<Scalars['Int']>;
  user?: Maybe<ListingUser>;
  user_id?: Maybe<Scalars['Int']>;
  user_type?: Maybe<Scalars['Int']>;
  extra_unit?: Maybe<Scalars['Int']>;
  verified?: Maybe<Scalars['Int']>;
  has_video?: Maybe<Scalars['Int']>;
  videos?: Maybe<Array<Maybe<Video>>>;
  subscription?: Maybe<ListingSubscription>;
  employee?: Maybe<ListingEmployee>;
  employee_user_id?: Maybe<Scalars['Int']>;
  mgr_user_id?: Maybe<Scalars['Int']>;
  stc_coverage?: Maybe<StcCoverage>;
  deed_id?: Maybe<Scalars['String']>;
  owner_name?: Maybe<Scalars['String']>;
  owner_id?: Maybe<Scalars['String']>;
  owner_id_type?: Maybe<DeedIdTypes>;
  is_rent?: Maybe<Scalars['Boolean']>;
  capacity?: Maybe<Scalars['Int']>;
  awqaf_answers?: Maybe<Array<Maybe<AwqafQuestionAnswer>>>;
  phone_1?: Maybe<Scalars['Int']>;
  phone_2?: Maybe<Scalars['Int']>;
  assigned_to?: Maybe<Scalars['Int']>;
  approved?: Maybe<Scalars['Int']>;
  inspector_images?: Maybe<Array<Maybe<Scalars['String']>>>;
  building_no?: Maybe<Scalars['Int']>;
  unique_listing?: Maybe<Scalars['Int']>;
  advertiser_type?: Maybe<AdvertiserTypes>;
  structure?: Maybe<Scalars['Int']>;
  appraisal_id?: Maybe<Scalars['Int']>;
  appraisal?: Maybe<Appraisal>;
  virtual_tour_link?: Maybe<Scalars['String']>;
  accurate_location?: Maybe<Scalars['Boolean']>;
  followed?: Maybe<Scalars['Boolean']>;
  title?: Maybe<Scalars['String']>;
  details?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type ListingExtraInfo = {
  __typename?: 'ListingExtraInfo';
  views: Scalars['Int'];
  support_imgs: Array<Maybe<Scalars['String']>>;
  support_imgs_desc: Array<Maybe<Scalars['String']>>;
};

export type LocationInput = {
  lat: Scalars['Float'];
  lng: Scalars['Float'];
};

export type AwqafListingFilter = {
  category?: Maybe<Scalars['Int']>;
};

export type PListings = {
  __typename?: 'PListings';
  listings?: Maybe<Array<Maybe<Listing>>>;
  total?: Maybe<Scalars['Int']>;
};

export type SearchQryOps = {
  __typename?: 'SearchQryOps';
  predict?: Maybe<Array<Maybe<Prediction>>>;
  details?: Maybe<ViewPort>;
  find?: Maybe<FindResults>;
  premium?: Maybe<FindResults>;
  commercial?: Maybe<FindResults>;
  count?: Maybe<Scalars['Int']>;
  stats?: Maybe<Stats>;
  related?: Maybe<RelatedResult>;
  projects?: Maybe<Projects>;
  project?: Maybe<Project>;
  commercialListings?: Maybe<CommercialListings>;
};


export type SearchQryOpsPredictArgs = {
  prefix: Scalars['String'];
  location?: Maybe<LocationInput>;
};


export type SearchQryOpsDetailsArgs = {
  place_id: Scalars['String'];
};


export type SearchQryOpsFindArgs = {
  where?: Maybe<WhereInput>;
  polygon?: Maybe<Array<LocationInput>>;
  sort?: Maybe<SortInput>;
  size?: Maybe<Scalars['Int']>;
  from?: Maybe<Scalars['Int']>;
  refreshed?: Maybe<Scalars['Boolean']>;
  premium?: Maybe<Scalars['Boolean']>;
  structure?: Maybe<Scalars['Boolean']>;
};


export type SearchQryOpsPremiumArgs = {
  category?: Maybe<Scalars['Int']>;
  polygon: Array<LocationInput>;
  size?: Maybe<Scalars['Int']>;
};


export type SearchQryOpsCommercialArgs = {
  category?: Maybe<Scalars['Int']>;
  polygon: Array<LocationInput>;
  size?: Maybe<Scalars['Int']>;
};


export type SearchQryOpsCountArgs = {
  where?: Maybe<WhereInput>;
  polygon?: Maybe<Array<LocationInput>>;
};


export type SearchQryOpsStatsArgs = {
  category: Scalars['Int'];
  location: LocationInput;
};


export type SearchQryOpsRelatedArgs = {
  id?: Maybe<Scalars['Int']>;
  size?: Maybe<Scalars['Int']>;
};


export type SearchQryOpsProjectsArgs = {
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


export type SearchQryOpsProjectArgs = {
  project_id: Scalars['Int'];
};


export type SearchQryOpsCommercialListingsArgs = {
  where?: Maybe<WhereInput>;
  structure?: Maybe<Scalars['Boolean']>;
};

export type Prediction = {
  __typename?: 'Prediction';
  description?: Maybe<Scalars['String']>;
  place_id?: Maybe<Scalars['String']>;
};

export type ViewPort = {
  __typename?: 'ViewPort';
  northeast?: Maybe<Location>;
  southwest?: Maybe<Location>;
};

export type WhereInput = {
  has_img?: Maybe<IntSearchField>;
  has_video?: Maybe<IntSearchField>;
  special?: Maybe<IntSearchField>;
  verified?: Maybe<IntSearchField>;
  ac?: Maybe<IntSearchField>;
  age?: Maybe<IntSearchField>;
  apts?: Maybe<IntSearchField>;
  area?: Maybe<FloatSearchField>;
  backyard?: Maybe<IntSearchField>;
  basement?: Maybe<IntSearchField>;
  beds?: Maybe<IntSearchField>;
  car_entrance?: Maybe<IntSearchField>;
  category?: Maybe<IntSearchField>;
  city_id?: Maybe<IntSearchField>;
  direction_id?: Maybe<IntSearchField>;
  district_id?: Maybe<IntSearchField>;
  province_id?: Maybe<IntSearchField>;
  create_time?: Maybe<IntSearchField>;
  driver?: Maybe<IntSearchField>;
  duplex?: Maybe<IntSearchField>;
  extra_unit?: Maybe<IntSearchField>;
  family?: Maybe<IntSearchField>;
  family_section?: Maybe<IntSearchField>;
  fb?: Maybe<IntSearchField>;
  fl?: Maybe<IntSearchField>;
  furnished?: Maybe<IntSearchField>;
  ketchen?: Maybe<IntSearchField>;
  lift?: Maybe<IntSearchField>;
  last_update?: Maybe<IntSearchField>;
  refresh?: Maybe<IntSearchField>;
  livings?: Maybe<IntSearchField>;
  maid?: Maybe<IntSearchField>;
  men_place?: Maybe<IntSearchField>;
  meter_price?: Maybe<FloatSearchField>;
  playground?: Maybe<IntSearchField>;
  pool?: Maybe<IntSearchField>;
  premium?: Maybe<IntSearchField>;
  price?: Maybe<FloatSearchField>;
  rent_period?: Maybe<IntSearchField>;
  rooms?: Maybe<IntSearchField>;
  stairs?: Maybe<IntSearchField>;
  stores?: Maybe<IntSearchField>;
  street_direction?: Maybe<IntSearchField>;
  street_width?: Maybe<IntSearchField>;
  tent?: Maybe<IntSearchField>;
  trees?: Maybe<IntSearchField>;
  user_id?: Maybe<IntSearchField>;
  user_type?: Maybe<IntSearchField>;
  vb?: Maybe<IntSearchField>;
  type?: Maybe<IntSearchField>;
  wc?: Maybe<IntSearchField>;
  wells?: Maybe<IntSearchField>;
  women_place?: Maybe<IntSearchField>;
  appraisal_id?: Maybe<IntSearchField>;
  verified_owner?: Maybe<IntSearchField>;
  verified_office?: Maybe<IntSearchField>;
};

/** If "eq" field exist the other fields will be ignored and if "gt" and/or "lt" fields exist , "ge" and/or "le" fields will be ignored */
export type IntSearchField = {
  eq?: Maybe<Scalars['Int']>;
  gt?: Maybe<Scalars['Int']>;
  lt?: Maybe<Scalars['Int']>;
  gte?: Maybe<Scalars['Int']>;
  lte?: Maybe<Scalars['Int']>;
  neq?: Maybe<Scalars['Int']>;
  inar?: Maybe<Array<Maybe<Scalars['Int']>>>;
  ninar?: Maybe<Array<Maybe<Scalars['Int']>>>;
};

/** If "eq" field exist the other fields will be ignored and if "gt" and/or "lt" fields exist , "ge" and/or "le" fields will be ignored */
export type FloatSearchField = {
  eq?: Maybe<Scalars['Float']>;
  gt?: Maybe<Scalars['Float']>;
  lt?: Maybe<Scalars['Float']>;
  gte?: Maybe<Scalars['Float']>;
  lte?: Maybe<Scalars['Float']>;
  neq?: Maybe<Scalars['Float']>;
  inar?: Maybe<Array<Maybe<Scalars['Float']>>>;
  ninar?: Maybe<Array<Maybe<Scalars['Float']>>>;
};

export type SortInput = {
  has_img?: Maybe<SortType>;
  has_video?: Maybe<SortType>;
  special?: Maybe<SortType>;
  verified?: Maybe<SortType>;
  ac?: Maybe<SortType>;
  age?: Maybe<SortType>;
  apts?: Maybe<SortType>;
  area?: Maybe<SortType>;
  backyard?: Maybe<SortType>;
  basement?: Maybe<SortType>;
  beds?: Maybe<SortType>;
  car_entrance?: Maybe<SortType>;
  category?: Maybe<SortType>;
  city_id?: Maybe<SortType>;
  direction_id?: Maybe<SortType>;
  district_id?: Maybe<SortType>;
  province_id?: Maybe<SortType>;
  create_time?: Maybe<SortType>;
  driver?: Maybe<SortType>;
  duplex?: Maybe<SortType>;
  extra_unit?: Maybe<SortType>;
  family?: Maybe<SortType>;
  family_section?: Maybe<SortType>;
  fb?: Maybe<SortType>;
  fl?: Maybe<SortType>;
  furnished?: Maybe<SortType>;
  ketchen?: Maybe<SortType>;
  lift?: Maybe<SortType>;
  last_update?: Maybe<SortType>;
  refresh?: Maybe<SortType>;
  livings?: Maybe<SortType>;
  maid?: Maybe<SortType>;
  men_place?: Maybe<SortType>;
  meter_price?: Maybe<SortType>;
  playground?: Maybe<SortType>;
  pool?: Maybe<SortType>;
  premium?: Maybe<SortType>;
  price?: Maybe<SortType>;
  rent_period?: Maybe<SortType>;
  rooms?: Maybe<SortType>;
  stairs?: Maybe<SortType>;
  stores?: Maybe<SortType>;
  street_direction?: Maybe<SortType>;
  street_width?: Maybe<SortType>;
  tent?: Maybe<SortType>;
  trees?: Maybe<SortType>;
  user_id?: Maybe<SortType>;
  user_type?: Maybe<SortType>;
  vb?: Maybe<SortType>;
  type?: Maybe<SortType>;
  wc?: Maybe<SortType>;
  wells?: Maybe<SortType>;
  women_place?: Maybe<SortType>;
  appraisal_id?: Maybe<SortType>;
  verified_owner?: Maybe<SortType>;
  verified_office?: Maybe<SortType>;
};

export enum SortType {
  Asc = 'asc',
  Desc = 'desc'
}

export type FindResults = {
  __typename?: 'FindResults';
  total?: Maybe<Scalars['Int']>;
  listings?: Maybe<Array<Maybe<ElasticListing>>>;
  featured?: Maybe<Array<Maybe<ElasticListing>>>;
};

export type ElasticListing = {
  __typename?: 'ElasticListing';
  id?: Maybe<Scalars['Int']>;
  boosted?: Maybe<Scalars['Int']>;
  ac?: Maybe<Scalars['Int']>;
  age?: Maybe<Scalars['Int']>;
  apts?: Maybe<Scalars['Int']>;
  area?: Maybe<Scalars['Int']>;
  backyard?: Maybe<Scalars['Int']>;
  basement?: Maybe<Scalars['Int']>;
  beds?: Maybe<Scalars['Int']>;
  car_entrance?: Maybe<Scalars['Int']>;
  category?: Maybe<Scalars['Int']>;
  city_id?: Maybe<Scalars['Int']>;
  create_time?: Maybe<Scalars['Int']>;
  direction_id?: Maybe<Scalars['Int']>;
  district_id?: Maybe<Scalars['Int']>;
  province_id?: Maybe<Scalars['Int']>;
  driver?: Maybe<Scalars['Int']>;
  duplex?: Maybe<Scalars['Int']>;
  extra_unit?: Maybe<Scalars['Int']>;
  family?: Maybe<Scalars['Int']>;
  family_section?: Maybe<Scalars['Int']>;
  fb?: Maybe<Scalars['Int']>;
  fl?: Maybe<Scalars['Int']>;
  furnished?: Maybe<Scalars['Int']>;
  has_img?: Maybe<Scalars['Int']>;
  imgs?: Maybe<Array<Maybe<Scalars['String']>>>;
  imgs_desc?: Maybe<Array<Maybe<Scalars['String']>>>;
  ketchen?: Maybe<Scalars['Int']>;
  last_update?: Maybe<Scalars['Int']>;
  refresh?: Maybe<Scalars['Int']>;
  lift?: Maybe<Scalars['Int']>;
  livings?: Maybe<Scalars['Int']>;
  location?: Maybe<Location>;
  maid?: Maybe<Scalars['Int']>;
  men_place?: Maybe<Scalars['Int']>;
  meter_price?: Maybe<Scalars['Float']>;
  playground?: Maybe<Scalars['Int']>;
  pool?: Maybe<Scalars['Int']>;
  premium?: Maybe<Scalars['Int']>;
  price?: Maybe<Scalars['Float']>;
  rent_period?: Maybe<Scalars['Int']>;
  rooms?: Maybe<Scalars['Int']>;
  stairs?: Maybe<Scalars['Int']>;
  stores?: Maybe<Scalars['Int']>;
  status?: Maybe<Scalars['Int']>;
  street_direction?: Maybe<Scalars['Int']>;
  street_width?: Maybe<Scalars['Int']>;
  tent?: Maybe<Scalars['Int']>;
  trees?: Maybe<Scalars['Int']>;
  type?: Maybe<Scalars['Int']>;
  user_id?: Maybe<Scalars['Int']>;
  user?: Maybe<ListingUser>;
  user_type?: Maybe<Scalars['Int']>;
  vb?: Maybe<Scalars['Int']>;
  wc?: Maybe<Scalars['Int']>;
  wells?: Maybe<Scalars['Int']>;
  women_place?: Maybe<Scalars['Int']>;
  has_video?: Maybe<Scalars['Int']>;
  videos?: Maybe<Array<Maybe<Video>>>;
  verified?: Maybe<Scalars['Int']>;
  special?: Maybe<Scalars['Int']>;
  subscription?: Maybe<ListingSubscription>;
  employee?: Maybe<ListingEmployee>;
  employee_user_id?: Maybe<Scalars['Int']>;
  mgr_user_id?: Maybe<Scalars['Int']>;
  stc_coverage?: Maybe<StcCoverage>;
  unique_listing?: Maybe<Scalars['Int']>;
  advertiser_type?: Maybe<AdvertiserTypes>;
  appraisal_id?: Maybe<Scalars['Int']>;
  appraisal?: Maybe<Appraisal>;
  virtual_tour_link?: Maybe<Scalars['String']>;
  address?: Maybe<Scalars['String']>;
  content?: Maybe<Scalars['String']>;
};

export type Stats = {
  __typename?: 'Stats';
  name?: Maybe<Scalars['String']>;
  district_id?: Maybe<Scalars['Int']>;
  values?: Maybe<Array<Maybe<StateValue>>>;
};

export type StateValue = {
  __typename?: 'StateValue';
  time_range?: Maybe<Scalars['String']>;
  year?: Maybe<Scalars['Int']>;
  order?: Maybe<Scalars['Int']>;
  count?: Maybe<Scalars['Int']>;
  price?: Maybe<Scalars['Int']>;
};

export type RelatedResult = {
  __typename?: 'RelatedResult';
  listings?: Maybe<Array<Maybe<ElasticListing>>>;
  title?: Maybe<Scalars['String']>;
  path?: Maybe<Scalars['String']>;
};

export type Projects = {
  __typename?: 'Projects';
  list?: Maybe<Array<Maybe<Project>>>;
  total?: Maybe<Scalars['Int']>;
};

export type Project = {
  __typename?: 'Project';
  project_id?: Maybe<Scalars['Int']>;
  content?: Maybe<Scalars['String']>;
  imgs?: Maybe<Array<Maybe<Scalars['String']>>>;
  title?: Maybe<Scalars['String']>;
  city_id?: Maybe<Scalars['Int']>;
  province_id?: Maybe<Scalars['Int']>;
  category?: Maybe<Scalars['Int']>;
  create_time?: Maybe<Scalars['Float']>;
  last_update?: Maybe<Scalars['Float']>;
};

export type CommercialListings = {
  __typename?: 'CommercialListings';
  total?: Maybe<Scalars['Int']>;
  listings?: Maybe<Array<Maybe<CommercialListing>>>;
};

export type CommercialListing = {
  __typename?: 'CommercialListing';
  id?: Maybe<Scalars['Int']>;
  createdAt?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['String']>;
  refresh?: Maybe<Scalars['Float']>;
  category?: Maybe<Scalars['Int']>;
  has_img?: Maybe<Scalars['Int']>;
  special?: Maybe<Scalars['Int']>;
  imgs?: Maybe<Array<Maybe<Scalars['String']>>>;
  imgs_desc?: Maybe<Array<Maybe<Scalars['String']>>>;
  status?: Maybe<Scalars['Int']>;
  support_imgs?: Maybe<Array<Maybe<Scalars['String']>>>;
  support_imgs_desc?: Maybe<Array<Maybe<Scalars['String']>>>;
  premium?: Maybe<Scalars['Int']>;
  price?: Maybe<Scalars['Float']>;
  wc?: Maybe<Scalars['Int']>;
  meter_price?: Maybe<Scalars['Float']>;
  age?: Maybe<Scalars['Int']>;
  area?: Maybe<Scalars['Float']>;
  fl?: Maybe<Scalars['Int']>;
  rent_period?: Maybe<Scalars['Int']>;
  beds?: Maybe<Scalars['Int']>;
  ketchen?: Maybe<Scalars['Int']>;
  livings?: Maybe<Scalars['Int']>;
  men_place?: Maybe<Scalars['Int']>;
  women_place?: Maybe<Scalars['Int']>;
  apts?: Maybe<Scalars['Int']>;
  stores?: Maybe<Scalars['Int']>;
  duplex?: Maybe<Scalars['Int']>;
  furnished?: Maybe<Scalars['Int']>;
  driver?: Maybe<Scalars['Int']>;
  maid?: Maybe<Scalars['Int']>;
  basement?: Maybe<Scalars['Int']>;
  lift?: Maybe<Scalars['Int']>;
  pool?: Maybe<Scalars['Int']>;
  stairs?: Maybe<Scalars['Int']>;
  fb?: Maybe<Scalars['Int']>;
  vb?: Maybe<Scalars['Int']>;
  tent?: Maybe<Scalars['Int']>;
  rooms?: Maybe<Scalars['Int']>;
  wells?: Maybe<Scalars['Int']>;
  trees?: Maybe<Scalars['Int']>;
  backyard?: Maybe<Scalars['Int']>;
  playground?: Maybe<Scalars['Int']>;
  family?: Maybe<Scalars['Int']>;
  family_section?: Maybe<Scalars['Int']>;
  street_direction?: Maybe<Scalars['Int']>;
  street_width?: Maybe<Scalars['Int']>;
  type?: Maybe<Scalars['Int']>;
  car_entrance?: Maybe<Scalars['Int']>;
  ac?: Maybe<Scalars['Int']>;
  location?: Maybe<Location>;
  boosted?: Maybe<Scalars['Int']>;
  address?: Maybe<Scalars['String']>;
  content?: Maybe<Scalars['String']>;
  services?: Maybe<Array<Maybe<Service>>>;
  uri?: Maybe<Scalars['String']>;
  city_id?: Maybe<Scalars['Int']>;
  direction_id?: Maybe<Scalars['Int']>;
  district_id?: Maybe<Scalars['Int']>;
  province_id?: Maybe<Scalars['Int']>;
  views?: Maybe<Scalars['Int']>;
  user?: Maybe<ListingUser>;
  user_id?: Maybe<Scalars['Int']>;
  user_type?: Maybe<Scalars['Int']>;
  extra_unit?: Maybe<Scalars['Int']>;
  verified?: Maybe<Scalars['Int']>;
  has_video?: Maybe<Scalars['Int']>;
  videos?: Maybe<Array<Maybe<Video>>>;
  subscription?: Maybe<ListingSubscription>;
  employee?: Maybe<ListingEmployee>;
  employee_user_id?: Maybe<Scalars['Int']>;
  mgr_user_id?: Maybe<Scalars['Int']>;
  stc_coverage?: Maybe<StcCoverage>;
  deed_id?: Maybe<Scalars['String']>;
  owner_name?: Maybe<Scalars['String']>;
  owner_id?: Maybe<Scalars['String']>;
  owner_id_type?: Maybe<DeedIdTypes>;
  is_rent?: Maybe<Scalars['Boolean']>;
  capacity?: Maybe<Scalars['Int']>;
  awqaf_answers?: Maybe<Array<Maybe<AwqafQuestionAnswer>>>;
  phone_1?: Maybe<Scalars['Int']>;
  phone_2?: Maybe<Scalars['Int']>;
  assigned_to?: Maybe<Scalars['Int']>;
  approved?: Maybe<Scalars['Int']>;
  inspector_images?: Maybe<Array<Maybe<Scalars['String']>>>;
  building_no?: Maybe<Scalars['Int']>;
  unique_listing?: Maybe<Scalars['Int']>;
  advertiser_type?: Maybe<AdvertiserTypes>;
  appraisal_id?: Maybe<Scalars['Int']>;
  appraisal?: Maybe<Appraisal>;
  virtual_tour_link?: Maybe<Scalars['String']>;
};

export type WebQryOps = {
  __typename?: 'WebQryOps';
  categories?: Maybe<Array<Maybe<Category>>>;
  cities?: Maybe<Array<Maybe<City>>>;
  directions?: Maybe<Array<Maybe<Direction>>>;
  districts?: Maybe<Array<Maybe<District>>>;
  regions?: Maybe<Array<Maybe<Region>>>;
  listing?: Maybe<WebListing>;
  find?: Maybe<WebResults>;
  special?: Maybe<SpecialWebResults>;
  related?: Maybe<RelatedWebResults>;
  featured?: Maybe<WebResults>;
  stats?: Maybe<Array<Maybe<Stats>>>;
  getUpdates?: Maybe<Updates>;
  getUpdate?: Maybe<Update>;
  getUser?: Maybe<User>;
  getPhone?: Maybe<Scalars['Float']>;
};


export type WebQryOpsCategoriesArgs = {
  lang: Langs;
};


export type WebQryOpsCitiesArgs = {
  category: Scalars['Int'];
};


export type WebQryOpsDirectionsArgs = {
  category: Scalars['Int'];
  city_id: Scalars['Int'];
};


export type WebQryOpsDistrictsArgs = {
  category: Scalars['Int'];
  city_id: Scalars['Int'];
  direction_id?: Maybe<Scalars['Int']>;
};


export type WebQryOpsListingArgs = {
  id?: Maybe<Scalars['Int']>;
  uri?: Maybe<Scalars['String']>;
};


export type WebQryOpsFindArgs = {
  where?: Maybe<WhereInput>;
  polygon?: Maybe<Array<LocationInput>>;
  sort?: Maybe<SortInput>;
  size?: Maybe<Scalars['Int']>;
  from?: Maybe<Scalars['Int']>;
  structure?: Maybe<Scalars['Boolean']>;
};


export type WebQryOpsSpecialArgs = {
  category: Scalars['Int'];
  city_id?: Maybe<Scalars['Int']>;
  district_id?: Maybe<Scalars['Int']>;
  size?: Maybe<Scalars['Int']>;
};


export type WebQryOpsRelatedArgs = {
  id?: Maybe<Scalars['Int']>;
  uri?: Maybe<Scalars['String']>;
  size?: Maybe<Scalars['Int']>;
};


export type WebQryOpsStatsArgs = {
  category: Scalars['Int'];
  city_id: Scalars['Int'];
};


export type WebQryOpsGetUpdateArgs = {
  update_id: Scalars['Int'];
};


export type WebQryOpsGetUserArgs = {
  user_id: Scalars['Int'];
};


export type WebQryOpsGetPhoneArgs = {
  id: Scalars['Int'];
};

export type Category = {
  __typename?: 'Category';
  name?: Maybe<Scalars['String']>;
  plural?: Maybe<Scalars['String']>;
  uri?: Maybe<Scalars['String']>;
  path?: Maybe<Scalars['String']>;
  keywords?: Maybe<Array<Maybe<Scalars['String']>>>;
  id?: Maybe<Scalars['Int']>;
};

export type City = {
  __typename?: 'City';
  name?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  uri?: Maybe<Scalars['String']>;
  path?: Maybe<Scalars['String']>;
  city_id?: Maybe<Scalars['Int']>;
  count?: Maybe<Scalars['Int']>;
  category?: Maybe<Category>;
  directions?: Maybe<Scalars['Boolean']>;
};

export type Direction = {
  __typename?: 'Direction';
  name?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  uri?: Maybe<Scalars['String']>;
  path?: Maybe<Scalars['String']>;
  direction_id?: Maybe<Scalars['Int']>;
  category?: Maybe<Category>;
  city?: Maybe<City>;
  count?: Maybe<Scalars['Int']>;
};

export type District = {
  __typename?: 'District';
  name?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  uri?: Maybe<Scalars['String']>;
  path?: Maybe<Scalars['String']>;
  district_id?: Maybe<Scalars['Int']>;
  category?: Maybe<Category>;
  city?: Maybe<City>;
  direction?: Maybe<Direction>;
  count?: Maybe<Scalars['Int']>;
};

export type Region = {
  __typename?: 'Region';
  district?: Maybe<DistrictType>;
  direction?: Maybe<DirectionType>;
  city?: Maybe<CityType>;
};

export type DistrictType = {
  __typename?: 'DistrictType';
  district_id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
  uri?: Maybe<Scalars['String']>;
  path?: Maybe<Scalars['String']>;
};

export type DirectionType = {
  __typename?: 'DirectionType';
  direction_id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
  uri?: Maybe<Scalars['String']>;
  path?: Maybe<Scalars['String']>;
};

export type CityType = {
  __typename?: 'CityType';
  city_id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
  uri?: Maybe<Scalars['String']>;
  path?: Maybe<Scalars['String']>;
};

export type WebListing = {
  __typename?: 'WebListing';
  title?: Maybe<Scalars['String']>;
  path?: Maybe<Scalars['String']>;
  city?: Maybe<Scalars['String']>;
  direction?: Maybe<Scalars['String']>;
  district?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  create_time?: Maybe<Scalars['Float']>;
  last_update?: Maybe<Scalars['Float']>;
  refresh?: Maybe<Scalars['Float']>;
  category?: Maybe<Scalars['Int']>;
  has_img?: Maybe<Scalars['Int']>;
  special?: Maybe<Scalars['Int']>;
  imgs?: Maybe<Array<Maybe<Scalars['String']>>>;
  imgs_desc?: Maybe<Array<Maybe<Scalars['String']>>>;
  status?: Maybe<Scalars['Int']>;
  support_imgs?: Maybe<Array<Maybe<Scalars['String']>>>;
  support_imgs_desc?: Maybe<Array<Maybe<Scalars['String']>>>;
  premium?: Maybe<Scalars['Int']>;
  price?: Maybe<Scalars['Float']>;
  wc?: Maybe<Scalars['Int']>;
  meter_price?: Maybe<Scalars['Float']>;
  age?: Maybe<Scalars['Int']>;
  area?: Maybe<Scalars['Float']>;
  fl?: Maybe<Scalars['Int']>;
  rent_period?: Maybe<Scalars['Int']>;
  beds?: Maybe<Scalars['Int']>;
  ketchen?: Maybe<Scalars['Int']>;
  livings?: Maybe<Scalars['Int']>;
  men_place?: Maybe<Scalars['Int']>;
  women_place?: Maybe<Scalars['Int']>;
  apts?: Maybe<Scalars['Int']>;
  stores?: Maybe<Scalars['Int']>;
  duplex?: Maybe<Scalars['Int']>;
  furnished?: Maybe<Scalars['Int']>;
  driver?: Maybe<Scalars['Int']>;
  maid?: Maybe<Scalars['Int']>;
  basement?: Maybe<Scalars['Int']>;
  lift?: Maybe<Scalars['Int']>;
  pool?: Maybe<Scalars['Int']>;
  stairs?: Maybe<Scalars['Int']>;
  fb?: Maybe<Scalars['Int']>;
  vb?: Maybe<Scalars['Int']>;
  tent?: Maybe<Scalars['Int']>;
  rooms?: Maybe<Scalars['Int']>;
  wells?: Maybe<Scalars['Int']>;
  trees?: Maybe<Scalars['Int']>;
  backyard?: Maybe<Scalars['Int']>;
  playground?: Maybe<Scalars['Int']>;
  family?: Maybe<Scalars['Int']>;
  family_section?: Maybe<Scalars['Int']>;
  street_direction?: Maybe<Scalars['Int']>;
  street_width?: Maybe<Scalars['Int']>;
  type?: Maybe<Scalars['Int']>;
  car_entrance?: Maybe<Scalars['Int']>;
  ac?: Maybe<Scalars['Int']>;
  location?: Maybe<Location>;
  boosted?: Maybe<Scalars['Int']>;
  address?: Maybe<Scalars['String']>;
  content?: Maybe<Scalars['String']>;
  services?: Maybe<Array<Maybe<Service>>>;
  uri?: Maybe<Scalars['String']>;
  city_id?: Maybe<Scalars['Int']>;
  direction_id?: Maybe<Scalars['Int']>;
  district_id?: Maybe<Scalars['Int']>;
  province_id?: Maybe<Scalars['Int']>;
  views?: Maybe<Scalars['Int']>;
  user?: Maybe<ListingUser>;
  user_id?: Maybe<Scalars['Int']>;
  user_type?: Maybe<Scalars['Int']>;
  extra_unit?: Maybe<Scalars['Int']>;
  verified?: Maybe<Scalars['Int']>;
  has_video?: Maybe<Scalars['Int']>;
  videos?: Maybe<Array<Maybe<Video>>>;
  subscription?: Maybe<ListingSubscription>;
  employee?: Maybe<ListingEmployee>;
  employee_user_id?: Maybe<Scalars['Int']>;
  mgr_user_id?: Maybe<Scalars['Int']>;
  stc_coverage?: Maybe<StcCoverage>;
  deed_id?: Maybe<Scalars['String']>;
  owner_name?: Maybe<Scalars['String']>;
  owner_id?: Maybe<Scalars['String']>;
  owner_id_type?: Maybe<DeedIdTypes>;
  is_rent?: Maybe<Scalars['Boolean']>;
  capacity?: Maybe<Scalars['Int']>;
  awqaf_answers?: Maybe<Array<Maybe<AwqafQuestionAnswer>>>;
  phone_1?: Maybe<Scalars['Int']>;
  phone_2?: Maybe<Scalars['Int']>;
  assigned_to?: Maybe<Scalars['Int']>;
  approved?: Maybe<Scalars['Int']>;
  inspector_images?: Maybe<Array<Maybe<Scalars['String']>>>;
  building_no?: Maybe<Scalars['Int']>;
  unique_listing?: Maybe<Scalars['Int']>;
  advertiser_type?: Maybe<AdvertiserTypes>;
  structure?: Maybe<Scalars['Int']>;
  appraisal_id?: Maybe<Scalars['Int']>;
  appraisal?: Maybe<Appraisal>;
  virtual_tour_link?: Maybe<Scalars['String']>;
  accurate_location?: Maybe<Scalars['Boolean']>;
  links?: Maybe<WebLinks>;
  details?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type WebLinks = {
  __typename?: 'WebLinks';
  city?: Maybe<City>;
  direction?: Maybe<Direction>;
  district?: Maybe<District>;
};

export type WebResults = {
  __typename?: 'WebResults';
  total?: Maybe<Scalars['Int']>;
  listings?: Maybe<Array<Maybe<ElasticWebListing>>>;
};

export type ElasticWebListing = {
  __typename?: 'ElasticWebListing';
  id?: Maybe<Scalars['Int']>;
  boosted?: Maybe<Scalars['Int']>;
  ac?: Maybe<Scalars['Int']>;
  age?: Maybe<Scalars['Int']>;
  apts?: Maybe<Scalars['Int']>;
  area?: Maybe<Scalars['Int']>;
  backyard?: Maybe<Scalars['Int']>;
  basement?: Maybe<Scalars['Int']>;
  beds?: Maybe<Scalars['Int']>;
  car_entrance?: Maybe<Scalars['Int']>;
  category?: Maybe<Scalars['Int']>;
  city_id?: Maybe<Scalars['Int']>;
  create_time?: Maybe<Scalars['Int']>;
  direction_id?: Maybe<Scalars['Int']>;
  district_id?: Maybe<Scalars['Int']>;
  province_id?: Maybe<Scalars['Int']>;
  driver?: Maybe<Scalars['Int']>;
  duplex?: Maybe<Scalars['Int']>;
  extra_unit?: Maybe<Scalars['Int']>;
  family?: Maybe<Scalars['Int']>;
  family_section?: Maybe<Scalars['Int']>;
  fb?: Maybe<Scalars['Int']>;
  fl?: Maybe<Scalars['Int']>;
  furnished?: Maybe<Scalars['Int']>;
  has_img?: Maybe<Scalars['Int']>;
  imgs?: Maybe<Array<Maybe<Scalars['String']>>>;
  imgs_desc?: Maybe<Array<Maybe<Scalars['String']>>>;
  ketchen?: Maybe<Scalars['Int']>;
  last_update?: Maybe<Scalars['Int']>;
  refresh?: Maybe<Scalars['Int']>;
  lift?: Maybe<Scalars['Int']>;
  livings?: Maybe<Scalars['Int']>;
  location?: Maybe<Location>;
  maid?: Maybe<Scalars['Int']>;
  men_place?: Maybe<Scalars['Int']>;
  meter_price?: Maybe<Scalars['Float']>;
  playground?: Maybe<Scalars['Int']>;
  pool?: Maybe<Scalars['Int']>;
  premium?: Maybe<Scalars['Int']>;
  price?: Maybe<Scalars['Float']>;
  rent_period?: Maybe<Scalars['Int']>;
  rooms?: Maybe<Scalars['Int']>;
  stairs?: Maybe<Scalars['Int']>;
  stores?: Maybe<Scalars['Int']>;
  status?: Maybe<Scalars['Int']>;
  street_direction?: Maybe<Scalars['Int']>;
  street_width?: Maybe<Scalars['Int']>;
  tent?: Maybe<Scalars['Int']>;
  trees?: Maybe<Scalars['Int']>;
  type?: Maybe<Scalars['Int']>;
  user_id?: Maybe<Scalars['Int']>;
  user?: Maybe<ListingUser>;
  user_type?: Maybe<Scalars['Int']>;
  vb?: Maybe<Scalars['Int']>;
  wc?: Maybe<Scalars['Int']>;
  wells?: Maybe<Scalars['Int']>;
  women_place?: Maybe<Scalars['Int']>;
  has_video?: Maybe<Scalars['Int']>;
  videos?: Maybe<Array<Maybe<Video>>>;
  verified?: Maybe<Scalars['Int']>;
  special?: Maybe<Scalars['Int']>;
  subscription?: Maybe<ListingSubscription>;
  employee?: Maybe<ListingEmployee>;
  employee_user_id?: Maybe<Scalars['Int']>;
  mgr_user_id?: Maybe<Scalars['Int']>;
  stc_coverage?: Maybe<StcCoverage>;
  unique_listing?: Maybe<Scalars['Int']>;
  advertiser_type?: Maybe<AdvertiserTypes>;
  appraisal_id?: Maybe<Scalars['Int']>;
  appraisal?: Maybe<Appraisal>;
  virtual_tour_link?: Maybe<Scalars['String']>;
  content?: Maybe<Scalars['String']>;
  address?: Maybe<Scalars['String']>;
  district?: Maybe<Scalars['String']>;
  direction?: Maybe<Scalars['String']>;
  city?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  path?: Maybe<Scalars['String']>;
  uri?: Maybe<Scalars['String']>;
  native?: Maybe<WebNativeListing>;
};

export type WebNativeListing = {
  __typename?: 'WebNativeListing';
  logo?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  image?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  external_url?: Maybe<Scalars['String']>;
};

export type SpecialWebResults = {
  __typename?: 'SpecialWebResults';
  city?: Maybe<WebResults>;
  district?: Maybe<WebResults>;
};

export type RelatedWebResults = {
  __typename?: 'RelatedWebResults';
  listings?: Maybe<Array<Maybe<ElasticWebListing>>>;
  title?: Maybe<Scalars['String']>;
  path?: Maybe<Scalars['String']>;
};

export type NewsQryOps = {
  __typename?: 'NewsQryOps';
  fetchNews?: Maybe<FetchNewsOutput>;
};


export type NewsQryOpsFetchNewsArgs = {
  offset?: Maybe<Scalars['Int']>;
};

export type FetchNewsOutput = {
  __typename?: 'FetchNewsOutput';
  list?: Maybe<Array<NewsItemOutput>>;
  offset?: Maybe<Scalars['Int']>;
};

export type NewsItemOutput = {
  __typename?: 'NewsItemOutput';
  timestamp?: Maybe<Scalars['Float']>;
  title?: Maybe<Scalars['String']>;
  img?: Maybe<Scalars['String']>;
  content?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
};

export type RatingQryOps = {
  __typename?: 'RatingQryOps';
  getDistrictRate?: Maybe<RateOutput>;
};


export type RatingQryOpsGetDistrictRateArgs = {
  district_id: Scalars['Int'];
  offset?: Maybe<Scalars['Int']>;
};

export type RateOutput = {
  __typename?: 'RateOutput';
  rate?: Maybe<Scalars['Float']>;
  rate_count?: Maybe<Scalars['Int']>;
  electricity_water_rate?: Maybe<Scalars['Float']>;
  internet_rate?: Maybe<Scalars['Float']>;
  streets_rate?: Maybe<Scalars['Float']>;
  medical_services_rate?: Maybe<Scalars['Float']>;
  educational_services_rate?: Maybe<Scalars['Float']>;
  list?: Maybe<Array<RateItemOutput>>;
  offset?: Maybe<Scalars['Int']>;
};

export type RateItemOutput = {
  __typename?: 'RateItemOutput';
  id?: Maybe<Scalars['Int']>;
  created_time?: Maybe<Scalars['Float']>;
  rate?: Maybe<Scalars['Int']>;
  comment?: Maybe<Scalars['String']>;
  water?: Maybe<Scalars['Boolean']>;
  electricity?: Maybe<Scalars['Boolean']>;
  internet?: Maybe<Scalars['Boolean']>;
  fiber?: Maybe<Scalars['Boolean']>;
  clean?: Maybe<Scalars['Boolean']>;
  general_issues?: Maybe<Scalars['Boolean']>;
  car_parking_issues?: Maybe<Scalars['Boolean']>;
  park?: Maybe<Scalars['Boolean']>;
  kindergarten?: Maybe<Scalars['Boolean']>;
  elementary_school?: Maybe<Scalars['Boolean']>;
  middle_school?: Maybe<Scalars['Boolean']>;
  high_school?: Maybe<Scalars['Boolean']>;
  universities?: Maybe<Scalars['Boolean']>;
  pharmacies?: Maybe<Scalars['Boolean']>;
  medical_center?: Maybe<Scalars['Boolean']>;
  medical_center_review?: Maybe<Scalars['Boolean']>;
};

export type OfficesQryOps = {
  __typename?: 'OfficesQryOps';
  packages?: Maybe<Array<Maybe<SubscriptionPackageType>>>;
  fees?: Maybe<Array<Maybe<PaymentsFeesType>>>;
  getProfile?: Maybe<OfficeProfile>;
  Ejar?: Maybe<EjarQryOps>;
};


export type OfficesQryOpsGetProfileArgs = {
  mgr_user_id: Scalars['Int'];
};

export type SubscriptionPackageType = {
  __typename?: 'SubscriptionPackageType';
  max_users?: Maybe<Scalars['Int']>;
  max_boosts?: Maybe<Scalars['Int']>;
  max_high_pr?: Maybe<Scalars['Int']>;
  max_web_featured?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  sub_pkg_category?: Maybe<Scalars['Int']>;
  category_name?: Maybe<Scalars['String']>;
  sub_pkg_type?: Maybe<Scalars['Int']>;
  status?: Maybe<Scalars['Int']>;
  value?: Maybe<Scalars['Float']>;
};

export type PaymentsFeesType = {
  __typename?: 'PaymentsFeesType';
  name_ar?: Maybe<Scalars['String']>;
  name_en?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  transaction_type?: Maybe<Scalars['Int']>;
  transaction_category?: Maybe<Scalars['Int']>;
  category_name?: Maybe<Scalars['String']>;
  status?: Maybe<Scalars['Int']>;
  value?: Maybe<Scalars['Float']>;
};

export type OfficeProfile = {
  __typename?: 'OfficeProfile';
  name?: Maybe<Scalars['String']>;
  img?: Maybe<Scalars['String']>;
  phones?: Maybe<Array<Maybe<Scalars['Float']>>>;
  about?: Maybe<Scalars['String']>;
};

export type EjarQryOps = {
  __typename?: 'EjarQryOps';
  getFees?: Maybe<Array<Maybe<TransactionType>>>;
  getResidentialRentContractFees?: Maybe<TransactionType>;
  getCommercialRentContractFees?: Maybe<TransactionType>;
};


export type EjarQryOpsGetResidentialRentContractFeesArgs = {
  contract_id: Scalars['Int'];
};


export type EjarQryOpsGetCommercialRentContractFeesArgs = {
  contract_id: Scalars['Int'];
};

export type TransactionType = {
  __typename?: 'TransactionType';
  createdAt?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['String']>;
  type_id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
  value?: Maybe<Scalars['Float']>;
  transaction_category?: Maybe<Scalars['Int']>;
  description?: Maybe<Scalars['String']>;
  category_name?: Maybe<Scalars['String']>;
};

export type LegalConsultationQryOps = {
  __typename?: 'LegalConsultationQryOps';
  getLegalConsultationFees?: Maybe<TransactionType>;
};


export type LegalConsultationQryOpsGetLegalConsultationFeesArgs = {
  request_id: Scalars['Int'];
};

export type HomePlansOpenQryOps = {
  __typename?: 'HomePlansOpenQryOps';
  list?: Maybe<HomePlans>;
  getById?: Maybe<HomePlan>;
  buildingCalculatorConstants?: Maybe<BuildingCalculatorConstants>;
  buildingCalculator?: Maybe<BuildingCalculatorResult>;
  getCategories?: Maybe<Array<Maybe<HomePlansCategory>>>;
};


export type HomePlansOpenQryOpsListArgs = {
  filter?: Maybe<HomePlansFilter>;
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  order_by?: Maybe<HomePlansSortOptions>;
};


export type HomePlansOpenQryOpsGetByIdArgs = {
  home_plan_id: Scalars['Int'];
};


export type HomePlansOpenQryOpsBuildingCalculatorArgs = {
  land_area: Scalars['Float'];
  floors_type: FloorsType;
  basement_area?: Maybe<Scalars['Float']>;
};

export type HomePlansFilter = {
  area?: Maybe<IntSearchField>;
  rooms?: Maybe<IntSearchField>;
  floors?: Maybe<IntSearchField>;
  wcs?: Maybe<IntSearchField>;
  price?: Maybe<FloatSearchField>;
  width?: Maybe<IntSearchField>;
  height?: Maybe<IntSearchField>;
  construction_plans?: Maybe<Scalars['Boolean']>;
  architectural_plans?: Maybe<Scalars['Boolean']>;
  electrical_plans?: Maybe<Scalars['Boolean']>;
  drainage_plans?: Maybe<Scalars['Boolean']>;
  ac_plans?: Maybe<Scalars['Boolean']>;
  exterior_designs?: Maybe<Scalars['Boolean']>;
  Interior_designs?: Maybe<Scalars['Boolean']>;
  garden?: Maybe<Scalars['Boolean']>;
  pool?: Maybe<Scalars['Boolean']>;
  basement?: Maybe<Scalars['Boolean']>;
  extension?: Maybe<Scalars['Boolean']>;
  category?: Maybe<Scalars['Int']>;
};

export enum HomePlansSortOptions {
  CreatedAt = 'createdAt',
  PurchasedTimes = 'purchased_times'
}

export type HomePlans = {
  __typename?: 'HomePlans';
  total?: Maybe<Scalars['Int']>;
  plans?: Maybe<Array<Maybe<HomePlan>>>;
};

export type HomePlan = {
  __typename?: 'HomePlan';
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
  code?: Maybe<Scalars['String']>;
  status?: Maybe<HomePlanStatuses>;
  area?: Maybe<Scalars['Int']>;
  rooms?: Maybe<Scalars['Int']>;
  floors?: Maybe<Scalars['Int']>;
  wcs?: Maybe<Scalars['Int']>;
  price?: Maybe<Scalars['Float']>;
  imgs?: Maybe<Array<Maybe<Scalars['String']>>>;
  partner_id?: Maybe<Scalars['Int']>;
  width?: Maybe<Scalars['Int']>;
  height?: Maybe<Scalars['Int']>;
  purchased_times?: Maybe<Scalars['Int']>;
  flat_floor_areas?: Maybe<Scalars['String']>;
  details?: Maybe<Scalars['String']>;
  construction_plans?: Maybe<Scalars['Boolean']>;
  architectural_plans?: Maybe<Scalars['Boolean']>;
  electrical_plans?: Maybe<Scalars['Boolean']>;
  drainage_plans?: Maybe<Scalars['Boolean']>;
  ac_plans?: Maybe<Scalars['Boolean']>;
  exterior_designs?: Maybe<Scalars['Boolean']>;
  Interior_designs?: Maybe<Scalars['Boolean']>;
  garden?: Maybe<Scalars['Boolean']>;
  pool?: Maybe<Scalars['Boolean']>;
  partner?: Maybe<Partner>;
  basement?: Maybe<Scalars['Boolean']>;
  extension?: Maybe<Scalars['Boolean']>;
  category?: Maybe<Scalars['Int']>;
};

export enum HomePlanStatuses {
  Active = 'active',
  Inactive = 'inactive'
}

export type Partner = {
  __typename?: 'Partner';
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
  about?: Maybe<Scalars['String']>;
  logo_img?: Maybe<Scalars['String']>;
  rating?: Maybe<Scalars['Int']>;
};

export type BuildingCalculatorConstants = {
  __typename?: 'BuildingCalculatorConstants';
  structural_meter_cost?: Maybe<Scalars['Float']>;
  finishing_meter_cost?: Maybe<Array<Maybe<Scalars['Float']>>>;
  full_ready_meter_cost?: Maybe<Array<Maybe<Scalars['Float']>>>;
  basement_meter_cost?: Maybe<Scalars['Float']>;
  ground_floor_area_percentage?: Maybe<Scalars['Float']>;
  first_floor_area_percentage?: Maybe<Scalars['Float']>;
  roof_area_percentage?: Maybe<Scalars['Float']>;
  basement_area_percentage?: Maybe<Scalars['Float']>;
  other_costs_factor?: Maybe<Scalars['Float']>;
};

export enum FloorsType {
  OneFloor = 'one_floor',
  TwoFloors = 'two_floors',
  TwoFloorsWithRoof = 'two_floors_with_roof'
}

export type BuildingCalculatorResult = {
  __typename?: 'BuildingCalculatorResult';
  ground_floor_area?: Maybe<Scalars['Float']>;
  first_floor_area?: Maybe<Scalars['Float']>;
  roof_floor_area?: Maybe<Scalars['Float']>;
  surface_area?: Maybe<Scalars['Float']>;
  swimming_pool?: Maybe<Scalars['Float']>;
  fence?: Maybe<Scalars['Float']>;
  water_tank?: Maybe<Scalars['Float']>;
  drainage_tank?: Maybe<Scalars['Float']>;
  structural_concrete_cost?: Maybe<Scalars['Float']>;
  finishing_costs?: Maybe<Array<Maybe<Scalars['Float']>>>;
  turnkey_costs?: Maybe<Array<Maybe<Scalars['Float']>>>;
};

export type HomePlansCategory = {
  __typename?: 'HomePlansCategory';
  id?: Maybe<Scalars['Int']>;
  name_en?: Maybe<Scalars['String']>;
  name_ar?: Maybe<Scalars['String']>;
};

export type HomeFinancingQryOps = {
  __typename?: 'HomeFinancingQryOps';
  AlahliCalculator?: Maybe<AlahliLoanDetails>;
};


export type HomeFinancingQryOpsAlahliCalculatorArgs = {
  data: AlahliLoanInput;
};

export type AlahliLoanInput = {
  type?: Maybe<AlahliApplicationTypes>;
  birth_date: Scalars['Float'];
  job: AlahliJobTypes;
  job_military_rank?: Maybe<AlahliJobMilitaryRanks>;
  salary: Scalars['Float'];
  personal_financing_installment_amount?: Maybe<Scalars['Float']>;
  personal_financing_installment_months?: Maybe<Scalars['Int']>;
  monthly_obligations?: Maybe<Scalars['Float']>;
};

export enum AlahliApplicationTypes {
  Redf = 'REDF',
  Standard = 'STANDARD'
}

export enum AlahliJobTypes {
  Civilian = 'CIVILIAN',
  Private = 'PRIVATE',
  Military = 'MILITARY',
  Retiree = 'RETIREE'
}

export enum AlahliJobMilitaryRanks {
  Private = 'PRIVATE',
  Corporal = 'CORPORAL',
  ViceSergeant = 'VICE_SERGEANT',
  Sergeant = 'SERGEANT',
  FirstClassSergeant = 'FIRST_CLASS_SERGEANT',
  MasterSergeant = 'MASTER_SERGEANT',
  Lieutenant = 'LIEUTENANT',
  Captain = 'CAPTAIN',
  Major = 'MAJOR',
  LieutenantColonel = 'LIEUTENANT_COLONEL',
  Colonel = 'COLONEL',
  BrigadierGeneral = 'BRIGADIER_GENERAL',
  General = 'GENERAL'
}

export type AlahliLoanDetails = {
  __typename?: 'AlahliLoanDetails';
  EligibleLoanAmount?: Maybe<Scalars['Float']>;
  AnnualPercentageRate?: Maybe<Scalars['String']>;
  EligibleFinancingTenorYears?: Maybe<Scalars['Int']>;
  EligibleFinancingTenorMonths?: Maybe<Scalars['Int']>;
  MonthlyInstalmentsDuringPersonalFinancingPeriod?: Maybe<Scalars['Float']>;
  TenorDuringPersonalFinancingPeriodMonths?: Maybe<Scalars['Int']>;
  MonthlyInstalmentsAfterPersonalFinancingMatures?: Maybe<Scalars['Float']>;
  TenorAfterPersonalFinancingMonths?: Maybe<Scalars['Int']>;
  MonthlyInstalmentsAfterRetirement?: Maybe<Scalars['Float']>;
  TenorAfterRetirementMonths?: Maybe<Scalars['Int']>;
  ResultDetails?: Maybe<Array<Maybe<AlahliLoanDetailsColumn>>>;
};

export type AlahliLoanDetailsColumn = {
  __typename?: 'AlahliLoanDetailsColumn';
  name_ar?: Maybe<Scalars['String']>;
  name_en?: Maybe<Scalars['String']>;
  installment?: Maybe<Scalars['Float']>;
  months?: Maybe<Scalars['Int']>;
};

export type ThreeDimensionalOpenQryOps = {
  __typename?: 'ThreeDimensionalOpenQryOps';
  listCategories?: Maybe<Array<Maybe<ThreeDimensionalDesignsCategory>>>;
  list?: Maybe<ThreeDimensionalDesigns>;
  getConfigs?: Maybe<ThreeDimensionalConfigs>;
  getSimilarDesigns?: Maybe<Array<Maybe<ThreeDimensionalDesign>>>;
  get?: Maybe<ThreeDimensionalDesign>;
};


export type ThreeDimensionalOpenQryOpsListArgs = {
  category_id?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


export type ThreeDimensionalOpenQryOpsGetSimilarDesignsArgs = {
  design_id: Scalars['Int'];
};


export type ThreeDimensionalOpenQryOpsGetArgs = {
  design_id: Scalars['Int'];
};

export type ThreeDimensionalDesignsCategory = {
  __typename?: 'ThreeDimensionalDesignsCategory';
  id?: Maybe<Scalars['Int']>;
  name_en?: Maybe<Scalars['String']>;
  name_ar?: Maybe<Scalars['String']>;
};

export type ThreeDimensionalDesigns = {
  __typename?: 'ThreeDimensionalDesigns';
  total?: Maybe<Scalars['Int']>;
  designs?: Maybe<Array<Maybe<ThreeDimensionalDesign>>>;
};

export type ThreeDimensionalDesign = {
  __typename?: 'ThreeDimensionalDesign';
  id?: Maybe<Scalars['Int']>;
  name_en?: Maybe<Scalars['String']>;
  name_ar?: Maybe<Scalars['String']>;
  category_id?: Maybe<Scalars['Int']>;
  price?: Maybe<Scalars['Float']>;
  old_price?: Maybe<Scalars['Float']>;
  description_en?: Maybe<Scalars['String']>;
  description_ar?: Maybe<Scalars['String']>;
  specs_en?: Maybe<Array<Maybe<Scalars['String']>>>;
  specs_ar?: Maybe<Array<Maybe<Scalars['String']>>>;
  imgs?: Maybe<Array<Maybe<Scalars['String']>>>;
  cover_img?: Maybe<Scalars['String']>;
  cover_img_width?: Maybe<Scalars['Float']>;
  cover_img_height?: Maybe<Scalars['Float']>;
  status?: Maybe<ThreeDimensionalDesignDesignStatus>;
  likes?: Maybe<Scalars['Float']>;
};

export enum ThreeDimensionalDesignDesignStatus {
  Active = 'active',
  Inactive = 'inactive'
}

export type ThreeDimensionalConfigs = {
  __typename?: 'ThreeDimensionalConfigs';
  transaction_type?: Maybe<Scalars['Int']>;
  banner?: Maybe<Scalars['String']>;
  support_user_ids?: Maybe<Array<Maybe<Scalars['Int']>>>;
};

export type Mutation = {
  __typename?: 'Mutation';
  User?: Maybe<UserMutOps>;
  PublicUser?: Maybe<PublicUserMutOps>;
  Listing?: Maybe<ListingMutOps>;
  Web?: Maybe<WebMutOps>;
  Request?: Maybe<RequestMutOps>;
};

export type UserMutOps = {
  __typename?: 'UserMutOps';
  create?: Maybe<User>;
  verify?: Maybe<AuthUser>;
  changePassword?: Maybe<AuthUser>;
  forgetPassword?: Maybe<User>;
  updateForgetPassword?: Maybe<AuthUser>;
  updateChangePhone?: Maybe<AuthUser>;
  createLoan?: Maybe<Scalars['Boolean']>;
  initLoan?: Maybe<Scalars['Boolean']>;
  sendLoan?: Maybe<Scalars['Boolean']>;
  call?: Maybe<Scalars['Boolean']>;
  clearDeviceId?: Maybe<Scalars['Boolean']>;
  login?: Maybe<AuthUser>;
  delete?: Maybe<User>;
  loginOTP?: Maybe<AuthUser>;
  registerToken?: Maybe<Scalars['Boolean']>;
  unregisterToken?: Maybe<Scalars['Boolean']>;
  verifyIdentityByOwnerOtp?: Maybe<Scalars['Boolean']>;
  putListingVerificationDeedByOtp?: Maybe<Scalars['String']>;
  cancelMailSubscription?: Maybe<Scalars['Boolean']>;
};


export type UserMutOpsCreateArgs = {
  phone: Scalars['String'];
};


export type UserMutOpsVerifyArgs = {
  phone: Scalars['String'];
  vcode: Scalars['String'];
  pw: Scalars['String'];
  public_token?: Maybe<Scalars['String']>;
  device_id?: Maybe<Scalars['String']>;
};


export type UserMutOpsChangePasswordArgs = {
  phone: Scalars['String'];
  pw: Scalars['String'];
  npw: Scalars['String'];
  device_id?: Maybe<Scalars['String']>;
};


export type UserMutOpsForgetPasswordArgs = {
  phone: Scalars['String'];
};


export type UserMutOpsUpdateForgetPasswordArgs = {
  phone: Scalars['String'];
  vcode: Scalars['String'];
  pw: Scalars['String'];
  device_id?: Maybe<Scalars['String']>;
};


export type UserMutOpsUpdateChangePhoneArgs = {
  phone: Scalars['String'];
  vcode: Scalars['String'];
  device_id?: Maybe<Scalars['String']>;
};


export type UserMutOpsCreateLoanArgs = {
  loan?: Maybe<CreateLoanInput>;
};


export type UserMutOpsInitLoanArgs = {
  phone: Scalars['String'];
};


export type UserMutOpsSendLoanArgs = {
  loan: CreateLoanInput;
  vcode: Scalars['String'];
};


export type UserMutOpsCallArgs = {
  user_id: Scalars['Int'];
};


export type UserMutOpsClearDeviceIdArgs = {
  device_id: Scalars['String'];
};


export type UserMutOpsLoginArgs = {
  phone: Scalars['String'];
  pw: Scalars['String'];
  device_id?: Maybe<Scalars['String']>;
};


export type UserMutOpsDeleteArgs = {
  user_id: Scalars['Int'];
};


export type UserMutOpsLoginOtpArgs = {
  pw: Scalars['String'];
};


export type UserMutOpsRegisterTokenArgs = {
  type: AppType;
  device_id: Scalars['String'];
};


export type UserMutOpsUnregisterTokenArgs = {
  type: AppType;
  device_id: Scalars['String'];
};


export type UserMutOpsVerifyIdentityByOwnerOtpArgs = {
  owner_otp: Scalars['String'];
  otp: Scalars['String'];
};


export type UserMutOpsPutListingVerificationDeedByOtpArgs = {
  owner_otp: Scalars['String'];
  filename: Scalars['String'];
};


export type UserMutOpsCancelMailSubscriptionArgs = {
  token: Scalars['String'];
  email: Scalars['String'];
};

export type AuthUser = {
  __typename?: 'AuthUser';
  user?: Maybe<AuthUserField>;
  token?: Maybe<Scalars['String']>;
};

export type AuthUserField = {
  __typename?: 'AuthUserField';
  user_id?: Maybe<Scalars['Int']>;
  phone?: Maybe<Scalars['Float']>;
  name?: Maybe<Scalars['String']>;
  img?: Maybe<Scalars['String']>;
  about?: Maybe<Scalars['String']>;
  create_time?: Maybe<Scalars['Int']>;
  verified?: Maybe<Scalars['Int']>;
  status?: Maybe<Scalars['Int']>;
  ability?: Maybe<Scalars['Int']>;
  type?: Maybe<Scalars['Int']>;
  paid?: Maybe<Scalars['Int']>;
  fee?: Maybe<Scalars['Int']>;
  role?: Maybe<Scalars['Int']>;
  ae?: Maybe<Scalars['Int']>;
  pe?: Maybe<Scalars['Int']>;
  le?: Maybe<Scalars['Int']>;
  ue?: Maybe<Scalars['Int']>;
  user_type?: Maybe<Scalars['Int']>;
  favs?: Maybe<Scalars['Int']>;
  review?: Maybe<Scalars['Float']>;
  manager_id?: Maybe<Scalars['Int']>;
  manager_paid?: Maybe<Scalars['Int']>;
  email?: Maybe<Scalars['String']>;
  listings?: Maybe<Scalars['Int']>;
  crm?: Maybe<Scalars['Boolean']>;
  last_seen?: Maybe<Scalars['Float']>;
  can_boost?: Maybe<Scalars['Boolean']>;
  enable_video?: Maybe<Scalars['String']>;
  permissions?: Maybe<Array<Maybe<Permissions>>>;
  iam_verified?: Maybe<Scalars['Boolean']>;
};

export enum Permissions {
  AccessToAllConstructions = 'ACCESS_TO_ALL_CONSTRUCTIONS',
  AccessToEngineeringDrawing = 'ACCESS_TO_ENGINEERING_DRAWING',
  AccessToConstruction = 'ACCESS_TO_CONSTRUCTION',
  AccessToConsultation = 'ACCESS_TO_CONSULTATION',
  AccessToConstructionSupervision = 'ACCESS_TO_CONSTRUCTION_SUPERVISION',
  AccessToInteriorDesign = 'ACCESS_TO_INTERIOR_DESIGN',
  AccessToSmartHomes = 'ACCESS_TO_SMART_HOMES',
  AccessToBuildingsExamination = 'ACCESS_TO_BUILDINGS_EXAMINATION',
  AccessToAllAppraisals = 'ACCESS_TO_ALL_APPRAISALS',
  AccessToReviweAppraisals = 'ACCESS_TO_REVIWE_APPRAISALS',
  AccessToRentContracts = 'ACCESS_TO_RENT_CONTRACTS',
  AccessAdvancedSearch = 'ACCESS_ADVANCED_SEARCH',
  AccessToAwqafListings = 'ACCESS_TO_AWQAF_LISTINGS',
  AccessToAwqafListingsAndReview = 'ACCESS_TO_AWQAF_LISTINGS_AND_REVIEW',
  AccessToAwqafInspectedListingsAndUpdate = 'ACCESS_TO_AWQAF_INSPECTED_LISTINGS_AND_UPDATE',
  AwqafFinisher = 'AWQAF_FINISHER',
  AccessToEjarContracts = 'ACCESS_TO_EJAR_CONTRACTS',
  AccessToAlmassSpecialMarketingRequests = 'ACCESS_TO_ALMASS_SPECIAL_MARKETING_REQUESTS',
  AccessToAqarSpecialMarketingRequests = 'ACCESS_TO_AQAR_SPECIAL_MARKETING_REQUESTS',
  AccessToLegalConsultations = 'ACCESS_TO_LEGAL_CONSULTATIONS',
  AccessToHomePlansAsAdmin = 'ACCESS_TO_HOME_PLANS_AS_ADMIN',
  AccessToPlansAsArchitecture = 'ACCESS_TO_PLANS_AS_ARCHITECTURE',
  AccessToVirtualTours = 'ACCESS_TO_VIRTUAL_TOURS',
  AccessToBankLoans = 'ACCESS_TO_BANK_LOANS',
  AccessToProfessionalPhotography = 'ACCESS_TO_PROFESSIONAL_PHOTOGRAPHY',
  AccessToServices = 'ACCESS_TO_SERVICES',
  AccessToServicesAsManager = 'ACCESS_TO_SERVICES_AS_MANAGER',
  AccessToThreeDimensionalDesigns = 'ACCESS_TO_THREE_DIMENSIONAL_DESIGNS',
  AccessToManageThreeDimensionalDesigns = 'ACCESS_TO_MANAGE_THREE_DIMENSIONAL_DESIGNS'
}

export type CreateLoanInput = {
  phone: Scalars['String'];
  age: Scalars['Int'];
  salary: Scalars['Float'];
  joint_salary?: Maybe<Scalars['Float']>;
  bank_user?: Maybe<Scalars['Int']>;
  fc?: Maybe<Scalars['Float']>;
  job: Scalars['Int'];
  start_year?: Maybe<Scalars['Int']>;
  info?: Maybe<Scalars['String']>;
  city: Scalars['String'];
  category: Scalars['Int'];
  value: Scalars['Float'];
  down_payment: Scalars['Float'];
  bank: Scalars['Int'];
  name?: Maybe<Scalars['String']>;
  source?: Maybe<Scalars['Int']>;
  start_date?: Maybe<Scalars['Float']>;
};

export type PublicUserMutOps = {
  __typename?: 'PublicUserMutOps';
  create?: Maybe<PublicUser>;
};


export type PublicUserMutOpsCreateArgs = {
  device_key: Scalars['String'];
  device_id?: Maybe<Scalars['String']>;
};

export type PublicUser = {
  __typename?: 'PublicUser';
  user?: Maybe<PublicUserData>;
  public_token?: Maybe<Scalars['String']>;
};

export type ListingMutOps = {
  __typename?: 'ListingMutOps';
  increment?: Maybe<Scalars['Boolean']>;
  appraisal?: Maybe<Scalars['Boolean']>;
  report?: Maybe<Scalars['Boolean']>;
  verifyListingByOtp?: Maybe<Scalars['Boolean']>;
};


export type ListingMutOpsIncrementArgs = {
  type?: Maybe<IncrementTypes>;
  id: Scalars['Int'];
};


export type ListingMutOpsAppraisalArgs = {
  phone: Scalars['String'];
  id: Scalars['Int'];
  reason?: Maybe<Scalars['String']>;
};


export type ListingMutOpsReportArgs = {
  id: Scalars['Int'];
  content?: Maybe<Scalars['String']>;
  reason: ReportReasons;
};


export type ListingMutOpsVerifyListingByOtpArgs = {
  owner_otp: Scalars['String'];
  deed_code: Scalars['Float'];
  deed_img: Scalars['String'];
  owner_id: Scalars['Float'];
  owner_id_img?: Maybe<Scalars['String']>;
  id_type?: Maybe<DeedIdTypes>;
};

export enum IncrementTypes {
  Views = 'views',
  Screens = 'screens',
  Answers = 'answers',
  Msgs = 'msgs',
  Calls = 'calls',
  Shared = 'shared',
  Favorited = 'favorited',
  Whatsapp = 'whatsapp',
  Impressions = 'impressions',
  Location = 'location',
  Videos = 'videos',
  PhoneViews = 'phone_views'
}

export enum ReportReasons {
  WrongPrice = 'wrong_price',
  WrongLocation = 'wrong_location',
  ImpoliteResponse = 'impolite_response',
  ExpiredListing = 'expired_listing',
  Other = 'other'
}

export type WebMutOps = {
  __typename?: 'WebMutOps';
  sendApp?: Maybe<Scalars['Boolean']>;
};


export type WebMutOpsSendAppArgs = {
  phone: Scalars['String'];
  type: AppType;
};

export type RequestMutOps = {
  __typename?: 'RequestMutOps';
  create?: Maybe<Scalars['Boolean']>;
};


export type RequestMutOpsCreateArgs = {
  type: RequestType;
  contract?: Maybe<Contract>;
  construction?: Maybe<Construction>;
};

export enum RequestType {
  Contract = 'contract',
  Construction = 'construction'
}

export type Contract = {
  owner_id: Scalars['Float'];
  tenant_id: Scalars['Float'];
  phone: Scalars['String'];
};

export type Construction = {
  type: ConstructionType;
  phone: Scalars['String'];
  description?: Maybe<Scalars['String']>;
  city?: Maybe<Scalars['String']>;
};

export enum ConstructionType {
  EngineeringDrawing = 'engineering_drawing',
  Construction = 'construction',
  Consultation = 'consultation',
  ConstructionSupervision = 'construction_supervision',
  InteriorDesign = 'interior_design',
  SmartHomes = 'smart_homes',
  BuildingsExamination = 'buildings_examination'
}

export type VideoInput = {
  video: Scalars['String'];
  thumbnail: Scalars['String'];
  orientation?: Maybe<Orientation>;
};

export type HomePlansQryOps = {
  __typename?: 'HomePlansQryOps';
  listPurchasedPlans?: Maybe<HomePlans>;
  listPlanFiles?: Maybe<Array<Maybe<HomePlanFile>>>;
  getHomePlanFileSignedUrl?: Maybe<Scalars['String']>;
  agreement?: Maybe<Scalars['String']>;
};


export type HomePlansQryOpsListPurchasedPlansArgs = {
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


export type HomePlansQryOpsListPlanFilesArgs = {
  home_plan_id: Scalars['Int'];
};


export type HomePlansQryOpsGetHomePlanFileSignedUrlArgs = {
  home_plan_id: Scalars['Int'];
  home_plan_file_id: Scalars['Int'];
};

export type HomePlanFile = {
  __typename?: 'HomePlanFile';
  id?: Maybe<Scalars['Int']>;
  type?: Maybe<HomePlanFileType>;
  s3_file_name?: Maybe<Scalars['String']>;
  download_file_name?: Maybe<Scalars['String']>;
  home_plan_id?: Maybe<Scalars['Int']>;
};

export enum HomePlanFileType {
  Construction = 'construction',
  Architectural = 'architectural',
  Electrical = 'electrical',
  Drainage = 'drainage',
  Ac = 'ac',
  Exterior = 'exterior',
  Interior = 'interior',
  Pool = 'pool',
  Garden = 'garden',
  Other = 'other'
}

export type HomePlansPartnerMutOps = {
  __typename?: 'HomePlansPartnerMutOps';
  addHomePlanFile?: Maybe<HomePlanFile>;
  removeHomePlanFile?: Maybe<Scalars['Boolean']>;
  create?: Maybe<HomePlan>;
  update?: Maybe<Scalars['Boolean']>;
  updateStatus?: Maybe<Scalars['Boolean']>;
  updateStatusAsAdmin?: Maybe<Scalars['Boolean']>;
  editHomePlanDownloadFileName?: Maybe<Scalars['Boolean']>;
};


export type HomePlansPartnerMutOpsAddHomePlanFileArgs = {
  home_plan_id: Scalars['Int'];
  type: HomePlanFileType;
  s3_file_name: Scalars['String'];
  download_file_name: Scalars['String'];
};


export type HomePlansPartnerMutOpsRemoveHomePlanFileArgs = {
  home_plan_file_id: Scalars['Int'];
};


export type HomePlansPartnerMutOpsCreateArgs = {
  data: HomePlanInput;
};


export type HomePlansPartnerMutOpsUpdateArgs = {
  id: Scalars['Int'];
  data: HomePlanInput;
};


export type HomePlansPartnerMutOpsUpdateStatusArgs = {
  id: Scalars['Int'];
  status: HomePlanStatuses;
};


export type HomePlansPartnerMutOpsUpdateStatusAsAdminArgs = {
  id: Scalars['Int'];
  status: HomePlanStatuses;
};


export type HomePlansPartnerMutOpsEditHomePlanDownloadFileNameArgs = {
  home_plan_file_id: Scalars['Int'];
  download_file_name: Scalars['String'];
};

export type HomePlanInput = {
  name: Scalars['String'];
  code: Scalars['String'];
  area: Scalars['Int'];
  rooms: Scalars['Int'];
  floors: Scalars['Int'];
  wcs: Scalars['Int'];
  price: Scalars['Float'];
  imgs?: Maybe<Array<Maybe<Scalars['String']>>>;
  partner_id: Scalars['Int'];
  width?: Maybe<Scalars['Int']>;
  height?: Maybe<Scalars['Int']>;
  flat_floor_areas?: Maybe<Scalars['String']>;
  details?: Maybe<Scalars['String']>;
  construction_plans?: Maybe<Scalars['Boolean']>;
  architectural_plans?: Maybe<Scalars['Boolean']>;
  electrical_plans?: Maybe<Scalars['Boolean']>;
  drainage_plans?: Maybe<Scalars['Boolean']>;
  ac_plans?: Maybe<Scalars['Boolean']>;
  exterior_designs?: Maybe<Scalars['Boolean']>;
  Interior_designs?: Maybe<Scalars['Boolean']>;
  garden?: Maybe<Scalars['Boolean']>;
  pool?: Maybe<Scalars['Boolean']>;
  basement?: Maybe<Scalars['Boolean']>;
  extension?: Maybe<Scalars['Boolean']>;
  category: Scalars['Int'];
};

export type HomePlansPartnerQryOps = {
  __typename?: 'HomePlansPartnerQryOps';
  getUploadFileSignedUrl?: Maybe<Scalars['String']>;
  getHomePlanFiles?: Maybe<Array<Maybe<HomePlanFile>>>;
  getHomePlanFileSignedUrlAsAdmin?: Maybe<Scalars['String']>;
  listAsAdmin?: Maybe<HomePlans>;
  listAsArchitect?: Maybe<HomePlans>;
  getPlanPurchases?: Maybe<HomePlanPurchases>;
  listHomePlansPartners?: Maybe<HomePlansPartners>;
};


export type HomePlansPartnerQryOpsGetUploadFileSignedUrlArgs = {
  home_plan_id: Scalars['Int'];
  type: HomePlanFileType;
  s3_file_name: Scalars['String'];
};


export type HomePlansPartnerQryOpsGetHomePlanFilesArgs = {
  home_plan_id: Scalars['Int'];
};


export type HomePlansPartnerQryOpsGetHomePlanFileSignedUrlAsAdminArgs = {
  home_plan_file_id: Scalars['Int'];
};


export type HomePlansPartnerQryOpsListAsAdminArgs = {
  partner_id?: Maybe<Scalars['Int']>;
  status?: Maybe<HomePlanStatuses>;
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  order_by?: Maybe<HomePlansSortOptions>;
};


export type HomePlansPartnerQryOpsListAsArchitectArgs = {
  status?: Maybe<HomePlanStatuses>;
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  order_by?: Maybe<HomePlansSortOptions>;
};


export type HomePlansPartnerQryOpsGetPlanPurchasesArgs = {
  home_plan_id: Scalars['Int'];
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


export type HomePlansPartnerQryOpsListHomePlansPartnersArgs = {
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};

export type HomePlanPurchases = {
  __typename?: 'HomePlanPurchases';
  purchases?: Maybe<Array<Maybe<HomePlanPurchase>>>;
  total?: Maybe<Scalars['Int']>;
};

export type HomePlanPurchase = {
  __typename?: 'HomePlanPurchase';
  id?: Maybe<Scalars['Int']>;
  user_id?: Maybe<Scalars['Int']>;
};

export type HomePlansPartners = {
  __typename?: 'HomePlansPartners';
  partners?: Maybe<Array<Maybe<HomePlansPartner>>>;
  total?: Maybe<Scalars['Int']>;
};

export type HomePlansPartner = {
  __typename?: 'HomePlansPartner';
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
};

export type ThreeDimensionalMutOps = {
  __typename?: 'ThreeDimensionalMutOps';
  createRequest?: Maybe<ThreeDimensionalDesingRequest>;
  likeDesign?: Maybe<Scalars['Boolean']>;
  dislikeDesign?: Maybe<Scalars['Boolean']>;
};


export type ThreeDimensionalMutOpsCreateRequestArgs = {
  data: ThreeDimensionalDesingRequestInput;
};


export type ThreeDimensionalMutOpsLikeDesignArgs = {
  design_id: Scalars['Int'];
};


export type ThreeDimensionalMutOpsDislikeDesignArgs = {
  design_id: Scalars['Int'];
};

export type ThreeDimensionalDesingRequestInput = {
  design_id: Scalars['Int'];
  width: Scalars['Float'];
  length: Scalars['Float'];
  height: Scalars['Float'];
  details?: Maybe<Scalars['String']>;
  imgs?: Maybe<Array<Maybe<Scalars['String']>>>;
  videos?: Maybe<Array<Maybe<Scalars['String']>>>;
  pdfs?: Maybe<Array<Maybe<Scalars['String']>>>;
  autocad_files?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type ThreeDimensionalDesingRequest = {
  __typename?: 'ThreeDimensionalDesingRequest';
  id?: Maybe<Scalars['Int']>;
  user_id?: Maybe<Scalars['Int']>;
  request_id?: Maybe<Scalars['Int']>;
  status?: Maybe<ThreeDimensionalDesignRequestStatus>;
  design_id?: Maybe<Scalars['Int']>;
  width?: Maybe<Scalars['Float']>;
  length?: Maybe<Scalars['Float']>;
  height?: Maybe<Scalars['Float']>;
  details?: Maybe<Scalars['String']>;
  imgs?: Maybe<Array<Maybe<Scalars['String']>>>;
  videos?: Maybe<Array<Maybe<Scalars['String']>>>;
  pdfs?: Maybe<Array<Maybe<Scalars['String']>>>;
  autocad_files?: Maybe<Array<Maybe<Scalars['String']>>>;
  user_name?: Maybe<Scalars['String']>;
  user_phone?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['String']>;
};

export enum ThreeDimensionalDesignRequestStatus {
  New = 'new',
  PaymentReceived = 'payment_received',
  UnderProcess = 'under_process',
  Canceled = 'canceled',
  Completed = 'completed',
  Rejected = 'rejected'
}

export type ThreeDimensionalQryOps = {
  __typename?: 'ThreeDimensionalQryOps';
  getConfigs?: Maybe<ThreeDimensionalConfigs>;
  list?: Maybe<AuthThreeDimensionalDesigns>;
  get?: Maybe<AuthThreeDimensionalDesign>;
  getSimilarDesigns?: Maybe<Array<Maybe<AuthThreeDimensionalDesign>>>;
  myFav?: Maybe<AuthThreeDimensionalDesigns>;
};


export type ThreeDimensionalQryOpsListArgs = {
  category_id?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


export type ThreeDimensionalQryOpsGetArgs = {
  design_id: Scalars['Int'];
};


export type ThreeDimensionalQryOpsGetSimilarDesignsArgs = {
  design_id: Scalars['Int'];
};


export type ThreeDimensionalQryOpsMyFavArgs = {
  category_id?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};

export type AuthThreeDimensionalDesigns = {
  __typename?: 'AuthThreeDimensionalDesigns';
  total?: Maybe<Scalars['Int']>;
  designs?: Maybe<Array<Maybe<AuthThreeDimensionalDesign>>>;
};

export type AuthThreeDimensionalDesign = {
  __typename?: 'AuthThreeDimensionalDesign';
  id?: Maybe<Scalars['Int']>;
  name_en?: Maybe<Scalars['String']>;
  name_ar?: Maybe<Scalars['String']>;
  category_id?: Maybe<Scalars['Int']>;
  price?: Maybe<Scalars['Float']>;
  old_price?: Maybe<Scalars['Float']>;
  description_en?: Maybe<Scalars['String']>;
  description_ar?: Maybe<Scalars['String']>;
  specs_en?: Maybe<Array<Maybe<Scalars['String']>>>;
  specs_ar?: Maybe<Array<Maybe<Scalars['String']>>>;
  imgs?: Maybe<Array<Maybe<Scalars['String']>>>;
  cover_img?: Maybe<Scalars['String']>;
  cover_img_width?: Maybe<Scalars['Float']>;
  cover_img_height?: Maybe<Scalars['Float']>;
  status?: Maybe<ThreeDimensionalDesignDesignStatus>;
  likes?: Maybe<Scalars['Float']>;
  liked?: Maybe<Scalars['Boolean']>;
};

export type ThreeDimensionalPartnerMutOps = {
  __typename?: 'ThreeDimensionalPartnerMutOps';
  createDesign?: Maybe<ThreeDimensionalDesign>;
  createCategory?: Maybe<ThreeDimensionalDesignsCategory>;
  updateDesign?: Maybe<Scalars['Boolean']>;
  updateDesignStatus?: Maybe<Scalars['Boolean']>;
  updateRequestStatus?: Maybe<Scalars['Boolean']>;
};


export type ThreeDimensionalPartnerMutOpsCreateDesignArgs = {
  data: ThreeDimensionalDesignInput;
};


export type ThreeDimensionalPartnerMutOpsCreateCategoryArgs = {
  data?: Maybe<ThreeDimensionalDesignsCategoryInput>;
};


export type ThreeDimensionalPartnerMutOpsUpdateDesignArgs = {
  design_id: Scalars['Int'];
  data: ThreeDimensionalDesignInput;
};


export type ThreeDimensionalPartnerMutOpsUpdateDesignStatusArgs = {
  design_id: Scalars['Int'];
  status?: Maybe<ThreeDimensionalDesignDesignStatus>;
};


export type ThreeDimensionalPartnerMutOpsUpdateRequestStatusArgs = {
  request_id: Scalars['Int'];
  status?: Maybe<ThreeDimensionalDesignRequestStatus>;
};

export type ThreeDimensionalDesignInput = {
  name_en: Scalars['String'];
  name_ar: Scalars['String'];
  category_id: Scalars['Int'];
  price: Scalars['Float'];
  old_price?: Maybe<Scalars['Float']>;
  description_en: Scalars['String'];
  description_ar: Scalars['String'];
  specs_en: Array<Maybe<Scalars['String']>>;
  specs_ar: Array<Maybe<Scalars['String']>>;
  imgs: Array<Maybe<Scalars['String']>>;
  cover_img: Scalars['String'];
};

export type ThreeDimensionalDesignsCategoryInput = {
  name_en?: Maybe<Scalars['String']>;
  name_ar?: Maybe<Scalars['String']>;
};

export type ThreeDimensionalPartnerQryOps = {
  __typename?: 'ThreeDimensionalPartnerQryOps';
  listPartners?: Maybe<Array<Maybe<Partner>>>;
  listPartnerDesigns?: Maybe<ThreeDimensionalDesigns>;
  listRequests?: Maybe<ThreeDimensionalDesingRequests>;
  getDesignById?: Maybe<ThreeDimensionalDesign>;
  getRequestById?: Maybe<ThreeDimensionalDesingRequest>;
};


export type ThreeDimensionalPartnerQryOpsListPartnerDesignsArgs = {
  partner_id?: Maybe<Scalars['Int']>;
  status?: Maybe<ThreeDimensionalDesignDesignStatus>;
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


export type ThreeDimensionalPartnerQryOpsListRequestsArgs = {
  partner_id?: Maybe<Scalars['Int']>;
  status?: Maybe<ThreeDimensionalDesignRequestStatus>;
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


export type ThreeDimensionalPartnerQryOpsGetDesignByIdArgs = {
  design_id: Scalars['Int'];
};


export type ThreeDimensionalPartnerQryOpsGetRequestByIdArgs = {
  request_id: Scalars['Int'];
};

export type ThreeDimensionalDesingRequests = {
  __typename?: 'ThreeDimensionalDesingRequests';
  total?: Maybe<Scalars['Int']>;
  requests?: Maybe<Array<Maybe<ThreeDimensionalDesingRequest>>>;
};

export type ListCategoriesQueryVariables = Exact<{ [key: string]: never; }>;


export type ListCategoriesQuery = (
  { __typename?: 'Query' }
  & { Web?: Maybe<(
    { __typename?: 'WebQryOps' }
    & { categories?: Maybe<Array<Maybe<(
      { __typename?: 'Category' }
      & Pick<Category, 'id' | 'keywords' | 'name' | 'path' | 'plural' | 'uri'>
    )>>> }
  )> }
);

export type ListCitiesQueryVariables = Exact<{
  category?: Maybe<Scalars['Int']>;
}>;


export type ListCitiesQuery = (
  { __typename?: 'Query' }
  & { Web?: Maybe<(
    { __typename?: 'WebQryOps' }
    & { cities?: Maybe<Array<Maybe<(
      { __typename?: 'City' }
      & Pick<City, 'uri' | 'title' | 'path' | 'name' | 'directions' | 'count' | 'city_id'>
      & { category?: Maybe<(
        { __typename?: 'Category' }
        & Pick<Category, 'path' | 'id' | 'keywords' | 'name' | 'plural' | 'uri'>
      )> }
    )>>> }
  )> }
);

export type ListDirectionQueryVariables = Exact<{
  category?: Maybe<Scalars['Int']>;
  city_id?: Maybe<Scalars['Int']>;
}>;


export type ListDirectionQuery = (
  { __typename?: 'Query' }
  & { Web?: Maybe<(
    { __typename?: 'WebQryOps' }
    & { directions?: Maybe<Array<Maybe<(
      { __typename?: 'Direction' }
      & Pick<Direction, 'count' | 'direction_id' | 'name' | 'path' | 'title' | 'uri'>
      & { category?: Maybe<(
        { __typename?: 'Category' }
        & Pick<Category, 'id' | 'keywords' | 'name' | 'path' | 'plural' | 'uri'>
      )>, city?: Maybe<(
        { __typename?: 'City' }
        & Pick<City, 'city_id' | 'count' | 'directions' | 'name' | 'path' | 'title' | 'uri'>
        & { category?: Maybe<(
          { __typename?: 'Category' }
          & Pick<Category, 'id' | 'keywords' | 'name' | 'path' | 'plural' | 'uri'>
        )> }
      )> }
    )>>> }
  )> }
);

export type ListDistrictsQueryVariables = Exact<{
  category?: Maybe<Scalars['Int']>;
  city_id?: Maybe<Scalars['Int']>;
  direction_id?: Maybe<Scalars['Int']>;
}>;


export type ListDistrictsQuery = (
  { __typename?: 'Query' }
  & { Web?: Maybe<(
    { __typename?: 'WebQryOps' }
    & { districts?: Maybe<Array<Maybe<(
      { __typename?: 'District' }
      & Pick<District, 'count' | 'district_id' | 'name' | 'path' | 'title' | 'uri'>
      & { category?: Maybe<(
        { __typename?: 'Category' }
        & Pick<Category, 'id' | 'keywords' | 'name' | 'path' | 'plural' | 'uri'>
      )>, city?: Maybe<(
        { __typename?: 'City' }
        & Pick<City, 'city_id' | 'count' | 'directions' | 'name' | 'path' | 'title' | 'uri'>
        & { category?: Maybe<(
          { __typename?: 'Category' }
          & Pick<Category, 'id' | 'keywords' | 'name' | 'path' | 'plural' | 'uri'>
        )> }
      )>, direction?: Maybe<(
        { __typename?: 'Direction' }
        & Pick<Direction, 'count' | 'direction_id' | 'name' | 'path' | 'title' | 'uri'>
        & { category?: Maybe<(
          { __typename?: 'Category' }
          & Pick<Category, 'id' | 'keywords' | 'name' | 'plural' | 'path' | 'uri'>
        )>, city?: Maybe<(
          { __typename?: 'City' }
          & Pick<City, 'city_id' | 'count' | 'directions' | 'name' | 'path' | 'title' | 'uri'>
          & { category?: Maybe<(
            { __typename?: 'Category' }
            & Pick<Category, 'id' | 'keywords' | 'name' | 'path' | 'plural' | 'uri'>
          )> }
        )> }
      )> }
    )>>> }
  )> }
);

export type ListFeaturedQueryVariables = Exact<{ [key: string]: never; }>;


export type ListFeaturedQuery = (
  { __typename?: 'Query' }
  & { Web?: Maybe<(
    { __typename?: 'WebQryOps' }
    & { featured?: Maybe<(
      { __typename?: 'WebResults' }
      & Pick<WebResults, 'total'>
      & { listings?: Maybe<Array<Maybe<(
        { __typename?: 'ElasticWebListing' }
        & Pick<ElasticWebListing, 'ac' | 'address' | 'advertiser_type' | 'age' | 'appraisal' | 'appraisal_id' | 'apts' | 'area' | 'backyard' | 'basement' | 'beds' | 'boosted' | 'car_entrance' | 'category' | 'city' | 'city_id' | 'content' | 'create_time' | 'direction' | 'direction_id' | 'district' | 'district_id' | 'driver' | 'duplex' | 'employee_user_id' | 'extra_unit' | 'family' | 'family_section' | 'fb' | 'fl' | 'furnished' | 'has_img' | 'has_video' | 'id' | 'imgs' | 'imgs_desc' | 'ketchen' | 'last_update' | 'lift' | 'livings' | 'maid' | 'men_place' | 'meter_price' | 'mgr_user_id' | 'path' | 'playground' | 'pool' | 'premium' | 'price' | 'province_id' | 'refresh' | 'rent_period' | 'rooms' | 'special' | 'stairs' | 'status' | 'stores' | 'street_direction' | 'street_width' | 'tent' | 'title' | 'trees' | 'type' | 'unique_listing' | 'uri' | 'user_id' | 'user_type' | 'vb' | 'verified' | 'virtual_tour_link' | 'wc' | 'wells' | 'women_place'>
        & { employee?: Maybe<(
          { __typename?: 'ListingEmployee' }
          & Pick<ListingEmployee, 'img' | 'name' | 'phone'>
        )>, location?: Maybe<(
          { __typename?: 'Location' }
          & Pick<Location, 'lat' | 'lng'>
        )>, native?: Maybe<(
          { __typename?: 'WebNativeListing' }
          & Pick<WebNativeListing, 'description' | 'external_url' | 'image' | 'logo' | 'title'>
        )>, stc_coverage?: Maybe<(
          { __typename?: 'StcCoverage' }
          & Pick<StcCoverage, 'fiber' | 'fifth_generation' | 'fourth_generation'>
        )>, subscription?: Maybe<(
          { __typename?: 'ListingSubscription' }
          & Pick<ListingSubscription, 'about' | 'img' | 'name' | 'phones'>
        )>, user?: Maybe<(
          { __typename?: 'ListingUser' }
          & Pick<ListingUser, 'fee' | 'iam_verified' | 'img' | 'name' | 'paid' | 'phone' | 'review' | 'type'>
        )>, videos?: Maybe<Array<Maybe<(
          { __typename?: 'Video' }
          & Pick<Video, 'orientation' | 'thumbnail' | 'video'>
        )>>> }
      )>>> }
    )> }
  )> }
);

export type ListQueryVariables = Exact<{
  from?: Maybe<Scalars['Int']>;
  size?: Maybe<Scalars['Int']>;
  sort?: Maybe<SortInput>;
  structure?: Maybe<Scalars['Boolean']>;
  where?: Maybe<WhereInput>;
}>;


export type ListQuery = (
  { __typename?: 'Query' }
  & { Web?: Maybe<(
    { __typename?: 'WebQryOps' }
    & { find?: Maybe<(
      { __typename?: 'WebResults' }
      & Pick<WebResults, 'total'>
      & { listings?: Maybe<Array<Maybe<(
        { __typename?: 'ElasticWebListing' }
        & Pick<ElasticWebListing, 'ac' | 'address' | 'advertiser_type' | 'age' | 'appraisal' | 'appraisal_id' | 'apts' | 'area' | 'backyard' | 'basement' | 'beds' | 'boosted' | 'car_entrance' | 'category' | 'city' | 'city_id' | 'content' | 'create_time' | 'direction' | 'direction_id' | 'district' | 'district_id' | 'driver' | 'duplex' | 'employee_user_id' | 'extra_unit' | 'family' | 'family_section' | 'fb' | 'fl' | 'furnished' | 'has_img' | 'has_video' | 'id' | 'imgs' | 'imgs_desc' | 'ketchen' | 'last_update' | 'lift' | 'livings' | 'maid' | 'men_place' | 'meter_price' | 'mgr_user_id' | 'path' | 'playground' | 'pool' | 'premium' | 'price' | 'province_id' | 'refresh' | 'rent_period' | 'rooms' | 'special' | 'stairs' | 'status' | 'stores' | 'street_direction' | 'street_width' | 'tent' | 'title' | 'trees' | 'type' | 'unique_listing' | 'uri' | 'user_id' | 'user_type' | 'vb' | 'verified' | 'virtual_tour_link' | 'wc' | 'wells' | 'women_place'>
        & { employee?: Maybe<(
          { __typename?: 'ListingEmployee' }
          & Pick<ListingEmployee, 'img' | 'name' | 'phone'>
        )>, location?: Maybe<(
          { __typename?: 'Location' }
          & Pick<Location, 'lat' | 'lng'>
        )>, native?: Maybe<(
          { __typename?: 'WebNativeListing' }
          & Pick<WebNativeListing, 'description' | 'external_url' | 'image' | 'logo' | 'title'>
        )>, stc_coverage?: Maybe<(
          { __typename?: 'StcCoverage' }
          & Pick<StcCoverage, 'fiber' | 'fifth_generation' | 'fourth_generation'>
        )>, subscription?: Maybe<(
          { __typename?: 'ListingSubscription' }
          & Pick<ListingSubscription, 'about' | 'img' | 'name' | 'phones'>
        )>, user?: Maybe<(
          { __typename?: 'ListingUser' }
          & Pick<ListingUser, 'fee' | 'iam_verified' | 'img' | 'name' | 'paid' | 'phone' | 'review' | 'type'>
        )>, videos?: Maybe<Array<Maybe<(
          { __typename?: 'Video' }
          & Pick<Video, 'orientation' | 'thumbnail' | 'video'>
        )>>> }
      )>>> }
    )> }
  )> }
);

export type GetDistrictRatingQueryVariables = Exact<{
  district_id?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
}>;


export type GetDistrictRatingQuery = (
  { __typename?: 'Query' }
  & { Rating?: Maybe<(
    { __typename?: 'RatingQryOps' }
    & { getDistrictRate?: Maybe<(
      { __typename?: 'RateOutput' }
      & Pick<RateOutput, 'educational_services_rate' | 'electricity_water_rate' | 'internet_rate' | 'medical_services_rate' | 'offset' | 'rate' | 'rate_count' | 'streets_rate'>
      & { list?: Maybe<Array<(
        { __typename?: 'RateItemOutput' }
        & Pick<RateItemOutput, 'car_parking_issues' | 'clean' | 'comment' | 'created_time' | 'electricity' | 'elementary_school' | 'fiber' | 'general_issues' | 'high_school' | 'id' | 'internet' | 'kindergarten' | 'medical_center' | 'medical_center_review' | 'middle_school' | 'park' | 'pharmacies' | 'rate' | 'universities' | 'water'>
      )>> }
    )> }
  )> }
);

export type LoginMutationVariables = Exact<{
  phone?: Maybe<Scalars['String']>;
  pw?: Maybe<Scalars['String']>;
}>;


export type LoginMutation = (
  { __typename?: 'Mutation' }
  & { User?: Maybe<(
    { __typename?: 'UserMutOps' }
    & { login?: Maybe<(
      { __typename?: 'AuthUser' }
      & Pick<AuthUser, 'token'>
      & { user?: Maybe<(
        { __typename?: 'AuthUserField' }
        & Pick<AuthUserField, 'user_id' | 'name' | 'phone' | 'img'>
      )> }
    )> }
  )> }
);

export const ListCategoriesDocument = gql`
    query listCategories {
  Web {
    categories(lang: ar) {
      id
      keywords
      name
      path
      plural
      uri
    }
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class ListCategoriesGQL extends Apollo.Query<ListCategoriesQuery, ListCategoriesQueryVariables> {
    document = ListCategoriesDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const ListCitiesDocument = gql`
    query listCities($category: Int = 0) {
  Web {
    cities(category: $category) {
      uri
      title
      path
      name
      directions
      count
      city_id
      category {
        path
        id
        keywords
        name
        plural
        uri
      }
    }
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class ListCitiesGQL extends Apollo.Query<ListCitiesQuery, ListCitiesQueryVariables> {
    document = ListCitiesDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const ListDirectionDocument = gql`
    query listDirection($category: Int = 0, $city_id: Int = 21) {
  Web {
    directions(category: $category, city_id: $city_id) {
      category {
        id
        keywords
        name
        path
        plural
        uri
      }
      city {
        category {
          id
          keywords
          name
          path
          plural
          uri
        }
        city_id
        count
        directions
        name
        path
        title
        uri
      }
      count
      direction_id
      name
      path
      title
      uri
    }
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class ListDirectionGQL extends Apollo.Query<ListDirectionQuery, ListDirectionQueryVariables> {
    document = ListDirectionDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const ListDistrictsDocument = gql`
    query listDistricts($category: Int = 0, $city_id: Int = 21, $direction_id: Int = 0) {
  Web {
    districts(direction_id: $direction_id, city_id: $city_id, category: $category) {
      category {
        id
        keywords
        name
        path
        plural
        uri
      }
      city {
        city_id
        count
        directions
        name
        path
        title
        uri
        category {
          id
          keywords
          name
          path
          plural
          uri
        }
      }
      count
      direction {
        category {
          id
          keywords
          name
          plural
          path
          uri
        }
        city {
          category {
            id
            keywords
            name
            path
            plural
            uri
          }
          city_id
          count
          directions
          name
          path
          title
          uri
        }
        count
        direction_id
        name
        path
        title
        uri
      }
      district_id
      name
      path
      title
      uri
    }
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class ListDistrictsGQL extends Apollo.Query<ListDistrictsQuery, ListDistrictsQueryVariables> {
    document = ListDistrictsDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const ListFeaturedDocument = gql`
    query listFeatured {
  Web {
    featured {
      listings {
        ac
        address
        advertiser_type
        age
        appraisal
        appraisal_id
        apts
        area
        backyard
        basement
        beds
        boosted
        car_entrance
        category
        city
        city_id
        content
        create_time
        direction
        direction_id
        district
        district_id
        driver
        duplex
        employee {
          img
          name
          phone
        }
        employee_user_id
        extra_unit
        family
        family_section
        fb
        fl
        furnished
        has_img
        has_video
        id
        imgs
        imgs_desc
        ketchen
        last_update
        lift
        livings
        location {
          lat
          lng
        }
        maid
        men_place
        meter_price
        mgr_user_id
        native {
          description
          external_url
          image
          logo
          title
        }
        path
        playground
        pool
        premium
        price
        province_id
        refresh
        rent_period
        rooms
        special
        stairs
        status
        stc_coverage {
          fiber
          fifth_generation
          fourth_generation
        }
        stores
        street_direction
        street_width
        subscription {
          about
          img
          name
          phones
        }
        tent
        title
        trees
        type
        unique_listing
        uri
        user {
          fee
          iam_verified
          img
          name
          paid
          phone
          review
          type
        }
        user_id
        user_type
        vb
        verified
        videos {
          orientation
          thumbnail
          video
        }
        virtual_tour_link
        wc
        wells
        women_place
      }
      total
    }
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class ListFeaturedGQL extends Apollo.Query<ListFeaturedQuery, ListFeaturedQueryVariables> {
    document = ListFeaturedDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const ListDocument = gql`
    query list($from: Int = 0, $size: Int = 70, $sort: SortInput = {create_time: desc, has_img: desc}, $structure: Boolean = false, $where: WhereInput = {}) {
  Web {
    find(
      from: $from
      size: $size
      sort: $sort
      structure: $structure
      where: $where
    ) {
      listings {
        ac
        address
        advertiser_type
        age
        appraisal
        appraisal_id
        apts
        area
        backyard
        basement
        beds
        boosted
        car_entrance
        category
        city
        city_id
        content
        create_time
        direction
        direction_id
        district
        district_id
        driver
        duplex
        employee {
          img
          name
          phone
        }
        employee_user_id
        extra_unit
        family
        family_section
        fb
        fl
        furnished
        has_img
        has_video
        id
        imgs
        imgs_desc
        ketchen
        last_update
        lift
        livings
        location {
          lat
          lng
        }
        maid
        men_place
        meter_price
        mgr_user_id
        native {
          description
          external_url
          image
          logo
          title
        }
        path
        playground
        pool
        premium
        price
        province_id
        refresh
        rent_period
        rooms
        special
        stairs
        status
        stc_coverage {
          fiber
          fifth_generation
          fourth_generation
        }
        stores
        street_direction
        street_width
        subscription {
          about
          img
          name
          phones
        }
        tent
        title
        trees
        type
        unique_listing
        uri
        user {
          fee
          iam_verified
          img
          name
          paid
          phone
          review
          type
        }
        user_id
        user_type
        vb
        verified
        videos {
          orientation
          thumbnail
          video
        }
        virtual_tour_link
        wc
        wells
        women_place
      }
      total
    }
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class ListGQL extends Apollo.Query<ListQuery, ListQueryVariables> {
    document = ListDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const GetDistrictRatingDocument = gql`
    query getDistrictRating($district_id: Int = 0, $offset: Int = 0) {
  Rating {
    getDistrictRate(district_id: $district_id, offset: $offset) {
      educational_services_rate
      electricity_water_rate
      internet_rate
      list {
        car_parking_issues
        clean
        comment
        created_time
        electricity
        elementary_school
        fiber
        general_issues
        high_school
        id
        internet
        kindergarten
        medical_center
        medical_center_review
        middle_school
        park
        pharmacies
        rate
        universities
        water
      }
      medical_services_rate
      offset
      rate
      rate_count
      streets_rate
    }
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class GetDistrictRatingGQL extends Apollo.Query<GetDistrictRatingQuery, GetDistrictRatingQueryVariables> {
    document = GetDistrictRatingDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const LoginDocument = gql`
    mutation login($phone: String = "", $pw: String = "") {
  User {
    login(phone: $phone, pw: $pw) {
      token
      user {
        user_id
        name
        phone
        img
      }
    }
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class LoginGQL extends Apollo.Mutation<LoginMutation, LoginMutationVariables> {
    document = LoginDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }