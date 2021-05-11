// This file is created by egg-ts-helper@1.25.8
// Do not modify this file!!!!!!!!!

import 'egg';
import ExportMongo from '../../../app/model/mongo';

declare module 'egg' {
  interface IModel {
    Mongo: ReturnType<typeof ExportMongo>;
  }
}
