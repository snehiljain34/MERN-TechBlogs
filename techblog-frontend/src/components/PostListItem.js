import React from "react";
import {Link} from "react-router-dom";


class PostlistItem extends React.Component{
    
    constructor(props) {
        super(props);
        this.onShowPost = this.onShowPost.bind(this);
    }
    onShowPost(){
        window.location.pathname = '/posts/${this.props.post._id}';
    }
    
    renderDate(dateString){
        const monthNames = ["december"];
        const date = new Date(dateString);

        return '${ monthNames[date.getMonth()] } ${date.getDate()}, ${date.getFullYear()}'; 
    }
    renderTags(tags) {
        return tags.map(tag => {
            return <span className="tag" key = {tag}>{tag}</span>;
        });
    }
    render() {
        const {post} = this.props;
        return(
        <Link to={`/posts/${post._id}`} className= "post-list-item">
            <h3 className="title">{post.title}</h3>
            <span className="date">{this.renderDate(post.createdAt)}</span>
            <div className="tags">{this.renderTags(post.tags)}</div>
        </Link>
      );
     }
    }

    export default PostlistItem;