import React from "react";
import Guide from "./Guide";
import List from "./List";
import MainNavbar from "./MainNavbar";
import Modal from "./Modal";

const Exam = () => {
  return (
    <>
      <div className="header">
        <h1>EXAM PREPARATION</h1>
      </div>
      <MainNavbar />
      <main>
        <h2 className="heading">How to Prep for an Exam?</h2>
        <p className="paragraph">
          Studying for exams is always stressful, but it becomes even harder
          when there is as much content as there is in Kathak. Even a Part
          3(lower level) exam, has up to three years of content. However, don’t
          fret. You can utilize the resources in this website to study for your
          upcoming exam or even just keep your knowledge of Kathak terms fresh!
        </p>
        <h2 className="heading">Study Guides</h2>
        <p className="paragraph">
          Review the created study guides for must-know concepts to excell in
          your upcoming exam!
        </p>
        <Modal id={0} Component={Guide} />
        <Modal id={1} Component={Guide} />
        <Modal id={2} Component={Guide} />
        <Modal id={3} Component={Guide} />
        <Modal id={4} Component={Guide} />
        <Modal id={5} Component={Guide} />
        <Modal id={6} Component={Guide} />
        <List
          list={[
            "Part 1 Study Guide",
            "Part 2 Study Guide",
            "Part 3 Study Guide",
            "Junior Diploma Study Guide(1st year)",
            "Senior Diploma 1 Study Guide(2nd year)",
            "Senior Diploma 2 Study Guide(3rd year)",
            "Visharad 1 Study Guide(4th year)]}",
          ]}
          linked={[0, 1, 2, 3, 4, 5, 6]}
        />
      </main>
    </>
  );
};

export default Exam;
