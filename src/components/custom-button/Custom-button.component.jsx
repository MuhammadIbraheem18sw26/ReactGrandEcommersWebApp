import React from 'react'
import './custom-button.styles.scss'

const CustomButtom = ({ children, ...otherprops }) => (

    <button className='custom-button'{...otherprops}>
        {children}
    </button>
)

export default CustomButtom