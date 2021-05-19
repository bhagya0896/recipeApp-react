import React, { useEffect , useState } from 'react';

//CSS styling
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import axios from 'axios';
import Recipe from './recipe';

// Reactbootstrap
import { Form ,Button,Container} from "react-bootstrap"

function App() {

  const [recipes,setRecipes] = useState([])
  const [search,setSearch] = useState("");
  const [recipe,setRecipe] = useState("icecream")

// Edamam API credentials
  const API_ID = "16e484aa";
  const API_KEY = "648fdae593d12567dab4bf06c25ae7a0";

  //fetching recipes from API
  const getrecipes = async()=>
  {
    const response = await axios.get(`https://api.edamam.com/search?q=${recipe}&app_id=${API_ID}&app_key=${API_KEY}`)
    const data =await response.data;
    setRecipes(data.hits);
    //console.log(data.hits)
  }

  useEffect(()=>
  {
     getrecipes()
  },[recipe]);


  const handleSearch= (e) =>
  {
    e.preventDefault();
    setRecipe(search);
    setSearch("")
 
  }


  return (
    
    <div className="App">
      <Container fluid className="search-Form">

        <Form inline onSubmit={handleSearch}>
          <Form.Group>
            <Form.Label htmlFor="recipename"
              style={{
                fontFamily: "Verdana, Geneva, Tahoma, sans-serif",
                fontWeight: "bold",
                fontSize: "15px",
                padding: "10px",
                textTransform: "capitalize",
                color: "white"
              }}>Search for recipes</Form.Label>
            <Form.Control
              type="text"
              size="sm"
              className=" search-bar"
              id="recipename"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
            <Button type="submit" className=" my-1 btn-success search-button text-center">
              Go
          </Button>
          <div   style={{
                fontFamily: "Verdana, Geneva, Tahoma, sans-serif",
                fontWeight: "bold",
                fontSize: "12px",
                padding: "10px",
                textTransform: "capitalize",
                color: "white"
              }}>Results ({recipes.length})</div>
          </Form.Group>
        </Form>

      </Container>
      <div className="recipes">
        {recipes?.map(recipe =>
        (<Recipe
          title={recipe.recipe.label} calories={recipe.recipe.calories} image={recipe.recipe.image}
          ingredients={recipe.recipe.ingredientLines} cuisineType={recipe.recipe.cuisineType} url={recipe.recipe.url} />
        ))}
      </div>
    </div>

  );
}

export default App;
