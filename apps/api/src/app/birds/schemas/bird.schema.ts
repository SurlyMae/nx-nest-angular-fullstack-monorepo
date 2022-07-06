import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type BirdDocument = Bird & Document;

@Schema({
  // overriding the toJSON method to shape the returned obj for client
  // learn more: https://mongoosejs.com/docs/guide.html#toJSON & https://docs.nestjs.com/techniques/mongodb#model-injection
  /* example returned obj:
    {
        "name": "goldfinch",
        "id": "62c5dfce0b73e52931aacd31"
    },
  */
  toJSON: {
    virtuals: true,
    transform: (doc, ret) => {
      ret.id = ret._id;
      delete ret._id;
      delete ret.__v;
    },
  },
})
export class Bird {
  @Prop()
  id?: string;

  @Prop()
  name: string;
}

export const BirdSchema = SchemaFactory.createForClass(Bird);
