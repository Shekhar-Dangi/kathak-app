import React from "react";
import "./Header.css";
import "./Body.css";
import List from "./List";
import MainNavbar from "./MainNavbar";

const Taals = () => {
  return (
    <>
      <div className="header">
        <h1>TAALS</h1>
      </div>
      <MainNavbar />
      <main>
        <h2 className="heading">What are Taals?</h2>
        <p className="paragraph">
          Heavily used in Kathak dance, taals are various patterns of beats.
          These taals are also used in other classical Indian dance forms as
          well as classical Indian singing (Carnatic singing).{" "}
        </p>
        <h2 className="heading">Asama vs Sama Bibhag Taals</h2>
        <p className="paragraph">
          Asama Bibhag Taals have taals of unequal bibhag division whereas Sama
          Bibhag taals have taals of equal divisions. For instance(Jhaptaal -
          Asama vs Teentaal - Sama)
        </p>
        <h2 className="heading">Various Taals</h2>
  
        <List
          heading="Dadra Taal"
          list={[
            "6 matras",
            "2 Bibhags of 3-3 matras",
            "1 Taali and 1 Khali",
            "Taali at 1st matra(som)",
            "Khali at 4th matra",
            "Sama Bibhag Taal",
            "Theka: Dha Dhi Na / Na Dhi Na / Dha (x 0 x)",
          ]}
        />
        <List
          heading="Rupak Taal"
          list={[
            "7 matras",
            "3 Bibhags of 3-2-2 matras",
            "1 Taali and 3 Khalis",
            "Starts with Khali at 1st matra(doesn’t have som)",
            "Taalis are at 4th and 6th matra",
            "Asama Bibhag Taal",
            "Theka: Ti Ti Na / Dhi Na / Dhi Na / Ti (0 2 3 0)",
          ]}
        />
        <List
          heading="Tewra Taal"
          list={[
            "7 matras",
            "3 Bibhags of 3-2-2 matras",
            "3 Taalis and 0 Khalis",
            "Taalis are at 1st, 4th, and 6th matras",
            "Asama Bibhag Taal",
            "Theka: Dha Den Ta / Titah Kata / Gadi Ghene / Dha (x 2 3 x)",
          ]}
        />
        <List
          heading="Kaharba Taal
"
          list={[
            "8 matras",
            "2 Bibhags of 4-4 matras",
            "1 Taali, 1 Khali",
            "Taali at 1st matra(som)",
            "Khali at 5th matra",
            "Sama Bibhag Taal",
            "Theka: Dha Ge Teh Te / Na Ka Dhi Na / Dha (x 0 x)",
          ]}
        />
      </main>
    </>
  );
};

export default Taals;
