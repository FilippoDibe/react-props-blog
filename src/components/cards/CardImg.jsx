 import cardStyle from'./Card.module.css';
const CardImg = ({ image, title }) => {
    const defaultImage = "https://placehold.co/600x400";
    return (
        <figure className={cardStyle.imgContain}>
            <img src={image || defaultImage} alt={title} />
        </figure>
    );
};

export default CardImg;