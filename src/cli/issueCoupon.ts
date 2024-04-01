import { tryIssueCoupon } from "../tryIssueCoupon";

async function IssueCouponCli() {
  console.log("CLI run. Issuing birthday coupon...");
  await tryIssueCoupon();
}

export default IssueCouponCli();
