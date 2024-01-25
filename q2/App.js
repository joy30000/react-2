import { useState } from "react";

export default function App() {
  const [textState, setTextState] = useState(0);
  return (
  <>
  <div class="w-[403px] h-[309px]  ml-[566px] mt-[149px] rounded-[1.5rem] bg-[#ff4957]">

  <p class="text-[70px] font-bold ml-[170px] mt-[70px] text-[white]">{textState}</p>
  <button class="p-[20px] ml-[56px] mt-[32px] bg-white" onClick={()=>setTextState(textState+1)}>Increment</button> 
  <button class=" p-[20px] ml-[56px] mt-[32px] bg-white" onClick={()=>setTextState(textState-1)}>decrement</button>
  

  </div>

  

  </>
  );
}
