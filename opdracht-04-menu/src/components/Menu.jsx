const Menu = ({ id, title, category, price, img, desc}) => {
    return (<section className="menu">
           <img src={img} alt={title} className="menu-photo" />
      <div className="menu-info">
        <header>
          <h2>{title}</h2>
          <h3 className="price">{price}</h3>
        </header>
        <h4 className="category">{category}</h4>
        <p className="menu-desc">{desc}</p>
      </div>
    </section>);
}
 
export default Menu;