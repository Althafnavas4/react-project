// import List from "./components/List"


// function App() {
//   return(
//     <List/>
//   )
// }

// export default App




// import react,{ usestate,usememo } from "react"

// function App() {
//   const [count, setCount] = usestate(0);
//   const [text, setCount] = usestate("");
  
//   const expensivecalculation = usememo(() => {
//     console.log("Expensive calculation running...");
//     return count * 3;

//   },[count]);
//   return(
//     <div>
//       <h1>count: {count}</h1>
//       <h2>expensive result {expensivecalculation}</h2>
//       <button onclick={() => setCount(count +1)}>increement count  </button>
//       <input 
//       type="text"
//       value={text}
//       onchange={(e) => settext(e.target.value)}
//       placeholder="type somthig...."
//       />
//     </div>
//   );
// }