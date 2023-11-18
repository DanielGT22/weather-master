import React, { useEffect } from 'react';
import '../star.css';

const Star = () => {
    useEffect(() => {
        const createStars = () => {
            const starCount = 200; 
            const starryBackground = document.querySelector('.starry-background');

            for (let i = 0; i < starCount; i++) {
                const star = document.createElement('div');
                star.className = 'star';
                star.style.left = `${Math.random() * 100}vw`;
                star.style.top = `${Math.random() * 100}vh`;
                if (Math.random() * 10 > 7) {
                    star.classList.add("twinkle"); 
                    star.classList.add("glare"); 
                    star.style.animationDelay = `${Math.random() * 10}s`;
                }
                
                starryBackground.appendChild(star);
            }
        };

        createStars();
    }, []);

    return (
        <div className="star-container">
            <div className="starry-background">
            </div>
        </div>
    );
};

export default Star;
