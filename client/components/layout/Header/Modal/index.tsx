import React, { useEffect, useState } from "react";
import styled from "styled-components";
import ReactDOM from 'react-dom'


export function Modal({children}) { 
    const [shouldMount, setShouldMount] = useState(false)
    const [container, setContainer] =  useState(null)

    useEffect(() => {
        const testContainer = document.querySelector("#modal")
        if (!testContainer) return
        setContainer(testContainer)
        setShouldMount(true)
    }, [])
    
    if (shouldMount) return ReactDOM.createPortal(children, container)
    else return <div />
}
 
export default Modal;
