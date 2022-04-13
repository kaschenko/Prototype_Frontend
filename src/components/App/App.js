import {useFormContext} from "react-hook-form";
import { Routes, Route } from "react-router-dom";
import { HomePage } from '../../pages/HomePage'
import { NotFoundPage } from "../../pages/NotFoundPage";
import { Layout } from '../Layout/Layout'
import {Registration} from "../../pages/Registration";
import {Courses} from "../../pages/Courses";
import {CourseFace} from "../../pages/CourseFace";

function App() {
  return (
    <>

      <Routes>
          <Route path="/" element={<Layout/>}>
          <Route index element={<HomePage/>} />
          <Route path="registration" element={<Registration/>}/>
          <Route path="courses" element={<Courses/>}/>
          <Route path="courses/:category" element={<CourseFace/>}/>
          <Route path="*" element={<NotFoundPage/>} />
          </Route>
      </Routes>
    </>
  );
}

export default App;
