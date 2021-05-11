export default app => {
  const { mongoose } = app;
  const Schema = mongoose.Schema;

  // const schema = new Schema({
  //   name: String,
  //   binary: Buffer,
  //   living: Boolean,
  //   updated: { type: Date, default: Date.now },
  //   age: { type: Number, min: 18, max: 65 },
  //   mixed: Schema.Types.Mixed,
  //   _someId: Schema.Types.ObjectId,
  //   decimal: Schema.Types.Decimal128,
  //   array: [],
  //   ofString: [String],
  //   ofNumber: [Number],
  //   ofDates: [Date],
  //   ofBuffer: [Buffer],
  //   ofBoolean: [Boolean],
  //   ofMixed: [Schema.Types.Mixed],
  //   ofObjectId: [Schema.Types.ObjectId],
  //   ofArrays: [[]],
  //   ofArrayOfNumbers: [[Number]],
  //   nested: {
  //     stuff: { type: String, lowercase: true, trim: true }
  //   },
  //   map: Map,
  //   mapOfString: {
  //     type: Map,
  //     of: String
  //   }
  // })

  const MongoSchema = new Schema({
    name: { type: String, trim: true },
    age: { type: Number, default: 1, max: 10, min: 1 },
    start: { type: Date },
    alive: { type: Boolean },
    member: { type: Array, required: true },
  });

  MongoSchema.set('autoIndex', false);

  return mongoose.model('Mongo', MongoSchema);
};
