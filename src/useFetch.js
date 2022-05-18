import { useState ,useEffect} from "react"


const useFetch=(url)=>{
    const [data,setdata]=useState(null);
    const [isPending,setisPending]=useState(true);
    const [error,setError]=useState(null);

 
 useEffect(()=>{
     const abortcont=new AbortController();
 fetch(url,{signal:abortcont.signal}).then(res=>{
 if(!res.ok)  {
 throw Error("cold not fetch data")  
 }
 return res.json(); 
 }).then(data1 =>{
     setdata(data1);
     setisPending(false);
     setError(null);
 }).catch(err=>{
     if(err.name==="AbortError"){

     }else{
     setisPending(false);
     setError(err.error);
     }
    });
 return ()=>abortcont.abort();
 },[url]);

 return {data,error,isPending};
}
export default useFetch;