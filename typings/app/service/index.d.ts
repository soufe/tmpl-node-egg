// This file is created by egg-ts-helper@1.25.8
// Do not modify this file!!!!!!!!!

import 'egg';
type AnyClass = new (...args: any[]) => any;
type AnyFunc<T = any> = (...args: any[]) => T;
type CanExportFunc = AnyFunc<Promise<any>> | AnyFunc<IterableIterator<any>>;
type AutoInstanceType<T, U = T extends CanExportFunc ? T : T extends AnyFunc ? ReturnType<T> : T> = U extends AnyClass ? InstanceType<U> : U;
import ExportV1Mongo from '../../../app/service/v1/mongo';
import ExportV1User from '../../../app/service/v1/user';

declare module 'egg' {
  interface IService {
    v1: {
      mongo: AutoInstanceType<typeof ExportV1Mongo>;
      user: AutoInstanceType<typeof ExportV1User>;
    }
  }
}
