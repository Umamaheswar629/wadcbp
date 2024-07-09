import React, { useState, useEffect } from 'react';
import './Adventura.css';
import { Link } from 'react-router-dom';

const Adventura = () => {
    const [places, setPlaces] = useState([]);
    const [expandedPlaceId, setExpandedPlaceId] = useState(null);

    useEffect(() => {
        // Static data with additional information
        const adventurePlaces = [
            { 
                id: 1, 
                name: 'Bir-Billing', 
                distance_kms: 450, 
                risk_factor: 60, 
                image_url: 'https://static-blog.treebo.com/wp-content/uploads/2018/08/Webp.net-compress-image-29.jpg', 
                description: 'Famous for paragliding, Bir-Billing is a must-visit for adventure enthusiasts.', 
                activities: ['Paragliding', 'Camping'], 
                best_time_to_visit: 'October to June', 
                difficulty_level: 'Moderate',
                entry_fee: 'Free',
                operating_hours: '24 hours',
                contact_info: 'info@birbilling.com',
                location: 'Bir, Himachal Pradesh',
                weather: 'https://www.weather.com/en-IN/weather/today/l/HP/IN',
                accommodation: 'Bir Resort, Nature Camps',
                travel_tips: 'Carry warm clothes and sunglasses.',
                user_reviews: '4.5 stars from 500 reviews.',
                sustainability: 'Eco-friendly practices in place.'
            },
            { 
                id: 2, 
                name: 'Rajasthan', 
                distance_kms: 1200, 
                risk_factor: 30, 
                image_url: 'https://static-blog.treebo.com/wp-content/uploads/2018/08/Webp.net-compress-image-1-18.jpg', 
                description: 'Known for its rich culture and desert safaris.', 
                activities: ['Camel Riding', 'Desert Safari'], 
                best_time_to_visit: 'October to March', 
                difficulty_level: 'Easy',
                entry_fee: 'Varies by attraction',
                operating_hours: 'Varies by attraction',
                contact_info: 'tourism@rajasthan.gov.in',
                location: 'Various cities, Rajasthan',
                weather: 'https://www.weather.com/en-IN/weather/today/l/RJ/IN',
                accommodation: 'Heritage Hotels, Desert Camps',
                travel_tips: 'Stay hydrated and wear sunscreen.',
                user_reviews: '4.0 stars from 800 reviews.',
                sustainability: 'Efforts to conserve desert ecosystems.'
            },
            { 
                id: 3, 
                name: 'Rishikesh', 
                distance_kms: 240, 
                risk_factor: 50, 
                image_url: 'https://static-blog.treebo.com/wp-content/uploads/2018/03/Webp.net-compress-image-7-6.jpg', 
                description: 'A hub for river rafting and yoga retreats.', 
                activities: ['River Rafting', 'Yoga'], 
                best_time_to_visit: 'March to May, September to November', 
                difficulty_level: 'Varies by activity',
                entry_fee: 'Rafting starts at ₹500',
                operating_hours: '6 AM to 6 PM',
                contact_info: 'info@rishikeshtourism.com',
                location: 'Rishikesh, Uttarakhand',
                weather: 'https://www.weather.com/en-IN/weather/today/l/UK/IN',
                accommodation: 'Ashrams, Riverside Hotels',
                travel_tips: 'Wear appropriate footwear for rafting.',
                user_reviews: '4.8 stars from 900 reviews.',
                sustainability: 'Promotes clean Ganga campaign.'
            },
            { 
                id: 4, 
                name: 'Ladakh', 
                distance_kms: 1100, 
                risk_factor: 80, 
                image_url: 'https://static-blog.treebo.com/wp-content/uploads/2018/06/Trekkers-passing-through-the-Zanskar-Lake.jpg', 
                description: 'Known for its breathtaking landscapes and trekking routes.', 
                activities: ['Trekking', 'Biking'], 
                best_time_to_visit: 'June to September', 
                difficulty_level: 'Challenging',
                entry_fee: '₹500 for Inner Line Permit',
                operating_hours: '24 hours',
                contact_info: 'ladakhtourism@jk.gov.in',
                location: 'Leh, Ladakh',
                weather: 'https://www.weather.com/en-IN/weather/today/l/LA/IN',
                accommodation: 'Guesthouses, Homestays',
                travel_tips: 'Acclimatize properly to avoid altitude sickness.',
                user_reviews: '4.7 stars from 600 reviews.',
                sustainability: 'Promotes eco-friendly tourism.'
            },
            { 
                id: 5, 
                name: 'Manali', 
                distance_kms: 570, 
                risk_factor: 40, 
                image_url: 'https://static-blog.treebo.com/wp-content/uploads/2018/08/Webp.net-compress-image-3-22.jpg', 
                description: 'A popular destination for skiing and adventure sports.', 
                activities: ['Skiing', 'Paragliding'], 
                best_time_to_visit: 'October to February', 
                difficulty_level: 'Moderate',
                entry_fee: 'Varies by activity',
                operating_hours: '6 AM to 8 PM',
                contact_info: 'info@manalitourism.com',
                location: 'Manali, Himachal Pradesh',
                weather: 'https://www.weather.com/en-IN/weather/today/l/HP/IN',
                accommodation: 'Ski Resorts, Hotels',
                travel_tips: 'Book ski lessons in advance.',
                user_reviews: '4.6 stars from 700 reviews.',
                sustainability: 'Efforts to reduce plastic waste.'
            },
            { 
                id: 6, 
                name: 'Har Ki Doon Valley', 
                distance_kms: 350, 
                risk_factor: 70, 
                image_url: 'https://static-blog.treebo.com/wp-content/uploads/2018/07/Webp.net-compress-image-1-29.jpg', 
                description: 'A scenic valley known for trekking.', 
                activities: ['Trekking', 'Bird Watching'], 
                best_time_to_visit: 'April to June, September to October', 
                difficulty_level: 'Moderate to Challenging',
                entry_fee: 'Free',
                operating_hours: '24 hours',
                contact_info: 'harikidoon@uttarakhand.gov.in',
                location: 'Uttarkashi, Uttarakhand',
                weather: 'https://www.weather.com/en-IN/weather/today/l/UK/IN',
                accommodation: 'Guesthouses, Campsites',
                travel_tips: 'Pack light but carry essentials.',
                user_reviews: '4.9 stars from 300 reviews.',
                sustainability: 'Encourages responsible trekking.'
            },
            { 
                id: 7, 
                name: 'Gulmarg', 
                distance_kms: 880, 
                risk_factor: 90, 
                image_url: 'https://static-blog.treebo.com/wp-content/uploads/2018/08/Webp.net-compress-image-4-20.jpg', 
                description: 'Famous for skiing and winter sports.', 
                activities: ['Skiing', 'Snowboarding'], 
                best_time_to_visit: 'December to March', 
                difficulty_level: 'Challenging',
                entry_fee: 'Ski Pass starts at ₹1000',
                operating_hours: '8 AM to 5 PM',
                contact_info: 'info@gulmargtourism.com',
                location: 'Gulmarg, Jammu and Kashmir',
                weather: 'https://www.weather.com/en-IN/weather/today/l/JK/IN',
                accommodation: 'Ski Resorts, Hotels',
                travel_tips: 'Wear proper gear and stay hydrated.',
                user_reviews: '4.7 stars from 500 reviews.',
                sustainability: 'Focus on maintaining clean slopes.'
            },
            { 
                id: 8, 
                name: 'Auli', 
                distance_kms: 500, 
                risk_factor: 55, 
                image_url: 'https://static-blog.treebo.com/wp-content/uploads/2018/07/Auli.jpg', 
                description: 'A premier skiing destination.', 
                activities: ['Skiing', 'Trekking'], 
                best_time_to_visit: 'November to February', 
                difficulty_level: 'Moderate',
                entry_fee: 'Varies by activity',
                operating_hours: '6 AM to 6 PM',
                contact_info: 'info@aulitourism.com',
                location: 'Auli, Uttarakhand',
                weather: 'https://www.weather.com/en-IN/weather/today/l/UK/IN',
                accommodation: 'Ski Resorts, Hotels',
                travel_tips: 'Book accommodations early during peak season.',
                user_reviews: '4.6 stars from 400 reviews.',
                sustainability: 'Supports sustainable tourism practices.'
            },
            { 
                id: 9, 
                name: 'Dandeli', 
                distance_kms: 500, 
                risk_factor: 60, 
                image_url: 'https://static-blog.treebo.com/wp-content/uploads/2018/08/Webp.net-compress-image-1-22.jpg', 
                description: 'Known for water sports and wildlife.', 
                activities: ['River Rafting', 'Wildlife Safari'], 
                best_time_to_visit: 'October to February', 
                difficulty_level: 'Moderate',
                entry_fee: 'Varies by activity',
                operating_hours: '6 AM to 6 PM',
                contact_info: 'info@dandelitourism.com',
                location: 'Dandeli, Karnataka',
                weather: 'https://www.weather.com/en-IN/weather/today/l/KA/IN',
                accommodation: 'Jungle Lodges, Resorts',
                travel_tips: 'Carry binoculars for bird watching.',
                user_reviews: '4.5 stars from 350 reviews.',
                sustainability: 'Efforts to protect local wildlife.'
            },
            { 
                id: 10, 
                name: 'Sundarbans', 
                distance_kms: 1300, 
                risk_factor: 50, 
                image_url: 'https://static-blog.treebo.com/wp-content/uploads/2018/08/Webp.net-compress-image-3-23.jpg', 
                description: 'A UNESCO World Heritage Site known for its mangrove forests and Bengal tigers.', 
                activities: ['Boat Safari', 'Bird Watching'], 
                best_time_to_visit: 'September to March', 
                difficulty_level: 'Easy to Moderate',
                entry_fee: '₹200 for boat safari',
                operating_hours: '6 AM to 6 PM',
                contact_info: 'info@sundarbanstourism.com',
                location: 'Sundarbans, West Bengal',
                weather: 'https://www.weather.com/en-IN/weather/today/l/WB/IN',
                accommodation: 'Eco Resorts, Guesthouses',
                travel_tips: 'Carry insect repellent and sunscreen.',
                user_reviews: '4.8 stars from 450 reviews.',
                sustainability: 'Focus on preserving the mangrove ecosystem.'
            }
        ];

        
       
        setPlaces(adventurePlaces);
    }, []);

    const handleExpand = (placeId) => {
        setExpandedPlaceId((prevPlaceId) => (prevPlaceId === placeId ? null : placeId));
    };

    return (
        <div className="adventura">
            {/* Header and back button */}
            <Link to="/" className="back-button">Back</Link>
            <h1>Adventura - Adventure Awaits!</h1>
            
            {/* List of adventure places */}
            <ul className="adventura-list">
                {places.map((place) => (
                    <li key={place.id} className="adventura-item">
                        {/* Display image and basic details */}
                        <img src={place.image_url} alt={place.name} className="adventura-image" />
                        <div className="adventura-details">
                            <h2>{place.name}</h2>
                            <p>{place.description}</p>

                            {/* Display Risk Factor */}
                            <p><strong>Risk Factor:</strong> {place.risk_factor}</p>

                            {/* Expandable details */}
                            {expandedPlaceId === place.id && (
                                <div className="adventura-more-details">
                                    {/* Additional details */}
                                    <p><strong>Activities:</strong> {place.activities.join(', ')}</p>
                                    <p><strong>Best Time to Visit:</strong> {place.best_time_to_visit}</p>
                                    <p><strong>Difficulty Level:</strong> {place.difficulty_level}</p>
                                    <p><strong>Entry Fee:</strong> {place.entry_fee}</p>
                                    <p><strong>Operating Hours:</strong> {place.operating_hours}</p>
                                    <p><strong>Contact Info:</strong> {place.contact_info}</p>
                                    <p><strong>Location:</strong> {place.location}</p>
                                    <p><a href={place.weather} target="_blank" rel="noopener noreferrer">Check Current Weather</a></p>
                                    <p><strong>Accommodation:</strong> {place.accommodation}</p>
                                    <p><strong>Travel Tips:</strong> {place.travel_tips}</p>
                                    <p><strong>User Reviews:</strong> {place.user_reviews}</p>
                                    <p><strong>Sustainability:</strong> {place.sustainability}</p>
                                </div>
                            )}

                            {/* Buttons */}
                            <div className="buttons">
                                <button className="read-more-button" onClick={() => handleExpand(place.id)}>
                                    {expandedPlaceId === place.id ? 'Show Less' : 'Show More'}
                                </button>
                                <button className="book-tour-button" onClick={() => alert(`Booking tour for ${place.name}`)}>Book Tour</button>
                            </div>
                        </div>
                    </li>
                ))}
            </ul>

            {/* Disclaimer for risk factor calculation */}
            <div className="risk-factor-disclaimer">
                <p><strong>Disclaimer:</strong> The risk factors displayed are calculated based on various parameters including weather conditions, natural disasters, health risks, crime rates, political stability, infrastructure, accessibility, health infrastructure, cultural sensitivity, safety measures, environmental conditions, and cost of living. The values are normalized and weighted to provide a composite risk factor for each location. The accuracy of these factors may vary and should be considered along with personal discretion when planning your visit.</p>
            </div>
        </div>
    );
};

export default Adventura;