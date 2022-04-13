import React, {useState} from 'react';
import {CourseCard} from "../components/CourseCard/course_card";
import {Selector} from "../components/Selector/selector"
const HomePage = ({onChange}) => {

    const [courseCards, setCourseCards] = useState([
        {courseType: "Открытый", courseName: "Математическая лига", tag1: "tag1", tag2: "tag2", id: "1"},
        {courseType: "Закрытый", courseName: "Название курса", tag1: "tag1", tag2: "tag2", id: "2"},
        {courseType: "Закрытый", courseName: "Название курса", tag1: "tag1", tag2: "tag2", id: "3"},
        {courseType: "Закрытый", courseName: "Олимпиадная физика", tag1: "tag1", tag2: "tag2", id: "4"},
        {courseType: "Закрытый", courseName: "Название курса", tag1: "tag1", tag2: "tag2", id: "5"},
        {courseType: "Закрытый", courseName: "Название курса", tag1: "tag1", tag2: "tag2", id: "6"}

    ])


    const [value, setValue] = useState('')

    const handleChange = (value) => {
        setValue(value)
    }
    const filteredCourses = courseCards.filter(course =>
        course.courseName.toLowerCase().includes(value.toLowerCase()))


    return (
        <div className="container px-4">
            <div className="row">
                <Selector onChange={handleChange}/>
            </div>
            <div className="row">
                {filteredCourses.map(courseData => <CourseCard courseCard={courseData} key={courseData.id}/>)}
            </div>

        </div>

    );
};

export {HomePage};