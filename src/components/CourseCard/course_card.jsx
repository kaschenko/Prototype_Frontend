import React from 'react';
import styles from "./course_card.module.css";
import card from "../../Icons/card-icon.svg"
const CourseCard = ({courseCard}) => {
    return (
        <>
        <div className='col-lg-4 col-sm-6 gy-3'>
            <div className={`${styles.course_card}`}>
                <div className="col-lg-4">
                    <img src={card} alt="Course"/>
                    <div className={styles.course_type}>
                        {courseCard.courseType}
                    </div>
                </div>
                <div className="col-lg-5">
                    <div className={styles.course_name}>
                        {courseCard.courseName}
                    </div>
                    <div className="course_tags">
                        {courseCard.tag1}
                    </div>
                    <div className="course_tags">
                        {courseCard.tag2}
                    </div>
                </div>
            </div>
        </div>

        </>
    );
};

export {CourseCard};