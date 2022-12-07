import { faker } from '@faker-js/faker'


export const randomObject = { name: faker.name.firstName(), email: faker.internet.email(), token: faker.datatype.uuid() }
