'use client';
import React, { FC, useState } from 'react';
import { FaSearchLocation } from 'react-icons/fa';
import './SearchBar.scss';

type SearchBarProps = {
  setInputValue: React.Dispatch<React.SetStateAction<string>>;
  setIsRefresh: React.Dispatch<React.SetStateAction<boolean>>;
};

const SearchBar: FC<SearchBarProps> = ({ setInputValue, setIsRefresh }) => {
  const [value, setValue] = useState<string>('');

  const handleClickInput = () => {
    setInputValue(value);
    setIsRefresh(true);

    setTimeout(() => {
      setIsRefresh(false);
      setValue('');
    }, 100);
  };

  const handleKeyDownInput = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      setInputValue(value);
      setIsRefresh(true);

      setTimeout(() => {
        setIsRefresh(false);
        setValue('');
      }, 100);
    }
  };

  return (
    <>
      <div className="search-input-group">
        <input
          type="text"
          value={value}
          className="search-input"
          onKeyDown={handleKeyDownInput}
          onChange={(e) => setValue(e.target.value)}
          lang="tr"
        />
        <button className="search-button" onClick={handleClickInput}>
          <FaSearchLocation size={35} color="#000" />
        </button>
      </div>
      <div className="favorite-locations">
        <button className="favorite-location-btn">DİYARBAKIR</button>
        <button className="favorite-location-btn">İSTANBUL</button>
        <button className="favorite-location-btn">ANKARA</button>
        <button className="favorite-location-btn">ADANA</button>
        <button className="favorite-location-btn">MERSİN</button>
        <button className="favorite-location-btn">ELAZIĞ</button>
      </div>
    </>
  );
};

export default SearchBar;
