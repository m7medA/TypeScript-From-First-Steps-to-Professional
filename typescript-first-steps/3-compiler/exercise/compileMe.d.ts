type Id = number | string;
interface HasId {
    id: Id;
}
interface User extends HasId {
    username: string;
    name: string;
    email?: string;
}
interface Event extends HasId {
    host_id: Id;
    date: Date;
    title: string;
    descriptuon?: string;
    image_url: string;
}
declare function createUser(username: string, name: string, email?: string): User;
declare function createEvent(host: User, eventDetails: EventDetailsWithoutIds): Event;
export { createEvent, createUser };
//# sourceMappingURL=compileMe.d.ts.map