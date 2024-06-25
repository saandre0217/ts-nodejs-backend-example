import {
    Sequelize,
    Model,
    DataTypes,
    Optional
  } from 'sequelize';

  import { db }from '../config/connection'
  import { Customer, CustomerInstance } from './customer';
  import { Bike, BikeInstance } from './bike'

  export interface WorkOrderAttributes {
    id: number;
    progress: string;
    tuneUp: boolean;
    frontBreak: boolean;
    rearBreak: boolean;
    frontShift: boolean;
    rearShift: boolean;
    chain: boolean;
    bartape: boolean;
    headset: boolean;
    bottomBracket: boolean;
    wheelBarring: boolean;
    flat: boolean;
    replaceTire: boolean;
    tubeless: boolean;
    other: string;
    comments: string;
    customerId: number;
    bikeId: number;

  }
  interface WorkOrderCreationAttributes 
  extends Optional<WorkOrderAttributes, 'id'> {}

  export interface WorkOrderInstance
  extends Model<WorkOrderAttributes, WorkOrderCreationAttributes>,
  WorkOrderAttributes {
    createdAt?: Date;
    updatedAt?: Date;
  }

  export type CustomerResponse = {
    id: number;
    progress: string;
    tuneUp: boolean;
    frontBreak: boolean;
    rearBreak: boolean;
    frontShift: boolean;
    rearShift: boolean;
    chain: boolean;
    bartape: boolean;
    headset: boolean;
    bottomBracket: boolean;
    wheelBarring: boolean;
    flat: boolean;
    replaceTire: boolean;
    tubeless: boolean;
    other: string;
    comments: string;
    customerId: number;
    bikeId: number;
    createdAt: Date;
    updatedAt: Date;
    bike: BikeInstance;
    customer: CustomerInstance
  }

  export interface ResponseProps {
    response: CustomerResponse
  }


export const WorkOrder = db.define ('workOrder', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
    progress: DataTypes.STRING,
    tuneUp: DataTypes.BOOLEAN,
    frontBreak: DataTypes.BOOLEAN,
    rearBreak: DataTypes.BOOLEAN,
    frontShift: DataTypes.BOOLEAN,
    rearShift: DataTypes.BOOLEAN,
    chain: DataTypes.BOOLEAN,
    bartape: DataTypes.BOOLEAN,
    headset: DataTypes.BOOLEAN,
    bottomBracket: DataTypes.BOOLEAN,
    wheelBarring: DataTypes.BOOLEAN,
    flat: DataTypes.BOOLEAN,
    replaceTire: DataTypes.BOOLEAN,
    tubeless: DataTypes.BOOLEAN,
    other: DataTypes.STRING,
    comments: DataTypes.STRING,
    customerId: {
        type:DataTypes.INTEGER,
        references: {
            model: Customer,
            key: 'id'
        }
    },
    bikeId: {
      type:DataTypes.INTEGER,
      references: {
          model: Bike,
          key: 'id'
      }
  }
  },
  {timestamps: true}
  );
  
Customer.hasMany(WorkOrder);
WorkOrder.belongsTo(Customer)

Bike.hasMany(WorkOrder);
WorkOrder.belongsTo(Bike)