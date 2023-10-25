import {pool} from './database.js';

class LibroController {

    //read libros
    async getAll(req, res) {
      try {
        const [result] = await pool.query('SELECT * FROM libros'); 
        res.json(result);
      } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Error al obtener libros" });
      }
    }

     //read one
     async getOne(req, res) {
      try {
        const libroId = req.params.id; 
        const [result] = await pool.query('SELECT * FROM libros WHERE id = ?', [libroId]);
    
        if (result[0] !== undefined) {
          res.json(result);
        } else {
          throw { status: 404, mensaje: "No existe el libro" };
        }
      } catch (error) {
        if (error.status === 404) {
          res.status(404).json({ error: error.mensaje });
        } else {
          console.error(error);
          res.status(500).json({ error: "Error al obtener libro" });
        }
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

      //update libro
      async updateOne(req, res) {
        try {
          const libro = req.body;
          const [result] = await pool.query('UPDATE Libros SET nombre = ?, autor = ?, categoria = ?, anio_publicacion = ?, ISBN = ? WHERE id = ?', [libro.nombre, libro.autor, libro.categoria, libro.anio_publicacion, libro.ISBN, libro.id]);
      
          if (result.affectedRows > 0) {
            res.json({ "Libros actualizados": result.affectedRows });
          } else {
            throw { status: 404, mensaje: "Libro no encontrado" };
          }
        } catch (error) {
          if (error.status === 404) {
            res.status(404).json({ error: error.mensaje });
          } else {
            console.error(error);
            res.status(500).json({ error: "Error al actualizar libro" });
          }
        }
      }

      //delete libro usando su isbn
      async deleteByISBN(req, res) {
        try {
          const ISBN = req.params.ISBN; 
      
          const [result] = await pool.query('DELETE FROM Libros WHERE ISBN=(?)', [ISBN]);
        
          if (result.affectedRows > 0) {
            res.json("Libro eliminado con éxito");
          } else {
            throw { status: 404, mensaje: "Libro no encontrado" };
          }
        } catch (error) {
          if (error.status === 404) {
            res.status(404).json({ error: error.mensaje });
          } else {
            console.error(error);
            res.status(500).json({ error: "Error al eliminar libro" });
          }
        }
      }




}

export const libro = new LibroController();