/* eslint-disable no-undef */
const {execSync} = require('child_process');
const SCREENSHOT_OPTIONS = {
  timeout: 40000,
  killSignal: 'SIGKILL',
};

export const takeScreenShot = name => {
  const fileName = `${name}.png`;
  if (device.getPlatform() === 'android') {
    execSync(`adb shell screencap /sdcard/${fileName}`, SCREENSHOT_OPTIONS);
    execSync(
      `adb pull /sdcard/${fileName} $(pwd)/android/fastlane/screenshots/`,
      SCREENSHOT_OPTIONS,
    );
  } else {
    const fileAddress = `$(pwd)/ios/fastlane/screenshots/${fileName}`;
    execSync(
      `xcrun simctl io booted screenshot ${fileAddress}`,
      SCREENSHOT_OPTIONS,
    );
  }
};
