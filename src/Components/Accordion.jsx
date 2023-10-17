import React, { useState } from 'react';
import "./Accordion.css"

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronUp, faChevronRight } from '@fortawesome/free-solid-svg-icons';

const Accordion = ({ items }) => {
  const [openItemIndex, setOpenItemIndex] = useState(-1); // Initialize to -1

  const toggleItem = (index) => {
    if (index === 0) {
      return; // Do nothing for the first row
    }
    
    if (openItemIndex === index) {
      setOpenItemIndex(-1); // Close the item if it's already open
    } else {
      setOpenItemIndex(index); // Open the clicked item
    }
  };

  return (
    <div className="accordion">
      {items.map((item, index) => (
        <div key={index} className="accordionn-item">
          <div
            className={`accordion-title ${openItemIndex === index ? 'active' : ''}`}
            onClick={() => toggleItem(index)}
          >
            <div className='img-title'>
              
            {index === 0 && (
              
              <img
                src="https://img.freepik.com/premium-vector/account-icon-user-icon-vector-graphics_292645-552.jpg"
                alt={` ${item.title}`}
                className="accordion-image"
                style={{ width: '100px' }} // Change the width value here
              />
            )}
              <span style={{ marginRight: '10px' }}>{item.title}</span>
            </div>
            
            
          
            <FontAwesomeIcon
              icon={openItemIndex === index ? faChevronUp : faChevronRight}
              className="accordion-icon"
            />
          </div>
          {openItemIndex === index && (
            <div className="accordion-content">{item.content}</div>
          )}
        </div>
      ))}
    </div>
  );
};

export default Accordion;
