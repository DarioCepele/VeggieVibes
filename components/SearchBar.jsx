'use client'
import { useState } from "react";
import axios from "axios";
import { FaSearch } from "react-icons/fa";

export const SearchBar = ({ setResults }) => {
  const [input, setInput] = useState("");
  const [selectedRecipeId, setSelectedRecipeId] = useState(null);

  const fetchData = (recipeId) => {
    axios
    .get('https://api.spoonacular.com/recipes/complexSearch', {
      params: {
        apiKey: 'Your API Key',
        query: input, // Aggiungi il valore di input come parametro di query
        number: 4,
        tags: 'vegetarian,main course'
      },
    })
    .then(response => {
      setResults(response.data.results); // Aggiorna lo stato con i nuovi dati ricevuti dalla chiamata API
    })
    .catch(error => {
      console.error('Error fetching data:', error);
    });
  };

  const handleChange = (value) => {
    setInput(value);
    fetchData();
  };

  return (
    <div className="bg-white w-96 h-14 flex items-center rounded-xl drop-shadow-lg p-2">
      <FaSearch className="text-3xl text-blue-500 pl-2"/>
      <input
        className="bg-transparent border-none text-lg w-full h-12 ml-[10px] p-2 focus:outline-none"
        placeholder="Type to search..."
        value={input}
        onChange={(e) => handleChange(e.target.value)}
      />
    </div>
  );
};
