import { InputType, Field, Int } from '@nestjs/graphql';

@InputType()
export class NewUserInput {
  @Field(type => String)
  readonly name: string;
  @Field(type => Int)
  readonly age: number;
}
