/* eslint-disable no-undef */

import {takeScreenShot} from '../src/utils';
describe('Manually ScreenShot', () => {
  beforeAll(async () => {
    await device.launchApp();
  });
  beforeEach(async () => {
    await device.reloadReactNative();
  });
  it('should take screenshot', async () => {
    takeScreenShot('StepOne');
    await element(by.id('slides')).swipe('left');
    takeScreenShot('SeeYourChanges');
    await element(by.id('slides')).swipe('left');
    takeScreenShot('Debug');
    await element(by.id('slides')).swipe('left');
    takeScreenShot('LearnMore');
  });
});
