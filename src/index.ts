import { CronCommand, CronJob } from "cron";
import { tryBackupDB } from "./tryBackUpDB";
import { tryIssueCoupon } from "./tryIssueCoupon";
import { env } from "./env";

console.log("NodeJS Version: " + process.version);
console.log("TimeZone: " + process.env.TZ);
console.log("Now: " + new Date().toLocaleString());

const RegisterCron = (cronTime: string | Date, onTick: CronCommand) => {
  return new CronJob(cronTime, onTick, null, false, env.TZ);
};
///// JOBの登録 /////
const BackupJob = RegisterCron(env.BACKUP_CRON_SCHEDULE, async () => {
  await tryBackupDB();
});

const IssueCouponJob = RegisterCron(
  env.ISSUE_BIRTHDAY_CRON_SCHEDULE,
  async () => {
    if (env.ISSUE_BIRTHDAY_CRON_ON) {
      await tryIssueCoupon();
    } else {
      console.info("Issue birthday cron skipped...");
    }
  }
);
///// JOBの実行 /////
BackupJob.start();
IssueCouponJob.start();
console.log("Backup cron scheduled...");
