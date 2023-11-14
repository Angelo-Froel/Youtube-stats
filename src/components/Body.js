import React,{Component} from "react";
import Results from "./Results";
import Form from "./Form";
import youtube from "../necessary/youtube";

class Body extends Component{
    state={
tags:[],
title:'',
channelTitle:'',
views:''
    }
    handleSubmit=async(term)=>{
        const response=await youtube.get('/videos',{
            params:{
                id:term
            }
        })
        this.setState({
            everything: response.data.items,
            tags:(response).data.items[0].snippet.tags,
            title:(response).data.items[0].snippet.title,
            channelTitle:(response).data.items[0].snippet.channelTitle,
            views:(response).data.items[0].statistics.viewCount
        })
    }
    render(){
        return(
            <div className="w-full drop-shadow-2xl bg-black">
                <Form handleFormSubmit={this.handleSubmit}/>
                <Results tags={this.state.tags} title={this.state.title} channelTitle={this.state.channelTitle} views={this.state.views}/>
            </div>
        )
    }
}

export default Body