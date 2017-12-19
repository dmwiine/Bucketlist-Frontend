import { Item } from './item';

export class Bucketlist {
    id: number;
    name: string;
    items: Array<Item>;
    created_by: string;
    date_created: Date;
    date_modified: Date;
}
