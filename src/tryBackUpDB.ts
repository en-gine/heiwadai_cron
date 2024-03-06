import { backupDB } from "./jobs/backUpDB";

export const tryBackupDB = async () => {
  try {
    await backupDB();
  } catch (error) {
    console.error("Error while running backup: ", error);
  }
};
