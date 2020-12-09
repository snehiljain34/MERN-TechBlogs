import React from "react";
import axios from "axios";

class Post extends React.Component{
    state = {
        post : {}
    }
    componentDidMount() {
        this.getPost();
    }
    async getPost(){
        const res = await axios.get( `http://localhost:5000/posts/${this.props.match.params.id}`);
        this.setState({ post: res.data });
    }

    renderHTML() {
        return { __html: this.state.post.html};
    }

    renderPost() {
        return <div dangersouslySetInnerHTML={this.renderHTML()}></div>;
    }
     
    render() {
        return (<div className="container">{this.renderPost}</div>);
    }
    }
    export default Post;