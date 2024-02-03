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
    "show": "true",
    "teams": [
      {
        "rank": 1,
        "name": "TLE",
        "links": {
          "github": "https://github.com/VivekHalder/BIT-N-BUILD",
          "youtube": ""
        },
        "members": [
          {
            "username": "@satwikcoder007",
            "github": "https://github.com/satwikcoder007"
          },
          {
            "username": "@VivekHalder",
            "github": "https://github.com/VivekHalder"
          },
          {
            "username": "@Dipu010",
            "github": "https://github.com/Dipu010"
          },
          {
            "username": "@Brahmajit-Ray",
            "github": "https://github.com/Brahmajit-Ray"
          }
        ],
        "score": 94.00
      },
      {
        "rank": 2,
        "name": "Dino ",
        "links": {
          "github": "https://github.com/0xDebabrata/accessify",
          "youtube": ""
        },
        "members": [
          {
            "username": "@0xDebabrata",
            "github": "https://github.com/0xDebabrata"
          },
          {
            "username": "@AdityaMayukhSom",
            "github": "https://github.com/AdityaMayukhSom"
          },
          {
            "username": "@Thezone-1",
            "github": "https://github.com/Thezone-1"
          },
          {
            "username": "@Soham-Dutta2023",
            "github": "https://github.com/Soham-Dutta2023"
          }
        ],
        "score": 91.75
      },
      {
        "rank": 3,
        "name": "sysmic",
        "links": {
          "github": "https://github.com/frostedkitsune/planner",
          "youtube": ""
        },
        "members": [
          {
            "username": "@frostedkitsune",
            "github": "https://github.com/frostedkitsune"
          },
          {
            "username": "@etErn-A12l",
            "github": "https://github.com/etErn-A12l"
          },
          {
            "username": "@Ss3347C",
            "github": "https://github.com/Ss3347C"
          },
          {
            "username": "@rivvvvvv",
            "github": "https://github.com/rivvvvvv"
          }
        ],
        "score": 91
      },
      {
        "rank": 4,
        "name": "4. Sync Squad",
        "links": {
          "github": "https://github.com/PriyangshuJS/SnapVerify",
          "youtube": ""
        },
        "members": [
          {
            "username": "@aishikmaitra",
            "github": "https://github.com/aishikmaitra"
          },
          {
            "username": "@Darth-Hannibal",
            "github": "https://github.com/Darth-Hannibal"
          },
          {
            "username": "@Borazonic",
            "github": "https://github.com/Borazonic"
          },
          {
            "username": "@PriyangshuJS",
            "github": "https://github.com/PriyangshuJS"
          }
        ],
        "score": 90.50
      },
      {
        "rank": 5,
        "name": "Square",
        "links": {
          "github": "https://github.com/NayakPenguin/Vision-Bridge",
          "youtube": "https://www.youtube.com/watch?v=xbHSOsyJJDI"
        },
        "members": [
          {
            "username": "@AnuragJha003",
            "github": "https://github.com/AnuragJha003"
          },
          {
            "username": "@NayakPenguin",
            "github": "https://github.com/NayakPenguin"
          },
          {
            "username": "@Om-Mittal",
            "github": "https://github.com/Om-Mittal"
          },
          {
            "username": "@priyam-03",
            "github": "https://github.com/priyam-03"
          }
        ],
        "score": 90
      },
      {
        "rank": 6,
        "name": "AsyncAwait ",
        "links": {
          "github": "https://github.com/ani1609/NeoChat",
          "youtube": "https://youtu.be/pKJNcuAV9T0"
        },
        "members": [
          {
            "username": "@beradeep",
            "github": "https://github.com/beradeep"
          },
          {
            "username": "@niladrix719",
            "github": "https://github.com/niladrix719"
          },
          {
            "username": "@ani1609",
            "github": "https://github.com/ani1609"
          },
          {
            "username": "@SwastikSarkar001",
            "github": "https://github.com/SwastikSarkar001"
          }
        ],
        "score": 87
      },
      {
        "rank": 7,
        "name": "CodeSphere Symposium",
        "links": {
          "github": "https://github.com/punyeeet/BitnBuild",
          "youtube": ""
        },
        "members": [
          {
            "username": "@Soham-bakshi",
            "github": "https://github.com/Soham-bakshi"
          },
          {
            "username": "@punyeeet",
            "github": "https://github.com/punyeeet"
          },
          {
            "username": "@403-found",
            "github": "https://github.com/403-found"
          },
          {
            "username": "@susmit3003",
            "github": "https://github.com/susmit3003"
          }
        ],
        "score": 85.50
      },
      {
        "rank": 8,
        "name": "East_India_Coding_Company",
        "links": {
          "github": "https://github.com/hatif03/blue-green",
          "youtube": ""
        },
        "members": [
          {
            "username": "@hatif03",
            "github": "https://github.com/hatif03"
          },
          {
            "username": "@AzimWarsii",
            "github": "https://github.com/AzimWarsii"
          }
        ],
        "score": 82.00
      },
      {
        "rank": 9,
        "name": "TechInnovators1 ",
        "links": {
          "github": "https://github.com/Sourav1232/ReguComply",
          "youtube": ""
        },
        "members": [
          {
            "username": "@Sourav1232",
            "github": "https://github.com/Sourav1232"
          },
          {
            "username": "@ShivamKumarSah",
            "github": "https://github.com/ShivamKumarSah"
          },
          {
            "username": "@amankumar207",
            "github": "https://github.com/amankumar207"
          },
          {
            "username": "@abhishek-kanti",
            "github": "https://github.com/abhishek-kanti"
          }
        ],
        "score": 78.50
      },
      {
        "rank": 10,
        "name": "Team Zero",
        "links": {
          "github": "https://github.com/TeamDecode/TeamZero_gdsc_submission",
          "youtube": ""
        },
        "members": [
          {
            "username": "@devkoustavdas",
            "github": "https://github.com/devkoustavdas"
          },
          {
            "username": "@debduttanaskar",
            "github": "https://github.com/debduttanaskar"
          },
          {
            "username": "@Amitabha37377",
            "github": "https://github.com/Amitabha37377"
          },
          {
            "username": "@naby001",
            "github": "https://github.com/naby001"
          }
        ],
        "score": 75
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
