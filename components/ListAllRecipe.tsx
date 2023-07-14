import React from 'react'
import Recipe from './Recipe'
import { recipes } from '~/utils/TestRecipes'

export default function ListAllRecipe() {

  const list = recipes.map(t => 
    <li key={t.id} >
        <Recipe recipe={t} />
    </li>
  )

  return (
      <ul className="flex flex-wrap relative">
      {list}
      </ul >
      )
}                             
