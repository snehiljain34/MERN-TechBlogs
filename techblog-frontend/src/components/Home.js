import React from "react";
import tech1 from "./img/tech1.png";

class Home extends React.Component {
    render() {
        return (
            <div className="blogs">
                
                <div className="container">
                <h1>welcome To TechBlogz!</h1>
                <p>I'm a full stack web developer, from India.  Here, you will find the most awesome techblogzz!</p>
                </div>
                
                <div className="welcome">
                <div class="row align-items-center text-center text-md-left">
                    <div class="col-lg-4">
                        <h1 class="mb-3 display-3">Awesome Tech-Blogs every weekend!</h1>
                        <p>Join with me! You'll get regularly brand new and awesome content here!</p>
                    </div>
                    <div class="col-lg-8">
                            <img src={tech1} className="tech1" alt="img"></img>
                    </div>
                </div>
                </div>
                
            </div>
            
        );
    }
}

export default Home;