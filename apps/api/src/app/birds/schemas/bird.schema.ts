import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type BirdDocument = Bird & Document;

@Schema()
export class Bird {
  @Prop()
  id: number;

  @Prop()
  name: string;
}

export const BirdSchema = SchemaFactory.createForClass(Bird);
