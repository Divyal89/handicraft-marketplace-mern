import React, { useContext, useState, useRef, useEffect } from "react";
import { IoMdArrowDropdown } from "react-icons/io";
import { AppContext } from "../../context/AppContext";

const categories = [
  {
    title: "Wooden Handicrafts",
    key: "wooden",
    items: [
      "Hand-carved showpieces",
      "Wooden toys",
      "Wall hangings",
      "Photo frames",
      "Decorative boxes",
    ],
  },
  {
    title: "Clay / Pottery Items",
    key: "clay",
    items: [
      "Pots and Plants",
      "Cups & bowls",
      "Terracotta idols",
      "Decorative vases",
      "Diyas & lamps",
    ],
  },
  {
    title: "Bamboo & Cane Products",
    key: "cane",
    items: ["Baskets", "Lampshades", "Trays", "Furniture", "Storage boxes"],
  },
  {
    title: "Painting & Wall Art",
    key: "paint",
    items: [
      "Folk paintings",
      "Canvas art",
      "Tribal art",
      "Madhubani / Warli art",
      "Hand-painted plates",
    ],
  },
];

const DropDown = () => {
  const [openCategory, setOpenCategory] = useState(null);
  const { selectedHandcraft, setSelectedHandcraft } = useContext(AppContext);
  const { selectedWoodentoy, setSelectedwoodentoy } = useContext(AppContext);

  const dropdownRef = useRef();

  // Close dropdown if clicked outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setOpenCategory(null);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleToggle = (key) => {
    setOpenCategory(openCategory === key ? null : key);
  };

  return (
    <div
      ref={dropdownRef}
      className="flex flex-col lg:flex-row items-start lg:items-center justify-evenly pt-[10vh] pb-[5vh] bg-[#bf9954] font-bold text-[#1a1a1a] gap-6 lg:gap-0 relative"
    >
      {categories.map((cat) => (
        <div key={cat.key} className="relative w-full lg:w-auto">
          {/* Category Header */}
          <div
            onClick={() => handleToggle(cat.key)}
            className="flex items-center justify-between cursor-pointer px-6 py-3 rounded-lg bg-[#cfa258] hover:bg-[#e6c574] transition-colors shadow-md select-none relative z-20"
          >
            {cat.title}
            <IoMdArrowDropdown
              className={`ml-2 text-xl transition-transform duration-300 ${
                openCategory === cat.key ? "rotate-180" : ""
              }`}
            />
          </div>

          {/* Floating Dropdown Items */}
          {openCategory === cat.key && (
            <div
              className="absolute left-0 mt-2 w-60 bg-[#262626] text-[#ffeb99] rounded-lg shadow-xl z-50 overflow-hidden"
              style={{ top: "100%" }} // opens below the header
            >
              {cat.items.map((item, idx) => (
                <div
                  key={idx}
                  className="px-6 py-3 hover:bg-[#3d3d3d] cursor-pointer transition-colors"
                  onClick={() => {
                    if (cat.key === "wooden" && idx === 0)
                      setSelectedHandcraft(!selectedHandcraft);
                    if (cat.key === "wooden" && idx === 1)
                      setSelectedwoodentoy(!selectedWoodentoy);

                    setOpenCategory(null); // close after click
                  }}
                >
                  {item}
                </div>
              ))}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default DropDown;
