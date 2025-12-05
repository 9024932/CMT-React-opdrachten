const Card = ({animals, onShowDetail}) => {
    return (  
<section className="img">
    <h2>{animals.name}</h2>
    <img src={animals.imageUrl} alt="" />
    <button onClick={() => onShowDetail(animals.id)}>
        Meer info
      </button>
</section>
    );
}
 
export default Card;

 