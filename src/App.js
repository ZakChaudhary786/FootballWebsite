import "./App.css";
import lfcBadge from "./images/lfc-img.jpg";
import bills from "./images/bills.jpg";
import rafab from "./images/RafaB.jpg";
import jurgenk from "./images/jurgenk.jpg";
import steveng from "./images/steveng.jpg";
import aarbeloa from "./images/arbeloa.jpg";
import vvd from "./images/vvd.jpg";
import lfcvid from "./videos/lfcvid.mp4";
import lfcvid2 from "./videos/lfcvid2.mp4";
import lfcvid3 from "./videos/lfcvid3.mp4";
import React, { useState, useEffect } from 'react';
import { FutbolIcon, TeamIcon, TrophyIcon, BullseyeIcon, CheckIcon, TwitterIcon, FacebookIcon, InstagramIcon, TiktokIcon} from "./Components.js";

/* Call all sections in order to display on website */
function App() {
  return (
    <div className="App">
      <Navbar />
      <Clock />
      <Title />
      <FeaturesSection />
      <Testimonials />
      <AutoVideo />
      <Quiz />
      <FixtureList />
      <ResultsList />
      <LeagueTable />
      <SquadList />
      <Footer />
    </div>
    
  );
}


/* Clock Function */
function Clock() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const hours = time.getHours().toString().padStart(2, '0');
  const minutes = time.getMinutes().toString().padStart(2, '0');
  const seconds = time.getSeconds().toString().padStart(2, '0');
  const timeString = `${hours}:${minutes}:${seconds}`;

  return (
    <div id="clock">{timeString}</div>
  );
}

