import { useHistory, useParams } from "react-router-dom/cjs/react-router-dom.min";
import useFetch from "./useFetch";

const BlogDetails = () => {
  //comment
const{id}=useParams();
const {data:blog,isPending,error}=useFetch("http://localhost:8000/blogs/"+id);
const history=useHistory();
const handclick=()=>{
    fetch("http://localhost:8000/blogs/"+blog.id,{
        method:"DELEtE"
    }).then(()=>{
        history.push("/"); 
    });
        }
    return ( <div className="blog-details">
 {error && <div>{error}</div>}

{isPending && <div>Loading .....</div>}
{blog && (
    <article>
        <h2>{blog.title}</h2>
        <p>Written by:{blog.author}</p>
        <div>{blog.body}</div>
        <button onClick={handclick}>delete</button>

    </article>
)}
</div> );
}

export default BlogDetails;