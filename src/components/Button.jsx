import React from 'react'

function Button(props) {
    const { clickfunc, children } = props
    return (
        <button onClick={clickfunc} className='mb-7 px-8 mx-auto py-4 rounded-md border-[2px] bg-slate border-blue-400 border-solid blueShadow'>
            <p>
                {children}
            </p>
        </button>
    )
}

export default Button
