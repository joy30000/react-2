import { useState } from "react";

export default function App() {
  const [textState, setTextState] = useState("Sign up");
  const [btnState, setbtnState] = useState("Sign in");
  const [footer, setfooter] = useState("Don't have an account?");
  const [login, setlogin] = useState(true);

  const toggleText = () => {

    setbtnState((state) => (state === "Sign up" ? "Sign in" : "Sign up"));

    setfooter((state) =>state === "Don't have an account?" ? " have  an  account ? " : "Don't have an account?");

    setTextState((state) => (state === "Log in" ? "Sign up" : "Log in"));

    if (login) {
      document.getElementById("box1").style.display = "block";
      document.getElementById("box2").style.display = "block";
      document.getElementById("footer_para").style.marginLeft = "163px";

      setlogin((state) => (state === true ? false : true));
    }

    if (!login) {
      document.getElementById("box1").style.display = "none";
      document.getElementById("box2").style.display = "none";
      document.getElementById("footer_para").style.marginLeft = "109px";

      setlogin((state) => (state === true ? false : true));
    }
  };

  return (
    <>
      <div class="flex flex-col border-2 border-[#9a9987]  w-[550px] mt-[40px] ml-[450px] rounded-lg">

{/* ----------------------------------------logo ----------------------------------------------------*/}
        <img
          src="https://www.dafont.com/forum/attach/orig/7/3/737566.png?1"
          alt=""
          class="w-[359px] ml-[93px] mt-[70px]"
        />


{/*------------------------------ input fields----------------------------------------------------- */}
        <input
          id="box1"
          class="border-2 border-[#9a9987] h-12 w-[450px] ml-[50px] mt-[30px] hidden"
          type="text"
          placeholder="     Mobile Number or Email"
        />
        <input
          id="box2"
          class="border-2 border-[#9a9987] h-12 w-[450px] ml-[50px] mt-[10px] hidden"
          type="text"
          placeholder="     Full Name"
        />

        <input
          class="border-2 border-[#9a9987] h-12 w-[450px] ml-[50px] mt-[10px]"
          type="text"
          placeholder="     Phone number, username or email"
        />

        <input
          class="border-2 border-[#9a9987] h-12 w-[450px] ml-[50px] mt-[10px]"
          type="password"
          placeholder="     Password"
        />

        <button class="h-[40px] w-[450px] ml-[50px] mt-[34px] rounded-md text-[20px] font-bold bg-[#4cb5f9] text-white">
          {btnState}
        </button>

{/* --------------------------------------footer-------------------------------------------------------------- */}
        <p id="footer_para" class="mt-[37px] text-2xl mb-[70px] ml-[109px]">
          {footer}{" "}
          <span class="text-[#93d3fb] " onClick={toggleText}>
            {" "}
            {textState}
          </span>
        </p>
      </div>
    </>
  );
}
