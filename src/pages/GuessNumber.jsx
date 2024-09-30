import React, { useState } from 'react';

function TebakAngka() {
    const [targetNumber, setTargetNumber] = useState(generateRandomNumber());
    const [guess, setGuess] = useState('');
    const [message, setMessage] = useState('');
    const [attempts, setAttempts] = useState(0);

    function generateRandomNumber() {
        return Math.floor(Math.random() * 10) + 1;
    }

    const handleGuess = () => {
        const numericGuess = parseInt(guess);
        if (numericGuess < 1 || numericGuess > 10 || isNaN(numericGuess)) {
            setMessage('Tebakan harus antara 1 dan 10!');
            return;
        }

        setAttempts(attempts + 1);

        if (numericGuess === targetNumber) {
            setMessage(`Selamat! Anda menebak dengan benar dalam ${attempts + 1} percobaan.`);
        } else if (numericGuess < targetNumber) {
            setMessage('Tebakan terlalu rendah! Coba lagi.');
        } else {
            setMessage('Tebakan terlalu tinggi! Coba lagi.');
        }
    };

    const resetGame = () => {
        setTargetNumber(generateRandomNumber());
        setGuess('');
        setMessage('');
        setAttempts(0);
    };

    return (
        <div style={{ textAlign: 'center', marginTop: '50px' }}>
            <h1>Game Tebak Angka</h1>
            <h2>Tebak angka antara 1 dan 10</h2>
            <input
                type="number"
                value={guess}
                onChange={(e) => setGuess(e.target.value)}
                placeholder="Masukkan tebakan Anda"
            />
            <button onClick={handleGuess}>Tebak</button>
            <p>{message}</p>
            <button onClick={resetGame}>Main Lagi</button>
        </div>
    );
}

export default TebakAngka;
