import { gql } from 'apollo-angular';
import { Injectable } from '@angular/core';
import * as Apollo from 'apollo-angular';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export interface Scalars {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
}



export interface Query {
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
}

export interface InfoQryOps {
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
}


export interface InfoQryOpsAppVersionArgs {
  type: AppType;
}

export enum AppType {
  Iphone = 'iphone',
  Android = 'android'
}

export interface AppVersion {
  __typename?: 'AppVersion';
  version?: Maybe<Scalars['String']>;
  required?: Maybe<Scalars['Boolean']>;
  last_update_time?: Maybe<Scalars['Float']>;
}

export interface Updates {
  __typename?: 'Updates';
  list?: Maybe<Array<Maybe<Update>>>;
  last_update_time?: Maybe<Scalars['Float']>;
}

export interface Update {
  __typename?: 'Update';
  update_id?: Maybe<Scalars['Int']>;
  content?: Maybe<Scalars['String']>;
  excerpt?: Maybe<Scalars['String']>;
  img?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  create_time?: Maybe<Scalars['Float']>;
}

export interface Agreement {
  __typename?: 'Agreement';
  title?: Maybe<Scalars['String']>;
  content?: Maybe<Scalars['String']>;
}

export interface AppConfigurations {
  __typename?: 'AppConfigurations';
  show_bab_filters?: Maybe<Scalars['Boolean']>;
  promote_engineering_requests?: Maybe<Scalars['Boolean']>;
}

export interface UserQryOps {
  __typename?: 'UserQryOps';
  get?: Maybe<User>;
  relative?: Maybe<RelativeUser>;
  _get?: Maybe<RelativeUser>;
  reviews?: Maybe<UserReviews>;
  isRegisteredToken?: Maybe<Scalars['Boolean']>;
  getPhones?: Maybe<Array<Maybe<Scalars['String']>>>;
}


export interface UserQryOpsGetArgs {
  user_id?: Maybe<Scalars['Int']>;
  phone?: Maybe<Scalars['String']>;
}


export interface UserQryOpsRelativeArgs {
  user_id?: Maybe<Scalars['Int']>;
  phone?: Maybe<Scalars['String']>;
  current_user_id?: Maybe<Scalars['Int']>;
}


export interface UserQryOpsGetArgs {
  user_id?: Maybe<Scalars['Int']>;
  phone?: Maybe<Scalars['String']>;
  current_user_id?: Maybe<Scalars['Int']>;
}


export interface UserQryOpsReviewsArgs {
  user_id: Scalars['Int'];
  offset?: Maybe<Scalars['Int']>;
}


export interface UserQryOpsIsRegisteredTokenArgs {
  type: AppType;
  device_id: Scalars['String'];
}


export interface UserQryOpsGetPhonesArgs {
  user_id: Scalars['Int'];
}

export interface User {
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
}

export interface RelativeUser {
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
}

export interface UserReviews {
  __typename?: 'UserReviews';
  reviews?: Maybe<Array<Maybe<Review>>>;
  total?: Maybe<Scalars['Int']>;
}

export interface Review {
  __typename?: 'Review';
  review_id?: Maybe<Scalars['Int']>;
  reviewer_id?: Maybe<Scalars['Int']>;
  content?: Maybe<Scalars['String']>;
  value?: Maybe<Scalars['Int']>;
  create_time?: Maybe<Scalars['Float']>;
  reason?: Maybe<Scalars['String']>;
  last_update?: Maybe<Scalars['Float']>;
}

export interface PublicUserQryOps {
  __typename?: 'PublicUserQryOps';
  get?: Maybe<PublicUserData>;
}


export interface PublicUserQryOpsGetArgs {
  user_id: Scalars['Int'];
}

export interface PublicUserData {
  __typename?: 'PublicUserData';
  user_id?: Maybe<Scalars['Int']>;
  status?: Maybe<Scalars['Int']>;
}

export interface ListingQryOps {
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
}


export interface ListingQryOpsGetArgs {
  id?: Maybe<Scalars['Int']>;
  uri?: Maybe<Scalars['String']>;
}


export interface ListingQryOpsRelativeArgs {
  id: Scalars['Int'];
  current_user_id?: Maybe<Scalars['Int']>;
}


export interface ListingQryOpsGetArgs {
  id: Scalars['Int'];
  current_user_id?: Maybe<Scalars['Int']>;
}


export interface ListingQryOpsViewsArgs {
  id: Scalars['Int'];
}


export interface ListingQryOpsGetExtraInfoArgs {
  id: Scalars['Int'];
}


export interface ListingQryOpsBookingsArgs {
  id: Scalars['Int'];
}


export interface ListingQryOpsGetAwqafReviewedArgs {
  polygon?: Maybe<Array<LocationInput>>;
  where?: Maybe<AwqafListingFilter>;
}


export interface ListingQryOpsGetListingByOwnerOtpArgs {
  owner_otp: Scalars['String'];
}


export interface ListingQryOpsGetVerifyListingByOwnerOtpArgs {
  owner_otp: Scalars['String'];
}

export interface Listing {
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
}

export interface Location {
  __typename?: 'Location';
  lat: Scalars['Float'];
  lng: Scalars['Float'];
}

export interface Service {
  __typename?: 'Service';
  location?: Maybe<Location>;
  name?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
}

export interface ListingUser {
  __typename?: 'ListingUser';
  phone?: Maybe<Scalars['Float']>;
  name?: Maybe<Scalars['String']>;
  img?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['Int']>;
  paid?: Maybe<Scalars['Int']>;
  fee?: Maybe<Scalars['Int']>;
  review?: Maybe<Scalars['Float']>;
  iam_verified?: Maybe<Scalars['Boolean']>;
}

