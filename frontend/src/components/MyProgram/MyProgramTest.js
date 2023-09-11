import { useEffect, useState } from "react";

function MyProgramTest(){
    const [programs, setPrograms] = useState([]);
    const fetchPrograms = () => {
        fetch("/api/programs")
        .then((response) => {
            return response.json()
        })
        .then((data) => {
            setPrograms(data);
        })
    }
    useEffect(()=>{
        fetchPrograms()
    },[]);
    return (
        <div>

        </div>
    );
}
export default MyProgramTest;