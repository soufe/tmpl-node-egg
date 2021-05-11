import { app, assert } from 'egg-mock/bootstrap';

describe('test/app/service/v1/user.test.ts', () => {
  describe('get()', () => {
    it('should status 200 and get result', async () => {
      const ctx = app.mockContext();
      const result = await ctx.service.v1.user.get('get', '1', '7573893fr38ovdem51q8vkrqjb5t8l24');
      assert(result);
      assert(result.rt === 1);
    });
  });
});
