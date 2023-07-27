import React, { useEffect, useState } from "react";
import logo from "../Assets/Images/logo.png";
import jwtDecode from "jwt-decode";
import SideNavLinks from "../resuable/SideNavLinks";
import { Card } from "antd";
// import ceodawoodproud2 from "./Assets/Images/ceodawoodproud2.png"
import "./css/dashboard.css";
import { BsFillBagDashFill } from "react-icons/bs";
import axios from "axios";
import hostUrl from "../Assets/Apis";
import CardLoader from "../resuable/CardLoader";

const Dashboard = () => {
  const [clients, setClients] = useState("");
  const [candidates, setCandidates] = useState("");
  const [emails, setEmails] = useState("");
  const [loading, setLoading] = useState(false);

  const userToken = localStorage.getItem("token");
  const jwt = jwtDecode(userToken);

  useEffect(() => {
    setLoading(true);
    axios
      .get(`${hostUrl}/api/length/card`)
      .then((res) => {
        setClients(res.data.length.clientInfoCount);
        setCandidates(res.data.length.candidateApplyJobCount);
        setEmails(res.data.length.registeredClientsCount);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
      });
  }, []);

  return (
    <>
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

            {/* log out button */}

            <button
              onClick={onclick}
              className=" flex gap-2 items-center justify-center py-2 self-start ml-2 font-semibold"
            >
              <p>Log out </p>
              {/* <HiOutlineLogout size={15} /> */}
            </button>
          </div>
          {/* <DashBoardSidebar /> */}
          <div className="flex flex-col justify-start col-span-10 w-full">
            <div className=" flex justify-between items-center bg-[white] border-b border-[gray]/50 h-[64px] w-full  mx-auto px-4">
              <div className="text-xl text-[gray] font-semibold">
                Welcome to Admin Pannel
              </div>

              {/* <img src="./Assets/Images/ceodawoodproud2.png" alt="dawood" /> */}
              <div>
                {" "}
                <span style={{ color: "dimgray" }}> Logged in as : </span>{" "}
                <b style={{ fontFamily: "koHo" }}> {jwt.name} </b>{" "}
              </div>
            </div>
            <div className="mx-auto w-full">
              <h1
                style={{
                  fontSize: "50px",
                  color: "#001E2B",
                  textAlign: "center",
                  marginTop: "30px",
                  marginBottom: "25px",
                }}
              >
                Welcome :{" "}
                <b>
                  <u> {jwt.name} </u>
                </b>
              </h1>
              <div style={{ display: "flex", justifyContent: "space-around" }}>
                <Card style={{ width: "350px" }} className="shadow-lg">
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-around",
                    }}
                  >
                    <div className="">
                      <BsFillBagDashFill className="text-primary icon_design-postjob" />
                    </div>
                    <div className="">
                      {loading ? (
                        <>
                          <h4
                            style={{
                              fontSize: "36px",
                              fontWeight: "700",
                              display: "flex",
                              justifyContent: "end",
                              color: "#1967D2",
                            }}
                          >
                            <CardLoader />
                          </h4>
                        </>
                      ) : (
                        <h4
                          style={{
                            fontSize: "36px",
                            fontWeight: "700",
                            display: "flex",
                            justifyContent: "end",
                            color: "#1967D2",
                          }}
                        >
                          {clients}
                        </h4>
                      )}

                      <p
                        style={{
                          fontSize: "15px",
                          color: "#202124",
                          lineHeight: "26px",
                        }}
                      >
                        Clients
                      </p>
                    </div>
                  </div>
                </Card>
                <Card style={{ width: "350px" }} className="shadow-lg">
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-around",
                    }}
                  >
                    <div className="">
                      <BsFillBagDashFill className=" icon_design-postjob_red" />
                    </div>
                    <div className="">
                      {loading ? (
                        <>
                          {" "}
                          <h4
                            style={{
                              fontSize: "36px",
                              fontWeight: "700",
                              display: "flex",
                              justifyContent: "end",
                              color: "#DC3545",
                            }}
                          >
                            <CardLoader />
                          </h4>
                        </>
                      ) : (
                        <>
                          <h4
                            style={{
                              fontSize: "36px",
                              fontWeight: "700",
                              display: "flex",
                              justifyContent: "end",
                              color: "#DC3545",
                            }}
                          >
                            {candidates}
                          </h4>
                        </>
                      )}

                      <p
                        style={{
                          fontSize: "15px",
                          color: "#202124",
                          lineHeight: "26px",
                        }}
                      >
                        Candidates
                      </p>
                    </div>
                  </div>
                </Card>
                <Card style={{ width: "350px" }} className="shadow-lg">
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-around",
                    }}
                  >
                    <div className="">
                      <BsFillBagDashFill className="text-primary icon_design-postjob_yellow" />
                    </div>
                    <div className="">
                      {loading ? (
                        <>
                          <h4
                            style={{
                              fontSize: "36px",
                              fontWeight: "700",
                              display: "flex",
                              justifyContent: "end",
                              color: "#C7C706",
                            }}
                          >
                            <CardLoader />
                          </h4>
                        </>
                      ) : (
                        <>
                          <h4
                            style={{
                              fontSize: "36px",
                              fontWeight: "700",
                              display: "flex",
                              justifyContent: "end",
                              color: "#C7C706",
                            }}
                          >
                            {emails}
                          </h4>
                        </>
                      )}

                      <p
                        style={{
                          fontSize: "15px",
                          color: "#202124",
                          lineHeight: "26px",
                        }}
                      >
                        Emails
                      </p>
                    </div>
                  </div>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
