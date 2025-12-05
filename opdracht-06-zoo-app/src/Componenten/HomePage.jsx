import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Card from "./Card";
import animals from "../animals.js";

const HomePage = () => {
    const Navigate = useNavigate();
    const [animalList] = useState(animals);
    const [searchInput, setSearchInput] = useState("");

    const goToDetail = (animalsid) => {
        Navigate(`/animal/${animalsid}`);
    };

    const filteredAnimals = animalList.filter((animal) =>
        animal.name.toLowerCase().includes(searchInput.toLowerCase())
    );

    return (
        <section>
            <div className="search">
                <input
                    type="text"
                    placeholder="Zoek een dier"
                    value={searchInput}
                    onChange={(e) => setSearchInput(e.target.value)}
                />
            </div>

            {filteredAnimals.map(animal => (
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