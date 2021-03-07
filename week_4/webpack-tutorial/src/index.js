import "./style.css";
import "./style.scss";
import React, { useState } from "react";
import { render } from "react-dom";
import { getUsers } from "./common/usersAPI";

console.log("hello webpack");

//fetch
getUsers().then(json => console.log(json));

//Dynamic import
const btn = document.getElementById("btn");
const getUserModule = () => import(/* webpackChunkName: "usersAPI" */"./common/usersAPI");
btn.addEventListener("click", () => {
    getUserModule().then(({ getUsers }) => {
      getUsers().then(json => console.log(json));
    });
});

//Fancy function
const fancyFunc = () => {
    return [1, 2];
};
const [a, b] = fancyFunc();


//react app
function App() {
    const [state, setState] = useState("CLICK ME");

    return <button onClick={() => setState("CLICKED")}>{state}</button>;
}

render(<App />, document.getElementById("root"));


