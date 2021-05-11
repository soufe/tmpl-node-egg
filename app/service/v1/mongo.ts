import { Service } from 'egg';

export default class Mongo extends Service {

  public async create() {
    const { ctx } = this;
    const initialData = {
      name: 'sfe',
      age: 6,
      start: 20151224,
      alive: true,
      member: [ 'Frank', 'Luchifer', 'Mt' ],
    };
    const create = await ctx.model.Mongo.create(initialData);
    console.log(create);
    return create;
  }

  public async read() {
    // const { ctx } = this
    // ctx.model.Article.findOne('search')
    // ctx.model.Article.find('search')
  }

  public async delete() {
    // const { ctx } = this
    // ctx.model.Mongo.deleteOne('search')
    // ctx.model.Article.remove('search')
  }

  public async update() {
    // const { ctx } = this
    // ctx.model.Article.findOneAndUpdate('search', 'new_data')
  }
}
