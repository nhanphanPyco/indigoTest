const account = require('./account.png');
const accountActive = require('./account-active.png');
const birthday = require('./birthday.png');
const birthdayActive = require('./birthday-active.png');
const email = require('./email.png');
const emailActive = require('./email-active.png');
const location = require('./location.png');
const locationActive = require('./location-active.png');
const password = require('./password.png');
const passwordActive = require('./password-active.png');
const phone = require('./phone.png');
const phoneActive = require('./phone-active.png');


const bottomTabs = [
  { icon: account, iconActive: accountActive },
  { icon: birthday, iconActive: birthdayActive },
  { icon: location, iconActive: locationActive },
  { icon: phone, iconActive: phoneActive },
  { icon: password, iconActive: passwordActive },
]

export default {
  account,
  accountActive,
  birthday,
  birthdayActive,
  email,
  emailActive,
  location,
  locationActive,
  password,
  passwordActive,
  phone,
  phoneActive,
  bottomTabs
};
