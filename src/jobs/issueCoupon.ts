import axios from "axios";
import { env } from "../env";

const postIssue = async () => {
  console.info("Issuing birthday coupon...");
  const res = await axios.post(
    `${env.CRON_ACCESS_ENDPOINT}`,
    {},
    {
      headers: {
        Authorization: env.CRON_ACCESS_KEY,
        "X-Cron-Key": env.CRON_ACCESS_SECRET,
        "Content-Type": "application/json",
      },
    }
  );
  console.log("Response from issuing birthday coupon: ", res.data);
};

export const issueCoupon = async () => {
  console.info("Issue birthday Coupon...");
  await postIssue();
  console.info("Issue birthday Coupon Complete");
};
