import {
    Sequelize,
    Model,
    DataTypes,
    Optional
  } from 'sequelize';

  import { db }from '../config/connection'
  interface CustomerAttributes {
    id: number;
    firstName: string;
    lastName: string;
    phone: string;
    email: string;
  }

  interface CustomerCreationAttributes 
    extends Optional<CustomerAttributes, 'id'> {}

  export interface CustomerInstance
    extends Model<CustomerAttributes, CustomerCreationAttributes>,
    CustomerAttributes {
      createdAt?: Date;
      updatedAt?: Date;
    }


  export const Customer = db.define<CustomerInstance>('customer', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        unique: true,
        allowNull: false
      },
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING,
    phone: DataTypes.STRING,
    email: DataTypes.STRING,
  });