export interface Video {
  __typename?: 'Video';
  video: Scalars['String'];
  thumbnail?: Maybe<Scalars['String']>;
  orientation?: Maybe<Orientation>;
}

export enum Orientation {
  Landscape = 'landscape',
  Portrait = 'portrait'
}

export interface ListingSubscription {
  __typename?: 'ListingSubscription';
  phones?: Maybe<Array<Maybe<Scalars['Float']>>>;
  about?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  img?: Maybe<Scalars['String']>;
}

export interface ListingEmployee {
  __typename?: 'ListingEmployee';
  phone?: Maybe<Scalars['Float']>;
  name?: Maybe<Scalars['String']>;
  img?: Maybe<Scalars['String']>;
}

export interface StcCoverage {
  __typename?: 'StcCoverage';
  fifth_generation?: Maybe<Scalars['Boolean']>;
  fourth_generation?: Maybe<Scalars['Boolean']>;
  fiber?: Maybe<Scalars['Boolean']>;
}

export enum DeedIdTypes {
  Nid = 'nid',
  Iqama = 'iqama',
  Crno = 'crno'
}

export interface AwqafQuestionAnswer {
  __typename?: 'awqafQuestionAnswer';
  question?: Maybe<Scalars['String']>;
  answer?: Maybe<Scalars['String']>;
}

export enum AdvertiserTypes {
  Owner = 'owner',
  Agent = 'agent',
  ExclusiveMarketer = 'exclusive_marketer',
  NormalMarketer = 'normal_marketer'
}

export enum Appraisal {
  Bab = 'BAB'
}

export interface RelativeListing {
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
}

export interface ListingExtraInfo {
  __typename?: 'ListingExtraInfo';
  views: Scalars['Int'];
  support_imgs: Array<Maybe<Scalars['String']>>;
  support_imgs_desc: Array<Maybe<Scalars['String']>>;
}

export interface LocationInput {
  lat: Scalars['Float'];
  lng: Scalars['Float'];
}

export interface AwqafListingFilter {
  category?: Maybe<Scalars['Int']>;
}

export interface PListings {
  __typename?: 'PListings';
  listings?: Maybe<Array<Maybe<Listing>>>;
  total?: Maybe<Scalars['Int']>;
}

export interface SearchQryOps {
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
}


export interface SearchQryOpsPredictArgs {
  prefix: Scalars['String'];
  location?: Maybe<LocationInput>;
}


export interface SearchQryOpsDetailsArgs {
  place_id: Scalars['String'];
}


export interface SearchQryOpsFindArgs {
  where?: Maybe<WhereInput>;
  polygon?: Maybe<Array<LocationInput>>;
  sort?: Maybe<SortInput>;
  size?: Maybe<Scalars['Int']>;
  from?: Maybe<Scalars['Int']>;
  refreshed?: Maybe<Scalars['Boolean']>;
  premium?: Maybe<Scalars['Boolean']>;
  structure?: Maybe<Scalars['Boolean']>;
}


export interface SearchQryOpsPremiumArgs {
  category?: Maybe<Scalars['Int']>;
  polygon: Array<LocationInput>;
  size?: Maybe<Scalars['Int']>;
}


export interface SearchQryOpsCommercialArgs {
  category?: Maybe<Scalars['Int']>;
  polygon: Array<LocationInput>;
  size?: Maybe<Scalars['Int']>;
}


export interface SearchQryOpsCountArgs {
  where?: Maybe<WhereInput>;
  polygon?: Maybe<Array<LocationInput>>;
}


export interface SearchQryOpsStatsArgs {
  category: Scalars['Int'];
  location: LocationInput;
}


export interface SearchQryOpsRelatedArgs {
  id?: Maybe<Scalars['Int']>;
  size?: Maybe<Scalars['Int']>;
}


export interface SearchQryOpsProjectsArgs {
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
}


export interface SearchQryOpsProjectArgs {
  project_id: Scalars['Int'];
}


export interface SearchQryOpsCommercialListingsArgs {
  where?: Maybe<WhereInput>;
  structure?: Maybe<Scalars['Boolean']>;
}

export interface Prediction {
  __typename?: 'Prediction';
  description?: Maybe<Scalars['String']>;
  place_id?: Maybe<Scalars['String']>;
}

export interface ViewPort {
  __typename?: 'ViewPort';
  northeast?: Maybe<Location>;
  southwest?: Maybe<Location>;
}

export interface WhereInput {
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
}

/** If "eq" field exist the other fields will be ignored and if "gt" and/or "lt" fields exist , "ge" and/or "le" fields will be ignored */
export interface IntSearchField {
  eq?: Maybe<Scalars['Int']>;
  gt?: Maybe<Scalars['Int']>;
  lt?: Maybe<Scalars['Int']>;
  gte?: Maybe<Scalars['Int']>;
  lte?: Maybe<Scalars['Int']>;
  neq?: Maybe<Scalars['Int']>;
  inar?: Maybe<Array<Maybe<Scalars['Int']>>>;
  ninar?: Maybe<Array<Maybe<Scalars['Int']>>>;
}

