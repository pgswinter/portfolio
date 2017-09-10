var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/portfolioDb";

MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var personalityTable = [
    { idPerson: 1,
      idSkill: [1,2,3,4,5,6,7,8,9,10],
      idFavourite: [1,2,3],
      career: 'Front end Developer',
      name: 'Anh(Robert) T. NGUYEN',
      description: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit, placeat, nostrum? Libero quod animi incidunt laborum exercitationem! Consectetur aperiam voluptate quo eius, sed accusamus soluta reiciendis animi veniam rem ipsum!`,
      relationship: 'single',
      national: 'vietnam',
      language: 'vietnamese/english',
      address: '135/1/96 Nguyen Huu Canh, Binh Thanh, Ho Chi Minh',
      phone: '10693547727',
      mail: 'tuananh.nguyen.freelance@gmail.com',
      education: 'Duy Tan University'
    }
  ];
  var skillTable = [
      { 
        idSkill: 1,
        idSector: [1],
        skill: 'React/Readux',
      },
      { 
        idSkill: 2,
        idSector: [1],
        skill: 'Webpack'
      },
      { 
        idSkill: 3,
        idSector: [1],
        skill: 'Javascript/Jquery/ES6'
      },
      { 
        idSkill: 4,
        idSector: [1],
        skill: 'SASS/Bootstrap'
      },
      { 
        idSkill: 5,
        idSector: [1],
        skill: 'Photoshop/Illustrator'
      },
      { 
        idSkill: 6,
        idSector: [1],
        skill: 'ExpressJS'
      },
      { 
        idSkill: 7, 
        skill: 'GIT'
      },
      { 
        idSkill: 8,
        idSector: [1],
        skill: 'MongoDB/Moongose'
      },
      { 
        idSkill: 9,
        idSector: [1],
        skill: 'GULP'
      },
      { 
        idSkill: 10,
        idSector: [1], 
        skill: 'HTML/pug/ejs'
      }
  ];
  var sectorlTable = [
    { 
      idSector: 1, 
      sector: 'IT/Software'
    }
  ];
  var experienceTable = [
    { 
      idExp: 1,
      idSector: [1],
      nameConpany: 'Amaris',
      position: 'Senior Front end Developer',
      time: 'from 02/2016 to actually',
      achivement: 'amaris.com'
    }
  ];
  var favouriteTable = [
    {
      idFavourite: 1,
      name: 'Travelling'
    },
    {
      idFavourite: 2,
      name: 'Music'
    },
    {
      idFavourite: 3,
      name: 'Blog'
    },
  ]
  db.collection("personalityTable").insertMany(personalityTable, function(err, res) {
    if (err) throw err;
    console.log("personalityTable inserted");
    db.close();
  });
  db.collection("skillTable").insertMany(skillTable, function(err, res) {
    if (err) throw err;
    console.log("skillTable inserted");
    db.close();
  });
  db.collection("sectorlTable").insertMany(sectorlTable, function(err, res) {
    if (err) throw err;
    console.log("sectorlTable inserted");
    db.close();
  });
  db.collection("experienceTable").insertMany(experienceTable, function(err, res) {
    if (err) throw err;
    console.log("experienceTable inserted");
    db.close();
  });
  db.collection("favouriteTable").insertMany(favouriteTable, function(err, res) {
    if (err) throw err;
    console.log("favouriteTable inserted");
    db.close();
  });
});