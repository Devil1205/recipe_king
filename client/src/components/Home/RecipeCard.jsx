import React from 'react'

function RecipeCard({img, title, desc}) {
    return (
        <div className="recipeCard rounded-[5px] p-2 space-y-2">
            <img src={img} className='rounded-[5px]' alt="" />
            <h3 className='text-3xl font-bold'>{title}</h3>
            <p className='text-lg text-justify'>{desc}</p>
        </div>
    )
}

export default RecipeCard