import React from "react";
import "./Header.css";
import "./Body.css";
import MainNavbar from "./MainNavbar";
import List from "./List";
import Jhaptaal from "./ModalContent/Jhaptaal";
import Teentaal from "./ModalContent/Teentaal";
import Modal from "./Modal";
import Ektaal from "./ModalContent/Ektaal";
import Slider from "./Slider";

const Practical = () => {
  return (
    <>
      <div className="header">
        <h1>PRACTICAL</h1>
      </div>
      <MainNavbar />
      <main>
        <p className="paragraph">
          <strong>Boles</strong>: First and foremost, lets adress what a bole
          is. A bole is essentially a complete composition of dance. These boles
          can be done on various taals(group of beats), and they also very in
          length/duration. <br />
          View the links of sample boles to gain a deeper understanding of what
          a bole is(written & danced)
        </p>
        <Modal id={0} Component={Jhaptaal} />
        <Modal id={1} Component={Slider} name="teental" />
        <Modal id={2} Component={Teentaal} />
        <Modal id={3} Component={Slider} name="jhaptaal" />
        <Modal id={4} Component={Ektaal} />
        <Modal id={5} Component={Slider} name="ektaal" />

        <List
          heading="Beginner"
          list={[
            "Bole Chart on Teentaal",
            "Specific Handwritten Boles from Teentaal Bole Chart",
          ]}
          linked={[0, 1]}
        />
        <List
          heading="Intermediate"
          list={[
            "Bole Chart on Jhaptaal",
            "Specific Handwritten Boles from Jhaptaal Bole Chart",
          ]}
          linked={[2, 3]}
        />
        <List
          heading="Advanced"
          list={[
            "Bole Chart on Ektaal",
            "Specific Handwritten Boles from Ektaal Bole Chart",
          ]}
          linked={[4, 5]}
        />
      </main>
    </>
  );
};

export default Practical;
