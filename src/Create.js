import { useState } from "react";
import { useHistory } from "react-router-dom";
const Create = () => {
    const [title,setTitle]=useState("");
    const [body,setBody]=useState("");
    const history=useHistory();
    const [author,setAuthor]=useState("mario");
    const [isPending,setisPending]=useState(false);

    const handlSubmit=(e)=>{
        e.preventDefault();
        const blog={title,body,author};
        setisPending(true);
        fetch("http://localhost:8000/blogs",{
            method:"POST"
            ,headers:{"Content-Type":"application/json"},
            body:JSON.stringify(blog)
        }).then(()=>{
            setisPending(false);
            setAuthor("mario");
            setBody("");
            setTitle("");
            history.push("/");
        })
    }
    return ( 
    <div className="create">
        <h2>Add a New Blog</h2>
        <form onSubmit={handlSubmit}>
            <label >Blog title:</label>
            <input type="text" value={title} onChange={(e)=>setTitle(e.target.value)}/>
            <label >Blog body:</label>
            <textarea value={body} onChange={(e)=>setBody(e.target.value)}></textarea>
            <select value={author} onChange={(e)=>setAuthor(e.target.value)}>
                <option value="mario">mario</option>
                <option value="luigi">luigi</option>

            </select>
            {!isPending && <button>Add Blog</button>}
            {isPending && <button disabled>Adding blog ...</button>}

        

            
        </form>
    </div> );
}
 
export default Create;