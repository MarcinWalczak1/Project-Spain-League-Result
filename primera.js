const API_URL_Primera = `https://api-football-v1.p.rapidapi.com/v3/standings?season=2022&league=435`;


fetch(API_URL_Primera, options)

.then(response => response.json()
.then(data=>{
const season = data['response'];
const standings = season[0]['league']['standings'];
const places = standings;
const ranks = places[0];


class elementCreation{
constructor(elementParent, elementClass, secondElementClass){
    this.elementParent = document.getElementsByClassName(elementParent)[0];
    this.elementClass = elementClass;
    this.secondElementClass = secondElementClass;
    
    
}
makeTeamsName(type) {
    for (const key in ranks){
        const team = ranks[key].team.name;
        
       const newElement = document.createElement(type);
     // add new element to the dom
       this.elementParent.appendChild(newElement);
       // add content to new element
       newElement.innerHTML = team;
       // add className to new element
       newElement.className = this.elementClass
    }
    }
    makeTeamsLogo(type, image){
        for (const key in ranks){
            const teamLogo = ranks[key].team.logo;
            const logoList = document.createElement(type);
            const logoImages = document.createElement(image);
            this.elementParent.append(logoList); 
            logoList.append(logoImages);
            logoImages.src = teamLogo;
            logoList.className = this.elementClass;
            logoImages.className = this.secondElementClass;
             }
    }
    makeListPlace(type){
        for (const key in ranks){
            const teamRank = ranks[key].rank + '.';
            const numberRank = document.createElement(type);
            numberRank.append(teamRank);
            this.elementParent.append(numberRank);
            numberRank.className = this.elementClass;
           }


    }
    makeGoalList(type){
        for (const key in ranks){
            const played = ranks[key].all.played;
            const listMatchesCount = document.createElement(type);
            this.elementParent.append(listMatchesCount);
            listMatchesCount.append(played);
            listMatchesCount.className = this.elementClass;
           
        }
    }
    makematchList(type){
        for (const key in ranks){
            const played = ranks[key].all.played;
            const listMatchesCount = document.createElement(type);
            this.elementParent.append(listMatchesCount);
            listMatchesCount.append(played);
            listMatchesCount.className = this.elementClass;
           
        }
    }
    makePointsList(type){
        for (const key in ranks){
            const teamPoint = ranks[key].points;
            const listPoints = document.createElement(type);
            this.elementParent.append(listPoints);
            listPoints.append(teamPoint);
            listPoints.className = this.elementClass;
                }
    }
}


const teamsName = new elementCreation('group1-teams-table', 'teams-name' );
const teamsLogo = new elementCreation('group1-teams-logo', "logo-list", "logo-image" )
const listPlace = new elementCreation('group1-teams-rank', 'number-rank');
const goalList = new elementCreation('group1-goals', 'list-goal');
const matchList = new elementCreation('group1-matches-count', 'list-match');
const pointsList = new elementCreation('group1-teams-points', 'list-points');
teamsName.makeTeamsName('li');
teamsLogo.makeTeamsLogo('li', 'img');
listPlace.makeListPlace('li');
goalList.makeGoalList('li');
matchList.makematchList('li');
pointsList.makePointsList('li');
}))








    
