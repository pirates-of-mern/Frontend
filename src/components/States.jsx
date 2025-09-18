import React from "react";
import { useNavigate } from "react-router-dom";

// 🟢 States Data (images already imported)
import mp from "../assets/states/mp.jpg";
import rj from "../assets/states/rj.jpg";
import tn from "../assets/states/tn.jpg";
import up from "../assets/states/up.jpg";
import wb from "../assets/states/wb.jpg";
import gujrat from "../assets/states/gujrat.jpg";
import karnataka from "../assets/states/karnataka.jpg";
import kerala from "../assets/states/kerala.jpg";
import pn from "../assets/states/pn.jpg";
import odisha from "../assets/states/odisha.jpg";
import ap from "../assets/states/ap.jpg";
import maharashtra from "../assets/states/maharashtra.jpg";
import haryana from "../assets/states/haryana.jpg";
import assam from "../assets/states/assam.jpg";
import bihar from "../assets/states/bihar.jpg";
import chhattisgarh from "../assets/states/chhattisgarh.jpg";
import jharkhand from "../assets/states/jharkhand.jpg";
import hp from "../assets/states/hp.jpg";
import uttarakhand from "../assets/states/uttarakhand.jpg";
import telangana from "../assets/states/telangana.jpg";
import goa from "../assets/states/goa.jpg";
import tripura from "../assets/states/tripura.jpg";
import sikkim from "../assets/states/sikkim.jpg";
import nagaland from "../assets/states/nagaland.jpg";
import mizoram from "../assets/states/mizoram.jpg";
import meghalaya from "../assets/states/meghalaya.jpg";
import manipur from "../assets/states/manipur.jpg";
import arp from "../assets/states/arp.jpg";
import jammu from "../assets/states/jammu.jpg";
import ladakh from "../assets/states/ladakh.jpg";
import puducherry from "../assets/states/puducherry.jpg";
import lakshadweep from "../assets/states/lakshadweep.jpg";
import andaman from "../assets/states/andaman.jpg";
import dadra from "../assets/states/dadra.jpg";
import daman from "../assets/states/daman.jpg";
import delhi from "../assets/states/delhi.jpg";
import chandigarh from "../assets/states/chandigarh.jpg";

// 🟠 Union Territories
const unionTerritories = [
  { name: "Andaman and Nicobar Islands", image: andaman },
  { name: "Chandigarh", image: chandigarh },
  { name: "Dadra and Nagar Haveli", image: dadra },
  { name: "Daman and Diu", image: daman },
  { name: "Delhi", image: delhi },
  { name: "Jammu and Kashmir", image: jammu },
  { name: "Ladakh", image: ladakh },
  { name: "Lakshadweep", image: lakshadweep },
  { name: "Puducherry", image: puducherry },
];

// ✅ States Array
const states = [
  { name: "Andhra Pradesh", image: ap },
  { name: "Arunachal Pradesh", image: arp },
  { name: "Assam", image: assam },
  { name: "Bihar", image: bihar },
  { name: "Chhattisgarh", image: chhattisgarh },
  { name: "Goa", image: goa },
  { name: "Gujarat", image: gujrat },
  { name: "Haryana", image: haryana },
  { name: "Himachal Pradesh", image: hp },
  { name: "Jharkhand", image: jharkhand },
  { name: "Karnataka", image: karnataka },
  { name: "Kerala", image: kerala },
  { name: "Madhya Pradesh", image: mp },
  { name: "Maharashtra", image: maharashtra },
  { name: "Manipur", image: manipur },
  { name: "Meghalaya", image: meghalaya },
  { name: "Mizoram", image: mizoram },
  { name: "Nagaland", image: nagaland },
  { name: "Odisha", image: odisha },
  { name: "Punjab", image: pn },
  { name: "Rajasthan", image: rj },
  { name: "Sikkim", image: sikkim },
  { name: "Tamil Nadu", image: tn },
  { name: "Telangana", image: telangana },
  { name: "Tripura", image: tripura },
  { name: "Uttar Pradesh", image: up },
  { name: "Uttarakhand", image: uttarakhand },
  { name: "West Bengal", image: wb },
];

// Import India hero image
import indiaImg from "../assets/logo.jpg";

const StatesPage = () => {
  const navigate = useNavigate();

  const handleCardClick = (name) => {
    const slug = name.toLowerCase().replace(/\s+/g, "-");
    navigate(`/explore/${slug}`);
  };

  const Card = ({ item }) => (
    <div
      onClick={() => handleCardClick(item.name)}
      className="cursor-pointer relative rounded-xl overflow-hidden shadow-xl group transform hover:scale-105 transition-transform duration-500"
    >
      <img
        src={item.image}
        alt={item.name}
        className="w-full h-40 object-cover group-hover:opacity-80 transition-opacity duration-300"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent"></div>
      <h2 className="absolute bottom-4 left-4 text-white font-bold text-xl drop-shadow-lg">
        {item.name}
      </h2>
    </div>
  );

  return (
    <div className="mt-16 min-h-screen bg-gradient-to-br from-green-100 via-green-200 to-green-300 px-8 py-12">
      {/* India Hero Section */}
      <div
        onClick={() => navigate("/explore/india")}
        className="relative mb-12 cursor-pointer rounded-xl overflow-hidden shadow-2xl hover:scale-105 transition-transform duration-300"
      >
        <img src={indiaImg} alt="India" className="w-full h-64 object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/30 to-transparent"></div>
        <h2 className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white font-bold text-4xl drop-shadow-lg">
          India
        </h2>
      </div>

      {/* States Section */}
      <h2 className="text-2xl font-semibold text-green-800 mb-6">States</h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8 mb-12">
        {states.map((state, idx) => (
          <Card key={idx} item={state} />
        ))}
      </div>

      {/* Union Territories Section */}
      <h2 className="text-2xl font-semibold text-green-800 mb-6">
        Union Territories
      </h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8">
        {unionTerritories.map((ut, idx) => (
          <Card key={idx} item={ut} />
        ))}
      </div>
    </div>
  );
};

export default StatesPage;