/** If "eq" field exist the other fields will be ignored and if "gt" and/or "lt" fields exist , "ge" and/or "le" fields will be ignored */
export interface FloatSearchField {
  eq?: Maybe<Scalars['Float']>;
  gt?: Maybe<Scalars['Float']>;
  lt?: Maybe<Scalars['Float']>;
  gte?: Maybe<Scalars['Float']>;
  lte?: Maybe<Scalars['Float']>;
  neq?: Maybe<Scalars['Float']>;
  inar?: Maybe<Array<Maybe<Scalars['Float']>>>;
  ninar?: Maybe<Array<Maybe<Scalars['Float']>>>;
}

export interface SortInput {
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
}

export enum SortType {
  Asc = 'asc',
  Desc = 'desc'
}

export interface FindResults {
  __typename?: 'FindResults';
  total?: Maybe<Scalars['Int']>;
  listings?: Maybe<Array<Maybe<ElasticListing>>>;
  featured?: Maybe<Array<Maybe<ElasticListing>>>;
}

export interface ElasticListing {
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
}

export interface Stats {
  __typename?: 'Stats';
  name?: Maybe<Scalars['String']>;
  district_id?: Maybe<Scalars['Int']>;
  values?: Maybe<Array<Maybe<StateValue>>>;
}

export interface StateValue {
  __typename?: 'StateValue';
  time_range?: Maybe<Scalars['String']>;
  year?: Maybe<Scalars['Int']>;
  order?: Maybe<Scalars['Int']>;
  count?: Maybe<Scalars['Int']>;
  price?: Maybe<Scalars['Int']>;
}

export interface RelatedResult {
  __typename?: 'RelatedResult';
  listings?: Maybe<Array<Maybe<ElasticListing>>>;
  title?: Maybe<Scalars['String']>;
  path?: Maybe<Scalars['String']>;
}

export interface Projects {
  __typename?: 'Projects';
  list?: Maybe<Array<Maybe<Project>>>;
  total?: Maybe<Scalars['Int']>;
}

export interface Project {
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
}

export interface CommercialListings {
  __typename?: 'CommercialListings';
  total?: Maybe<Scalars['Int']>;
  listings?: Maybe<Array<Maybe<CommercialListing>>>;
}

export interface CommercialListing {
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
}

export interface WebQryOps {
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
}


export interface WebQryOpsCategoriesArgs {
  lang: Langs;
}


export interface WebQryOpsCitiesArgs {
  category: Scalars['Int'];
}


export interface WebQryOpsDirectionsArgs {
  category: Scalars['Int'];
  city_id: Scalars['Int'];
}


export interface WebQryOpsDistrictsArgs {
  category: Scalars['Int'];
  city_id: Scalars['Int'];
  direction_id?: Maybe<Scalars['Int']>;
}


export interface WebQryOpsListingArgs {
  id?: Maybe<Scalars['Int']>;
  uri?: Maybe<Scalars['String']>;
}


export interface WebQryOpsFindArgs {
  where?: Maybe<WhereInput>;
  polygon?: Maybe<Array<LocationInput>>;
  sort?: Maybe<SortInput>;
  size?: Maybe<Scalars['Int']>;
  from?: Maybe<Scalars['Int']>;
  structure?: Maybe<Scalars['Boolean']>;
}


export interface WebQryOpsSpecialArgs {
  category: Scalars['Int'];
  city_id?: Maybe<Scalars['Int']>;
  district_id?: Maybe<Scalars['Int']>;
  size?: Maybe<Scalars['Int']>;
}


export interface WebQryOpsRelatedArgs {
  id?: Maybe<Scalars['Int']>;
  uri?: Maybe<Scalars['String']>;
  size?: Maybe<Scalars['Int']>;
}


export interface WebQryOpsStatsArgs {
  category: Scalars['Int'];
  city_id: Scalars['Int'];
}


export interface WebQryOpsGetUpdateArgs {
  update_id: Scalars['Int'];
}


export interface WebQryOpsGetUserArgs {
  user_id: Scalars['Int'];
}


export interface WebQryOpsGetPhoneArgs {
  id: Scalars['Int'];
}

export enum Langs {
  Ar = 'ar',
  En = 'en'
}

export interface Category {
  __typename?: 'Category';
  name?: Maybe<Scalars['String']>;
  plural?: Maybe<Scalars['String']>;
  uri?: Maybe<Scalars['String']>;
  path?: Maybe<Scalars['String']>;
  keywords?: Maybe<Array<Maybe<Scalars['String']>>>;
  id?: Maybe<Scalars['Int']>;
}

export interface City {
  __typename?: 'City';
  name?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  uri?: Maybe<Scalars['String']>;
  path?: Maybe<Scalars['String']>;
  city_id?: Maybe<Scalars['Int']>;
  count?: Maybe<Scalars['Int']>;
  category?: Maybe<Category>;
  directions?: Maybe<Scalars['Boolean']>;
}

export interface Direction {
  __typename?: 'Direction';
  name?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  uri?: Maybe<Scalars['String']>;
  path?: Maybe<Scalars['String']>;
  direction_id?: Maybe<Scalars['Int']>;
  category?: Maybe<Category>;
  city?: Maybe<City>;
  count?: Maybe<Scalars['Int']>;
}

export interface District {
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
}

export interface Region {
  __typename?: 'Region';
  district?: Maybe<DistrictType>;
  direction?: Maybe<DirectionType>;
  city?: Maybe<CityType>;
}

export interface DistrictType {
  __typename?: 'DistrictType';
  district_id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
  uri?: Maybe<Scalars['String']>;
  path?: Maybe<Scalars['String']>;
}

export interface DirectionType {
  __typename?: 'DirectionType';
  direction_id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
  uri?: Maybe<Scalars['String']>;
  path?: Maybe<Scalars['String']>;
}

