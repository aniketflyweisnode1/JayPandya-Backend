import mongoose from 'mongoose';
import slugify from 'slugify';

// Plugins
import toJSON from './plugins/index';

const productSchema = mongoose.Schema({
  id: { type: Number, required: false },
  asin: { type: String, required: false },
  product_name: { type: String, required: false },
  description: { type: String, required: false },
  price: {type: Number, require: false, default: 50},
  priceDiscount: {type: Number, require: false, default: 50},
  brand: { type: String, required: false },
  color: { type: String, required: false },
  image_url: Array,
  bullet_text: Array,
  category : {type: mongoose.Schema.Types.ObjectId, ref: "Category"},
  shipping_weight: { type: String, required: false, },
  shipping_weight_unit: { type: String, required: false },
  quantity: {type: Number, require: false, default: 1},
  manufacturer: { type: String, required: false },
  model: { type: String, required: false },
  updated_date: { type: Date, default: Date.now },
  userId: {type: mongoose.Schema.Types.ObjectId, ref: "User", require: false}
});

// add plugin that converts mongoose to json
// productSchema.plugin(toJSON);

productSchema.index(
  { id: 1, asin: 1 },
  { unique: false }
);
// productSchema.index({ slug: 1 });

// Virtual populate
// productSchema.virtual('reviews', {
//   ref: 'Review',
//   foreignField: 'product',
//   localField: '_id'
// });

// DOCUMENT MIDDLEWARE: runs before .save() and .create() !.update()
// productSchema.pre('save', function (next) {
//   this.slug = slugify(this.name, { lower: false });
//   next();
// });

const Product = mongoose.model('Product', productSchema);

export default Product;
