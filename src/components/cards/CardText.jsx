import cardStyle from "./Card.module.css";
const CardText = ({ title, content, tags, tagColors }) => {
    return (
        <div className={cardStyle.contentContainer}>
            <h4 className={cardStyle.title}><strong>{title}</strong></h4>
            <p className={cardStyle.text}>{content}</p>
            <div className={cardStyle.tags}>
                {tags.map(tag => (
                    <span key={tag} style={{ backgroundColor: tagColors[tag] || 'gray' }}>
                        {tag}
                    </span>
                ))}
            </div>
            <button className={cardStyle.button}>Leggi di più</button>
        </div>
    );
};

export default CardText;