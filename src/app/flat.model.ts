import { ElasticWebListing } from "src/generated/graphql";

export interface Flat extends ElasticWebListing {
    rating: number;
    seen: boolean;
    canceled: boolean;
    hide: boolean;
    contact: number;
    favorite: number;
}