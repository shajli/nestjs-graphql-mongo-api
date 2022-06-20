import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { ObjectType, Field, Int} from '@nestjs/graphql';
import { Document } from 'mongoose';

export type UserDocument = User & Document;

@ObjectType()
@Schema()
export class User {

  @Field(type=>String)
  _id: string;

  @Prop()
  @Field(type=>String, {description: 'User Name'})
  name: string;

  @Prop()
  @Field(type => Int, {deprecationReason: "User Age"})
  age: number;
}

export const UserSchema = SchemaFactory.createForClass(User);
