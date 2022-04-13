import React from 'react';
import {useParams} from "react-router-dom";

const CourseFace = () => {
    console.log(useParams())
    return (
        <div>
            It's main part of your course!
        </div>
    );
};

export {CourseFace};