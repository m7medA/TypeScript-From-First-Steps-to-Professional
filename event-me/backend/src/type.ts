export type Id = number | string;

export interface User {
  //TODO
  id: Id;
  name: string;
  email: string;
}

export interface Rsvp {
  //TODO
  id: number;
  name: string;
  email: string;
}

export interface Event {
  //TODO
  id: Id;
  title: string;
  description?: string;
  date: Date;
  host_id: number;
  image_url: string;
  host: User;
  rsvps: Rsvp[];
}
