// src/components/main/Main.jsx
import "./Main.css";
import CardComponent from '../cards/Card';
import Footer from "../footer/Footer";
import TagsList from '../tagList/TagsList';
import { posts, tagColors } from "../../data/posts.js";

const Main = () => {
    const tags = Array.from(new Set(posts.flatMap(post => post.tags)));

    return (
        <main className="background">
            <div className="container">
                <h1 className="title">Il Mio Blog</h1>
                <TagsList tags={tags} tagColors={tagColors} />

                <div className="card-container">
                    {posts.filter(post => post.published).map(post => (
                        <CardComponent 
                            key={post.id} 
                            post={post}
                            tagColors={tagColors}
                        />
                    ))}
                </div>
                <Footer/>
            </div>
        </main>
    );
};

export default Main;
