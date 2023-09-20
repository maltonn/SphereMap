import { useEffect } from "react"
import { useState,useRef } from "react"
export default function SphereMap(props) {
    const coords = props.coords

    const container=useRef(null)
    const isMouseDown = useRef(false)

    useEffect(() => {
        const handler=(e)=>{isMouseDown.current = true}
        document.addEventListener('mousedown', handler)
        return () => {document.removeEventListener('mousedown', handler) }
    }, [])
    useEffect(() => {
        const handler=(e)=>{isMouseDown.current = false}
        document.addEventListener('mouseup', handler)
        return () => {document.removeEventListener('mouseup', handler) }
    }, [])

    useEffect(() => {
        const handler=(e)=>{
            if(isMouseDown.current){
                console.log(e.movementX,e.movementY)
            }
        }
        document.addEventListener('mousemove', handler)
        return () => {document.removeEventListener('mousemove', handler) }
    }, [])
    



    return (
        <div 
            ref={container} 
            style={{position:"relative",width: '100%',height: '100%'}}
        >
            {
                coords.map((coord, index) => {
                    return (
                        <div 
                            key={index}
                            style={{
                                position: 'absolute',
                                width: '10px',
                                height: '10px',
                                backgroundColor: 'red',
                                borderRadius: '50%',

                                left: `${coord[0] * 100}%`,
                                top: `${coord[1] * 100}%`,
                            }}
                        >
                        </div>
                    )

                })
            }
        </div>
    )
}