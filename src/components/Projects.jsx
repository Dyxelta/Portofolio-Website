import React, { useState, useEffect } from "react";
import projectData from "../data/ProjectData";
import { motion } from "framer-motion";
import { FaGithub, FaFigma } from "react-icons/fa";
import { SiItchdotio } from "react-icons/si";

const iconMap = {
  github: <FaGithub />,
  figma: <FaFigma />,
  itch: <SiItchdotio />
};

const Projects = () => {
  const [index, setIndex] = useState(-1);
  const [activeCategory, setActiveCategory] = useState("All");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;

  useEffect(() => {
    if (index >= 0) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [index]);

  useEffect(() => {
    setCurrentPage(1); // Reset to first page on category change
  }, [activeCategory]);

  const categories = ["All", "Mobile", "Web", "Game"];

  const filteredProjects =
    activeCategory === "All"
      ? projectData
      : projectData.filter((p) => p.categories.includes(activeCategory));

  const paginatedProjects = filteredProjects.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const totalPages = Math.ceil(filteredProjects.length / itemsPerPage);

  return (
    <div
      name="projects"
      className="relative w-full h-auto py-8 text-offwhite bg-bggray font-roboto"
    >
      <div className="flex flex-col justify-center max-w-[1080px] w-full h-full mx-auto p-4">
        <motion.div
          className="pb-4"
          initial="hidden"
          whileInView="visible"
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          variants={{
            hidden: { opacity: 0, y: -24 },
            visible: { opacity: 1, y: 0 },
          }}
        >
          <h1 className="inline text-4xl font-bold border-b-4 border-primary text-offwhite">
            Projects
          </h1>
          <p className="py-6 text-offwhite-dark">
            // Some of projects that I've done //
          </p>
        </motion.div>

        {/* Filter UI */}
        <div className="flex flex-wrap gap-2 pb-6">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-3 py-1 rounded-full text-sm border font-medium duration-200 ${
                activeCategory === cat
                  ? "bg-primary text-bgblack border-primary"
                  : "bg-bgblack text-offwhite border-gray-600 hover:bg-gray-800"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <motion.div
          className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 pb-4"
          initial="hidden"
          whileInView="visible"
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          variants={{
            hidden: { opacity: 0, y: 24 },
            visible: { opacity: 1, y: 0 },
          }}
        >
          {paginatedProjects.map((data, idx) => (
            <div
              key={idx}
              className="flex flex-col shadow-md shadow-primary container rounded-md mx-auto content-div bg-bgblack"
            >
              <div>
                <img
                  className="w-full h-auto rounded-t"
                  src={data.projectImg}
                  alt=""
                />
              </div>
              <div className="p-4 flex flex-col justify-between h-full">
                <div>
                  <h1 className="text-2xl font-semibold text-offwhite">
                    {data.projectName}
                  </h1>
                  <h2 className="text-lg font-semibold text-offwhite-dark">
                    {data.projectType}
                  </h2>
                  <p className="text-xs italic text-gray-400 pt-1">
                    {data.categories.join(", ")}
                  </p>
                </div>
                <div className="flex flex-wrap gap-2 py-4">
                  {data.projectTag.map((tag, tagIndex) => (
                    <div
                      key={tagIndex}
                      className="flex items-center justify-center border border-primary rounded px-2 py-[2px] font-medium"
                    >
                      {tag}
                    </div>
                  ))}
                </div>
                <div className="flex items-center justify-start gap-3">
                  <button
                    className="inline-flex items-center justify-center w-auto border-2 text-bgblack font-semibold border-primary bg-primary px-4 py-2 my-2 hover:bg-primary-dark hover:scale-105 hover:border-primary-dark duration-300 rounded cursor-pointer"
                    onClick={() => setIndex((currentPage - 1) * itemsPerPage + idx)}
                  >
                    Details
                  </button>
                  <a
                    className="inline-flex items-center justify-start gap-2 w-auto border-2 text-offwhite font-semibold border-primary px-4 py-2 my-2 hover:bg-primary hover:scale-105 hover:text-bgblack duration-300 rounded cursor-pointer"
                    href={data.projectSource}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {iconMap[data.projectRepoIcon]} {data.projectRepo}
                  </a>
                </div>
              </div>
            </div>
          ))}
        </motion.div>

        {/* Pagination Controls */}
        {totalPages > 1 && (
          <div className="flex justify-center items-center gap-4 py-4">
            <button
              disabled={currentPage === 1}
              onClick={() => setCurrentPage((prev) => prev - 1)}
              className={`px-4 py-2 rounded border ${
                currentPage === 1
                  ? "text-gray-500 border-gray-500 cursor-not-allowed"
                  : "text-offwhite border-primary hover:bg-primary hover:text-bgblack"
              }`}
            >
              Previous
            </button>
            <span className="text-offwhite font-medium">
              Page {currentPage} of {totalPages}
            </span>
            <button
              disabled={currentPage === totalPages}
              onClick={() => setCurrentPage((prev) => prev + 1)}
              className={`px-4 py-2 rounded border ${
                currentPage === totalPages
                  ? "text-gray-500 border-gray-500 cursor-not-allowed"
                  : "text-offwhite border-primary hover:bg-primary hover:text-bgblack"
              }`}
            >
              Next
            </button>
          </div>
        )}
      </div>

      {/* Details Modal */}
      {index >= 0 && (
        <div className="fixed top-0 left-0 w-screen h-full flex items-center justify-center bg-black/[0.7] z-20 overflow-x-hidden p-4">
          <div
            onClick={() => setIndex(-1)}
            className="absolute w-full h-full z-30"
          ></div>
          <div className="flex flex-col container rounded-md mx-auto content-div max-w-[600px] bg-bgblack z-40">
            <div className="flex items-center justify-center">
              <img
                className="w-[80%] h-auto shadow-md shadow-primary rounded mt-4"
                src={filteredProjects[index].projectImg}
                alt=""
              />
            </div>
            <div className="p-4 flex flex-col justify-between h-full">
              <div>
                <h1 className="text-2xl font-semibold text-offwhite">
                  {filteredProjects[index].projectName}
                </h1>
                <h2 className="text-lg font-semibold text-offwhite-dark">
                  {filteredProjects[index].projectType}
                </h2>
                <p className="text-xs italic text-gray-400">
                  {filteredProjects[index].categories.join(", ")}
                </p>
                <p className="text-offwhite py-2">
                  {filteredProjects[index].projectDesc}
                </p>
              </div>
              <div className="flex flex-wrap gap-2 py-2">
                {filteredProjects[index].projectTag.map((tag, tagIndex) => (
                  <div
                    key={tagIndex}
                    className="flex items-center justify-center border border-primary rounded px-2 py-[2px] font-medium"
                  >
                    {tag}
                  </div>
                ))}
              </div>
              <div className="flex items-center justify-start gap-3">
                <button
                  className="inline-flex items-center justify-center w-auto border-2 text-bgblack font-semibold border-primary bg-primary px-4 py-2 my-2 hover:bg-primary-dark hover:scale-105 hover:border-primary-dark duration-300 rounded cursor-pointer"
                  onClick={() => setIndex(-1)}
                >
                  Close
                </button>
                <a
                  className="inline-flex items-center justify-start gap-2 w-auto border-2 text-offwhite font-semibold border-primary px-4 py-2 my-2 hover:bg-primary hover:scale-105 hover:text-bgblack duration-300 rounded cursor-pointer"
                  href={filteredProjects[index].projectSource}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {iconMap[filteredProjects[index].projectRepoIcon]}{" "}
                  {filteredProjects[index].projectRepo}
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Projects;