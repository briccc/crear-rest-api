import {pool} from './database.js';

class LibroController {

    //read libros
     async getAll(req, res) {
         const [result] = await pool.query('SELECT * FROM libros'); 
         res.json(result);
     }

     //read one
     async getOne(req, res) {
        const libroId = req.params.id; 
        const [result] = await pool.query('SELECT * FROM libros WHERE id = ?', [libroId]);
      
        if (result[0] !== undefined) {
          res.json(result);
        } else {
          res.json({ "Error": "No existe el libro" });
        }
      }

      //create one
      async createOne(req, res) {
        try {
          const libro = req.body;
          const [result] = await pool.query('INSERT INTO Libros(nombre, autor, categoria, anio_publicacion, ISBN) VALUES (?, ?, ?, ?, ?)', [libro.nombre, libro.autor, libro.categoria, libro.anio_publicacion, libro.ISBN]);
          
          res.json({ "Libro creado": result.insertId });
        } catch (error) {
          console.error(error);
          res.status(500).json({ error: "Error al crear libro" });
        }
      }

}

export const libro = new LibroController();