// TODO: add code here
window.addEventListener("load", function() {
    this.fetch("https://handlers.education.launchcode.org/static/astronauts.json").then(function(response){

        // get the json object from promise
        response.json().then(function(json){
            let container = document.querySelector("#container");
            let teamArr = json; 

            // sort array items base on the hourInSpace property
            teamArr.sort((a, b) => b.hoursInSpace - a.hoursInSpace);

            // add a count of the astronauts
            container.innerHTML += `
            <h2>There are ${teamArr.length} of them.</h2>
            `;

            for (let i = 0; i < teamArr.length; i++) {

                // turn text in name plate to green if active property is true
                let textColor = "black";
                if (teamArr[i].active === true) {
                    textColor = "green";
                }

                // every loop adding new html into container.innerHTML
                container.innerHTML += `
                <div class="astronaut" style="color:${textColor}">
                    <div class="bio">
                        <h3>${teamArr[i].firstName + " " + teamArr[i].lastName}</h3>
                        <ul>
                            <li>Hours in space: ${teamArr[i].hoursInSpace}</li>
                            <li>Active: ${teamArr[i].active}</li>
                            <li>Skills: ${teamArr[i].skills.join(", ")}</li>
                        </ul>
                    </div>
                    <img class="avatar" src=${teamArr[i].picture}>
                </div>
                `;
            } 
        });
    });
});