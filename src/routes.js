import { Router } from 'express';
import { libro } from './controller.js';

export const router = Router();

router.get('/libros', libro.getAll); //read all
router.get('/libro/:id', libro.getOne); //read one
router.post('/libro', libro.createOne); //create one
router.put('/libro', libro.updateOne); //update one
router.delete('/libro/:ISBN', libro.deleteByISBN); //delete one
