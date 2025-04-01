import React from 'react';
import { useState } from 'react';
import '../App.css';

const ColorButtons = () => {
    const colors = [
        'red', 'blue', 'green', 'yellow',
        'purple', 'orange', 'pink', 'brown',
        'cyan'
    ];
    
    const [nextColorIndex, setNextColorIndex] = useState(0);
    const [buttonStates, setButtonStates] = useState(
        Array(colors.length).fill({ disabled: false, color: null })
    );
    const [animationActive, setAnimationActive] = useState(false);

    const handleButtonClick = (buttonId) => {
        if (!buttonStates[buttonId].disabled) {
            setAnimationActive(true);
            
            const newButtonStates = [...buttonStates];
            newButtonStates[buttonId] = {
                disabled: true,
                color: colors[nextColorIndex]
            };
            setButtonStates(newButtonStates);
            
            setNextColorIndex((prevIndex) => (prevIndex + 1) % colors.length);

            setTimeout(() => setAnimationActive(false), 500);
        }
    };

    return (
        <div className="color-game-container">
            <h1 className="title">Color Sequence Game</h1>
            <p className="instructions">
                Click buttons to color them in sequence. Each button gets the next color and locks!
            </p>
            
            <div className={`buttons-container ${animationActive ? 'pulse-effect' : ''}`}>
                {buttonStates.map((state, buttonId) => (
                    <button
                        key={buttonId}
                        className={`color-button ${state.disabled ? 'disabled' : ''}`}
                        style={{
                            backgroundColor: state.disabled ? state.color : '#f0f0f0',
                            color: state.disabled ? 'white' : '#333'
                        }}
                        onClick={() => handleButtonClick(buttonId)}
                        disabled={state.disabled}
                    >
                        {state.disabled ? (
                            <span className="button-text">✓ {state.color}</span>
                        ) : (
                            <span className="button-text">Button {buttonId + 1}</span>
                        )}
                    </button>
                ))}
            </div>

            <div className="footer">
                <p className="credit">Created by Md Tauqueer Manzar</p>
                <p className="color-sequence">
                    Color sequence: {colors.join(' → ')}
                </p>
            </div>
        </div>
    );
};

export default ColorButtons;