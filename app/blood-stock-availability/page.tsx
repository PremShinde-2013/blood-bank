"use client";
import React, { useState } from "react";
import { NextPage } from "next";
import Head from "next/head";
import { Search } from "lucide-react";

const BloodStockAvailabilityPage: NextPage = () => {
  const [state, setState] = useState("");
  const [district, setDistrict] = useState("");
  const [bloodGroup, setBloodGroup] = useState("All Blood Groups");
  const [bloodType, setBloodType] = useState("Whole Blood");

  const handleSearch = () => {
    // Implement search functionality here
    console.log("Searching with:", { state, district, bloodGroup, bloodType });
  };

  return (
    <>
      <Head>
        <title>Blood Stock Availability</title>
        <meta
          name="description"
          content="Search for blood stock availability"
        />
      </Head>

      <main className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-extrabold text-red-700 mb-8 text-center">
          Blood Stock Availability
        </h1>

        <div className="bg-white shadow-lg rounded-xl overflow-hidden">
          <div className="bg-red-700 p-5">
            <h2 className="text-white text-2xl font-bold">
              Search Blood Stock
            </h2>
          </div>

          <div className="p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
              <select
                value={state}
                onChange={(e) => setState(e.target.value)}
                className="w-full border rounded-lg p-3 focus:ring-2 focus:ring-red-500 focus:border-red-500"
              >
                <option value="">Select State</option>
                {/* Add state options here */}
              </select>

              <select
                value={district}
                onChange={(e) => setDistrict(e.target.value)}
                className="w-full border rounded-lg p-3 focus:ring-2 focus:ring-red-500 focus:border-red-500"
              >
                <option value="">Select District</option>
                {/* Add district options here */}
              </select>

              <select
                value={bloodGroup}
                onChange={(e) => setBloodGroup(e.target.value)}
                className="w-full border rounded-lg p-3 focus:ring-2 focus:ring-red-500 focus:border-red-500"
              >
                <option value="All Blood Groups">All Blood Groups</option>
                <option value="AB-Ve">AB-Ve</option>
                <option value="AB+Ve">AB+Ve</option>
                <option value="A-Ve">A-Ve</option>
                <option value="A+Ve">A+Ve</option>
                <option value="B-Ve">B-Ve</option>
                <option value="B+Ve">B+Ve</option>
                <option value="Oh-Ve">Oh-Ve</option>
                <option value="Oh+Ve">Oh+Ve</option>
              </select>

              <select
                value={bloodType}
                onChange={(e) => setBloodType(e.target.value)}
                className="w-full border rounded-lg p-3 focus:ring-2 focus:ring-red-500 focus:border-red-500"
              >
                <option value="Whole Blood">Whole Blood</option>
                <option value="Single Donor Platelet">
                  Single Donor Platelet
                </option>
                <option value="Single Donor Plasma">Single Donor Plasma</option>
                <option value="Sagm Packed Red Blood Cells">
                  Sagm Packed Red Blood Cells
                </option>
                <option value="Random Donor Platelets">
                  Random Donor Platelets
                </option>
                <option value="Platelet Rich Plasma">
                  Platelet Rich Plasma
                </option>
                <option value="Platelet Concentrate">
                  Platelet Concentrate
                </option>
                <option value="Plasma">Plasma</option>
                <option value="Packed Red Blood Cells">
                  Packed Red Blood Cells
                </option>
                <option value="Leukoreduced Rbc">Leukoreduced Rbc</option>
                <option value="Irradiated RBC">Irradiated RBC</option>
                <option value="Fresh Frozen Plasma">Fresh Frozen Plasma</option>
                <option value="Cryoprecipitate">Cryoprecipitate</option>
                <option value="Cryo Poor Plasma">Cryo Poor Plasma</option>
              </select>
            </div>

            <button
              onClick={handleSearch}
              className="w-full md:w-auto bg-red-600 text-white px-8 py-3 rounded-lg hover:bg-red-700 transition-transform transform hover:scale-105"
            >
              Search
            </button>
          </div>
        </div>

        <div className="mt-8 bg-gray-100 p-6 rounded-lg flex items-center shadow-sm">
          <Search className="text-gray-500 mr-3" size={24} />
          <p className="text-gray-700 text-lg">
            Select State and/or District for stock availability.
          </p>
        </div>

        <div className="mt-12">
          <div className="flex items-center mb-6 text-lg">
            <div className="w-5 h-5 bg-red-300 rounded-full mr-3"></div>
            <span className="mr-6">Government Blood Banks</span>
            <div className="w-5 h-5 bg-white border border-gray-400 rounded-full mr-3"></div>
            <span>Other Blood Banks</span>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-red-700 text-white text-lg">
                  <th className="p-4 text-left">S.No.</th>
                  <th className="p-4 text-left">Blood Bank</th>
                  <th className="p-4 text-left">Category</th>
                  <th className="p-4 text-left">Availability</th>
                  <th className="p-4 text-left">Last Updated</th>
                  <th className="p-4 text-left">Type</th>
                </tr>
              </thead>
              <tbody>{/* Add table rows here */}</tbody>
            </table>
          </div>
        </div>
      </main>
    </>
  );
};

export default BloodStockAvailabilityPage;
