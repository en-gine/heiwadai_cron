import { CronCommand, CronJob } from "cron";
import { tryBackupDB } from "./tryBackUpDB";
import { tryIssueCoupon } from "./tryIssueCoupon";
import { env } from "./env";
import express from "express";
import { sendMail } from "./utils/sendMail";

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
const app: express.Express = express();
app.get("/", (req: express.Request, res: express.Response) => {
  console.log(req);
  res.send("OK!");
});

app.listen(env.PORT, "0.0.0.0", () => {});

console.log("Cron server started...");
console.log("NodeJS Version: " + process.version);
console.log("TimeZone: " + process.env.TZ);
console.log("現在時刻: " + new Date().toLocaleString());
console.log(`ポート${env.PORT}番で起動しました。`);
BackupJob.start();
console.log("Backup cron scheduled...");
IssueCouponJob.start();
console.log("Issue Coupon cron scheduled...");

sendMail({
  title: "平和台Cronサーバーが起動しました",
  content: "平和台Cronサーバーが起動しました",
});
console.log("mail sent...");
