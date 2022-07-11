import React from 'react';
import { nanoid } from 'nanoid';
import './Filter.css';
import PropTypes from 'prop-types';

const Filter = ({ value, onChange }) => {
  const inputIdGenerate = nanoid();
  return (
    <label className="Filter__label">
      Find contacts by name :
      <input
        className="Filter__input"
        type="text"
        value={value}
        onChange={onChange}
        id={inputIdGenerate}
      />
    </label>
  );
};

Filter.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default Filter;
