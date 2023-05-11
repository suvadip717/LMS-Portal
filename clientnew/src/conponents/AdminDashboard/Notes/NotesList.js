import React from "react";

const NotesList = ({ notes }) => {
  return (
    <>
      <h1>Notes</h1>
      <div className="grid">
        {notes.map(({ notes, _id }) => (
          <div key={_id} className="grid__item">
            <img
              src={`http://localhost:8009/uploads/${notes}`}
              alt="grid_image"
            />
          </div>
        ))}
      </div>
    </>
  );
};

export default NotesList;