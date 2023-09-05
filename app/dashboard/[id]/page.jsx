'use client'
import React from 'react'

const Page = () => {

  const fetchData = () => {
    axios
    .get('https://api.spoonacular.com/recipes/' + {} + 'ingredientWidget.json', {
      params: {
        apiKey: 'bb071811bc5b4d329b8d3314402d8133',
      },
    })
    .then(response => {
      setResults(response.data.results); // Aggiorna lo stato con i nuovi dati ricevuti dalla chiamata API
    })
    .catch(error => {
      console.error('Error fetching data:', error);
    });
  };

  return (
    <div>

    </div>
  )
}

export default Page