export interface CityType {
  __typename?: 'CityType';
  city_id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
  uri?: Maybe<Scalars['String']>;
  path?: Maybe<Scalars['String']>;
}

export interface WebListing {
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
}

export interface WebLinks {
  __typename?: 'WebLinks';
  city?: Maybe<City>;
  direction?: Maybe<Direction>;
  district?: Maybe<District>;
}

export interface WebResults {
  __typename?: 'WebResults';
  total?: Maybe<Scalars['Int']>;
  listings?: Maybe<Array<Maybe<ElasticWebListing>>>;
}

export interface ElasticWebListing {
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
}

export interface WebNativeListing {
  __typename?: 'WebNativeListing';
  logo?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  image?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  external_url?: Maybe<Scalars['String']>;
}

export interface SpecialWebResults {
  __typename?: 'SpecialWebResults';
  city?: Maybe<WebResults>;
  district?: Maybe<WebResults>;
}

export interface RelatedWebResults {
  __typename?: 'RelatedWebResults';
  listings?: Maybe<Array<Maybe<ElasticWebListing>>>;
  title?: Maybe<Scalars['String']>;
  path?: Maybe<Scalars['String']>;
}

export interface NewsQryOps {
  __typename?: 'NewsQryOps';
  fetchNews?: Maybe<FetchNewsOutput>;
}


export interface NewsQryOpsFetchNewsArgs {
  offset?: Maybe<Scalars['Int']>;
}

export interface FetchNewsOutput {
  __typename?: 'FetchNewsOutput';
  list?: Maybe<Array<NewsItemOutput>>;
  offset?: Maybe<Scalars['Int']>;
}

export interface NewsItemOutput {
  __typename?: 'NewsItemOutput';
  timestamp?: Maybe<Scalars['Float']>;
  title?: Maybe<Scalars['String']>;
  img?: Maybe<Scalars['String']>;
  content?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
}

export interface RatingQryOps {
  __typename?: 'RatingQryOps';
  getDistrictRate?: Maybe<RateOutput>;
}


export interface RatingQryOpsGetDistrictRateArgs {
  district_id: Scalars['Int'];
  offset?: Maybe<Scalars['Int']>;
}

export interface RateOutput {
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
}

export interface RateItemOutput {
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
}

export interface OfficesQryOps {
  __typename?: 'OfficesQryOps';
  packages?: Maybe<Array<Maybe<SubscriptionPackageType>>>;
  fees?: Maybe<Array<Maybe<PaymentsFeesType>>>;
  getProfile?: Maybe<OfficeProfile>;
  Ejar?: Maybe<EjarQryOps>;
}


export interface OfficesQryOpsGetProfileArgs {
  mgr_user_id: Scalars['Int'];
}

export interface SubscriptionPackageType {
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
}

export interface PaymentsFeesType {
  __typename?: 'PaymentsFeesType';
  name_ar?: Maybe<Scalars['String']>;
  name_en?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  transaction_type?: Maybe<Scalars['Int']>;
  transaction_category?: Maybe<Scalars['Int']>;
  category_name?: Maybe<Scalars['String']>;
  status?: Maybe<Scalars['Int']>;
  value?: Maybe<Scalars['Float']>;
}

export interface OfficeProfile {
  __typename?: 'OfficeProfile';
  name?: Maybe<Scalars['String']>;
  img?: Maybe<Scalars['String']>;
  phones?: Maybe<Array<Maybe<Scalars['Float']>>>;
  about?: Maybe<Scalars['String']>;
}

export interface EjarQryOps {
  __typename?: 'EjarQryOps';
  getFees?: Maybe<Array<Maybe<TransactionType>>>;
  getResidentialRentContractFees?: Maybe<TransactionType>;
  getCommercialRentContractFees?: Maybe<TransactionType>;
}


export interface EjarQryOpsGetResidentialRentContractFeesArgs {
  contract_id: Scalars['Int'];
}


export interface EjarQryOpsGetCommercialRentContractFeesArgs {
  contract_id: Scalars['Int'];
}

export interface TransactionType {
  __typename?: 'TransactionType';
  createdAt?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['String']>;
  type_id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
  value?: Maybe<Scalars['Float']>;
  transaction_category?: Maybe<Scalars['Int']>;
  description?: Maybe<Scalars['String']>;
  category_name?: Maybe<Scalars['String']>;
}

export interface LegalConsultationQryOps {
  __typename?: 'LegalConsultationQryOps';
  getLegalConsultationFees?: Maybe<TransactionType>;
}


export interface LegalConsultationQryOpsGetLegalConsultationFeesArgs {
  request_id: Scalars['Int'];
}

export interface HomePlansOpenQryOps {
  __typename?: 'HomePlansOpenQryOps';
  list?: Maybe<HomePlans>;
  getById?: Maybe<HomePlan>;
  buildingCalculatorConstants?: Maybe<BuildingCalculatorConstants>;
  buildingCalculator?: Maybe<BuildingCalculatorResult>;
  getCategories?: Maybe<Array<Maybe<HomePlansCategory>>>;
}


export interface HomePlansOpenQryOpsListArgs {
  filter?: Maybe<HomePlansFilter>;
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  order_by?: Maybe<HomePlansSortOptions>;
}


export interface HomePlansOpenQryOpsGetByIdArgs {
  home_plan_id: Scalars['Int'];
}


export interface HomePlansOpenQryOpsBuildingCalculatorArgs {
  land_area: Scalars['Float'];
  floors_type: FloorsType;
  basement_area?: Maybe<Scalars['Float']>;
}

