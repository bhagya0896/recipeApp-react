import React from 'react';
import './App.css';

// Css styling
import style from './recipe.module.css'

// Props from parent component-App
function Recipe({title,calories,image , ingredients,cuisineType,url}) {

//Math function
let getcalories = Math.round(calories)

  return (

    <>

      <div className={style.recipe}>
        <img className={style.image} variant="top" src={image} alt={title} />
        <p className={style.title}> {title}</p>
        <p className={style.body}><b className={style.bodytext}>Cuisine Type :</b> {cuisineType}</p>
        <p className={style.body}><b className={style.bodytext}>Calories :</b> {getcalories}</p>
        <p className={style.body}><b className={style.bodytext}>Ingredients :</b> {ingredients}</p>
        <div >
        <a href={url} target="_blank" className={style.link} >view recipe</a>
        </div>
      </div>

    </>
  );
}

export default Recipe;
