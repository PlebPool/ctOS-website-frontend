import React, {useEffect, useState} from 'react';
import "./AnimWrittenText.css";

function AnimWrittenText({text_before, words, interval}) {
    const [currentWordIndex, setCurrentWordIndex] = useState(0);
    const [currentWord, setCurrentWord] = useState('');
    const [writing, setWriting] = useState(true);

    useEffect(() => {
        const removeCharacter = () => {
            if (currentWord.length > 0) {
                setCurrentWord((prevWord) => prevWord.slice(0, -1));
            } else {
                setWriting(false);
                clearInterval(writeInterval);
            }
        };

        const addCharacter = () => {
            if (currentWord.length < words[currentWordIndex].length) {
                setCurrentWord((prevWord) => prevWord + words[currentWordIndex][prevWord.length]);
            } else {
                setTimeout(() => {
                    setWriting(true);
                    clearInterval(writeInterval);
                    setCurrentWordIndex((prevIndex) => (prevIndex + 1) % words.length);
                }, 800);
            }
        };

        let writeInterval;
        if (writing) {
            writeInterval = setInterval(removeCharacter, interval);
        } else {
            writeInterval = setInterval(addCharacter, interval);
        }

        return () => clearInterval(writeInterval);
    }, [currentWord, currentWordIndex, words, writing]);

    return (
        <div className={"changing-text-wrapper noselect"}>
            <div className={"pre"}>{text_before}</div>
            <div className={"changing-text"}>{currentWord}</div>
        </div>
    );
}

export default AnimWrittenText;