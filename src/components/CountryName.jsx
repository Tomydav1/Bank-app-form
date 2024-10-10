import React, { useEffect, useState } from "react";
import CloseBtn from './assets/close-btn.svg'
import Warning from './assets/warning.svg'

function CountryName({formData, setFormData, posts, formErrors, setFilteredData, filteredData}) {
  const [search, setSearch] = useState(false);

  const filterHandler = (e) => {
    const searchWord = e.target.value;
    setFormData({...formData, country: searchWord});

    if(searchWord == ''){
      setFilteredData([])
      setSearch(false)

    } else{
      const newFilter = posts.filter((search) => {
        return search.name.common.toLowerCase().includes(searchWord.toLowerCase());
      });
  
      setFilteredData(newFilter);
      setSearch(true)
    }
  };

  const clickHandler = (countryName) => {
    setFormData({...formData, country: countryName});
    setFilteredData([])
  };

  const clearInputHandler = () => {
    setFilteredData([]);
    setFormData({...formData, country: ''});
    setSearch(false)
  }

  return (
    <>
      <div className="countryInput">
        <input className={formErrors.country?'errorInput':''}
          type="text"
          placeholder="Enter country name"
          onChange={filterHandler}
          value={formData.country}
          autoComplete="off"
        />
        {search && ( <img src={CloseBtn} alt="close" className="close-btn" onClick={clearInputHandler}/>)}
      </div>
      {filteredData.length !== 0 && !(filteredData.length === 1 && filteredData[0].name.common.toLowerCase() === formData.country.toLowerCase()) && (
        <div className="countryResults">
          {filteredData.slice(0, 2).map((post) => {
            return (
              <div
                className="results"
                key={post.cca3}
                onClick={() => {
                  clickHandler(post.name.common);
                }}>
                <p>{post.name.common}</p>
                <img src={post.flags.svg} alt="flag" />
              </div>
            );
          })}
        </div>
      )}
    </>
  );
}

export default CountryName;
