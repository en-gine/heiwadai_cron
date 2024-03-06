import { envsafe, str, bool } from "envsafe";

export const env = envsafe({
  AWS_ACCESS_KEY_ID: str(),
  AWS_SECRET_ACCESS_KEY: str(),
  AWS_S3_BUCKET: str(),
  AWS_S3_REGION: str(),
  BACKUP_DATABASE_URL: str({
    desc: "The connection string of the database to backup.",
  }),
  BACKUP_CRON_SCHEDULE: str({
    desc: "The cron schedule to run the backup on.",
    default: "0 5 * * *",
    allowEmpty: true,
  }),
  AWS_S3_ENDPOINT: str({
    desc: "The S3 custom endpoint you want to use.",
    default: "",
    allowEmpty: true,
  }),
  ISSUE_BIRTHDAY_CRON_SCHEDULE: str({
    desc: "The cron schedule to issue birthday copon.",
    default: "0 0 1 * *",
    allowEmpty: true,
  }),
  ISSUE_BIRTHDAY_CRON_ON: bool({
    desc: "Issue birthday coupon",
    default: true,
    allowEmpty: true,
  }),
  TZ: str({
    desc: "The timezone of the server",
    default: "Asia/Tokyo",
    allowEmpty: true,
  }),
  CRON_ACCESS_KEY: str({
    desc: "The access key to access the cron job",
    default: "",
    allowEmpty: false,
  }),
  CRON_ACCESS_SECRET: str({
    desc: "The secret to access the cron job",
    default: "",
    allowEmpty: false,
  }),
  CRON_ACCESS_ENDPOINT: str({
    desc: "The token to access the cron job",
    default: "",
    allowEmpty: false,
  }),
});
