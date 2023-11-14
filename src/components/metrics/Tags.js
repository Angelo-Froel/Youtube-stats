import React from "react";

function Tags(props){
    var tags=props.tags.map(function(tag, i){
        return <li className="text-white">-{tag}</li>;
    })
    return(
        <div class="w-1/2 px-2 rounded overflow-hidden shadow hover:shadow-lg">
        <div className="px-6 py-4">
            <div className="mb-4 text-4xl font-extrabold leading-none tracking-tight text-white-900 md:text-5xl lg:text-6xl text-white"> Tags</div>
            <ul className="text-white-700 text-base p-4">{tags}</ul>
        </div>
      </div>
    )
}

export default Tags