export interface HomePlansFilter {
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
}

export enum HomePlansSortOptions {
  CreatedAt = 'createdAt',
  PurchasedTimes = 'purchased_times'
}

export interface HomePlans {
  __typename?: 'HomePlans';
  total?: Maybe<Scalars['Int']>;
  plans?: Maybe<Array<Maybe<HomePlan>>>;
}

export interface HomePlan {
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
}

export enum HomePlanStatuses {
  Active = 'active',
  Inactive = 'inactive'
}

export interface Partner {
  __typename?: 'Partner';
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
  about?: Maybe<Scalars['String']>;
  logo_img?: Maybe<Scalars['String']>;
  rating?: Maybe<Scalars['Int']>;
}

export interface BuildingCalculatorConstants {
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
}

export enum FloorsType {
  OneFloor = 'one_floor',
  TwoFloors = 'two_floors',
  TwoFloorsWithRoof = 'two_floors_with_roof'
}

export interface BuildingCalculatorResult {
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
}

export interface HomePlansCategory {
  __typename?: 'HomePlansCategory';
  id?: Maybe<Scalars['Int']>;
  name_en?: Maybe<Scalars['String']>;
  name_ar?: Maybe<Scalars['String']>;
}

export interface HomeFinancingQryOps {
  __typename?: 'HomeFinancingQryOps';
  AlahliCalculator?: Maybe<AlahliLoanDetails>;
}


export interface HomeFinancingQryOpsAlahliCalculatorArgs {
  data: AlahliLoanInput;
}

export interface AlahliLoanInput {
  type?: Maybe<AlahliApplicationTypes>;
  birth_date: Scalars['Float'];
  job: AlahliJobTypes;
  job_military_rank?: Maybe<AlahliJobMilitaryRanks>;
  salary: Scalars['Float'];
  personal_financing_installment_amount?: Maybe<Scalars['Float']>;
  personal_financing_installment_months?: Maybe<Scalars['Int']>;
  monthly_obligations?: Maybe<Scalars['Float']>;
}

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

export interface AlahliLoanDetails {
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
}

export interface AlahliLoanDetailsColumn {
  __typename?: 'AlahliLoanDetailsColumn';
  name_ar?: Maybe<Scalars['String']>;
  name_en?: Maybe<Scalars['String']>;
  installment?: Maybe<Scalars['Float']>;
  months?: Maybe<Scalars['Int']>;
}

export interface ThreeDimensionalOpenQryOps {
  __typename?: 'ThreeDimensionalOpenQryOps';
  listCategories?: Maybe<Array<Maybe<ThreeDimensionalDesignsCategory>>>;
  list?: Maybe<ThreeDimensionalDesigns>;
  getConfigs?: Maybe<ThreeDimensionalConfigs>;
  getSimilarDesigns?: Maybe<Array<Maybe<ThreeDimensionalDesign>>>;
  get?: Maybe<ThreeDimensionalDesign>;
}


export interface ThreeDimensionalOpenQryOpsListArgs {
  category_id?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
}


export interface ThreeDimensionalOpenQryOpsGetSimilarDesignsArgs {
  design_id: Scalars['Int'];
}


export interface ThreeDimensionalOpenQryOpsGetArgs {
  design_id: Scalars['Int'];
}

export interface ThreeDimensionalDesignsCategory {
  __typename?: 'ThreeDimensionalDesignsCategory';
  id?: Maybe<Scalars['Int']>;
  name_en?: Maybe<Scalars['String']>;
  name_ar?: Maybe<Scalars['String']>;
}

export interface ThreeDimensionalDesigns {
  __typename?: 'ThreeDimensionalDesigns';
  total?: Maybe<Scalars['Int']>;
  designs?: Maybe<Array<Maybe<ThreeDimensionalDesign>>>;
}

export interface ThreeDimensionalDesign {
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
}

export enum ThreeDimensionalDesignDesignStatus {
  Active = 'active',
  Inactive = 'inactive'
}

export interface ThreeDimensionalConfigs {
  __typename?: 'ThreeDimensionalConfigs';
  transaction_type?: Maybe<Scalars['Int']>;
  banner?: Maybe<Scalars['String']>;
  support_user_ids?: Maybe<Array<Maybe<Scalars['Int']>>>;
}

export interface Mutation {
  __typename?: 'Mutation';
  User?: Maybe<UserMutOps>;
  PublicUser?: Maybe<PublicUserMutOps>;
  Listing?: Maybe<ListingMutOps>;
  Web?: Maybe<WebMutOps>;
  Request?: Maybe<RequestMutOps>;
}

export interface UserMutOps {
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
}


export interface UserMutOpsCreateArgs {
  phone: Scalars['String'];
}


export interface UserMutOpsVerifyArgs {
  phone: Scalars['String'];
  vcode: Scalars['String'];
  pw: Scalars['String'];
  public_token?: Maybe<Scalars['String']>;
  device_id?: Maybe<Scalars['String']>;
}


export interface UserMutOpsChangePasswordArgs {
  phone: Scalars['String'];
  pw: Scalars['String'];
  npw: Scalars['String'];
  device_id?: Maybe<Scalars['String']>;
}


export interface UserMutOpsForgetPasswordArgs {
  phone: Scalars['String'];
}


export interface UserMutOpsUpdateForgetPasswordArgs {
  phone: Scalars['String'];
  vcode: Scalars['String'];
  pw: Scalars['String'];
  device_id?: Maybe<Scalars['String']>;
}


