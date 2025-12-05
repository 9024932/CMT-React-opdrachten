import { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import animals from '../animals.js';


const DetailPage = () => {
     const { id } = useParams();
  const navigate = useNavigate();
  const [animalList, setAnimaList] = useState(animals);

  const animal = animals.find(p => p.id === Number(id));

  if (!animal) {
    return <div>Product niet gevonden!</div>;
  }

  return (
    <section className='img'>
      <button onClick={() => navigate('/')}>
        ← Terug naar home
      </button>
      
      <h1 class ="animal">{animal.name}</h1>
      <p>Diet: {animal.diet}</p>
      <img class ="container" src={animal.imageUrl} alt="" />
      <p>Beschrijving: {animal.description}</p>
    </section>
  );
};

export default DetailPage