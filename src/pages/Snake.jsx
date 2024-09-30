import React, { useEffect, useState, useRef } from 'react';
 
const box = 20;  
const canvasSize = 400;  

function Snake() {
    const [snake, setSnake] = useState([{ x: 9 * box, y: 10 * box }]);
    const [food, setFood] = useState({ x: Math.floor(Math.random() * 20) * box, y: Math.floor(Math.random() * 20) * box });
    const [direction, setDirection] = useState('');
    const [score, setScore] = useState(0);
    const gameInterval = useRef(null);  

    useEffect(() => {
        const handleKeyDown = (event) => {
            if (event.key === 'ArrowLeft' && direction !== 'RIGHT') setDirection('LEFT');
            else if (event.key === 'ArrowUp' && direction !== 'DOWN') setDirection('UP');
            else if (event.key === 'ArrowRight' && direction !== 'LEFT') setDirection('RIGHT');
            else if (event.key === 'ArrowDown' && direction !== 'UP') setDirection('DOWN');
        };

        document.addEventListener('keydown', handleKeyDown);
        return () => {
            document.removeEventListener('keydown', handleKeyDown);
        };
    }, [direction]);

    useEffect(() => {
        gameInterval.current = setInterval(draw, 100); // Assign interval ID to ref
        return () => clearInterval(gameInterval.current); // Clear the interval on unmount
    }, [snake, direction]);

    const draw = () => {
        const ctx = document.getElementById('gameCanvas').getContext('2d');
        ctx.clearRect(0, 0, canvasSize, canvasSize);

        snake.forEach((segment, index) => {
            ctx.fillStyle = index === 0 ? 'green' : 'white';
            ctx.fillRect(segment.x, segment.y, box, box);
            ctx.strokeStyle = 'black';
            ctx.strokeRect(segment.x, segment.y, box, box);
        });

        ctx.fillStyle = 'red';
        ctx.fillRect(food.x, food.y, box, box);

        let snakeX = snake[0].x;
        let snakeY = snake[0].y;

        if (direction === 'LEFT') snakeX -= box;
        if (direction === 'UP') snakeY -= box;
        if (direction === 'RIGHT') snakeX += box;
        if (direction === 'DOWN') snakeY += box;

        if (snakeX === food.x && snakeY === food.y) {
            setScore(score + 1);
            setFood({ x: Math.floor(Math.random() * 20) * box, y: Math.floor(Math.random() * 20) * box });
        } else {
            snake.pop();  
        }

        const newHead = { x: snakeX, y: snakeY };

        
        if (snakeX < 0 || snakeY < 0 || snakeX >= canvasSize || snakeY >= canvasSize || collision(newHead, snake)) {
            clearInterval(gameInterval.current);  
            alert('Game over!');
            resetGame();
        }

        setSnake((prevSnake) => [newHead, ...prevSnake]);  
    };

    const collision = (head, array) => {
        for (let i = 0; i < array.length; i++) {
            if (head.x === array[i].x && head.y === array[i].y) {
                return true;
            }
        }
        return false;
    };

    const resetGame = () => {
        setSnake([{ x: 9 * box, y: 10 * box }]);
        setFood({ x: Math.floor(Math.random() * 20) * box, y: Math.floor(Math.random() * 20) * box });
        setDirection('');
        setScore(0);
    };

    return (
        <div style={{ textAlign: 'center', marginTop: '50px' }}>
            <h1>Snake Game</h1>
            <canvas id="gameCanvas" width={canvasSize} height={canvasSize} style={{ border: '1px solid black', display: 'block', margin: '0 auto' }} />
            <p>Score: {score}</p>
        </div>
    );
}

export default Snake;
