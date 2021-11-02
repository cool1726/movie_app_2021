import React, {useState, useEffect} from "react";
import { BrowserRouter, Route} from "react-router-dom";
import About from "./routes/About";
import Home from "./routes/Home";
import Navigation from "./components/Navigation";
import Detail from "./components/Detail";

function Hello() {
    function destroyedFn() {
        console.log("bye :(");
    }
    function hiFn() {
        console.log("hi :)");
        return destroyedFn; // component가 destroy 될 때 실행될 함수
    }
    useEffect(hiFn, []);
    return <h1>Hello</h1>;
}

function App() {
    const [showing, setShowing] = useState(false);
    const onClick2 = () => setShowing((prev) => !prev);

    const [counter, setValue] = useState(0);
    const [keyword, setKeyword] = useState("");
    const onClick = () => setValue((prev) => prev + 1);
    const onChange = (event) => setKeyword(event.target.value);
    console.log("i run all the time");

    useEffect(() => {
        console.log("CALL THE API")
    }, []); // ONLY 한 번만 실행하고 싶을 때 (초기 렌더링 때)

    useEffect(() => {
        if (keyword !== "" && keyword.length > 5) {
            console.log("SEARCH FOR", keyword);
        }
    }, [keyword]); // keyword 값이 변할 때만 코드를 실행하고 싶을 때

    useEffect(() => {
        console.log("I run when 'counter' changes.");
    }, [counter]);

    useEffect(() => {
        console.log("I run when keyword & counter change.");
    })

    return(
        <div>
            {showing ? <Hello/> : null}
            <button onClick={onClick2}>{showing ? "Hide" : "Show"}</button>
            <input value={keyword} onChange={onChange} type="text" placeholder="Search here..."/>
            <h1>{counter}</h1>
            <button onClick={onClick}>Click Me!</button>
        </div>
    )

    // return (
        // <BrowserRouter>
        //     <Navigation />
        //     <Route exact path="/" component={Home} />
        //     <Route exact path="/about" component={About} />
        //     <Route exact path="/movie/:id" component={Detail}/>
        // </BrowserRouter>
    // );
}

export default App;