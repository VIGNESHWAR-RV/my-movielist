// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;

import "./App.css";

// export default function App() {
//   return (
//     <div className="App">
//       <h1>Hello CodeSandbox</h1>
//       <h2>Start editing to see some magic happen!</h2>
//       <First name="Albert Einstein" image="https://th.bing.com/th/id/R.0e3212e428718fc2c90ed2da4a6f031b?rik=qpLzZEAHl2LBeQ&riu=http%3a%2f%2fimages.teamsugar.com%2ffiles%2fusers%2f1%2f13839%2f42_2007%2falbert-einstein-young-1.jpg&ehk=D1csGA6HNKcQ8qRg3ua2B8t8TVWHcNt4rbSTYEGazjo%3d&risl=&pid=ImgRaw&r=0"/>
      
//     </div>
//   );
// }
// function First({name,image}){
//  return (
//    <div className="Photo">
//         <img src={image} alt="einstein"></img>
//          <h1>{name}</h1>
//   </div>
//          );
// }
import {useState} from 'react';
export default function App() {

 const [movies,setMovies] = useState(
 [{name:"RRR",
 image:"https://www.filmibeat.com/ph-big/2021/12/rrr_163903031450.jpg",
 rating:9,
 summary:"A fictitious story about two legendary revolutionaries and their journey away from home before they started fighting for their country in 1920's."},
 {name:"Bahubhali-2",
 image:"https://wallpapercave.com/dwp2x/wp4027395.jpg",
 rating:8.5,
 summary:"When Shiva, the son of Bahubali, learns about his heritage, he begins to look for answers. His story is juxtaposed with past events that unfolded in the Mahishmati Kingdom."},
 {name:"Bahubhali-1",
 image:"https://wallpapercave.com/dwp2x/wp1851939.jpg",
 rating:8,
 summary:"In ancient India, an adventurous and daring man becomes involved in a decades-old feud between two warring peoples."},
 {name:"Naan-E",
 image:"https://wallpapercave.com/wp/wp7489196.jpg",
 rating:7,
 summary:"Since the head of a housefly is made up almost entirely of eye and very little muscle, conveying emotion as the fly was extremely difficult."},
 {name:"Maveeran",
 image:"http://i.indiglamour.com/photogallery/tamil/movies/2011/may10/Maaveeran/wide/Maaveeran_5715.jpg",
 rating:4,
 summary:"A warrior gets reincarnated 400 years later, after trying to save the princess and the kingdom, who also dies along with him. He then sets back again to fight against all odds and win back his love."},
 ]
 );
const [show,setShow] = useState(false);
const style={display:(show)?"block" :"none"};

const [added,adding] = useState({});

const [name,naming] = useState("");
const [image,imaging]=useState("");
const [rating,rate]=useState("");
const [summary,story]=useState("");

const [nameInput , nInput]=useState(false);
const nameStyle = {boxShadow: (nameInput)?"0px 2px 5px green" : "0px 2px 5px red" }
const [imageInput , iInput]=useState(false);
const imageStyle = {boxShadow: (imageInput)?"0px 2px 5px green" : "0px 2px 5px red" }
const [ratingInput , rInput]=useState(false);
const ratingStyle = {boxShadow: (ratingInput)?"0px 2px 5px green" : "0px 2px 5px red" }
const [summaryInput , sInput]=useState(false);
const summaryStyle = {boxShadow: (summaryInput)?"0px 2px 5px green" : "0px 2px 5px red" }

 return(
   <div  className="App">
     <div className="head">
      <h1>RAJAMOULI'S</h1>
      <h1>Treat❤️</h1>
      </div>
      {movies.map(({name,image,rating,summary})=><First name={name} image={image} rating={rating} summary={summary}/>)}
    <div className="Add">
    {(show)?"" : <button  onClick={()=>setShow(true)}>+</button>}

      <div className="addMovie" style={style}>
        <div className="addMovieList">

         <div className="addDetails">
           <label>Name:-</label>
           <input name="name" style={nameStyle} placeholder="So What was the movie name?" onChange={(event)=>{naming(event.target.value);nInput(false)}}/>
           <button name="name" onClick={()=>{adding({...added,name});nInput(true)}}>Add</button>
         </div>

         <div className="addDetails">
           <label>Thumbnail:-</label>
           <input name="image" style={imageStyle} placeholder="Movie image link please" onChange={(event)=>{imaging(event.target.value);iInput(false)}}/>
           <button name="name" onClick={()=>{adding({...added,image});iInput(true)}}>Add</button>
         </div>

         <div className="addDetails">
           <label>Rating:-</label>
           <input name="rating" style={ratingStyle} placeholder="Rate it out of 10!!!" onChange={(event)=>{rate(event.target.value);rInput(false)}}/>
           <button name="name" onClick={()=>{adding({...added,rating});rInput(true)}}>Add</button>
         </div>

         < div className="addDetails">
            <label>Summary:-</label>
            <input name="summary" style={summaryStyle} placeholder="Tell a short story of the movie" onChange={(event)=>{story(event.target.value);sInput(false)}}/>
            <button name="name" onClick={()=>{adding({...added,summary});sInput(true)}}>Add</button>
         </div>

         <div className="buttons">
            <button className="addToList"onClick={()=> {(added.hasOwnProperty("name") && added.hasOwnProperty("image") && added.hasOwnProperty("rating") && added.hasOwnProperty("summary")) ? setMovies([...movies,added]): alert("Give Details To add Movie or cancel")}}>Add to List</button>
            <button className="cancel" onClick={()=>{setShow(false);adding({})}}>Cancel</button>
         </div>
        </div>
      </div>
    </div>
      
   </div>
 );
}

 
function First({name,image,rating,summary}){
   

  const [remove,setRemove] = useState(false);
  const styles = {display: remove ? "none" : "block"};

  const [show,showing]= useState(false);

  const[likes,liking]=useState(Math.random().toFixed(1)*10);
  const[disLikes,disliking]=useState(Math.random().toFixed(1)*10);

  const check=(rating>=8.5)?"green" : (rating>4.5)?"yellow" :"red";
  const style=(check==="green")?{background:"green",color:"white"} : (check==="yellow")? {background:"yellow",color:"black"} :  {background:"red",color:"white"} ;
  const check1=(rating>=8.5)?"😀" : (rating>=4.5)? "🙂": "😒" ;
  return (
    <div style={styles} className="Movies">
      <img src={image} alt={name}/>
     <div className="Text">
     <h2>{name}</h2>
    <p className="rating">{check1}<span style={style}>{rating}</span></p>
    </div>
    <div className="buttons">
    <button  className="toggle" onClick={()=>showing(!show)}>Want a Spoiler?👀</button>
    <button className="delete" onClick={()=>setRemove(!remove)}>🗑️</button> 
    </div>
      {show ?<p className="summary"><b>Summary - </b>{summary}</p>: ""}
    <div className="Likes">
    <button onClick={()=>liking(likes+1)}>👍{likes}</button>
    <button onClick={()=>disliking(disLikes+1)}>👎{disLikes}</button>
    </div>
  </div>
         );
 }

