import { Column, HasMany, Model, Table } from 'sequelize-typescript';
import User from '../user/user.model';

@Table({ tableName: 's_user_role' })
export default class UserRole extends Model<UserRole> {
  @Column({ primaryKey: true }) id: string;
  @Column({ allowNull: false }) roleDescription: string;
  @HasMany(() => User) users: User[];
}