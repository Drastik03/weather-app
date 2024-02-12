import { Button } from "./Button";
import { useState } from "react";
// eslint-disable-next-line react/prop-types
export const LocationSearch = ({searchLocation}) => {
  const [city, setCity] = useState('')
  const handleSearch = (e) => {
    console.log("click");
    console.log(city);
    if (city.length > 0){
      searchLocation(city);
    }
    e.preventDefault()
  }

  const inputChange = (e) => {
    console.log(e.target.value)
    setCity(e.target.value);
  }
  return (
    <section className="bg-gray-100 py-8 px-4">
      <h2 className="text-center text-3xl font-bold mb-8">Location Search</h2>
      <form className="max-w-md mx-auto" onSubmit={handleSearch}>
        <div className="relative">
          <input
            type="search"
            name="location"
            id="location"
            placeholder="Enter City, State, or ZIP Code"
            className="w-full bg-white border border-gray-300 rounded-lg py-2 px-4 focus:outline-none focus:border-blue-500"
            onChange={inputChange}
          />
          <Button>Search</Button>
        </div>
      </form>
    </section>
  );
};
