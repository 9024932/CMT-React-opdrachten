import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Card from "./Card";
import animals from "../animals.js";

const HomePage = () => {
    const Navigate = useNavigate();
    const [animalList, setanimals] = useState(animals);

    const goToDetail = (animalsid) => {
        Navigate(`/animal/${animalsid}`);
    };

    return (
          <section>
      
      
      {animalList.map(animal => (
        <Card
          key={animal.id}
          animals={animal}
          onShowDetail={goToDetail}
        />
      ))}
    </section>
      );
}
 
export default HomePage;