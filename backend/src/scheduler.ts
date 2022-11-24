import { CronJob } from 'cron';
import { ApiClient } from './apiClient';


export class Scheduler {
    cronJob: CronJob;

    constructor() {
        this.cronJob = new CronJob("* */5 * * * *", async () => {
            try {
                await ApiClient();
            }catch(e) {
                console.error(e);
            }
        });
    }

}