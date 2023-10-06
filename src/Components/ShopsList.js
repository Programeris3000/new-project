import ShopItem from "./ShopItem"

function ShopsList(){
  return(
    <div className="shops-list">
    <ShopItem title="Parduotuvė 1"
     phone="+37069217741" 
     email="virgis123@one.lt" 
     address="vingio 3-9"
     addressLink="https://goo.gl/maps/9qJ8dUKJLZSjqHkD7"/>
     
    <ShopItem title="Parduotuvė 2"
     phone="+37069217742" 
     email="virg665is@one.lt" 
     address="vingio 4-6"
     addressLink="https://goo.gl/maps/9qJ8dUKJLZSjqHkD7"/>
     
    <ShopItem title="Parduotuvė 3"
     phone="+37069217743" 
     email="viis@one.lt" 
     address="vingio 1-5"
     addressLink="https://goo.gl/maps/9qJ8dUKJLZSjqHkD7"/>
     
    <ShopItem title="Parduotuvė 4"
     phone="+37069217744" 
     email="virg@one.lt" 
     address="vingio 3-33"
     addressLink="https://goo.gl/maps/9qJ8dUKJLZSjqHkD7"/>

    {/* <div className="shop-item">
      <h2 className="shop-title">Parduotuvė 2</h2>

      <ul className="shop-contacts-list">
        <li className="shop-contact-item">
          <span className="shop-contact-title">Phone:</span>
          <a href="tel:+3704564644">+3704564644</a>
        </li>

        <li className="shop-contact-item">
          <span className="shop-contact-title">Email:</span>
          <a href="mailto:shop1@parduotuve.lt">shop1@parduotuve.lt</a>
        </li>

        <li className="shop-contact-item">
          <span className="shop-contact-title">Address:</span>
          <a href="https://goo.gl/maps/9qJ8dUKJLZSjqHkD7"rel="noreferrer" target="_blank">Rotušės aikštė 1, Kaunas</a>
        </li>
      </ul>
    </div>

    <div className="shop-item">
      <h2 className="shop-title">Parduotuvė 3</h2>

      <ul className="shop-contacts-list">
        <li className="shop-contact-item">
          <span className="shop-contact-title">Phone:</span>
          <a href="tel:+3704564644">+3704564644</a>
        </li>

        <li className="shop-contact-item">
          <span className="shop-contact-title">Email:</span>
          <a href="mailto:shop1@parduotuve.lt">shop1@parduotuve.lt</a>
        </li>

        <li className="shop-contact-item">
          <span className="shop-contact-title">Address:</span>
          <a href="https://goo.gl/maps/9qJ8dUKJLZSjqHkD7" rel="noreferrer" target="_blank">Rotušės aikštė 1, Kaunas</a>
        </li>
      </ul>
    </div>

    <div className="shop-item">
      <h2 className="shop-title">Parduotuvė 4</h2>

      <ul className="shop-contacts-list">
        <li className="shop-contact-item">
          <span className="shop-contact-title">Phone:</span>
          <a href="tel:+3704564644">+3704564644</a>
        </li>

        <li className="shop-contact-item">
          <span className="shop-contact-title">Email:</span>
          <a href="mailto:shop1@parduotuve.lt">shop1@parduotuve.lt</a>
        </li>

        <li className="shop-contact-item">
          <span className="shop-contact-title">Address:</span>
          <a href="https://goo.gl/maps/9qJ8dUKJLZSjqHkD7" rel="noreferrer" target="_blank">Rotušės aikštė 1, Kaunas</a>
        </li>
      </ul>
    </div> */}

    </div>
  ) 
}

export default ShopsList