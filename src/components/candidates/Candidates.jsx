import React, { useEffect, useState } from "react";
import axios from "axios";
import hostUrl from "../Assets/Apis";
import Loader from "../resuable/Loader";
import Candidate from "./components/Candidate";
import SideNavLinks from "../resuable/SideNavLinks";
import logo from "../Assets/Images/logo.png";
import jwtDecode from "jwt-decode";
import { Link } from "react-router-dom";

const Candidates = () => {
  const [candidates, setCandidates] = useState([]);
  const [open, setOpen] = React.useState(false);
  const [message, setMessage] = useState("");

  const userToken = localStorage.getItem("token");
  const jwt = jwtDecode(userToken);

  useEffect(() => {
    fetchCandidates();
  }, []);

  const fetchCandidates = async () => {
    setOpen(true);
    const token = localStorage.getItem("token");
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };
    axios
      .get(`${hostUrl}/api/candidate/apply`, config)
      .then((res) => {
        setCandidates(res.data);
        setOpen(false);
      })
      .catch((err) => {
        setTimeout(() => {
          setMessage("Please Reload page ...");
        }, 15000);
      });
  };

  const handleDeleteConfrim = async (id) => {
    setOpen(true);
    const token = localStorage.getItem("token");
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };
    await axios
      .delete(`${hostUrl}/api/candidate/delete/${id}`, config)
      .then((res) => {
        setOpen(false);
        fetchCandidates();
      })
      .catch((err) => {
        setTimeout(() => {
          setMessage("Please Reload page...");
        }, 15000);
      });
  };
  return (
    <>
      <Loader open={open} message={message} />
      <div className="font-inter">
        <div className="text-black bg-[white] grid grid-cols-12 min-h-screen ">
          <div className="w-full flex flex-col justify-between items-center bg-[#001e2b]  text-white col-span-2 ">
            <div className="w-full p-3 text-base font-bold  space-y-8">
              <div className=" mx-auto ">
                <img src={logo} alt="logo" />
              </div>
              <div
                div
                className="mt-6 text-xl md:text-2xl lg:text-2xl font-bold abdal_color mx-auto"
              >
                <h1>Admin Pannel</h1>
                <hr className="w-full h-[1px] text-[gray] mt-3" />
              </div>

              <SideNavLinks />
            </div>
          </div>
          {/* <DashBoardSidebar /> */}
          <div className="flex flex-col justify-start col-span-10 w-full">
            <div className=" flex justify-between items-center bg-[white] border-b border-[gray]/50 h-[64px] w-full  mx-auto px-4">
              <div className="text-xl text-[gray] font-semibold">
                Welcome to Admin Pannel
              </div>

              {/* <img src="./Assets/Images/ceodawoodproud2.png" alt="dawood" /> */}
              <div>
                <span style={{ marginRight: "20px" }}>
                  <span style={{ color: "dimgray" }}> Logged in as : </span>{" "}
                  <b style={{ fontFamily: "koHo" }}> {jwt.name} </b>{" "}
                </span>
                <Link to="/logout" style={{ color: "red", cursor: "pointer" }}>
                  <u> Logout </u>
                </Link>
              </div>
            </div>
            <div className="mx-auto w-full">
              <div className="container my-5 mx-auto">
                <div className="row">
                  <h1 style={{ fontSize: "25px" }} className="ml-4 mb-4">
                    Your Candidates
                  </h1>
                  <div className="grid grid-cols-12 mx-5 ">
                    <div className="relative col-span-12 overflow-x-auto shadow-lg sm:rounded-lg !bg-white py-4 px-3">
                      {!open ? (
                        <table className="w-full text-sm text-left">
                          <thead className="text-xs  uppercase border-b text-white dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                            <tr>
                              <th scope="col" className="px-6 py-3">
                                Name
                              </th>
                              <th scope="col" className="px-6 py-3">
                                email
                              </th>
                              <th scope="col" className="px-6 py-3">
                                Phone
                              </th>
                              <th scope="col" className="px-6 py-3">
                                Date
                              </th>
                              <th scope="col" className="px-6 py-3">
                                Actions
                              </th>
                            </tr>
                          </thead>
                          <tbody>
                            {candidates.map((candidate) => {
                              return (
                                <Candidate
                                  key={candidate._id}
                                  handleDeleteConfrim={handleDeleteConfrim}
                                  candidate={candidate}
                                />
                              );
                            })}
                          </tbody>
                        </table>
                      ) : (
                        ""
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Candidates;
