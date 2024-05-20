export type ApiResponseType<DataType = undefined> = DataType extends undefined
  ? { success: boolean; message: string }
  : { success: boolean; message: string; data: DataType };

export interface UserType {
  _id: string;
  userName: string;
  image: string | null;
  email: string | null;
  isVerified: boolean;
}

export interface SettingsType {
  playbackSpeed: number;
  rewindIntervalSec: number;
  forwardIntervalSec: number;
}
