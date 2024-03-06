import { issueCoupon } from "./jobs/issueCoupon";

export const tryIssueCoupon = async () => {
  try {
    await issueCoupon();
  } catch (error) {
    console.error("Error while running issueBirthday: ", error);
  }
};
