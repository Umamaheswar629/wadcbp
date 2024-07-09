import React, { useState } from 'react';
import './Transport.css';

const Transport = () => {
    const [step, setStep] = useState(1);
    const [formData, setFormData] = useState({
        location: '',
        destination: '',
        date: '',
        transportMode: '',
        pickupTime: '',
        dropTime: '',
        distance: '',
        rewards: 0
    });

    const transportOptions = [
        { 
            type: 'Flight', 
            eco: false, 
            img: 'https://akm-img-a-in.tosshub.com/businesstoday/images/story/202301/ezgif-sixteen_nine_355.jpg?size=948:533', 
            pickupTime: '06:00 AM', 
            dropTime: '09:00 AM', 
            distance: '1000 km' 
        },
        { 
            type: 'Electric Car', 
            eco: true, 
            img: 'https://etimg.etb2bimg.com/photo/88724219.cms', 
            pickupTime: '08:00 AM', 
            dropTime: '04:00 PM', 
            distance: '300 km' 
        },
        { 
            type: 'Electric Bus', 
            eco: true, 
            img: 'https://etimg.etb2bimg.com/photo/88724219.cms', 
            pickupTime: '07:00 AM', 
            dropTime: '07:00 PM', 
            distance: '500 km' 
        }
    ];

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleNext = () => {
        setStep(step + 1);
    };

    const handleBack = () => {
        setStep(step - 1);
    };

    const handleTransportSelect = (transport) => {
        let rewards = 0;
        if (transport.eco) {
            // Calculate rewards: 10 points per km
            const distanceInKm = parseFloat(transport.distance.replace(' km', ''));
            rewards = distanceInKm * 10;
        }
        setFormData({ 
            ...formData, 
            transportMode: transport.type, 
            pickupTime: transport.pickupTime, 
            dropTime: transport.dropTime, 
            distance: transport.distance,
            rewards
        });
        handleNext();
    };

    const handleConfirm = () => {
        // Perform confirmation actions here
        alert(`Travel confirmed! You earned ${formData.rewards} reward points.`);
    };

    return (
        <div className="transport">
            <h1>Plan Your Eco-Friendly Trip</h1>
            {step === 1 && (
                <form className="transport-form" onSubmit={(e) => { e.preventDefault(); handleNext(); }}>
                    <div className="form-group">
                        <label>From:</label>
                        <input
                            type="text"
                            name="location"
                            value={formData.location}
                            onChange={handleInputChange}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label>To:</label>
                        <input
                            type="text"
                            name="destination"
                            value={formData.destination}
                            onChange={handleInputChange}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label>Date:</label>
                        <input
                            type="date"
                            name="date"
                            value={formData.date}
                            onChange={handleInputChange}
                            required
                        />
                    </div>
                    <button type="submit">Next</button>
                </form>
            )}

            {step === 2 && (
                <div className="transport-options">
                    <h2>Select Your Transport</h2>
                    <ul>
                        {transportOptions.map(option => (
                            <li key={option.type} onClick={() => handleTransportSelect(option)}>
                                <div className={option.eco ? 'eco' : ''}>
                                    <img src={option.img} alt={option.type} className="transport-img" />
                                    <div className="option-details">
                                        <h3>{option.type}</h3>
                                        {option.eco && <span className="eco-label">Eco-Friendly</span>}
                                    </div>
                                </div>
                            </li>
                        ))}
                    </ul>
                    <button onClick={handleBack}>Back</button>
                </div>
            )}

            {step === 3 && (
                <div className="transport-result">
                    <h2>Travel Details</h2>
                    <p><strong>From:</strong> {formData.location}</p>
                    <p><strong>To:</strong> {formData.destination}</p>
                    <p><strong>Date:</strong> {formData.date}</p>
                    <p><strong>Transport Mode:</strong> {formData.transportMode}</p>
                    <p><strong>Pickup Time:</strong> {formData.pickupTime}</p>
                    <p><strong>Drop Time:</strong> {formData.dropTime}</p>
                    <p><strong>Distance Covered:</strong> {formData.distance}</p>
                    {formData.rewards > 0 && (
                        <div className="rewards">
                            <img src="https://img.freepik.com/premium-psd/3d-icon-rendering-user-interface-object-coin-reward_148391-14.jpg" alt="Reward Icon" className="reward-icon" />
                            <p><strong>Reward Points:</strong> {formData.rewards}</p>
                        </div>
                    )}
                    <button onClick={handleConfirm}>Confirm Travel</button>
                </div>
            )}
        </div>
    );
};

export default Transport;
