import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { UsersService } from './users.service';
import { User } from './users.schema';
import { NewUserInput } from './inputs/user.input';

@Resolver((of) => User)
export class UsersResolver {
  constructor(private usersService: UsersService) {}

  @Query((returns) => [User])
  async users() {
    return this.usersService.findAll();
  }

  @Mutation((returns) => User)
  async addUser(@Args('newUserData') newUserData: NewUserInput): Promise<User> {
    const user = await this.usersService.create(newUserData);
    return user;
  }
}
