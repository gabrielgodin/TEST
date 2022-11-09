import {Form, Formik} from "formik";
import{createTaskRequest} from "../api/task.api.js"


function AddTask(){

    return(
        <div className="form">
            <Formik 
                initialValues={{
                    title : "",
                    content : ""
                }}
                onSubmit ={async (values) =>{
                        console.log(values);
                        try{
                            const response = await createTaskRequest(values);
                            console.log(response);
                        }catch(err){
                            console.log("Error "+err)
                        }
                    }
                }
            >
            {({handleChange, handleSubmit}) =>(
                <form onSubmit={handleSubmit}>
                    <label htmlFor="">Titulo</label>
                    <input type="text" name="title" placeholder="Titulo de la nota" onChange={handleChange}/> 
                    <label htmlFor="">Contenido</label>
                    <input type="text" name="content" placeholder="contenido de la nota " onChange={handleChange}/>
                    <input type="submit" value="enviar"/>
                </form>
            )}
        </Formik>
        </div>
    )
}
export default AddTask;