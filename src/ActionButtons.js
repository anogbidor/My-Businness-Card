import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedinIn } from '@fortawesome/free-brands-svg-icons'; // LinkedIn is from brands
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'; // Envelope is from solid icons

function Buttons() {
  return (
    <div>
      <button>
        <FontAwesomeIcon icon={faEnvelope} /> Email
      </button>
      <button>
        <FontAwesomeIcon icon={faLinkedinIn} /> LinkedIn
      </button>
    </div>
  );
}

export default Buttons;