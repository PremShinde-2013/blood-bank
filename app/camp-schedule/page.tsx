import React, { useState, useMemo } from 'react';
import { Calendar, ChevronLeft, ChevronRight } from 'lucide-react';

const stateDistrictData = {
  Maharashtra: ['All District', 'Mumbai', 'Nashik', 'Pune', 'Nagpur'],
  Gujarat: ['All District', 'Ahmedabad', 'Surat', 'Vadodara', 'Rajkot'],
  Karnataka: ['All District', 'Bangalore', 'Mysore', 'Hubli', 'Mangalore'],
};

const CampSchedule = () => {
  const [selectedState, setSelectedState] = useState('Maharashtra');
  const [selectedDistrict, setSelectedDistrict] = useState('All District');
  const [selectedDate, setSelectedDate] = useState('31-08-2024');
  const [searchTerm, setSearchTerm] = useState('');
  const [entriesPerPage, setEntriesPerPage] = useState(10);
  const [currentPage, setCurrentPage] = useState(1);

  const campData = [
    {
      id: 1,
      date: '31-Aug-2024',
      campName: 'MULUND',
      address: 'MULUND,MULUND, Mumbai',
      state: 'Maharashtra',
      district: 'Mumbai',
      contact: '9869745596',
      conductedBy: 'Jupiter Hospital Blood Centre',
      organizedBy: 'Mulund',
      register: 'Register as Voluntary Donor',
      time: '08:00-18:00'
    },
    {
      id: 2,
      date: '31-Aug-2024',
      campName: 'Maharstha Muslim Shah Samajik Vikas Mandal Manmad',
      address: 'Yuva Kranti Jim Khana Manmad,Manmad, Nashik',
      state: 'Maharashtra',
      district: 'Nashik',
      contact: '9665545234',
      conductedBy: 'Late Dr GM Bhavsar Charitable TrustS,Malegaon Blood Centre',
      organizedBy: 'Akbar Khan',
      register: 'Register as Voluntary Donor',
      time: '09:00-13:00'
    },
    // Add more mock data for other states and districts
    ...['Gujarat', 'Karnataka'].flatMap(state => 
      stateDistrictData[state].filter(district => district !== 'All District').map((district, index) => ({
        id: index + 100,
        date: '31-Aug-2024',
        campName: `${state} Camp ${index + 1}`,
        address: `${district} Address`,
        state,
        district,
        contact: `98697455${(index + 10).toString().padStart(2, '0')}`,
        conductedBy: `${state} Hospital ${index + 1}`,
        organizedBy: `${state} Organizer ${index + 1}`,
        register: 'Register as Voluntary Donor',
        time: '09:00-17:00'
      }))
    )
  ];

  const filteredData = useMemo(() => {
    return campData.filter(camp => 
      (selectedState === 'All States' || camp.state === selectedState) &&
      (selectedDistrict === 'All District' || camp.district === selectedDistrict) &&
      (camp.campName.toLowerCase().includes(searchTerm.toLowerCase()) ||
       camp.address.toLowerCase().includes(searchTerm.toLowerCase()) ||
       camp.district.toLowerCase().includes(searchTerm.toLowerCase()))
    );
  }, [campData, selectedState, selectedDistrict, searchTerm]);

  const pageCount = Math.ceil(filteredData.length / entriesPerPage);
  const paginatedData = useMemo(() => {
    const startIndex = (currentPage - 1) * entriesPerPage;
    return filteredData.slice(startIndex, startIndex + entriesPerPage);
  }, [filteredData, currentPage, entriesPerPage]);

  return (
    <div className="max-w-7xl mx-auto p-4">
      <h1 className="text-3xl font-bold text-red-600 mb-4">Camp Schedule</h1>
      <div className="bg-red-600 text-white p-3 mb-4">
        <h2 className="text-xl font-semibold">Camp Schedules</h2>
      </div>
      <div className="flex flex-wrap gap-4 items-center mb-4">
        <select
          value={selectedState}
          onChange={(e) => {
            setSelectedState(e.target.value);
            setSelectedDistrict('All District');
            setCurrentPage(1);
          }}
          className="border rounded p-2"
        >
          <option value="All States">All States</option>
          {Object.keys(stateDistrictData).map(state => (
            <option key={state} value={state}>{state}</option>
          ))}
        </select>
        <select
          value={selectedDistrict}
          onChange={(e) => {
            setSelectedDistrict(e.target.value);
            setCurrentPage(1);
          }}
          className="border rounded p-2"
        >
          {selectedState === 'All States'
            ? <option value="All District">All District</option>
            : stateDistrictData[selectedState].map(district => (
                <option key={district} value={district}>{district}</option>
              ))
          }
        </select>
        <div className="relative">
          <input
            type="text"
            value={selectedDate}
            onChange={(e) => setSelectedDate(e.target.value)}
            className="border rounded p-2 pr-8"
          />
          <Calendar className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
        </div>
        <button className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600">
          Search
        </button>
      </div>
      {/* ... (rest of the component remains the same) ... */}
    </div>
  );
};

export default CampSchedule;