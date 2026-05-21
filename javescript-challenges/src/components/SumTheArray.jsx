import React from "react";

export default function SumTheArray() {
    
    const studentCount = [50,53,61,67,60,70,78,80,80,81,90,110];

    const [totalStudents, setTotalStudents] = React.useState();
    
    function sumTheArray(array) {
        let totalStudents = 0;
        for (let i = 0; i < array.length; i++) {
            totalStudents += array[i];
        }
        return <p>Total number of students: {totalStudents}</p>;
    }
    return (
        <div className="sum-the-array-game">
            <p>Here is the array of student counts for each class:</p>
            <ul>
                {studentCount.map((count, index) => (
                    <li key={index}>{count}</li>
                ))}
            </ul>
            <button onClick={() => setTotalStudents(sumTheArray(studentCount))}>
                Sum the Array of Student Counts
            </button>
            <div style={{marginTop:"20px"}}>
                {totalStudents}
            </div>
        </div>
    )
}