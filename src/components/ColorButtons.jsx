import React from 'react';
import { useState } from 'react';
import '../App.css';

const ColorButtons = () => {
    const colors = [
        'red', 'blue', 'green', 'yellow',
        'purple', 'orange', 'pink', 'brown',
        'cyan'
    ];
    const [currentColorIndex, setCurrentColorIndex] = useState(0);
    const [disabledButtons, setDisabledButtons] = useState([]);

    const handleButtonClick = (buttonId) => {
        if (!disabledButtons.includes(buttonId)) {
            setDisabledButtons([...disabledButtons, buttonId]);
            setCurrentColorIndex((prevIndex) => (prevIndex + 1) % colors.length);
        }
    };

    const buttons = Array.from({ length: colors.length }, (_, i) => i);  // Fixed: 'form' -> 'from'
    
    return (
        <div className='buttons-container'>
            {buttons.map((buttonId) => (
                <button
                    key={buttonId}
                    style={{
                        backgroundColor: disabledButtons.includes(buttonId)
                            ? colors[(currentColorIndex - 1 + colors.length) % colors.length]  // Fixed: handle negative index
                            : 'white',
                    }}
                    onClick={() => handleButtonClick(buttonId)}
                    disabled={disabledButtons.includes(buttonId)}
                >
                    Button {buttonId + 1}
                </button>
            ))}
        </div>
    );
};

export default ColorButtons;