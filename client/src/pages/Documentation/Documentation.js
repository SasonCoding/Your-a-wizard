import React from "react";
import { Link } from "react-router-dom";
import BubbleEffect from "../../specialEffects/Bubbles/BubbleEffect";

const Documentation = () => {
  return (
    <>
    <div className="container pb-3">
      <div className="row justify-content-center px-5">
        <div className="col-lg-11 col-md-10 col-sm-12">
          <div className="card magic-card text-center">
            <div className="card-body bg-black">
              <h1>Harry Potter</h1>{" "}
              {/*TODO: Add styles for this title for example: Give the title a color context that relates to the main colors of the site.*/}
              <p>
                Harry Potter is a series of seven fantasy novels written by
                British author J. K. Rowling. The novels chronicle the lives of
                a young wizard, Harry Potter, and his friends Hermione Granger
                and Ron Weasley, all of whom are students at Hogwarts School of
                Witchcraft and Wizardry. The main story arc concerns Harry's
                struggle against Lord Voldemort, a dark wizard who intends to
                become immortal, overthrow the wizard governing body known as
                the Ministry of Magic and subjugate all wizards and Muggles
                (non-magical people).
              </p>
              <p>
                The series was originally published in English by Bloomsbury in
                the United Kingdom and Scholastic Press in the United States.
                All versions around the world are printed by Grafica Veneta in
                Italy. A series of many genres, including fantasy, drama, coming
                of age, and the British school story (which includes elements of
                mystery, thriller, adventure, horror, and romance), the world of
                Harry Potter explores numerous themes and includes many cultural
                meanings and references. According to Rowling, the main theme is
                death. Other major themes in the series include prejudice,
                corruption, and madness.
              </p>
              <p>
                Since the release of the first novel, Harry Potter and the
                Philosopher's Stone, on 26 June 1997, the books have found
                immense popularity, positive reviews, and commercial success
                worldwide. They have attracted a wide adult audience as well as
                younger readers and are often considered cornerstones of modern
                young adult literature. As of February 2018, the books have sold
                more than 500 million copies worldwide, making them the
                best-selling book series in history, and have been translated
                into eighty languages. The last four books consecutively set
                records as the fastest-selling books in history, with the final
                instalment selling roughly 2.7 million copies in the United
                Kingdom and 8.3 million copies in the United States within
                twenty-four hours of its release.
              </p>
              <p>
                The original seven books were adapted into an eight-part
                namesake film series by Warner Bros. Pictures. In 2016, the
                total value of the Harry Potter franchise was estimated at $25
                billion, making Harry Potter one of the highest-grossing media
                franchises of all time. Harry Potter and the Cursed Child is a
                play based on a story co-written by Rowling.
              </p>
              <p>
                The success of the books and films has allowed the Harry Potter
                franchise to expand with numerous derivative works, a travelling
                exhibition that premiered in Chicago in 2009, a studio tour in
                London that opened in 2012, a digital platform on which J. K.
                Rowling updates the series with new information and insight, and
                a pentalogy of spin-off films premiering in November 2016 with
                Fantastic Beasts and Where to Find Them, among many other
                developments. Themed attractions, collectively known as The
                Wizarding World of Harry Potter, have been built at several
                Universal Parks & Resorts amusement parks around the world.
              </p>
              <br></br>
              <b>For more details follow the links below:</b> {/*TODO: Add styles for this sentence.*/}
              <br></br>
              <div className="pt-2">
              <Link to="/books"><button className="golden-button m-4">
                  Books Page
                </button>
                </Link>
                <Link to="/characters"><button className="golden-button m-4">
                  Characters Page
                </button>
                </Link>
                </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <BubbleEffect />
    </>
  );
};

export default Documentation;
