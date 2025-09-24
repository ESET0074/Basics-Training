import React from 'react'

export default function PropTypeComponent({
    name,
    usn
})
{
    return(
        <div>

        </div>
    )
}

PropTypeComponent.propTypes = {
    name : propTypes.string,
    usn : propTypes.number.isRequired
}