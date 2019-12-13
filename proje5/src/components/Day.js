import React from 'react'

export default (props) => {

    const {className,dayOfMonth,onMouseOut,onMouseOver} = props

    return (
        <div 
            className={className}
            onMouseOver={(e) => {
                onMouseOver(dayOfMonth)
            }}
            onMouseOut={() => {
                onMouseOut()
            }}
            >{dayOfMonth}
        </div>
    )
}