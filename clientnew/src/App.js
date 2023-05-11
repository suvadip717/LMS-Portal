import "./App.css";
import Login from "../src/conponents/Auth/Login";
import Register from "../src/conponents/Auth/Register";
import Header from "../src/conponents/Header/Header";
import Dashboard from "./conponents/Global/Dashboard/Dashboard";
import { Routes, Route } from "react-router-dom";
import Error from "./conponents/Global/Error";
import Account from "./conponents/Global/Dashboard/pages/Account";
import EditProfile from "./conponents/Global/Dashboard/pages/EditProfile";
// import HomePage from "./conponents/HomePage/HomePage";
import HomePage from "./conponents/HomePageNew/HomePage/HomePage";
// import FactultyPage from "./conponents/Pages/FacultyPage/FacultyPage";
import ProgramsSyllabi from "./conponents/Pages/Program&Syllabi/ProgramsSyllabi";
import Notes2ndYear from "./conponents/Pages/Program&Syllabi/Notes/2ndYear/Notes2ndYear";
import Notes3rdYear from "./conponents/Pages/Program&Syllabi/Notes/3rdYear/Notes3rdYear";
import Notes4thYear from "./conponents/Pages/Program&Syllabi/Notes/4thYear/Notes4thYear";
import Question2nd from "./conponents/Pages/Program&Syllabi/Questions/2ndYear/Question2nd";
import Question3rd from "./conponents/Pages/Program&Syllabi/Questions/3rdYear/Question3rd";
import Question4th from "./conponents/Pages/Program&Syllabi/Questions/4thYear/Question4th";
import StudentList212025 from "./conponents/Pages/StudentLists/Session202125/StudentList202125";
import StudentList202024 from "./conponents/Pages/StudentLists/Session202024/StudentList202024";
// import StudentList4y from "./conponents/Pages/StudentLists/4thYear/StudentList201923";
// import HeaderNav from './conponents/HeaderNav/HeaderNav';
import NotesTestPage from "./conponents/NotesUpload/NotesTestPage";
import NotesPage from "./conponents/AdminDashboard/Notes/NotesPage";
import DashboardMain from "./conponents/AdminDashboard/Dashboard/DashboardMain";
import AllNotes from "./conponents/Pages/Program&Syllabi/Notes/AllNotes";
import AllQuestions from "./conponents/Pages/Program&Syllabi/Questions/AllQuestions";
import PaymentsPage from "./conponents/Pages/Payments/PaymentsPage";
import PersistentDrawerLeft from "./conponents/Sidebar/PersistentDrawerLeft";
import FacultyNew from "./conponents/Pages/FacultyPage/FacultyNew/FacultyNew";
import ContactPage from "./conponents/Pages/ContactPage/ContactPage";

// import Dashboard from "./conponents/Global/DashboardNew/Dashboard";
import Footer from "./conponents/FooterNew/Footer";
import SucessStory from "./conponents/Pages/SucessStory/SucessStory";
import Grievance from "./conponents/Pages/Grievance/Grievance";
import ProfilePage from "./conponents/Global/ProfilePage/ProfilePage";
import StudentList201923 from "./conponents/Pages/StudentLists/Session201923/StudentList201923";

function App() {
  return (
    <>
      <Header />
      {/* <HeaderNav /> */}
      <PersistentDrawerLeft />
      <Routes>
        {/* <Route path="/" element={<HomePage />} /> */}
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="*" element={<Error />} />
        <Route path="/account" element={<Account />} />
        <Route path="/editprofile" element={<EditProfile />} />
        {/* <Route path="/faculty" element={<FactultyPage />} /> */}
        <Route path="/programs" element={<ProgramsSyllabi />} />
        <Route path="/notes2y" element={<Notes2ndYear />} />
        <Route path="/notes3y" element={<Notes3rdYear />} />
        <Route path="/notes4y" element={<Notes4thYear />} />
        <Route path="/question2y" element={<Question2nd />} />
        <Route path="/question3y" element={<Question3rd />} />
        <Route path="/question4y" element={<Question4th />} />
        <Route path="/students21-25" element={<StudentList212025 />} />
        <Route path="/students20-24" element={<StudentList202024 />} />
        <Route path="/students19-23" element={<StudentList201923 />} />
        <Route path="/notesupload" element={<NotesTestPage />} />
        <Route path="/admin-notes" element={<NotesPage />} />
        <Route path="/admin" element={<DashboardMain />} />
        <Route path="/allnotes" element={<AllNotes />} />
        <Route path="/allquestions" element={<AllQuestions />} />
        <Route path="/payment" element={<PaymentsPage />} />
        <Route path="/sidebar" element={<PersistentDrawerLeft />} />
        <Route path="/success_stories" element={<SucessStory />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/grievance" element={<Grievance />} />
        {/* <Route path="/dashboardnew" element={<Dashboard />} /> */}
        {/* <Route path="/chat" element={<Chat />} /> */}

        {/* for testing */}

        <Route path="/facultynew" element={<FacultyNew />} />
      </Routes>

      <Footer />
    </>
  );
}

export default App;
