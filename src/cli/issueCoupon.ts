import { tryIssueCoupon } from "../tryIssueCoupon";

const IssueCouponCli = async () => {
  console.log("CLI run. Issuing birthday coupon...");
  await tryIssueCoupon();
};

export default IssueCouponCli;
