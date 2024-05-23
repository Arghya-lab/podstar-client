import { SettingsType } from "@/@types/res";

export const localStorageSettingKey = "Setting";

export const defaultSettings: SettingsType = {
  playbackSpeed: 1.0,
  rewindIntervalSec: 10,
  forwardIntervalSec: 10,
};

export function setLocalSettings(settings: SettingsType) {
  localStorage.setItem(localStorageSettingKey, JSON.stringify(settings));
}

export function getLocalSetting(): SettingsType {
  const storedSetting = localStorage.getItem(localStorageSettingKey);

  if (!storedSetting) {
    setLocalSettings(defaultSettings);
    return defaultSettings;
  }

  try {
    const settings: SettingsType = JSON.parse(storedSetting);
    return settings;
  } catch (error) {
    console.error("Failed to parse settings from localStorage:", error);
    setLocalSettings(defaultSettings);
    return defaultSettings;
  }
}

export function setLocalPlaybackSpeed(val: number): SettingsType {
  const setting = getLocalSetting();
  setting.playbackSpeed = val;

  setLocalSettings(setting);
  return setting;
}

export function setLocalRewindInterval(val: number): SettingsType {
  const setting = getLocalSetting();
  setting.rewindIntervalSec = val;

  setLocalSettings(setting);
  return setting;
}

export function setLocalForwardInterval(val: number): SettingsType {
  const setting = getLocalSetting();
  setting.forwardIntervalSec = val;

  setLocalSettings(setting);
  return setting;
}
