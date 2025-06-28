import StarPortal from "../Shared/StarPortal";
import astro from "../../assets/home/astro.png";
import { useNavigate } from "react-router-dom";

const jobData = [
  {
    id: 1,
    title: "UI/UX Designer",
    experience: "Minimum Of 1 Year",
    skills:
      "Understand User Needs And Develop User Flows, Wireframes, Prototypes, And High-Fidelity Designs.",
    location: "Kochi, India",
  },
  {
    id: 2,
    title: "Digital Marketing Executive",
    experience: "Minimum Of 1 Year",
    skills: "SEO, Social Media, Video Marketing And Content Marketing",
    location: "Kochi, India",
  },
  { 
    id: 3,
    title: "SEO And SEM Analyst",
    experience: "Minimum Of 1 Year",
    skills:
      "Proven Experience In SEO And SEM. Proficiency In Tools Like Google Analytics, SEMrush, Or Similar Platforms.",
    location: "Kochi, India",
  },
  { 
    id: 4,
    title: "Web Designer",
    experience: "Minimum Of 1 Year",
    skills:
      "A Bachelor's Degree In Computer Science Or A Related Field. Proficiency In HTML, CSS, And JavaScript",
    location: "Kochi, India",
  },
  {
    id: 5,
    title: "Sales And Marketing Team Lead",
    experience: "Minimum Of 1 Year",
    skills:
      "Develop Strategic Plans And Execute Effective Sales And Marketing Campaigns, Excellent Leadership Skills",
    location: "Kochi, India",
  },
];

const CarrerContent = () => {
  const navigate = useNavigate();
  return (
    <StarPortal>
      <div className=" w-full container mx-auto relative px-20">
        <div className="flex flex-col items-center justify-center min-h-[40vh] relative">
          <img src={astro} alt="astro" className="absolute top-20 right-20 " />
          <h2 className="text-[#D8FC00] text-9xl font-poppins font-extrabold  leading-[1.1] animate-[textStroke_0.5s_ease-out_2.5s_forwards] inline-block mb-8">
            Career
          </h2>
          <p className="text-white text-xl font-poppins font-thin max-w-2xl text-center">
            Careers refer to the various paths individuals choose to pursue in
            their professional lives, typically encompassing a series of related
            jobs and roles over time.
          </p>
        </div>
        <div className="space-y-8  py-10">
          {jobData.map((job, idx) => (
            <div
              key={job.title}
              className="bg-[#000000] rounded-lg px-4 py-8 flex flex-row items-center justify-between shadow-md border  border-[#FFFFFF] gap-4 flex-wrap md:flex-nowrap"
            >
              <div className="flex-1 min-w-[160px]">
                <h3 className="text-lg md:text-xl font-medium font-poppins text-white ">{job.title}</h3>
              </div>
              <div className="flex-1 min-w-[140px]">
                <span className="block font-semibold text-white whitespace-nowrap">Experience</span>
                <span className="block text-sm text-white whitespace-nowrap">{job.experience}</span>
              </div>
              <div className="flex-[2] min-w-[200px]">
                <span className="block font-semibold text-white whitespace-nowrap">Skills</span>
                <span className="block text-sm text-white whitespace-normal break-words">{job.skills}</span>
              </div>
              <div className="flex-1 min-w-[70px]">
                <span className="block font-semibold text-white whitespace-nowrap ">Location</span>
                <span className="block text-sm text-white whitespace-nowrap">{job.location}</span>
              </div>
              <div className="flex-1 flex justify-center md:justify-end items-center min-w-[120px]">
                <button onClick={() => navigate(`/careers/${job.id}`)} className="border px-8 py-2 rounded-full relative overflow-hidden group z-10 whitespace-nowrap">
                  <span className="absolute left-0 top-0 w-0 h-full bg-white transition-all duration-500 group-hover:w-full -z-10"></span>
                  <span className="relative group-hover:text-black transition-colors duration-500">
                    MORE INFO
                  </span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </StarPortal>
  );
};

export default CarrerContent;
