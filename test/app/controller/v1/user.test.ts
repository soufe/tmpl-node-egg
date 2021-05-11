import { app } from 'egg-mock/bootstrap';

describe('test/app/controller/v1/user.test.ts', () => {
  describe('GET /restapi/v1/user get()', () => {

    it('should status 200 and get body', async () => {
      // app.mockCsrf()
      app.mockService('v1.user', 'get', () => {
        return 'user info';
      });

      await app.httpRequest()
        .get('/restapi/v1/user?type=1&token=7573893fr38ovdem51q8vkrqjb5t8l24')
        .expect(200)
        .expect('user info');
      // assert(result.body === 'user info');
    });

    // it('should status 422 because miss type and type', async () => {
    //   await app.httpRequest()
    //     .get('/restapi/v1/user')
    //     .expect(422);
    // });

    // it('should status 422 because miss token', async () => {
    //   await app.httpRequest()
    //     .get('/restapi/v1/user?type=1')
    //     .expect(422);
    // });

    // it('should status 422 because miss type', async () => {
    //   await app.httpRequest()
    //     .get('/restapi/v1/user?token=7573893fr38ovdem51q8vkrqjb5t8l24')
    //     .expect(422);
    // });
  });
});
