import { BelongsTo, Column, ForeignKey, Model, Table } from 'sequelize-typescript';
import Customer from '../customer/customer.model';
import User from '../user/user.model';

@Table({ tableName: 'agreement' })
export default class Agreement extends Model<Agreement> {
  @Column({ primaryKey: true, autoIncrement: true }) id: number;
  @Column({ allowNull: false, unique: true }) numAgreement: string;

  /** Many-to-one */
  @ForeignKey(() => User)
  @Column({ allowNull: false })
  userId: number;
  @BelongsTo(() => User) user: User;

  /** Many-to-one */
  @ForeignKey(() => Customer)
  @Column({ allowNull: false })
  customerId: number;
  @BelongsTo(() => Customer) customer: Customer;

  @Column({ allowNull: false }) dateAgreement: Date;
  @Column({ allowNull: true }) rem: string;

  @Column({ allowNull: false, defaultValue: 1 }) version: number;
}
