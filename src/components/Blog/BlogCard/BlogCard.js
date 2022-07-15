const BlogCard = ({
    blog
}) => {

    return (
        <div className="blogs">
            <a href='/details/{blog._id}'>
                <div className="img">
                    <img src={blog.imageUrl} alt="blog-one" />
                    <div className="blog-date">{blog.date}</div>
                    <div className="genre">{blog.genre}</div>
                </div>
                <div className="blog-text">
                    <h3>{blog.title}</h3>
                    <p>{blog.description}</p>
                </div></a>
        </div>
    )
}

export default BlogCard;