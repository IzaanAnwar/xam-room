import React from 'react';
import { Link, Routes, Route } from 'react-router-dom';
import SubjectPage from './SubjectPage';

const App = () => {
    return (
        <>
            <nav className="flex justify-between items-center px-2 text-gray-800">
                <h1>Xam corner</h1>

                <div className="">
                    <Link to="/"> Home</Link>
                </div>
            </nav>

            <Routes>
                <Route
                    path="/"
                    element={
                        <div className="p-2 mt-8">
                            <h1 className="text-xl">SEMESTERS</h1>
                            <div className="flex flex-col justify-between py-4">
                                <a className="py-2" href="/sem1">
                                    Semseter 1
                                </a>
                                <a className="py-2" href="/sem2">
                                    Semseter 2
                                </a>
                                <a className="py-2" href="/sem3">
                                    Semseter 3
                                </a>
                                <a className="py-2" href="/sem4">
                                    Semseter 4
                                </a>
                                <a className="py-2" href="/sem5">
                                    Semseter 5
                                </a>
                                <a className="py-2" href="/sem6">
                                    Semseter 6
                                </a>
                            </div>
                        </div>
                    }
                />
                <Route path="/sem:_id/" element={<SubjectPage />} />
            </Routes>
        </>
    );
};

export default App;
