import React from "react";

const NotesUploadPage = ({ photos }) => {
  return (
    <>
      <h1>Our Gallery</h1>
      <div className="grid">
        {photos.map(({ photo, _id }) => (
          <div key={_id} className="grid__item">
            <img
              src={`http://localhost:8009/uploads/${photo}`}
              alt="grid_image"
            />
          </div>
        ))}
      </div>
    </>
  );
};

export default NotesUploadPage;