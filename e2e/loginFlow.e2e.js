/* eslint-disable no-undef */

const openApp = async () => {
  await device.launchApp({
    newInstance: true,
  });
};

const loginFailWithValuesEmpty = async () => {
  const emailInput = element(by.id('userEmail'));
  const passwordInput = element(by.id('userPassword'));
  const btnLogin = element(by.id('btnSignIn'));
  await emailInput.tap();
  await passwordInput.tap();
  await btnLogin.tap();
  await expect(element(by.id('validationMessage'))).toBeVisible();
};

const loginFailWithValuesCorrect = async () => {
  const emailInput = element(by.id('userEmail'));
  const passwordInput = element(by.id('userPassword'));
  const btnLogin = element(by.id('btnSignIn'));
  await waitFor(emailInput).toBeVisible().withTimeout(500);
  await emailInput.tap();
  await emailInput.replaceText('luc.nguyen@gmail.com');
  await waitFor(emailInput).toHaveText('luc.nguyen@gmail.com').withTimeout(500);
  await passwordInput.tap();
  await passwordInput.replaceText('123456');
  await btnLogin.tap();
  await expect(element(by.id('validationMessage'))).toBeVisible();
};

const loginSuccessFlow = async () => {
  const emailInput = element(by.id('userEmail'));
  const passwordInput = element(by.id('userPassword'));
  const btnLogin = element(by.id('btnSignIn'));
  await waitFor(emailInput).toBeVisible().withTimeout(500);
  await emailInput.tap();
  await emailInput.replaceText('luc.nguyen150198@gmail.com');
  await waitFor(emailInput)
    .toHaveText('luc.nguyen150198@gmail.com')
    .withTimeout(500);
  await passwordInput.tap();
  await passwordInput.replaceText('123456');
  await btnLogin.tap();
  await expect(element(by.text('success'))).toBeVisible();
};

describe('Test Login FLow', () => {
  beforeAll(openApp);
  it('should login fail with empty values', loginFailWithValuesEmpty);
  it(
    'should login fail with email and password incorrect',
    loginFailWithValuesCorrect,
  );
  it('should login success with email and password correct', loginSuccessFlow);
});
