import React from "react";
import axios from "axios";
import PostListItem from "./PostListItem"

class PostList extends React.Component{
    state = {
      posts:[]
    };

    componentDidMount(){
      this.getPosts();
    }

    async getPosts(){
      const res = await axios.get("http://localhost:5000/posts/");
      this.setState({ posts: res.data});
    }

    renderDate(dateString){
      const monthNames = ["January"];
      const date = new Date(dateString);

      return `${
        monthNames[date.getMonth()]
      } ${date.getDate()}, ${date.getFullYear()}`;
    }

    renderTags(tags){
      return tags.map(tag =>{
        return <span key={tag}>{tag}</span>;
      });
    }

    renderList() {
      return this.state.posts.map(function(post){
        return (<PostListItem  post={post} key={post._id} />);
      }); 
    }

    render(){
        return <div className="container"><div className="post-list">{this.renderList()}</div></div>
    }
}

export  default PostList;