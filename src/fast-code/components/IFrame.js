import React, { useState } from 'react'
import { createPortal } from 'react-dom'

export const IFrame = ({ children, ...props }) => {
    const [ contentRef, setContentRef ] = useState( null )
    const mountNode = contentRef?.contentWindow?.document
    return (
        <iframe { ...props } ref={ setContentRef } title="FastCode">
            { mountNode && createPortal( children, mountNode ) }
        </iframe>
    )
}
