import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type HeroDocument = Hero & Document;

@Schema()
export class Hero {
  @Prop()
  id: number;

  @Prop()
  name: string;
}

export const HeroSchema = SchemaFactory.createForClass(Hero);
