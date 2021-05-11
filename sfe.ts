import * as dotenv from 'dotenv';

const result = dotenv.config();

if (result.error) {
  throw result.error;
}

export const APP_NAME = process.env.APP_NAME;
export const APP_OSS = process.env.APP_OSS;
