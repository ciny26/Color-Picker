import {useState} from 'react'
import styles from './colorPicker.module.css'
export default function ColorPicker(){
    const [color , setColor] = useState('#ffffff')
    function handleColorChange(event){
        setColor(event.target.value)
        console.log(color)
    }
return(
    <>
        <h1>Color hash code generator : </h1>
        <div style={{backgroundColor:color , boxShadow:'4px 4px 4px '+ color}} className={styles.colorCodeIdentifier}>
            The background color &apos;s code is: {color}
        </div>
        <div className={styles.colorPicker}>
            <input type="color" value={color} onChange={handleColorChange} />
        </div>
        
        
    </>
)
}