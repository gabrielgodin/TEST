//es un protocolo que nos enseñan como escribir codigo  rest con http
//http es un protocolo que nos permite la comunicacion  entre varias computadoras 
//con http  nos comunicamos  con las api por medio de gat , post , delete  put 
// ademas  http  nos devuelve un codigo de respuesta (por si la consulta  fallo o funcion etc ....)
// las api siempre nos devuelven  al cliente un codigo de estado  y un json  si todo sale bien 


import { pool } from "../db.js"
     export const getTasks = async(req,res) =>{
          try{
         const[result] = await pool.query("SELECT * FROM tasks ORDER BY  id ASC");
         console.log("resultado: "+result);
         res.json(result);

     }catch(error){
         return res.status(500).json({
             message: error.message
         });
     }

}

export const getTask = async (req, res) =>{
    try{
        const[result] =  await pool.query("SELECT * FROM tasks where  id = ?", [req.params.id]);
        if(result.length == 0){
            return res.status(404).json({message: "Task not found "})
        }
        console.log("result : "+result)
        res.json({
            id: result.insertId,
            title,
            content
        });
    }catch(error){
        return res.status(404).json({
            message: error.message
        })
    }
}

export const createTask = async (req, res) => {
    try{
        const {title, content} = req.body;
        const [result] = await pool.query("INSERT INTO  tasks(title, content) VALUES (?,?)",[
            title,
            content
        ]);
        console.log("result: "+result)
        res.json({
            id: result.insertId,
            title,
            content
        })
    }catch(err){
        return res.status(404).json({
            message: err.message
        })
    }
}

    
 