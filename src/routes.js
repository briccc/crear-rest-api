import { Router } from 'express';
import { libro } from './controller.js';

export const router = Router();

router.get('/libros', libro.getAll); //read all
router.get('/libro/:id', libro.getOne); //read one