export interface UserMutOpsUpdateChangePhoneArgs {
  phone: Scalars['String'];
  vcode: Scalars['String'];
  device_id?: Maybe<Scalars['String']>;
}


export interface UserMutOpsCreateLoanArgs {
  loan?: Maybe<CreateLoanInput>;
}


export interface UserMutOpsInitLoanArgs {
  phone: Scalars['String'];
}


export interface UserMutOpsSendLoanArgs {
  loan: CreateLoanInput;
  vcode: Scalars['String'];
}


export interface UserMutOpsCallArgs {
  user_id: Scalars['Int'];
}


export interface UserMutOpsClearDeviceIdArgs {
  device_id: Scalars['String'];
}


export interface UserMutOpsLoginArgs {
  phone: Scalars['String'];
  pw: Scalars['String'];
  device_id?: Maybe<Scalars['String']>;
}


export interface UserMutOpsDeleteArgs {
  user_id: Scalars['Int'];
}


export interface UserMutOpsLoginOtpArgs {
  pw: Scalars['String'];
}


export interface UserMutOpsRegisterTokenArgs {
  type: AppType;
  device_id: Scalars['String'];
}


export interface UserMutOpsUnregisterTokenArgs {
  type: AppType;
  device_id: Scalars['String'];
}


export interface UserMutOpsVerifyIdentityByOwnerOtpArgs {
  owner_otp: Scalars['String'];
  otp: Scalars['String'];
}


export interface UserMutOpsPutListingVerificationDeedByOtpArgs {
  owner_otp: Scalars['String'];
  filename: Scalars['String'];
}


export interface UserMutOpsCancelMailSubscriptionArgs {
  token: Scalars['String'];
  email: Scalars['String'];
}

export interface AuthUser {
  __typename?: 'AuthUser';
  user?: Maybe<AuthUserField>;
  token?: Maybe<Scalars['String']>;
}

export interface AuthUserField {
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
}

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

export interface CreateLoanInput {
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
}

export interface PublicUserMutOps {
  __typename?: 'PublicUserMutOps';
  create?: Maybe<PublicUser>;
}


export interface PublicUserMutOpsCreateArgs {
  device_key: Scalars['String'];
  device_id?: Maybe<Scalars['String']>;
}

export interface PublicUser {
  __typename?: 'PublicUser';
  user?: Maybe<PublicUserData>;
  public_token?: Maybe<Scalars['String']>;
}

export interface ListingMutOps {
  __typename?: 'ListingMutOps';
  increment?: Maybe<Scalars['Boolean']>;
  appraisal?: Maybe<Scalars['Boolean']>;
  report?: Maybe<Scalars['Boolean']>;
  verifyListingByOtp?: Maybe<Scalars['Boolean']>;
}


export interface ListingMutOpsIncrementArgs {
  type?: Maybe<IncrementTypes>;
  id: Scalars['Int'];
}


export interface ListingMutOpsAppraisalArgs {
  phone: Scalars['String'];
  id: Scalars['Int'];
  reason?: Maybe<Scalars['String']>;
}


export interface ListingMutOpsReportArgs {
  id: Scalars['Int'];
  content?: Maybe<Scalars['String']>;
  reason: ReportReasons;
}


export interface ListingMutOpsVerifyListingByOtpArgs {
  owner_otp: Scalars['String'];
  deed_code: Scalars['Float'];
  deed_img: Scalars['String'];
  owner_id: Scalars['Float'];
  owner_id_img?: Maybe<Scalars['String']>;
  id_type?: Maybe<DeedIdTypes>;
}

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

export interface WebMutOps {
  __typename?: 'WebMutOps';
  sendApp?: Maybe<Scalars['Boolean']>;
}


export interface WebMutOpsSendAppArgs {
  phone: Scalars['String'];
  type: AppType;
}

export interface RequestMutOps {
  __typename?: 'RequestMutOps';
  create?: Maybe<Scalars['Boolean']>;
}


export interface RequestMutOpsCreateArgs {
  type: RequestType;
  contract?: Maybe<Contract>;
  construction?: Maybe<Construction>;
}

export enum RequestType {
  Contract = 'contract',
  Construction = 'construction'
}

export interface Contract {
  owner_id: Scalars['Float'];
  tenant_id: Scalars['Float'];
  phone: Scalars['String'];
}

export interface Construction {
  type: ConstructionType;
  phone: Scalars['String'];
  description?: Maybe<Scalars['String']>;
  city?: Maybe<Scalars['String']>;
}

export enum ConstructionType {
  EngineeringDrawing = 'engineering_drawing',
  Construction = 'construction',
  Consultation = 'consultation',
  ConstructionSupervision = 'construction_supervision',
  InteriorDesign = 'interior_design',
  SmartHomes = 'smart_homes',
  BuildingsExamination = 'buildings_examination'
}

export interface VideoInput {
  video: Scalars['String'];
  thumbnail: Scalars['String'];
  orientation?: Maybe<Orientation>;
}

export interface HomePlansQryOps {
  __typename?: 'HomePlansQryOps';
  listPurchasedPlans?: Maybe<HomePlans>;
  listPlanFiles?: Maybe<Array<Maybe<HomePlanFile>>>;
  getHomePlanFileSignedUrl?: Maybe<Scalars['String']>;
  agreement?: Maybe<Scalars['String']>;
}


export interface HomePlansQryOpsListPurchasedPlansArgs {
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
}


export interface HomePlansQryOpsListPlanFilesArgs {
  home_plan_id: Scalars['Int'];
}


