const dotenv = require('dotenv');
dotenv.config();

const env = Cypress.env();
const futureDate = Cypress.env('MY_VARIABLE');

export { env, futureDate };
