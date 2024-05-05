import React, { useState, useEffect, useCallback } from 'react';
import './BenefitsSection.css';

const BenefitsSection = () => {
    const [currentBenefit, setCurrentBenefit] = useState(0);
    const benefits = ['Benefit1', 'Benefit2', 'Benefit3'];

    const handleNextBenefit = useCallback(() => {
        setCurrentBenefit((currentBenefit + 1) % benefits.length);
    }, []);

    // Handle automatic sliding
    useEffect(() => {
        const timer = setTimeout(() => {
            handleNextBenefit();
        }, 3000); // Change slides every 3000 milliseconds (3 seconds)
        
        return () => clearTimeout(timer); // Clear the timer when the component unmounts or updates
    }, [currentBenefit, handleNextBenefit]); // Dependency array to re-run the effect when currentBenefit changes

    const handlePrevBenefit = () => {
        setCurrentBenefit((currentBenefit - 1 + benefits.length) % benefits.length);
    };

    return (
        <section className="benefits">
            <h2>Benefits of Choosing Us</h2>
            <div className="benefit-container">
                <button onClick={handlePrevBenefit}>&#8249;</button>
                <div className="benefit-text">{benefits[currentBenefit]}</div>
                <button onClick={handleNextBenefit}>&#8250;</button>
            </div>
        </section>
    );
};

export default BenefitsSection;