export interface HomePlansQryOpsGetHomePlanFileSignedUrlArgs {
  home_plan_id: Scalars['Int'];
  home_plan_file_id: Scalars['Int'];
}

export interface HomePlanFile {
  __typename?: 'HomePlanFile';
  id?: Maybe<Scalars['Int']>;
  type?: Maybe<HomePlanFileType>;
  s3_file_name?: Maybe<Scalars['String']>;
  download_file_name?: Maybe<Scalars['String']>;
  home_plan_id?: Maybe<Scalars['Int']>;
}

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

export interface HomePlansPartnerMutOps {
  __typename?: 'HomePlansPartnerMutOps';
  addHomePlanFile?: Maybe<HomePlanFile>;
  removeHomePlanFile?: Maybe<Scalars['Boolean']>;
  create?: Maybe<HomePlan>;
  update?: Maybe<Scalars['Boolean']>;
  updateStatus?: Maybe<Scalars['Boolean']>;
  updateStatusAsAdmin?: Maybe<Scalars['Boolean']>;
  editHomePlanDownloadFileName?: Maybe<Scalars['Boolean']>;
}


export interface HomePlansPartnerMutOpsAddHomePlanFileArgs {
  home_plan_id: Scalars['Int'];
  type: HomePlanFileType;
  s3_file_name: Scalars['String'];
  download_file_name: Scalars['String'];
}


export interface HomePlansPartnerMutOpsRemoveHomePlanFileArgs {
  home_plan_file_id: Scalars['Int'];
}


export interface HomePlansPartnerMutOpsCreateArgs {
  data: HomePlanInput;
}


export interface HomePlansPartnerMutOpsUpdateArgs {
  id: Scalars['Int'];
  data: HomePlanInput;
}


export interface HomePlansPartnerMutOpsUpdateStatusArgs {
  id: Scalars['Int'];
  status: HomePlanStatuses;
}


export interface HomePlansPartnerMutOpsUpdateStatusAsAdminArgs {
  id: Scalars['Int'];
  status: HomePlanStatuses;
}


export interface HomePlansPartnerMutOpsEditHomePlanDownloadFileNameArgs {
  home_plan_file_id: Scalars['Int'];
  download_file_name: Scalars['String'];
}

export interface HomePlanInput {
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
}

export interface HomePlansPartnerQryOps {
  __typename?: 'HomePlansPartnerQryOps';
  getUploadFileSignedUrl?: Maybe<Scalars['String']>;
  getHomePlanFiles?: Maybe<Array<Maybe<HomePlanFile>>>;
  getHomePlanFileSignedUrlAsAdmin?: Maybe<Scalars['String']>;
  listAsAdmin?: Maybe<HomePlans>;
  listAsArchitect?: Maybe<HomePlans>;
  getPlanPurchases?: Maybe<HomePlanPurchases>;
  listHomePlansPartners?: Maybe<HomePlansPartners>;
}


export interface HomePlansPartnerQryOpsGetUploadFileSignedUrlArgs {
  home_plan_id: Scalars['Int'];
  type: HomePlanFileType;
  s3_file_name: Scalars['String'];
}


export interface HomePlansPartnerQryOpsGetHomePlanFilesArgs {
  home_plan_id: Scalars['Int'];
}


export interface HomePlansPartnerQryOpsGetHomePlanFileSignedUrlAsAdminArgs {
  home_plan_file_id: Scalars['Int'];
}


export interface HomePlansPartnerQryOpsListAsAdminArgs {
  partner_id?: Maybe<Scalars['Int']>;
  status?: Maybe<HomePlanStatuses>;
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  order_by?: Maybe<HomePlansSortOptions>;
}


export interface HomePlansPartnerQryOpsListAsArchitectArgs {
  status?: Maybe<HomePlanStatuses>;
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  order_by?: Maybe<HomePlansSortOptions>;
}


export interface HomePlansPartnerQryOpsGetPlanPurchasesArgs {
  home_plan_id: Scalars['Int'];
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
}


export interface HomePlansPartnerQryOpsListHomePlansPartnersArgs {
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
}

export interface HomePlanPurchases {
  __typename?: 'HomePlanPurchases';
  purchases?: Maybe<Array<Maybe<HomePlanPurchase>>>;
  total?: Maybe<Scalars['Int']>;
}

export interface HomePlanPurchase {
  __typename?: 'HomePlanPurchase';
  id?: Maybe<Scalars['Int']>;
  user_id?: Maybe<Scalars['Int']>;
}

export interface HomePlansPartners {
  __typename?: 'HomePlansPartners';
  partners?: Maybe<Array<Maybe<HomePlansPartner>>>;
  total?: Maybe<Scalars['Int']>;
}

export interface HomePlansPartner {
  __typename?: 'HomePlansPartner';
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
}

export interface ThreeDimensionalMutOps {
  __typename?: 'ThreeDimensionalMutOps';
  createRequest?: Maybe<ThreeDimensionalDesingRequest>;
  likeDesign?: Maybe<Scalars['Boolean']>;
  dislikeDesign?: Maybe<Scalars['Boolean']>;
}


export interface ThreeDimensionalMutOpsCreateRequestArgs {
  data: ThreeDimensionalDesingRequestInput;
}


export interface ThreeDimensionalMutOpsLikeDesignArgs {
  design_id: Scalars['Int'];
}


export interface ThreeDimensionalMutOpsDislikeDesignArgs {
  design_id: Scalars['Int'];
}

