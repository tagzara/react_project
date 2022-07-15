import "./CreatePost.css";
function CreatePost() {
    return (
        <div className="post">
               <div className="post-header">Post your favourite <span className="color"> Game</span>
                  <div className="post-header-caption"> <span className="color"> Share your gaming</span> Experience.</div></div>
               <div className="post-content">
                  <div className="post-form">
                     <form id="myForm" action="#">
                        <div className="input-line">
                           <input id="name" type="text" placeholder="Name" className="input-name" />
                           <input id="genre" type="email" placeholder="Genre" className="input-name" />
                        </div>
                        <input type="text" id="subject" placeholder="image url" className="input-subject" />
                        <textarea id="body" className="input-textarea" placeholder="description"></textarea>
                        <button type="button" id="submit" value="send">Submit</button>
                     </form>
                  </div>
               </div>
            </div>
    );
}

export default CreatePost;