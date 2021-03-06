import { Field, ID, Int, ObjectType } from 'type-graphql';

@ObjectType()
export class SubjectCategoryDto {
  @Field(() => ID, { nullable: true }) id?: number;
  @Field({ nullable: true }) subjectCategoryName?: string;
  @Field(() => Int, { nullable: true }) version?: number;
}
