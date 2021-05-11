import { Subscription } from 'egg';
export default class useSchedule extends Subscription {
  static get schedule() {
    return {
      interval: '10h',
      type: 'all',
    };
  }

  async task() {
    // const res = await this.ctx.curl('http://www.api.com/cache', {
    //   dataType: 'json'
    // })
    // this.ctx.app.cache = res.data
  }
}
