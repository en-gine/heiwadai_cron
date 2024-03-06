import { backupDB } from "./jobs/backUpDB";
import { sendMail } from "./utils/sendMail";
export const tryBackupDB = async () => {
  try {
    await backupDB();
  } catch (error) {
    console.error("Error while running backup: ", error);
    sendMail({
      title: "backupがエラーになりました。",
      content: `Error while running backup: ${error}`,
    });
  }
};
