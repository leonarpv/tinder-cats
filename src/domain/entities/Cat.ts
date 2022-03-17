import {Entity} from './Entity';

export interface GetCatsResponse {
  id: string;
  name: string;
  origin: string;
  image: {
    id: string;
    url: string;
  };
  affection_level_level: string;
}

export interface VotePayload {
  image_id: string;
  sub_id?: string;
  value: number;
}

export interface VoteResponse {
  message: string;
  id: number;
}

export default class Cat extends Entity {
  id: string;
  reference_image_id: string;
  name: string;
  origin: string;
  image: {url: string};
  affection_level: string;

  constructor({
    id,
    reference_image_id,
    name,
    origin,
    image,
    affection_level,
  }: Record<string, any>) {
    super();
    this.id = id;
    this.reference_image_id = reference_image_id;
    this.name = name;
    this.origin = origin;
    this.image = image;
    this.affection_level = affection_level;
  }
}
