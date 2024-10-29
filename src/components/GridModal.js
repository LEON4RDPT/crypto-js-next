// GridModal.js
import React from 'react';
//import './Modal.css'; // Ensure this file has the necessary styles

const GridModal = ({ onClose }) => {
  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <h2>Dummy Grid Table</h2>
        <table className="grid-table">
          <thead>
            <tr>
              <th>Item Number</th>
              <th>Description</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {/* Example grid items */}
            {Array.from({ length: 9 }).map((_, index) => (
              <tr key={index}>
                <td>Item {index + 1}</td>
                <td>Description for Item {index + 1}</td>
                <td>
                  <button className="action-button">Action</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <button onClick={onClose} className="button buttonRadius padu1">Close</button> {/* Use the .button class */}
      </div>
    </div>
  );
};

export default GridModal;