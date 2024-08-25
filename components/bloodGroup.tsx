import React, { useState } from 'react';
import doctor from '@/public/doctor.png';

const bloodTypes = ['A+', 'O+', 'B+', 'AB+', 'A-', 'O-', 'B-', 'AB-'];

const bloodCompatibility: { [key: string]: { canTakeFrom: string[], canGiveTo: string[] } } = {
  'A+': { canTakeFrom: ['A+', 'A-', 'O+', 'O-'], canGiveTo: ['A+', 'AB+'] },
  'O+': { canTakeFrom: ['O+', 'O-'], canGiveTo: ['O+', 'A+', 'B+', 'AB+'] },
  'B+': { canTakeFrom: ['B+', 'B-', 'O+', 'O-'], canGiveTo: ['B+', 'AB+'] },
  'AB+': { canTakeFrom: ['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-'], canGiveTo: ['AB+'] },
  'A-': { canTakeFrom: ['A-', 'O-'], canGiveTo: ['A+', 'A-', 'AB+', 'AB-'] },
  'O-': { canTakeFrom: ['O-'], canGiveTo: ['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-'] },
  'B-': { canTakeFrom: ['B-', 'O-'], canGiveTo: ['B+', 'B-', 'AB+', 'AB-'] },
  'AB-': { canTakeFrom: ['AB-', 'A-', 'B-', 'O-'], canGiveTo: ['AB+', 'AB-'] },
};

const LearnAboutDonation: React.FC = () => {
  const [selectedType, setSelectedType] = useState('A+');

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white">
      <h1 className="text-3xl font-bold text-red-700 mb-6 text-center">Learn About Donation</h1>
      
      <div className="mb-6">
        <p className="text-gray-700 mb-2">Select your Blood Type</p>
        <div className="flex flex-wrap gap-2">
          {bloodTypes.map((type) => (
            <button
              key={type}
              className={`px-4 py-2 rounded-md ${
                selectedType === type
                  ? 'bg-red-600 text-white'
                  : 'bg-white text-red-600 border border-red-600'
              }`}
              onClick={() => setSelectedType(type)}
            >
              {type}
            </button>
          ))}
        </div>
      </div>

      <div className="flex flex-col md:flex-row gap-4 mb-6">
        <div className="flex-1 space-y-4">
          <div className="bg-orange-100 p-4 rounded-lg">
            <div className="flex items-center mb-2">
              <div className="w-8 h-8 bg-gray-300 rounded-full mr-2"></div>
              <p className="font-semibold">You can take from</p>
            </div>
            <p>{bloodCompatibility[selectedType].canTakeFrom.join(' ')}</p>
          </div>
          <div className="bg-blue-100 p-4 rounded-lg">
            <div className="flex items-center mb-2">
              <div className="w-8 h-8 bg-gray-300 rounded-full mr-2"></div>
              <p className="font-semibold">You can give to</p>
            </div>
            <p>{bloodCompatibility[selectedType].canGiveTo.join(' ')}</p>
          </div>
        </div>
        
        <div className="flex-1 flex flex-col items-center justify-center">
          <img src={doctor.src} alt="Blood donation" className="w-50 h-64 mb-4" />
          <p className="text-sm text-gray-600 text-center">
            One Blood Donation can save upto <span className="text-red-600 font-semibold">Three Lives</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default LearnAboutDonation;