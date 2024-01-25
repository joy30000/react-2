tailwind css has been used in this project via cdn link in index.html



when we click on the "sign up" text bellow the button it calls a function "toggletext" there first we 
change the button text 

setbtnState((state) => (state === "Sign up" ? "Sign in" : "Sign up"));

then we change the footer para

setfooter((state) =>state === "Don't have an account?" ? " have  an  account ? " : "Don't have an account?");

then we change the footer para span text

setTextState((state) => (state === "Log in" ? "Sign up" : "Log in"));

firstly we have already made avariable login which is initially "true" and when call the functon "toggletext"
 it uses if else statement

if login=="true" then it adds two extra divs and set login as"false"

if login=="false" then it display none two extra divs and set login as"true"

as the name of the function toogletext it changes everything when it calls everytime and according to it
 if else statement are programmed to get the desired output