import { ParkingResponse } from "./parking-response";


namespace Database {
    export function save(item: ParkingResponse) {
        datastorage.push(item);
    }

    export function remove() {
        datastorage.forEach((item: ParkingResponse) => {
            datastorage.splice(datastorage.indexOf(item), 1);
        });
    }
    
    export function findAll() {
        return datastorage;
    }

}
const datastorage:Array<ParkingResponse> = [];


export interface IWrite<T> {
    save(item: T): Promise<boolean>;
}

export interface IRead<T> {
    findAll(): Promise<T[]>
}

abstract class BaseRepository<T> implements IWrite<T>, IRead<T> {
    findAll(): Promise<T[]> {
        throw new Error("Method not implemented.");
    }
    save(item: T): Promise<boolean> {
        throw new Error("Method not implemented.");
    }
}

export class ParkingRepository extends BaseRepository<ParkingResponse> {
    save(item: ParkingResponse): Promise<boolean> {
        Database.save(item);
        return Promise.resolve(true);
    }

    findAll(): Promise<ParkingResponse[]> {
        return Promise.resolve(Database.findAll());
    }

}