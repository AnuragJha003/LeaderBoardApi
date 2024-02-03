const express = require('express');
const app = express();
const PORT = 3000;
const cors = require("cors");


const corsOptions = {
  origin: "*",
  credentials: true, //access-control-allow-credentials:true
  optionSuccessStatus: 200,
};

app.use(cors(corsOptions));
app.set("trust proxy", 1);

const leaderboardData = {
    "show": "false",
    "teams": [
      {
        "rank": 1,
        "name": "Square",
        "links": {
          "github": "https://github.com/NayakPenguin/Vision-Bridge",
          "youtube": "https://www.youtube.com/watch?v=xbHSOsyJJDI"
        },
        "members": [
          {
            "username": "@NayakPenguin",
            "github": "https://github.com/NayakPenguin"
          },
          {
            "username": "@OmMittal7",
            "github": "https://github.com/OmMittal7"
          },
          {
            "username": "@AnuragJha2003",
            "github": "https://github.com/AnuragJha2003"
          },
          {
            "username": "@PriyamSass",
            "github": "https://github.com/PriyamSass"
          }
        ],
        "score": 85.00
      },
      {
        "rank": 2,
        "name": "Team Beta",
        "links": {
          "github": "https://github.com/team-beta",
          "youtube": "https://www.youtube.com/team-beta"
        },
        "members": [
          {
            "username": "@BetaUser1",
            "github": "https://github.com/BetaUser1"
          },
          {
            "username": "@BetaUser2",
            "github": "https://github.com/BetaUser2"
          },
          {
            "username": "@BetaUser3",
            "github": "https://github.com/BetaUser3"
          },
          {
            "username": "@BetaUser4",
            "github": "https://github.com/BetaUser4"
          }
        ],
        "score": 88.75
      },
      {
        "rank": 3,
        "name": "Team Gamma",
        "links": {
          "github": "https://github.com/team-gamma",
          "youtube": "https://www.youtube.com/team-gamma"
        },
        "members": [
          {
            "username": "@GammaUser1",
            "github": "https://github.com/GammaUser1"
          },
          {
            "username": "@GammaUser2",
            "github": "https://github.com/GammaUser2"
          },
          {
            "username": "@GammaUser3",
            "github": "https://github.com/GammaUser3"
          },
          {
            "username": "@GammaUser4",
            "github": "https://github.com/GammaUser4"
          }
        ],
        "score": 85.25
      },
      {
        "rank": 4,
        "name": "Team Delta",
        "links": {
          "github": "https://github.com/team-delta",
          "youtube": "https://www.youtube.com/team-delta"
        },
        "members": [
          {
            "username": "@DeltaUser1",
            "github": "https://github.com/DeltaUser1"
          },
          {
            "username": "@DeltaUser2",
            "github": "https://github.com/DeltaUser2"
          },
          {
            "username": "@DeltaUser3",
            "github": "https://github.com/DeltaUser3"
          },
          {
            "username": "@DeltaUser4",
            "github": "https://github.com/DeltaUser4"
          }
        ],
        "score": 82.00
      },
      {
        "rank": 5,
        "name": "Team Epsilon",
        "links": {
          "github": "https://github.com/team-epsilon",
          "youtube": "https://www.youtube.com/team-epsilon"
        },
        "members": [
          {
            "username": "@EpsilonUser1",
            "github": "https://github.com/EpsilonUser1"
          },
          {
            "username": "@EpsilonUser2",
            "github": "https://github.com/EpsilonUser2"
          },
          {
            "username": "@EpsilonUser3",
            "github": "https://github.com/EpsilonUser3"
          },
          {
            "username": "@EpsilonUser4",
            "github": "https://github.com/EpsilonUser4"
          }
        ],
        "score": 78.50
      },
      {
        "rank": 6,
        "name": "Team Beta",
        "links": {
          "github": "https://github.com/team-beta",
          "youtube": "https://www.youtube.com/team-beta"
        },
        "members": [
          {
            "username": "@BetaUser1",
            "github": "https://github.com/BetaUser1"
          },
          {
            "username": "@BetaUser2",
            "github": "https://github.com/BetaUser2"
          },
          {
            "username": "@BetaUser3",
            "github": "https://github.com/BetaUser3"
          },
          {
            "username": "@BetaUser4",
            "github": "https://github.com/BetaUser4"
          }
        ],
        "score": 88.75
      },
      {
        "rank": 7,
        "name": "Team Gamma",
        "links": {
          "github": "https://github.com/team-gamma",
          "youtube": "https://www.youtube.com/team-gamma"
        },
        "members": [
          {
            "username": "@GammaUser1",
            "github": "https://github.com/GammaUser1"
          },
          {
            "username": "@GammaUser2",
            "github": "https://github.com/GammaUser2"
          },
          {
            "username": "@GammaUser3",
            "github": "https://github.com/GammaUser3"
          },
          {
            "username": "@GammaUser4",
            "github": "https://github.com/GammaUser4"
          }
        ],
        "score": 85.25
      },
      {
        "rank": 8,
        "name": "Team Delta",
        "links": {
          "github": "https://github.com/team-delta",
          "youtube": "https://www.youtube.com/team-delta"
        },
        "members": [
          {
            "username": "@DeltaUser1",
            "github": "https://github.com/DeltaUser1"
          },
          {
            "username": "@DeltaUser2",
            "github": "https://github.com/DeltaUser2"
          },
          {
            "username": "@DeltaUser3",
            "github": "https://github.com/DeltaUser3"
          },
          {
            "username": "@DeltaUser4",
            "github": "https://github.com/DeltaUser4"
          }
        ],
        "score": 82.00
      },
      {
        "rank": 9,
        "name": "Team Epsilon",
        "links": {
          "github": "https://github.com/team-epsilon",
          "youtube": "https://www.youtube.com/team-epsilon"
        },
        "members": [
          {
            "username": "@EpsilonUser1",
            "github": "https://github.com/EpsilonUser1"
          },
          {
            "username": "@EpsilonUser2",
            "github": "https://github.com/EpsilonUser2"
          },
          {
            "username": "@EpsilonUser3",
            "github": "https://github.com/EpsilonUser3"
          },
          {
            "username": "@EpsilonUser4",
            "github": "https://github.com/EpsilonUser4"
          }
        ],
        "score": 78.50
      },
      {
        "rank": 10,
        "name": "Team Beta",
        "links": {
          "github": "https://github.com/team-beta",
          "youtube": "https://www.youtube.com/team-beta"
        },
        "members": [
          {
            "username": "@BetaUser1",
            "github": "https://github.com/BetaUser1"
          },
          {
            "username": "@BetaUser2",
            "github": "https://github.com/BetaUser2"
          },
          {
            "username": "@BetaUser3",
            "github": "https://github.com/BetaUser3"
          },
          {
            "username": "@BetaUser4",
            "github": "https://github.com/BetaUser4"
          }
        ],
        "score": 88.75
      },
    ]
  };
  // Route to get all leaderboard data
  app.get('/leaderboard/pre', (req, res) => {
    // Check the 'show' attribute
    /*if (leaderboardData.show === 'true') {
      // Display the leaderboard data if 'show' is 'true'
      const top10 = leaderboardData.teams.slice(0, 10);
      res.json({ teams: top10 });
      //res.json(leaderboardData);
    } else {
      // Send a custom response if 'show' is 'false'
      res.json({ message: 'Leaderboard data is not available.' });
    }*/
    res.json(leaderboardData);
  });
  //Routes to get the top3 team 
  app.get('/leaderboard/final', (req, res) => {
    // Check the 'show' attribute
    /*if (leaderboardData.show === 'true') {
      // Send the top 3 teams if 'show' is 'true'
      const top3 = leaderboardData.teams.slice(0, 3);
      res.json({ teams: top3 });
    } else {
      // Send a custom response if 'show' is 'false'
      res.json({ message: 'Leaderboard data is not available.' });
    }*/
    const top3=leaderboardData.teams.slice(0,3);
    const result={
        "show":leaderboardData.show,
        "teams":top3
    }
    res.json(result);
  });
  app.get('/',(req,res)=>{
    res.json({ message: 'Enjoy kr shaadi Gg' });
  })

  //app.listen(PORT, "0.0.0.0", (err) => {console.log(err)};
  app.listen(PORT, "0.0.0.0", (err) => {
    if (err) {
      console.error(err);
    } else {
      console.log(`Server is running on http://localhost:${PORT}`);
    }
  });
