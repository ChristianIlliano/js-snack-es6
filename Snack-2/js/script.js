let Squads = [
    { name: "Juventus", points: 0, fouls: 0 },
    { name: "Milan", points: 0, fouls: 0 },
    { name: "Inter", points: 0, fouls: 0 },
    { name: "Roma", points: 0, fouls: 0 },
    { name: "Napoli", points: 0, fouls: 0 },
    { name: "Salernitana", points: 0, fouls: 0 },
    { name: "Atalanta", points: 0, fouls: 0 },
    { name: "Fiorentina", points: 0, fouls: 0 },
    { name: "Torino", points: 0, fouls: 0 },
    { name: "Ajax", points: 0, fouls: 0 }
  ];
  
  const {name,points,fouls} = Squads;
  
  Squads.forEach((curSquad)=>{
    const randNum = Math.floor(Math.random() * 100) + 1;;
    const randNum2 = Math.floor(Math.random() * 100) + 1;;
  
    curSquad.points = randNum;
    curSquad.fouls = randNum2;
  
  });
  
  const squadInfo = Squads.map(({name,fouls})=>({name,fouls}));
  console.log(squadInfo);
  