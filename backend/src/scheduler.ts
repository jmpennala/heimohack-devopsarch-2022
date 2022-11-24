import { CronJob } from 'cron';
import { ApiClient } from './apiClient';
import { ParkingRepository } from './database';


export class Scheduler {
    cronJob: CronJob;

    constructor(parkingRepo: ParkingRepository) {
        this.cronJob = new CronJob('0 */1 * * * *', async () => {
            const data = await ApiClient();
            parkingRepo.save(data)
        });
   
   
        if(!this.cronJob.running) {
            this.cronJob.start();
        }
    }



}
