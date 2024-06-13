// src/components/main/Main.jsx
import "./Main.css";
import CardComponent from '../cards/Card';
import Footer from "../footer/Footer";
import { posts, tagColors } from "../../data/posts.js";

const Main = () => {
    return (
        <main className="background">
            <div className="container">
                <h1 className="title">Il Mio Blog</h1>
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
