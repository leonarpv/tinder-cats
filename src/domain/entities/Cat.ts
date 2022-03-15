import {Entity} from './Entity';

export interface GetCatsResponse {
  id: string;
  name: string;
  origin: string;
  image: {
    id: string;
    url: string;
  };
  affection_level: string;
}

export interface VotePayload {
  image_id: string;
  sub_id: string;
  value: boolean;
}

export interface VoteResponse {
  message: string;
  id: number;
}

export default class Cat extends Entity {
  id: string;
  name: string;
  origin: string;
  image: string;
  affection: string;

  constructor({title, name, origin, image, affection}: Record<string, string>) {
    super();
    this.id = title;
    this.name = name;
    this.origin = origin;
    this.image = image;
    this.affection = affection;
  }
}
