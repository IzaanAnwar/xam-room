import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const SubjectPage = () => {
    const [allSubjects, setAllSubjects] = useState([]);
    const params = useParams();

    const getAllSubjects = async () => {
        try {
            return await axios.get(
                `${import.meta.env.VITE_API_URL}/admin/get-sub/${params.sem}`,
            );
        } catch (error) {
            console.error(error);
            return;
        }
    };
    console.log(import.meta.env.VITE_API_URL, params.sem);
    useEffect(() => {
        getAllSubjects().then((response) => {
            if (response?.data) {
                setAllSubjects(response?.data);
            }
        });
    }, []);

    return (
        <div className="flex flex-col mt-12">
            {allSubjects.map((subject, index) => {
                return (
                    <div key={index} className="px-4 py-2">
                        <Link to={subject}>{subject}</Link>
                    </div>
                );
            })}
        </div>
    );
};

export default SubjectPage;