/* Determine scrolling status for navbar and uses hash values for fast navigation to section */
function Navbar() {
  const [isScrolling, setIsScrolling] = useState(false);

  const handleScroll = () => {
    const scrollTop = window.pageYOffset;
    if (scrollTop > 0) {
      setIsScrolling(true);
    } else {
      setIsScrolling(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleNavClick = (event) => {
    const target = event.target.hash;
    if (target) {
      window.location.hash = target;
    }
  };


  return (
    <nav className={`navbar navbar-expand-md navbar-dark topNav navbar-fixed ${isScrolling ? "sticky-top scroll" : ""}`}>
      <a className="navbar-brand" id="navTitle" href="/">
        Liverpool FC
      </a>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarTogglerDemo02"
        aria-controls="navbarTogglerDemo02"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
        <ul className="navbar-nav ms-auto">
          <li className="nav-item">
            <a className="nav-link" href="#home" onClick={handleNavClick}>
              Home
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#features" onClick={handleNavClick}>
              Stats
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#testimonials" onClick={handleNavClick}>
              Testimonials
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#tour" onClick={handleNavClick}>
              Tour
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#quiz" onClick={handleNavClick}>
              Quizzes
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#fixtures" onClick={handleNavClick}>
              Fixtures
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#results" onClick={handleNavClick}>
              Results
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#leagueTable" onClick={handleNavClick}>
              Table
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#squad" onClick={handleNavClick}>
              Squad
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#footer" onClick={handleNavClick}>
              Socials
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

/* Retrieves hash value of target when navigation item is pressed */
function Title() {
  const handleNavClick = (event) => {
    const target = event.target.hash;
    if (target) {
      window.location.hash = target;
    }
  };

  return (
    <section id="title">
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-6 col-sm-12 col-xs-12">
            <h1>Welcome to the Liverpool FC Website.</h1>
            <button type="button" className="btn btn-dark btn-lg fixtures-button">
              <a href="#fixtures" onClick={handleNavClick}>
                Fixtures
              </a>
              <FutbolIcon />
            </button>
            <button type="button" className="btn btn-outline-light btn-lg team-button">
              <a href="#squad" onClick={handleNavClick}>
                Squad
              </a>
              <TeamIcon />
            </button>
          </div>
          <div className="col-lg-6 col-sm-12 col-xs-12 col-img">
            <img class="title-img" src={lfcBadge} alt="badge-img" />
          </div>
        </div>
      </div>
    </section>
  );
}

/* Retrieves fontawesome symbols from components.js file functions in order to display them in the section */
function FeaturesSection() {
  return (
    <section id="features">
      <div className="container-fluid">
        <div className="row features">
          <div className="col-lg-4 col-sm-12">
            <TrophyIcon />
            <h3>Trophies Won</h3>
            <p>Liverpool FC has won 68 Trophies, more than any other English Club!</p>
          </div>
          <div className="col-lg-4 col-sm-12">
            <BullseyeIcon />
            <h3>Goals Scored</h3>
            <p>Liverpool FC has scored 10279 goals in 5890 competitive matches registered at <a href = "https://www.lfchistory.net/" target="blank">LFChistory.</a></p>
          </div>
          <div className="col-lg-4 col-sm-12">
            <CheckIcon />
            <h3>Matches Played</h3>
            <p>Liverpool FC have played 5890 competive matches registered at <a href = "https://www.lfchistory.net/" target="blank">LFChistory.</a></p>
          </div>
        </div>
      </div>
    </section>
  );
}

/* Uses useState hook to monitor current testimonial tab and switches to appropriate active tab when the tab is pressed */
function Testimonials() {
  const [activeTab, setActiveTab] = useState(0);

  const testimonials = [
    {
      quote:
        "Some people believe football is a matter of life and death. I can assure you it is much, much more important than that.",
      author: "Bill Shankly - LFC Manager, 1959 - 1974",
      image: bills,
    },
    {
      quote:
        "Before, I said that they were maybe the best supporters in England. Now maybe they are the best supporters in Europe.",
      author: "Rafa Benitez - LFC Manager, 2004 - 2010",
      image: rafab,
    },
    {
      quote:
        "I don’t want to describe myself. Does anyone in this room think I can do wonders. No? I’m a very normal guy.",
      author: "Jurgen Klopp - LFC Manager, 2015 - Present",
      image: jurgenk,
    },
    {
      quote:
        "When I die, don’t bring me to the hospital. Bring me to Anfield. I was born there and will die there.",
      author: "Steven Gerrard - LFC Captain, 2003 - 2015",
      image: steveng,
    },
    {
      quote:
        "The Anfield atmosphere is difficult to explain, you just have to experience it. Every player should try it once in his career.",
      author: "Alvaro Arbeloa - LFC Player, 2007 - 2009",
      image: aarbeloa,
    },
    {
      quote:
        "We need to look at what we have ahead of us and that is more important than looking at someone else. It is the only way forward.",
      author: "Virgil Van Dijk - LFC Player, 2018 - Present",
      image: vvd,
    },
  ];

  const handleTabClick = (index, event) => {
    event.preventDefault();
    setActiveTab(index);
  };

  return (
    <section id="testimonials">
      <ul className="nav nav-tabs">
        {testimonials.map((testimonial, index) => (
          <li className="nav-item" key={index}>
            <a
              className={`nav-link testNav ${index === activeTab ? "active" : ""}`}
              href="#"
              onClick={(event) => handleTabClick(index, event)}
            >
              {testimonial.author}
            </a>
          </li>
        ))}
      </ul>
      <div className="tab-content">
        {testimonials.map((testimonial, index) => (
          <div
            className={`tab-pane ${index === activeTab ? "active" : ""}`}
            key={index}
          >
            <h2 className="testimonialText">"{testimonial.quote}"</h2>
            <img src={testimonial.image} className="testImg" alt={testimonial.author} />
            <em>{testimonial.author}</em>
          </div>
        ))}
      </div>
    </section>
  );
}

/* Simply creates a set of looped muted videos on the website with a description */
function AutoVideo(){
  return (
    <section id = "tour">
      <h2 id = "videoHeader">Anfield and Training Grounds</h2>
      <div className="container-fluid autovideo1">
        <div className="row video">
          <div className="col-lg-6 col-sm-12">
            <video className = "bgvid" src = {lfcvid} autoPlay loop muted/>
          </div>
          <div className="col-lg-6 col-sm-12">
            <h3 id="vidText">Look here for a virtualised tour of the stadium with 139 Years of footballing history, Anfield!
            Anfield was built in 1884, but got initially rented by Everton FC. The first game at the ground, on the 28th of September 1884, saw Everton beat Earlstown 5-0.
            In 1891, Everton moved out of Anfield after a dispute over the rent, and one year later newly-founded Liverpool moved in. Their first match at Anfield was a 7-1 win over Rotherham.
            Anfield underwent several developments in the late 19th and early 20th century, among which in 1895 the construction of a new main stand designed by Archibal Leitch and a decade later the construction of the famous Spion Kop.
            The ground remained more or less the same for the next two decades until the Kop got expanded in 1928. Once completed, it could hold about 30,000 fans.
            Anfield set its record attendances in 1958 when 61,905 people attended a match between Liverpool and Wolverhampton Wanderers. Further improvements were made between 1963 and 1973, when the old Main Stand got demolished and replaced with a new one.</h3>
          </div>  
        </div>
      </div>

      <div className="container-fluid autovideo1">
        <div className="row video">
          <div className="col-lg-6 col-sm-12">
            <video className = "bgvid" src = {lfcvid2} autoPlay loop muted/>
          </div>
          <div className="col-lg-6 col-sm-12">
            <h3 id="vidText">Liverpool FC's first-team historically had been based at the Melwood Training Facility in West Derby since acquiring the site in 1959. In 2001, the facility underwent extensive modernisation under the management of Gérard Houllier, however by 2017 it was determined that Melwood did not have enough space to house the growing backroom teams of modern football clubs, and had been overtaken by the newer, state-of-the-art facilities of Liverpool's rivals
            Furthermore, upon his arrival at the club, first-team manager Jürgen Klopp grew frustrated at the 5-mile geographical distance between the first-team and the club's younger players, who trained at the Academy in Kirkby
            As there was no further space to expand Melwood, in 2017 Liverpool announced that first-team operations would be permanently relocated to the Kirkby site, and that a new £50 million building would be constructed for the first-team. Construction started in September 2018, with the aim of moving in by summer 2020 ahead of the 2020-21 season
            Construction was eventually completed in October 2020, having been delayed due to the COVID-19 pandemic. The first-team moved into the facility in November 2020.[1] Players such as Lucas Leiva, Alisson, and Jamie Carragher all paid tribute to Melwood as they moved to Kirkby.
</h3>
          </div>  
        </div>
      </div>

      <div className="container-fluid autovideo1">
        <div className="row video">
          <div className="col-lg-6 col-sm-12">
            <video className = "bgvid" src = {lfcvid3} autoPlay loop muted/>
          </div>
          <div className="col-lg-6 col-sm-12">
            <h3 id="vidText">Liverpool moved into the facility in the 1950s, after previously training on the Anfield grass. This was having a detrimental effect on the pitch and a decision was eventually made to take over a few football pitches in the West Derby area of the city.
            However, by the end of the decade, the training base had significantly deteriorated. When manager Bill Shankly arrived in 1959, the three playing fields and adjoining pavilion had not been maintained and the pitches were overgrown. In his autobiography, Shankly described it as a “sorry wilderness”. On seeing what looked like two huge bomb craters in one of the playing surfaces, he asked “have the Germans been here?
            Shankly and his staff subsequently sought to transform Melwood into a top-class training facility. He introduced the five-a-side games that defined his "pass and move, keep it simple", philosophy. Players would meet and change for training at Anfield and then board the team bus for the short trip to Melwood. After training, they would get the bus back to Anfield to shower and change and get a bite to eat. Shankly thus ensured all his players had warmed down correctly and he would keep his players free from injury.
            Indeed, in the 1965–66 season, Liverpool finished as champions using just 14 players, and two of those only played a handful of games.</h3>
          </div>  
        </div>
      </div>
    </section>
    
  )

}

/* Uses useState hook to set current status of question and displays the score once completed */
function Quiz() {
  const questions = [
    {
      question: "When was Liverpool Football club initially founded?",
      options: ["1892", "1902", "1912", "1922"],
      answer: "1892"
    },
    {
      question:
        "Anfield is the 7th largest football stadium in England. How many supporters can it seat at full capacity?",
      options: ["45,000", "50,000", "55,000", "60,000"],
      answer: "60,000"
    },
    {
      question:
        "Who played a record 417 consecutive games for Liverpool?",
      options: ["Steven Gerrard", "Jamie Carragher", "Phil Neal", "Ray Clemence"],
      answer: "Phil Neal"
    },
    {
      question: "How many league titles have Liverpool won in total?",
      options: ["15", "18", "20", "23"],
      answer: "19"
    },
    {
      question:
        "Who was Jurgen Klopp's first signing as Liverpool manager in January, 2016?",
      options: ["Sadio Mane", "Joel Matip", "Loris Karius", "Marko Grujic"],
      answer: "Marko Grujic"
    },
    {
      question: "Which of the following is Liverpool FC's famous club anthem?",
      options: ["You'll Never Walk Alone", "Blue Moon", "Glory Glory Man United", "Sweet Caroline"],
      answer: "You'll Never Walk Alone"
    },
    {
      question:
        "Which former player briefly managed the club in 2011?",
      options: ["Kenny Dalglish", "Steven Gerrard", "Jamie Carragher", "Robbie Fowler"],
      answer: "Kenny Dalglish"
    },
    {
      question:
        "What are the Anfield's terraces often referred to as by fans?",
      options: ["Kop End", "Main Stand", "Anfield Road End", "Centenary Stand"],
      answer: "Kop End"
    }
  ];

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);

  const handleAnswerOptionClick = (answer) => {
    if (answer === questions[currentQuestion].answer) {
      setScore(score + 1); /*Increments score if answer is correct */
    }

    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setShowScore(true); /*Displays the score once the questions are finished */
    }
  };

  return (
    <section id = "quiz">
    <div className="container-fluid">
      <h3 id = "quizHeader">Try the quiz here to test your knowledge!</h3>
      {showScore ? (
        <div className="score-section">
          You scored {score} out of {questions.length}
        </div>
      ) : (
        <>
          <div className="questionSection">
            <div className="questionCount">
              <span>Question {currentQuestion + 1}</span>/{questions.length} 
            </div>
            <div className="questionText">
              {questions[currentQuestion].question}
            </div>
          </div>
          <div className="answerSection">
            {questions[currentQuestion].options.map((option) => (
              <button onClick={() => handleAnswerOptionClick(option)}>
                {option}
              </button>
            ))}
          </div>
        </>
      )}
    </div>
    </section>
  );
}

/* Uses cors-anywhere as a reverse proxy to bypass CORS restriction preventing fetching data from the api, this function utilises a useEffect hook to trigger the function only when the component itself is rendered */
function FixtureList() {
  const [fixtures, setFixtures] = useState([]);

  const fetchFixtures = async () => {
    const response = await fetch(
      "https://cors-anywhere.herokuapp.com/https://api.football-data.org/v2/teams/64/matches?status=SCHEDULED",
      {
        headers: {
          "X-Auth-Token": "fa3b47eca8bd4d95b8db977ab29e3a7c",
          "Origin": "http://localhost:3000",
          "Content-Type": "application/json",
        },
        method: "GET",
        mode: "cors",
      }
    );
    const data = await response.json();
    setFixtures(data.matches);
  };

  useEffect(() => {
    fetchFixtures();
  }, []);

  return (
    <section id = "fixtures">
    <div className = "container-fluid">
    <h3 id = "fixturesHeader">Upcoming Fixtures</h3>
    {fixtures.slice(0, 5).map((fixture) => (
      <div key={fixture.id} id = "singleFixtures">
        <p>{fixture.homeTeam.name} vs {fixture.awayTeam.name}</p>
        <p>Date: {fixture.utcDate}</p>
        </div>
      ))}
    </div>
    </section>
  );
}

/* Same as FixtureList() function but fetches the results */
function ResultsList() {
  const [results, setResults] = useState([]);

  const fetchResults = async () => {
    const response = await fetch(
      "https://cors-anywhere.herokuapp.com/https://api.football-data.org/v2/teams/64/matches?status=FINISHED",
      {
        headers: {
          "X-Auth-Token": "fa3b47eca8bd4d95b8db977ab29e3a7c",
          "Origin": "http://localhost:3000",
          "Content-Type": "application/json",
        },
        method: "GET",
        mode: "cors",
      }
    );
    const data = await response.json();
    const sortedResults = data.matches.sort((a, b) => new Date(b.utcDate) - new Date(a.utcDate));
    setResults(sortedResults);
  };

  useEffect(() => {
    fetchResults();
  }, []);

  return (
    <section id="results">
      <div className="container-fluid">
        <h3 id="resultsHeader">Past Results</h3>
        {results.slice(0, 5).map((result) => (
          <div key={result.id} id="singleResults">
            <p>{result.homeTeam.name} {result.score.fullTime.homeTeam} - {result.score.fullTime.awayTeam} {result.awayTeam.name}</p>
            <p>Date: {result.utcDate}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

/* Fetches the current live premier league table and displays the results in a table */
function LeagueTable() {
  const [standings, setStandings] = useState([]);

  const fetchStandings = async () => {
    const response = await fetch(
      "https://cors-anywhere.herokuapp.com/https://api.football-data.org/v2/competitions/PL/standings",
      {
        headers: {
          "X-Auth-Token": "fa3b47eca8bd4d95b8db977ab29e3a7c",
          "Origin": "http://localhost:3000",
          "Content-Type": "application/json",
        },
        method: "GET",
        mode: "cors",
      }
    );
    const data = await response.json();
    setStandings(data.standings[0].table);
  };

  useEffect(() => {
    fetchStandings();
  }, []);

  return (
    <section id="leagueTable">
      <div className="container-fluid">
        <h3 id = "leagueHeader">Premier League Table</h3>
        <table className="table">
          <thead id = "premHeader">
            <tr>
              <th>Position</th>
              <th>Team</th>
              <th>Played</th>
              <th>Won</th>
              <th>Drawn</th>
              <th>Lost</th>
              <th>Points</th>
            </tr>
          </thead>
          <tbody id = "premTeams">
            {standings.map((team) => (
              <tr key={team.team.id}>
                <td>{team.position}</td>
                <td>{team.team.name}</td>
                <td>{team.playedGames}</td>
                <td>{team.won}</td>
                <td>{team.draw}</td>
                <td>{team.lost}</td>
                <td>{team.points}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}

/* Fetches a list containing all the current squad members but also implemented a categorical tab section that puts the active tab as the position selected */
function SquadList() {
  const [players, setPlayers] = useState([]);
  const [selectedPosition, setSelectedPosition] = useState("all");

  const fetchPlayers = async () => {
    const response = await fetch(
      "https://cors-anywhere.herokuapp.com/https://api.football-data.org/v2/teams/64",
      {
        headers: {
          "X-Auth-Token": "fa3b47eca8bd4d95b8db977ab29e3a7c",
          "Origin": "http://localhost:3000",
          "Content-Type": "application/json",
        },
        method: "GET",
        mode: "cors",
      }
    );
    const data = await response.json();
    setPlayers(data.squad);
  };

  useEffect(() => {
    fetchPlayers();
  }, []);

  const filterPlayersByPosition = (position) => {
    if (position === "all") {
      return players;
    }
    return players.filter((player) => player.position === position);
  };

  const renderPlayerTable = (position) => {
    const filteredPlayers = filterPlayersByPosition(position);
    return (
      <table className="table table-striped">
        <thead>
          <tr>
            <th>Name</th>
            <th>Position</th>
            <th>Nationality</th>
          </tr>
        </thead>
        <tbody>
          {filteredPlayers.map((player) => (
            <tr key={player.id}>
              <td>{player.name}</td>
              <td>{player.position}</td>
              <td>{player.nationality}</td>
            </tr>
          ))}
        </tbody>
      </table>
    );
  };

  return (
    <section id="squad">
      <div className="container-fluid">
        <ul className="nav nav-tabs">
          <li
            className={`nav-item ${selectedPosition === "all" ? "active" : ""}`}
            onClick={() => setSelectedPosition("all")}
          >
            <a href="#all" className="nav-link">All</a>
          </li>
          <li
            className={`nav-item ${
              selectedPosition === "Attacker" ? "active" : ""
            }`}
            onClick={() => setSelectedPosition("Offence")}
          >
            <a href="#attacker" className="nav-link">Attackers</a>
          </li>
          <li
            className={`nav-item ${
              selectedPosition === "Midfielder" ? "active" : ""
            }`}
            onClick={() => setSelectedPosition("Midfield")}
          >
            <a href="#midfielder" className="nav-link">Midfielders</a>
          </li>
          <li
            className={`nav-item ${
              selectedPosition === "Defender" ? "active" : ""
            }`}
            onClick={() => setSelectedPosition("Defence")}
          >
            <a href="#defender" className="nav-link">Defenders</a>
          </li>
          <li
            className={`nav-item ${
              selectedPosition === "Goalkeeper" ? "active" : ""
            }`}
            onClick={() => setSelectedPosition("Goalkeeper")}
          >
            <a href="#goalkeeper" className="nav-link">Goalkeepers</a>
          </li>
        </ul>
        {renderPlayerTable(selectedPosition)}
      </div>
    </section>
  );
}

/* Uses components.js defined functions for icons to display all of Liverpool FCs social media pages */
function Footer(){
  const handleClick = (url) => {
    window.open(url, "_blank");
  };
  return (
    <section id="footer">
      <div className="container-fluid">
        <h3 id = "footerHeader">Click on an Icon to go to our social media sites!</h3>
        <FacebookIcon onClick={() => handleClick("https://www.facebook.com/LiverpoolFC/")} />
        <InstagramIcon onClick={() => handleClick("https://www.instagram.com/liverpoolfc/")} />
        <TwitterIcon onClick={() => handleClick("https://twitter.com/LFC")} />
        <TiktokIcon onClick={() => handleClick("https://www.tiktok.com/@liverpoolfc")} />
        <p id="copyright">
          @Copyright Zak Chaudhary
        </p>
      </div>
    </section>
  );
}



export default App;
