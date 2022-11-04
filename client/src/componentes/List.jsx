function List({tasks}){


    return(
        <div className="list">
            {tasks.map((task)=> {
                 return<div className="tarjeta">
                    <h2>{task.title}</h2>
                    <p>{task.content}</p>
                </div>
            })}
            
             
        </div>
    )
}
export default List;