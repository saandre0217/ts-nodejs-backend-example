import {
    Model,
    Optional,
    DataTypes,
  } from 'sequelize';

  import { db }from '../config/connection'
  import { Customer } from './customer';
  interface BikeAttributes {
    id: number;
    make: string;
    model: string;
    bikeYear: string;
    customerId: number;
    workOrderId: number;
  }

  interface BikeCreationAttributes 
    extends Optional<BikeAttributes, 'id'> {}

  export interface BikeInstance
    extends Model<BikeAttributes, BikeCreationAttributes>,
    BikeAttributes {
      createdAt?: Date;
      updatedAt?: Date;
    }

   
export const Bike = db.define('bike', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
    make: DataTypes.STRING,
    model: DataTypes.STRING,
    bikeYear: DataTypes.STRING,
    customerId: {
        type:DataTypes.INTEGER,
        references: {
            model: Customer,
            key: 'id'
        }
    }
},
{timestamps: true}
);


Customer.hasMany(Bike)
Bike.belongsTo(Customer)
