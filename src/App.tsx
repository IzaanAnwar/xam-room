import React from 'react';
import { Link, Routes, Route } from 'react-router-dom';
import AnswerSheet from './AnswerSheet';
import SubjectPage from './SubjectPage';

const App = () => {
    return (
        <>
            <nav className="flex justify-between items-center px-2 text-gray-800 bg-slate-400 py-2">
                <h1>Xam corner</h1>

                <div className="">
                    <Link to="/"> Home</Link>
                </div>
            </nav>

            <Routes>
                <Route
                    path="/"
                    element={
                        <div className="p-2 mt-8 ">
                            <h1 className="text-xl">SEMESTERS</h1>
                            <div className="flex flex-col justify-between py-4 text-cyan-900">
                                <a className="py-2" href="/1">
                                    Semseter 1
                                </a>
                                <Link className="py-2" to="/2">
                                    Semseter 2
                                </Link>
                                <a className="py-2" href="/3">
                                    Semseter 3
                                </a>
                                <Link className="py-2" to="/4">
                                    Semseter 4
                                </Link>
                                <a className="py-2" href="/5">
                                    Semseter 5
                                </a>
                                <a className="py-2" href="/6">
                                    Semseter 6
                                </a>
                            </div>
                        </div>
                    }
                />
                <Route path="/:sem" element={<SubjectPage />}>
                    <Route path=":subject" element={<AnswerSheet />} />
                </Route>
                <Route
                    path="*"
                    element={
                        <div className=" flex justify-center items-center w-full h-[25vh] bg-red-200 text-red-600">
                            <h1>Not Found!</h1>
                        </div>
                    }
                />
            </Routes>
        </>
    );
};

export default App;
