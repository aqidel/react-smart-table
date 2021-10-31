import faker from 'faker';
import _ from 'lodash';

export let userData = [];

export const keys = ['№', 'avatar', 'name', 'email', 'phone', 'city', 'birtdate'];

function userDataGenerator() {
  for (let i = 0; i < 45; i++) {
    let row = {
      avatar: faker.image.avatar(),
      name: faker.name.findName(),
      email: faker.internet.email(),
      phone: faker.phone.phoneNumber(),
      city: faker.address.city(),
      birthDate: faker.date.between('1960', '2010').toDateString().slice(3)
    };
    userData.push(row);
  }
  userData = _.chunk(userData, 10);
};

userDataGenerator();