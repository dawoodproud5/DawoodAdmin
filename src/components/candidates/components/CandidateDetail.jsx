import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Loader from "../../resuable/Loader";
import axios from "axios";
import hostUrl from "../../Assets/Apis";
import "./css/Candidate.css";
import SideNavLinks from "../../resuable/SideNavLinks";
import logo from "../../Assets/Images/logo.png";
import jwtDecode from "jwt-decode";

const CandidateDetail = () => {
  const [open, setOpen] = React.useState(false);
  const [message, setMessage] = useState("");

  const [fullName, setFullName] = useState("");
  const [cv, setCv] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [coverLetter, setCoverLetter] = useState("");
  const [answer1, setAnswer1] = useState("");
  const [answer2, setAnswer2] = useState("");
  const [answer3, setAnswer3] = useState("");
  const [answer4, setAnswer4] = useState("");
  const [answer5, setAnswer5] = useState("");
  const [answer6, setAnswer6] = useState("");
  const [answer7, setAnswer7] = useState("");
  const [answer8, setAnswer8] = useState("");
  const [answer9, setAnswer9] = useState("");
  const [answer10, setAnswer10] = useState("");
  const [answer11, setAnswer11] = useState("");
  const [answer12, setAnswer12] = useState("");
  const [answer13, setAnswer13] = useState("");
  const [answer14, setAnswer14] = useState("");
  const [answer15, setAnswer15] = useState("");
  const [answer16, setAnswer16] = useState("");
  const [answer17, setAnswer17] = useState("");
  const [answer18, setAnswer18] = useState("");
  const [answer19, setAnswer19] = useState("");
  const [answer20, setAnswer20] = useState("");
  const [answer21, setAnswer21] = useState("");

  const clientDetail = useParams();
  const id = clientDetail.id;

  const userToken = localStorage.getItem("token");
  const jwt = jwtDecode(userToken);

  useEffect(() => {
    fetchClientDetail();
  }, []);

  const fetchClientDetail = async () => {
    setOpen(true);
    const token = localStorage.getItem("token");
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };
    axios
      .get(`${hostUrl}/api/candidate/single/detail/${id}`, config)
      .then((res) => {
        console.log(res.data);
        setFullName(res.data.fullName);
        setEmail(res.data.email);
        setPhone(res.data.phone);
        setCv(res.data.cv);
        setCoverLetter(res.data.coverLetter);
        setAnswer1(res.data.answer1);
        setAnswer2(res.data.answer2);
        setAnswer3(res.data.answer3);
        setAnswer4(res.data.answer4);
        setAnswer5(res.data.answer5);
        setAnswer6(res.data.answer6);
        setAnswer7(res.data.answer7);
        setAnswer8(res.data.answer8);
        setAnswer9(res.data.answer9);
        setAnswer10(res.data.answer10);
        setAnswer11(res.data.answer11);
        setAnswer12(res.data.answer12);
        setAnswer13(res.data.answer13);
        setAnswer14(res.data.answer14);
        setAnswer15(res.data.answer15);
        setAnswer16(res.data.answer16);
        setAnswer17(res.data.answer17);
        setAnswer18(res.data.answer18);
        setAnswer19(res.data.answer19);
        setAnswer20(res.data.answer20);
        setAnswer21(res.data.answer21);
        setOpen(false);
      })
      .catch((err) => {
        setTimeout(() => {
          setMessage("Please Reload page ...");
        }, 15000);
      });
  };

  const handleResumeBlank = (cv) => {
    window.open(cv, "_blank");
  };

  // const handleDeleteConfrim = async (id) => {
  //   setOpen(true);
  //   const token = localStorage.getItem("token");
  //   const config = {
  //     headers: {
  //       Authorization: `Bearer ${token}`,
  //     },
  //   };
  //    await axios.delete(`${hostUrl}/api/client/delete/${id}`, config).then((res) => {
  //       console.log(res)
  //       setOpen(false);
  //       fetchClients();
  //     }).catch((err) => {
  //       setTimeout(() => {
  //         setMessage("Please Reload page...");
  //       }, 15000);
  //     })
  // }
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
              <div className="container my-5 mx-auto">
                <div className="row px-16">
                  {/* update Here */}
                  <form>
                    <div className="w-full flex !max-w-2xl  flex-col justify-center sm:justify-start items-center sm:items-start space-y-8 text-blue ">
                      <div className="text-blue space-y-3">
                        <div className="flex flex-col gap-1">
                          <p className="text-lg font-normal">
                            CV: &nbsp; &nbsp; &nbsp;
                            <button
                              onClick={() => handleResumeBlank(cv)}
                              class="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded inline-flex items-center"
                            >
                              <svg
                                class="fill-current w-4 h-4 mr-2"
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 20 20"
                              >
                                <path d="M13 8V2H7v6H2l8 8 8-8h-5zM0 18h20v2H0v-2z" />
                              </svg>
                              <span>Download CV</span>
                            </button>
                          </p>
                        </div>
                      </div>
                      {/* line break  */}
                      <hr className="w-full text-[gray]/40" />

                      <div className="flex flex-col justify-start items-start space-y-6  text-[black] font-semibold text-[20px] w-full">
                        <h1 className="font-Inter text-xl font-semibold">
                          Personal information
                        </h1>

                        <div className="flex flex-col justify-start items-start gap-1 w-full">
                          <div className="flex gap-2">
                            Full Name : {fullName}
                          </div>
                        </div>

                        <div className="flex flex-col justify-start items-start gap-1 w-full">
                          <div className="flex gap-2">Email : {email}</div>
                        </div>

                        <div className="flex flex-col justify-start items-start gap-1 w-full">
                          <div className="flex gap-2">
                            Personel Number : {phone}
                          </div>
                        </div>

                        <div className="flex flex-col justify-start items-start gap-1 w-full">
                          <div className="flex flex-col gap-2">
                            Cover Letter:
                            <textarea
                              value={coverLetter}
                              placeholder="Insert your cover letter here "
                              required
                              className="!w-[100%] min-h-[120px]"
                            />
                          </div>
                        </div>
                      </div>

                      <hr className="w-full text-[gray]/40" />

                      <hr className="w-full text-[gray]/40" />
                      {/* Questionaire is here , here are the quesiton */}
                      <div className="flex flex-col justify-start items-start text-sm font-normal gap-5 max-w-[900px] w-full">
                        <h4 className="text-xl font-semibold">Questions</h4>

                        <div className="flex gap-2 text-xl font-semibold">
                          Address:
                          <span
                            aria-hidden="true"
                            className="text-[#fe6363]"
                            title="This field is required"
                          >
                            *
                          </span>
                        </div>

                        <label className="flex flex-col gap-[4px] text-sm w-full ">
                          <div className="w-full"></div>
                          <input
                            type="text"
                            name="answer1"
                            value={answer1}
                            // onChange={(e) => answer1(e.target.value)}
                            // className="w-[700px]"
                            required
                          />
                        </label>
                        <label className="flex flex-col gap-[4px] text-sm w-full">
                          <div>
                            What is your current residential status in Islamabad
                            / Rawalpindi? (Mandatory){" "}
                            <span
                              aria-hidden="true"
                              className="text-[#fe6363]"
                              title="This field is required"
                            >
                              *
                            </span>
                          </div>

                          <textarea
                            type="text"
                            name="answer2"
                            value={answer2}
                            placeholder="Permanent Resident, Living as Long Term Resident or Residing as an Outsider"
                            required
                            // className="w-[700px]"
                          />
                        </label>

                        <br />
                        <hr className="w-full text-[gray]/40" />
                        <br />

                        <div className="flex gap-2 text-xl font-semibold">
                          English Proficiency:
                          <span
                            aria-hidden="true"
                            className="text-[#fe6363]"
                            title="This field is required"
                          >
                            *
                          </span>
                        </div>
                        <label className="flex flex-col gap-[4px] text-sm w-full">
                          <div>
                            What is your level of proficiency in English?
                            (Mandatory)
                            <span className="text-[black]/80">
                              (Beginner, Elementary, Intermediate, Upper
                              Intermediate, Advanced)
                            </span>{" "}
                            <span
                              aria-hidden="true"
                              className="text-[#fe6363]"
                              title="This field is required"
                            >
                              *
                            </span>
                          </div>

                          <input
                            type="text"
                            name="answer3"
                            value={answer3}
                            // className="w-[700px]"
                            required
                          />
                        </label>
                        <label className="flex flex-col gap-[1px] text-sm w-full">
                          Have you taken any English language proficiency tests?
                          (Optional)
                          <span className="text-[black]/70">
                            (such as TOEFL, IELTS, or Cambridge exams)
                          </span>{" "}
                          If so, what were your scores?
                          <input type="text" name="answer4" value={answer4} />
                        </label>
                        <label className="flex flex-col gap-[4px] text-sm w-full">
                          <div>
                            How often do you speak, read, or write in English?
                            (Mandatory){" "}
                            <span
                              aria-hidden="true"
                              className="text-[#fe6363]"
                              title="This field is required"
                            >
                              *
                            </span>
                          </div>
                          <textarea
                            type="text"
                            name="answer5"
                            value={answer5}
                            required
                          />
                        </label>
                        <label className="flex flex-col gap-[4px] text-sm w-full">
                          Can you provide an example of a time when you had to
                          communicate in English in a professional setting?
                          (Optional)
                          <textarea
                            type="text"
                            name="answer6"
                            value={answer6}
                          />
                        </label>

                        <br />
                        <hr className="w-full text-[gray]/40" />
                        <br />
                        <div className="flex gap-2 text-xl font-semibold">
                          Digital Skills:
                          <span
                            aria-hidden="true"
                            className="text-[#fe6363]"
                            title="This field is required"
                          >
                            *
                          </span>
                        </div>

                        <label className="flex flex-col gap-[4px] text-sm w-full">
                          <div>
                            What is your level of proficiency in using various
                            digital tools (Mandatory) ?{" "}
                            <span
                              aria-hidden="true"
                              className="text-[#fe6363]"
                              title="This field is required"
                            >
                              *
                            </span>
                          </div>

                          <textarea
                            type="text"
                            name="answer7"
                            value={answer7}
                            required
                            placeholder="e.g. Notion, Microsoft Office, Google Workspace,  social media platforms, etc."
                          />
                        </label>
                        <label className="flex flex-col gap-[4px] text-sm w-full">
                          Do you have any digital skills?{" "}
                          <span className="text-[black]/80">
                            (e.g. Digital Marketing, Social Media Management,
                            Online Coaching, Email Marketing, etc.)
                          </span>{" "}
                          If yes, please list them. Have you freelanced or
                          worked independently in any capacity utilizing your
                          digital skills? If yes, please provide details about
                          your experience, the type of work you did and the
                          Outcomes you achieved. (Optional)
                          <textarea
                            type="text"
                            name="answer8"
                            value={answer8}
                          />
                        </label>

                        <br />
                        <hr className="w-full text-[gray]/40" />
                        <br />

                        <div className="flex gap-2 text-xl font-semibold">
                          Digital Quotient:
                          <span
                            aria-hidden="true"
                            className="text-[#fe6363]"
                            title="This field is required"
                          >
                            *
                          </span>
                        </div>

                        <label className="flex flex-col gap-[4px] text-sm w-full">
                          Have you ever developed a digital solution to a
                          problem? If so, what was the problem and how did you
                          solve it? OR Can you provide an example of a digital
                          project you worked on that required you to think
                          creatively? (Optional)
                          <textarea
                            type="text"
                            name="answer9"
                            value={answer9}
                          />
                        </label>

                        <br />
                        <hr className="w-full text-[gray]/40" />
                        <br />

                        <div className="flex gap-2 text-xl font-semibold">
                          Quick learning abilities:
                          <span
                            aria-hidden="true"
                            className="text-[#fe6363]"
                            title="This field is required"
                          >
                            *
                          </span>
                        </div>

                        <label className="flex flex-col gap-[4px] text-sm w-full">
                          <div>
                            Can you provide an example of a time when you had to
                            learn a new skill quickly in order to complete a
                            project? OR Can you provide an example of a time
                            when you successfully learned something quickly
                            under pressure? (Mandatory){" "}
                            <span
                              aria-hidden="true"
                              className="text-[#fe6363]"
                              title="This field is required"
                            >
                              *
                            </span>
                          </div>

                          <textarea
                            type="text"
                            name="answer10"
                            value={answer10}
                            required
                          />
                        </label>

                        <br />
                        <hr className="w-full text-[gray]/40" />
                        <br />

                        <div className="flex gap-2 text-xl font-semibold">
                          Problem solving:
                          <span
                            aria-hidden="true"
                            className="text-[#fe6363]"
                            title="This field is required"
                          >
                            *
                          </span>
                        </div>

                        <label className="flex flex-col gap-[4px] text-sm w-full">
                          <div>
                            Can you provide an example of a difficult problem
                            you solved in the past? (Mandatory){" "}
                            <span
                              aria-hidden="true"
                              className="text-[#fe6363]"
                              title="This field is required"
                            >
                              *
                            </span>
                          </div>

                          <textarea
                            type="text"
                            name="answer11"
                            value={answer11}
                            required
                          />
                        </label>
                        <label className="flex flex-col gap-[4px] text-sm w-full">
                          Have you ever had to make a difficult decision? If so,
                          how did you approach it and what was the outcome?
                          (Optional)
                          <textarea
                            type="text"
                            name="answer12"
                            value={answer12}
                          />
                        </label>

                        <br />
                        <hr className="w-full text-[gray]/40" />
                        <br />

                        <div className="flex gap-2 text-xl font-semibold">
                          Social Media Proficiency:
                          <span
                            aria-hidden="true"
                            className="text-[#fe6363]"
                            title="This field is required"
                          >
                            *
                          </span>
                        </div>

                        <label className="flex flex-col gap-[4px] text-sm w-full">
                          <div>
                            What social media platforms do you actively use and
                            why? (Mandatory){" "}
                            <span
                              aria-hidden="true"
                              className="text-[#fe6363]"
                              title="This field is required"
                            >
                              *
                            </span>
                          </div>
                          <textarea
                            type="text"
                            name="answer13"
                            value={answer13}
                            required
                          />
                        </label>
                        <label className="flex flex-col gap-[4px] text-sm w-full">
                          Have you created any social media content for yourself
                          or for a brand? If yes, please provide links or
                          examples.(Optional)
                          <textarea
                            type="text"
                            name="answer14"
                            value={answer14}
                          />
                        </label>
                        <label className="flex flex-col gap-[4px] text-sm w-full">
                          Can you describe a time when you used social media to
                          achieve a specific business or personal
                          goal?(Optional)
                          <textarea
                            type="text"
                            name="answer15"
                            value={answer15}
                          />
                        </label>

                        <br />
                        <hr className="w-full text-[gray]/40" />
                        <br />

                        <div className="flex gap-2 text-xl font-semibold">
                          Additional Questions:
                          <span
                            aria-hidden="true"
                            className="text-[#fe6363]"
                            title="This field is required"
                          >
                            *
                          </span>
                        </div>

                        <label className="flex flex-col gap-[4px] text-sm w-full">
                          <div>
                            Have you read Job Description, Job Requirements, and
                            all the FAQs Carefully? If yes, Why do you want to
                            work for our company? (Mandatory){" "}
                            <span
                              aria-hidden="true"
                              className="text-[#fe6363]"
                              title="This field is required"
                            >
                              *
                            </span>
                          </div>

                          <textarea
                            type="text"
                            name="answer16"
                            value={answer16}
                            required
                          />
                        </label>
                        <label className="flex flex-col gap-[4px] text-sm w-full">
                          <div>
                            What are your key strengths and weaknesses? In which
                            areas do you think you need to improve the most, and
                            why? (Mandatory){" "}
                            <span
                              aria-hidden="true"
                              className="text-[#fe6363]"
                              title="This field is required"
                            >
                              *
                            </span>
                          </div>

                          <textarea
                            type="text"
                            name="answer17"
                            value={answer17}
                            required
                          />
                        </label>
                        <label className="flex flex-col gap-[4px] text-sm w-full">
                          <div>
                            What do you enjoy doing in your free time? How do
                            you like to spend your weekends? (Mandatory){" "}
                            <span
                              aria-hidden="true"
                              className="text-[#fe6363]"
                              title="This field is required"
                            >
                              *
                            </span>
                          </div>

                          <textarea
                            type="text"
                            name="answer18"
                            value={answer18}
                            required
                          />
                        </label>
                        <label className="flex flex-col gap-[4px] text-sm w-full">
                          What was the most exciting activity or event you
                          participated in, in the last year? (Optional)
                          <textarea
                            type="text"
                            name="answer19"
                            value={answer19}
                          />
                        </label>
                        <label className="flex flex-col gap-[4px] text-sm w-full">
                          What are some of your favorite books, movies, or TV
                          shows? (Optional)
                          <textarea
                            type="text"
                            name="answer20"
                            value={answer20}
                          />
                        </label>
                        <label className="flex flex-col gap-[4px] text-sm w-full">
                          How did you hear about us? (Mandatory) <br />{" "}
                          <span className="text-[black]/70">
                            (Google Search, Facebook, Instagram, LinkedIn,
                            WhatsApp Group, Referral, or You can Write Other
                            Sources Here.){" "}
                          </span>
                          <input
                            type="text"
                            name="answer21"
                            value={answer21}
                            placeholder="  "
                            required
                          />
                        </label>
                      </div>
                    </div>
                  </form>
                  {/* {update here} */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CandidateDetail;
