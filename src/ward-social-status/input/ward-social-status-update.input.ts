import { Field, InputType, Int } from 'type-graphql';

@InputType()
export class WardSocialStatusUpdateInput {
  @Field(() => Int, { nullable: false }) wardId: number;
  @Field(() => [Int], { nullable: false }) oldSocialStatusesIds: number[];
  @Field(() => [Int], { nullable: false }) newSocialStatusesIds: number[];
}
