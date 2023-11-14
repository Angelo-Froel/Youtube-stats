import React from "react";

function Info(props){
    return(
      <div class="w-1/2 px-2 rounded overflow-hidden shadow hover:shadow-red-500/40">
      <div className="px-6 py-4 ">
          <div className="mb-4 text-4xl font-extrabold leading-none tracking-tight text-white-900 md:text-5xl lg:text-6xl text-white"> Info</div>
          <div><strong className="font-sans text-white">Channel Title: </strong><span className="text-blue-700 text-base">{props.channelTitle}</span></div>
          <div><strong className="font-sans text-white">Video Title: </strong><span className="text-blue-700 text-base">{props.title}</span></div>
          <div><strong className="font-sans text-white">View Count: </strong><span className="text-blue-700 text-base">{props.views}</span></div>
      </div>
    </div>
    )
}

export default Info