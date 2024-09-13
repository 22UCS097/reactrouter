import React,{useEffect,useState}from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { Route,Routes,BrowserRouter,NavLink,useParams} from 'react-router-dom';
import reportWebVitals from './reportWebVitals';

const Home=()=>{
  return(
    <div>
      <button  style={{color:"blue",fontSize:"30px", borderRadius:"20px"}}>
      < NavLink style={{textDecoration:"none"}} to={"/post"}>click me</NavLink>
      </button>
    </div>
  )
}

const Post=()=>{
  const [data,setData]=useState([]);

   useEffect(()=>{
    fetch(`https://jsonplaceholder.typicode.com/posts`)
    .then((res)=>res.json())
    .then((res)=>setData(res));

   },[])
   console.log(data);
  return(
    <div>
      <h1>hello</h1>
      {
        data.map((ele)=>{
        return <ul><NavLink style={{display:"block"}} to={`/each/${ele.id}`}>{ele.title}</NavLink> </ul>
        }
        )
      }
     
    </div>
  )
}

const Each =()=>{
  const [data,setData]=useState([]);
  const params=useParams();
  useEffect(()=>{
    fetch(`https://jsonplaceholder.typicode.com/posts/${params.userId}`)
    .then((res)=>res.json())
    .then((res)=>setData(res));
    
  },[])
  const inf= data.body;
  
      
  return(
    <div>
      <h1 style={{color:"blue"}}>you are on <span style={{color:"red"}}>{data.id}</span> item</h1>
      <h5>{data.body}</h5>
    </div>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
       <Routes> 
         <Route path="/" element={<Home/>}></Route>
         <Route path="/post" element={<Post/>}/>
         <Route path="/each/:userId" element={<Each/>}/>

       </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
reportWebVitals();
