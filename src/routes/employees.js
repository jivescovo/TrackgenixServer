import express from 'express';
// import employeesControllers from '../controllers/employees';
import employeesValidations from '../validations/employees';
import {
  getAllEmployees,
  getEmployeesById,
  createEmployees,
} from '../controllers/employees';

const router = express.Router();

router
  .get('/', getAllEmployees)
  .get('/:id', getEmployeesById)
  .post('/', employeesValidations, createEmployees);

export default router;
