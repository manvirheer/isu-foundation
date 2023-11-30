import React from 'react';
import CharityIcon from '../../styles/icons/charity.png';
import VolunteerIcon from '../../styles/icons/volunteer.png';

const WorkWithUs = () => {
    return (
        <div className="flex flex-col items-center justify-center py-12 bg-custom-beige">
            <h2 className="text-orange-700 text-3xl font-semibold font-customOne mb-8">WORK WITH US</h2>
            <div className="flex flex-row items-start justify-around w-full px-4">
                <div className="flex flex-col items-center justify-center text-center mx-4">
                    
                    <h3 className="text-lg font-semibold mt-4">Donate</h3>
                    <p className="text-sm text-gray-600 mt-2">
                        Every child, no matter who they are or where they come from, deserves access to quality learning opportunities.
                    </p>
                </div>
                <div className="flex flex-col items-center justify-center text-center mx-4">
                    
                    <h3 className="text-lg font-semibold mt-4">Volunteer</h3>
                    <p className="text-sm text-gray-600 mt-2">
                        Join to address children's learning needs through an inclusive, equitable, safe learning environment for children between 3-18 years for an active, purposeful adult life.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default WorkWithUs;