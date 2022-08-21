import { useState, useContext, useEffect } from "react";
import { AuthContext } from "../../utils/AuthProvider.js";
import { db } from "../../utils/firebase.js";
import { ref, set, onValue } from "firebase/database";
import { uid } from 'uid';
import "./Forum.css";
export const Forum = () => {

    const [show, setShow] = useState(false);
    const toggleMenu = () => {
        setShow(current => !current);
    };

    const [username, setUsername] = useState("");
    const [subjectName, setSubjectName] = useState("");
    const [subjectDescription, setSubjectDescription] = useState("");
    const uuid = uid();

    const { currentUser } = useContext(AuthContext);

    const postForumSubject = async (e) => {
        e.preventDefault()
        if (currentUser) {
            alert('You\'re post was submited!')
            set(ref(db, `forum/${uuid}`), {
                username: username,
                subjectName: subjectName,
                subjectDescription: subjectDescription,
                date: Date.now(),
                uuid
            })
                .catch((err) => console.log(err));

            setUsername(""); setSubjectName(""); setSubjectDescription("");
        } else {
            alert('You must login to post in forum');
        }
    }

    const [forumPosts, setForumPosts] = useState([]);


    useEffect(() => {
        const forumPosts = [];
        onValue(ref(db, 'forum'), (snapshot) => {
            snapshot.forEach((post) => {
                let data = post.val();
                let formatedDate = new Date(data.date).toLocaleString();
                data.date = formatedDate;
                forumPosts.push(data);

            });
            setForumPosts(forumPosts);
        });
    }, []);

    console.log(forumPosts);

    return (
        <div className="forum-page">
            <header>
                <div className="navbar">
                </div>
                <div className="search-box">
                    <div>
                        <select name="" id="">
                            <option value="Everything">Everything</option>
                            <option value="Titles">Titles</option>
                            <option value="Descriptions">Descriptions</option>
                        </select>
                        <input type="text" name="q" placeholder="type here ..." />
                        <button><i className="fa fa-search"> Search </i></button>
                    </div>
                </div>
            </header>
            <div className="container">
                <div className="navigate">
                    <span><p >Forum - Main page</p></span>
                </div>
                {forumPosts.map((value, index) =>
                    <div className="posts-table" key={index}>
                        <div className="table-head">
                            <div className="status">Status</div>
                            <div className="subjects">Subjects</div>
                            <div className="replies">Replies/Views</div>
                            <div className="last-reply">Last Reply</div>
                        </div>
                        <div className="table-row">
                            <div className="status"><i className="fa fa-fire"></i></div>
                            <div className="subjects">
                                <a href="/forum">{value.subjectName}</a>
                                <br />
                                <span>Started by <b><a href="/forum">{value.username}</a></b> .</span>
                            </div>
                            <div className="replies">
                                2 replies <br /> 125 views
                            </div>

                            <div className="last-reply">
                                {value.date}
                                <br />By <b><a href="/forum">{value.username}</a></b>
                            </div>
                        </div>
                    </div>
                )}
                <div className="pagination">
                    pages: <a href="/forum">1</a><a href="/forum">2</a><a href="/forum">3</a>
                </div>

                <button className="open-button" onClick={toggleMenu}>Post in the forum? Click here!</button>

                <div className="form-popup" id="myForm" style={{ display: show ? 'block' : 'none' }}>
                    <form action="/action_page.php" className="form-container" >

                        <label for="usrn"><b>Username</b></label>
                        <input type="text" placeholder="Enter Username" name="usrn" value={username} onChange={(e) => setUsername(e.target.value)} required />

                        <label for="sbj"><b>Subject</b></label>
                        <input type="text" placeholder="Subject Name" name="sbj" value={subjectName} onChange={(e) => setSubjectName(e.target.value)} required />

                        <label for="txtar"><b>Description</b></label>
                        <textarea type="text" placeholder="Subject Description" name="txtar" value={subjectDescription} onChange={(e) => setSubjectDescription(e.target.value)} required></textarea>

                        <button type="submit" className="btn" onClick={postForumSubject}>Submit</button>
                        <button type="button" className="btn cancel" onClick={toggleMenu}>Close</button>
                    </form>
                </div>
            </div>

        </div>
    )
}