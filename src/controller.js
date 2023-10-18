import {pool} from './database.js';

class LibroController {

    //read libros
     async getAll(req, res) {
         const [result] = await pool.query('SELECT * FROM libros'); 
         res.json(result);
     }

     //read one
     async getOne(req, res) {
        const libro = req.body;
        const [result] = await pool.quñery('SELECT * FROM libros WHERE id = (?)', [libro.id]);

        if(result[0] != undefined){
            res.json(result);
        }else{
            res.json({"Error" : "No existe el libro"});
        }
     }


}

export const libro = new LibroController();