export interface ThreeDimensionalDesingRequestInput {
  design_id: Scalars['Int'];
  width: Scalars['Float'];
  length: Scalars['Float'];
  height: Scalars['Float'];
  details?: Maybe<Scalars['String']>;
  imgs?: Maybe<Array<Maybe<Scalars['String']>>>;
  videos?: Maybe<Array<Maybe<Scalars['String']>>>;
  pdfs?: Maybe<Array<Maybe<Scalars['String']>>>;
  autocad_files?: Maybe<Array<Maybe<Scalars['String']>>>;
}

export interface ThreeDimensionalDesingRequest {
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
}

export enum ThreeDimensionalDesignRequestStatus {
  New = 'new',
  PaymentReceived = 'payment_received',
  UnderProcess = 'under_process',
  Canceled = 'canceled',
  Completed = 'completed',
  Rejected = 'rejected'
}

export interface ThreeDimensionalQryOps {
  __typename?: 'ThreeDimensionalQryOps';
  getConfigs?: Maybe<ThreeDimensionalConfigs>;
  list?: Maybe<AuthThreeDimensionalDesigns>;
  get?: Maybe<AuthThreeDimensionalDesign>;
  getSimilarDesigns?: Maybe<Array<Maybe<AuthThreeDimensionalDesign>>>;
  myFav?: Maybe<AuthThreeDimensionalDesigns>;
}


export interface ThreeDimensionalQryOpsListArgs {
  category_id?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
}


export interface ThreeDimensionalQryOpsGetArgs {
  design_id: Scalars['Int'];
}


export interface ThreeDimensionalQryOpsGetSimilarDesignsArgs {
  design_id: Scalars['Int'];
}


export interface ThreeDimensionalQryOpsMyFavArgs {
  category_id?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
}

export interface AuthThreeDimensionalDesigns {
  __typename?: 'AuthThreeDimensionalDesigns';
  total?: Maybe<Scalars['Int']>;
  designs?: Maybe<Array<Maybe<AuthThreeDimensionalDesign>>>;
}

export interface AuthThreeDimensionalDesign {
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
}

export interface ThreeDimensionalPartnerMutOps {
  __typename?: 'ThreeDimensionalPartnerMutOps';
  createDesign?: Maybe<ThreeDimensionalDesign>;
  createCategory?: Maybe<ThreeDimensionalDesignsCategory>;
  updateDesign?: Maybe<Scalars['Boolean']>;
  updateDesignStatus?: Maybe<Scalars['Boolean']>;
  updateRequestStatus?: Maybe<Scalars['Boolean']>;
}


export interface ThreeDimensionalPartnerMutOpsCreateDesignArgs {
  data: ThreeDimensionalDesignInput;
}


export interface ThreeDimensionalPartnerMutOpsCreateCategoryArgs {
  data?: Maybe<ThreeDimensionalDesignsCategoryInput>;
}


export interface ThreeDimensionalPartnerMutOpsUpdateDesignArgs {
  design_id: Scalars['Int'];
  data: ThreeDimensionalDesignInput;
}


export interface ThreeDimensionalPartnerMutOpsUpdateDesignStatusArgs {
  design_id: Scalars['Int'];
  status?: Maybe<ThreeDimensionalDesignDesignStatus>;
}


export interface ThreeDimensionalPartnerMutOpsUpdateRequestStatusArgs {
  request_id: Scalars['Int'];
  status?: Maybe<ThreeDimensionalDesignRequestStatus>;
}

export interface ThreeDimensionalDesignInput {
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
}

export interface ThreeDimensionalDesignsCategoryInput {
  name_en?: Maybe<Scalars['String']>;
  name_ar?: Maybe<Scalars['String']>;
}

export interface ThreeDimensionalPartnerQryOps {
  __typename?: 'ThreeDimensionalPartnerQryOps';
  listPartners?: Maybe<Array<Maybe<Partner>>>;
  listPartnerDesigns?: Maybe<ThreeDimensionalDesigns>;
  listRequests?: Maybe<ThreeDimensionalDesingRequests>;
  getDesignById?: Maybe<ThreeDimensionalDesign>;
  getRequestById?: Maybe<ThreeDimensionalDesingRequest>;
}


export interface ThreeDimensionalPartnerQryOpsListPartnerDesignsArgs {
  partner_id?: Maybe<Scalars['Int']>;
  status?: Maybe<ThreeDimensionalDesignDesignStatus>;
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
}


export interface ThreeDimensionalPartnerQryOpsListRequestsArgs {
  partner_id?: Maybe<Scalars['Int']>;
  status?: Maybe<ThreeDimensionalDesignRequestStatus>;
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
}


export interface ThreeDimensionalPartnerQryOpsGetDesignByIdArgs {
  design_id: Scalars['Int'];
}


export interface ThreeDimensionalPartnerQryOpsGetRequestByIdArgs {
  request_id: Scalars['Int'];
}

export interface ThreeDimensionalDesingRequests {
  __typename?: 'ThreeDimensionalDesingRequests';
  total?: Maybe<Scalars['Int']>;
  requests?: Maybe<Array<Maybe<ThreeDimensionalDesingRequest>>>;
}

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
  polygon?: Maybe<Array<LocationInput> | LocationInput>;
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
    query list($from: Int = 0, $polygon: [LocationInput!] = {lat: 1.5, lng: 1.5}, $size: Int = 0, $sort: SortInput = {}, $structure: Boolean = false, $where: WhereInput = {}) {
  Web {
    find(
      from: $from
      polygon: $polygon
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