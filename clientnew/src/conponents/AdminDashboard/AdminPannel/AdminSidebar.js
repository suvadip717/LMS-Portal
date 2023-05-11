import React from 'react';
import { Routes, Route} from 'react-router-dom';
import NotesUpload from '../Notes/NotesUpload';

const AdminSidebar = () => {
  return (
    <>
    <Routes>
    <Route path="/notesupload" element={<NotesUpload />}/>
    </Routes>
    <div className="w-100">
      hello how are you?
    </div>
    </>
  )
}

export default AdminSidebar