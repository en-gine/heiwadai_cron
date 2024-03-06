import { issueCoupon } from "./jobs/issueCoupon";
import { sendMail } from "./utils/sendMail";
export const tryIssueCoupon = async () => {
  try {
    await issueCoupon();
  } catch (error) {
    console.error("Error while running issueBirthday: ", error);
    sendMail({
      title: "クーポン発行がエラーになりました。",
      content: `Error while running Coupon: ${error}`,
    });
  }
};
