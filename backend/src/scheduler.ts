import { CronJob } from 'cron';
import { ApiClient } from './apiClient';


export class Scheduler {
    cronJob: CronJob;

    constructor() {
        this.cronJob = new CronJob('0 */1 * * * *', async () => {
            await ApiClient();
        });
   
   
        if(!this.cronJob.running) {
            this.cronJob.start();
        }
    }



}
