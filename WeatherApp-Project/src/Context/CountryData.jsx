import { useState, useMemo, useEffect, useCallback } from "react";
import { CountryContext } from "./CountryContext.js";
import axios from "axios";

export const CountryProvider = ({ children }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [countries, setCountries] = useState([]);

  const handleSearchChange = useCallback((e) => {
    setSearchQuery(e.target.value);
  }, []);

  const filteredCountries = useMemo(() => {
    return countries.filter((country) =>
      country.name.common.toLowerCase().includes(searchQuery.toLowerCase())
    );
  }, [countries, searchQuery]);

  useEffect(() => {
    const fetchCountryAPI = async () => {
      try {
        const response = await axios.get('https://restcountries.com/v3.1/all?fields=name,flags');
        setCountries(response.data);
      } catch (error) {
        console.error("Lỗi khi fetch quốc gia:", error);
      }
    };
    fetchCountryAPI();
  }, []);

  const value = useMemo(() => ({
    countries,
    filteredCountries,
    searchQuery,
    handleSearchChange
  }), [countries, filteredCountries, searchQuery, handleSearchChange]);

  return (
    <CountryContext.Provider value={value}>
      {children}
    </CountryContext.Provider>
  );
};