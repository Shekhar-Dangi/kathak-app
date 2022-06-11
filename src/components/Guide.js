import React from "react";
import List from "./List";

const Guide = ({ id }) => {
  if (id === 0) {
    return (
      <p className="paragraph">
        This exam is not too difficult as it is the first year <br />
        This is the “ghunghroo exam” where you earn your ghunghroos
        <br />
        You just need to practice singing and dancing Teentaal’s Layakari
        <br />
        Reminder - Teentaal’s Theka: <br />
        Dha Dhin Dhin Dha / Dha Dhin Dhin Dha / Na Tin Tin Ta / Tehte Dhin Dhin
        Dha / Dha
      </p>
    );
  } else if (id == 1)
    return (
      <p className="paragraph">
        Everything you MUST KNOW for your exam
        <List
          list={[
            "Your taal of choice(that year’s taal)",
            "Everything from previous years",
            "How to sing boles",
            "All 8 Classical Indian Dance forms",
            "Brief history of Kathak",
            "Brief understanding of Gharanas",
            "Brief explanation of Kathak costume",
            `Basic definitions:} `,
          ]}
        />
        - Tora <br />
        - Tukra <br />
        - Taal <br />
        - Avartan <br />
      </p>
    );
  else if (id == 2) {
    return (
      <p className="paragraph">
        <ul>
          <li>Your taal of choice(that year’s taal)</li>
          <li>Everything from previous years</li>
          <li>How to sing boles</li>
          <li>All 8 Classical Indian Dance forms</li>
          <li>History of Kathak</li>
          <li>Comprehensive understanding of Gharanas</li>
          <li>Comprehensive explanation of Kathak costume</li>
          <li>Saraswati Stuti</li>
          <li>Gaat</li>
          <li>
            More Definitions
            <ul>
              <li>Bibhag</li>
              <li>Matra Som</li>
            </ul>
          </li>
        </ul>
      </p>
    );
  } else if (id == 3) {
    return (
      <p className="paragraph">
        Everything you MUST KNOW for your exam
        <ul>
          <li>Your taal of choice(that year’s taal)</li>
          <li>Everything from previous years</li>
          <li>How to sing boles</li>
          <li>
            More Definitions
            <ul>
              <li>Dipalli Paran</li>
              <li>Tatkar</li>
              <li>Salami vs Aamad</li>
              <li>Paran Jodi Aamad vs Paran</li>
              <li>Thaat</li>
            </ul>
          </li>
        </ul>
      </p>
    );
  } else if (id == 4) {
    return (
      <p className="paragraph">
        Everything you MUST KNOW for your exam
        <ul>
          <li>Your taal of choice(that year’s taal)</li>
          <li>Everything from previous years</li>
          <li>How to sing boles</li>
          <li>
            More Definitions :
            <ul>
              <li>Padant</li>
              <li>Natavari Bole</li>
              <li>Baat</li>
              <li>Kavitangi</li>
            </ul>
          </li>

          <li>
            More complex dances :
            <ul>
              <li>
                <li>Be ready to explain meaning behind dances</li>
              </li>
            </ul>
          </li>
        </ul>
      </p>
    );
  } else if (id == 5) {
    return (
      <p className="paragraph">
        Everything you MUST KNOW for your exam
        <ul>
          <li>Your taal of choice(that year’s taal)</li>
          <li>Everything from previous years</li>
          <li>How to sing boles</li>
          <li>
            First year of hand-written exam!
            <ul>
              <li>3 hours long</li>
            </ul>
          </li>
          <li>Taal questions</li>
          <li>Makhan Chori + Kaliyadaman Stories</li>
          <li>All 12 Taals</li>
          <li>
            History of Kathak
            <ul>
              <li>
                Differentiate between Kathak Nritya and Natavari Nritya and
                determine which is more ancient(opinion){" "}
              </li>
            </ul>
          </li>
          <li>
            Definitions
            <ul>
              <li>Kataksha</li>
              <li>Padant</li>
              <li>Ada</li>
              <li>Palta</li>
              <li>Kasak-Masak</li>
              <li>Gaatbhav</li>
              <li>Ghumariya</li>
              <li>Pataka</li>
            </ul>
          </li>
        </ul>
      </p>
    );
  }
};
export default Guide;
