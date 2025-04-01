import React from 'react'
import { useState } from 'react'
const ColorButtons = () => {
    const colors = [
        'red', 'blue', 'green', 'yellow',
        'purple', 'orange', 'pink', 'brown',
        'cyan'
    ];
    const [currentColorIndex, setCurrentColorIndex] = useState(0);
    const [disabledButtons, setDisabledButtons] = useState([]);
    return (
        <div>

        </div>
    )
}

export default ColorButtons
