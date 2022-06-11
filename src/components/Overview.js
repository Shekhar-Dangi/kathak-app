import React from "react";
import "./Header.css";
import "./Body.css";
import MainNavbar from "./MainNavbar";

const Overview = () => {
  return (
    <div>
      <div className="header">
        <h1>OVERVIEW OF KATHAK</h1>
      </div>
      <MainNavbar />
      <main>
        <h2 className="heading">HISTORY OF KATHAK</h2>
        <p className="paragraph">
          The story of Kathak begins in ancient times with the performances of
          professional story-tellers called kathakas who recited or sang stories
          from epics and mythology with some elements of dance. The traditions
          of the kathakas were hereditary, and dances passed from generation to
          generation. There are literary references from the third and fourth
          centuries BC which refer to these kathakas.
        </p>
        <h2 className="heading">GENERAL KATHAK TIMELINE</h2>
        <p className="paragraph">
          <strong>Bhakti Era</strong> - Kathak was very religious at this time;
          it was mostly used to depict the lives of holy figures like Krishna
          and Radha <br />
          <strong>Persian & Mughal Influence</strong> - Kathak got its its
          distinctive features here. Rather than being strictly religious, it
          began to take a role in entertainment. There was lots of distinctive
          footwork, sharp spins, as well as beautiful emotions and expressions
          within the dances <br />
          <strong>During the Raj</strong> - Kathak began to decline in this time
          as British rule began in India. The British administrators thought
          Kathak was unruly and had seductive motation. Rise of Kathak - Kathak
          began to rise under Pt. Thakyr Prasad Ji. It was reintroduced under
          the name of Nathawari Nritya. <br />
          <strong>Today</strong> - Kathak is now regonized as one of the 8
          classical dance forms of India. Expressive motion, rythmic accuracy,
          graceful turning, posied stances, technical clarity, hand
          gestures(mudras), and subtle expression(bhava-abhinaya) are important
          facets of modern Kathak
        </p>
      </main>
    </div>
  );
};

export default Overview;
