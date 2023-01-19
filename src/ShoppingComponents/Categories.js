import React from 'react'

function Categories({ filterItems, categories }) {

    return (
        <div className="btn-container flex gap-5 justify-center  px-5">
            {
                categories.map((category, index) => {

                    return (
                        <button key={index} className='bg-white text-[1rem] px-5 p-3 border'
                            onClick={() => filterItems(category)}>{category}</button>
                    )
                }

                )
            }
        </div>
    )
}

export default Categories