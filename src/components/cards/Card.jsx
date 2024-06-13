import cardStyle from "./Card.module.css";
import CardText from "./CardText";
import CardImg from "./CardImg";
const Card = ({ post, tagColors }) => {
    return (
        <div className={cardStyle.container}>
            <CardImg image={post.image} title={post.title} />
            <CardText title={post.title} content={post.content} tags={post.tags} tagColors={tagColors} />
        </div>
    );
};

export default Card;