import { Mongo } from 'meteor/mongo';
import { SimpleSchema } from 'meteor/aldeed:simple-schema';

export const Images = new Mongo.Collection('images');
Images.attachSchema(new SimpleSchema({ //used for cloudinary autoform
  image: {
    type: String,
    autoform: {
      afFieldInput: {
        type: 'cloudinary'
      }
    }
  }
}));

export const UserProducts = new Mongo.Collection('userProducts');