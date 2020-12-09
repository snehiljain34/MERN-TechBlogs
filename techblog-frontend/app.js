import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
//components
import Navbar from "./components/Navbar";
//pages
import Home from "./components/Home";
import PostList from "./components/PostList";
import Post from "./components/Post";

//style css
import "./style.css";

class App extends React.Component {
    render(){
        return (
        <BrowserRouter>
            <Navbar/>
            <Switch>
                <Route exact path="/" component={Home}/>
                <Route path="/posts/:id" component={Post}/>
                <Route path="/posts" component={PostList} />
        
            </Switch>
        </BrowserRouter>
        );
   }
}