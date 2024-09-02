

module.exports = {
  createRegistrant,
  earnPermit,
  takeLicenseExam
}

// defines the class inputs and what the inputs equal for the class
class Registrant {
  constructor(name, age, permit = false) {
    this._name = name;
    this._age = age;
    this._permit = permit;
    this._licenseData = { written: false, license: false, renewed: false };
  }
  get name() {
    return this._name;
  }

  get age() {
    return this._age;
  }

  get permit() {
    return this._permit;
  }

  get licenseData() {
    return this._licenseData;
  }
}

function createRegistrant(name, age, permit = false) {
  return new Registrant(name, age, permit);
}

function earnPermit(registrant) {
  if (registrant.age >= 16) {
    registrant._permit = true;
    return 'You have successfully earned a permit!';
  } 
  else {
    return 'Sorry, you are not able to earn a permit right now.';
  }
}

function takeLicenseExam(registrant) {
  if (registrant.permit == true) {
    return 'Great job! You can take your test.';
  }
  else {
    return 'Sorry, you need to earn a permit first.'
  }
}