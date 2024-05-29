//import { Request, Response } from "express";
import { Customer, CustomerInstance } from '../db/models/customer'
// import { WorkOrder, WorkOrderAttributes } from '../models/workOrder';
// import { Bike } from '../models/bike';
// import { PhotoWorkOrder } from '../models/photo';
// import { allQuestionsInstance } from '../../client/src/Components/Form/formQuestionData'

export const createCustomer = async(formData: any) => {
    const { firstName, lastName, email, phone} = formData.state
    try {
        console.log(firstName, phone)
        const currentCustomer = await Customer.findOne({
            where: {
                phone
            }
        })

        if(currentCustomer){
            return currentCustomer
        } else {
            const newCustomer = await Customer.create({
                firstName,
                lastName,
                phone,
                email 
            })
    
            return newCustomer
        }

        
    }catch(error){
        console.error('error creating customer', error)
    }
};
// interface createWorkOrderAttributes {
//     createWorkOrder: (formData: allQuestionsInstance, customerId: number) => WorkOrderAttributes
// }
// export const createWorkOrder = async(formData: any, customerId:number, bikeId:number) => {
//    const {tuneUp,
//     frontBreak,
//     rearBreak,
//     frontShift,
//     rearShift,
//     chain,
//     bartape,
//     headset,
//     bottomBracket,
//     wheelBarring,
//     flat,
//     replaceTire,
//     tubeless,
//     comments,
//     other } = formData.state
//     try {

//         const workOrder = await WorkOrder.create({
//             progress:'new',
//             tuneUp,
//             frontBreak,
//             rearBreak,
//             frontShift,
//             rearShift,
//             chain,
//             bartape,
//             headset,
//             bottomBracket,
//             wheelBarring,
//             flat,
//             replaceTire,
//             tubeless,
//             comments, 
//             other,
//             customerId,
//             bikeId
//         })

//         return workOrder

//     }catch(error){
//         console.error('could not create workorder', error)
//     }
// }

// export const createBike = async(formData: any, customerId:number) => {
//     const {make, model, bikeYear} = formData.state;

//     try{
//         const currentBike = await Bike.findOne({
//             where:{
//                 make,
//                 model,
//                 bikeYear,
//                 customerId
//             }
//         })

//         if(currentBike){
//             return currentBike
//         } else {

//             const newBike = await Bike.create({
//                 make,
//                 model,
//                 bikeYear,
//                 customerId,
//             })
//             return newBike
//         }
//     }catch(error){
//         console.error('could not create bike', error)
//     }
// }

// export const createCustomerOrder = async(req:Request, res: Response) => {
//     const formData = req.body

//     try{
//         const customer:CustomerInstance | undefined = await createCustomer(formData)
//         if(customer){
//             const bike: any = await createBike(formData, customer.id)


//             if(bike){
//                 const workOrder: any = await createWorkOrder(formData, customer.id, bike.id)

//                 res.status(201).send(workOrder)
//             }
//         } 
//     } catch(error){
//         console.error('error creating full order', error)
//     }
// }
// export const getCustomerOrders = async(req:Request, res: Response) => {
//     const {status} = req.params
//     try{
//         const customerOrders = await WorkOrder.findAll({
//             where:{progress: status}, 
//             include: [Bike, Customer]
//         });
//             res.status(200).send(customerOrders)
//     } catch(error){
//         console.error('could not get all customers:', error);
//         res.sendStatus(500)
//     }
// };