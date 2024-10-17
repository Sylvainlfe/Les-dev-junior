import React from "react";

const ProjectCard = () => {
  return (
    <>
      <div className="flex justify-center items-center">
        <div className="card card-side bg-base-100 shadow-xl flex flex-row items-center max-w-2xl rounded-3xl overflow-hidden">
          <img
            src="https://img.daisyui.com/images/stock/photo-1635805737707-575885ab0820.webp"
            alt="Movie"
          />
          <div className="card-body w-1/2 p-4 bg-base-100">
            <h2 className="card-title">New movie is released!</h2>
            <p>Click the button to watch on Jetflix app.</p>
            <div className="card-actions justify-end">
              <button className="btn btn-primary">Watch</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProjectCard;
