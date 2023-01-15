// const require;
// const express = require("express");
// const app = express();
// const cors = require("cors")
// app.use(
//     cors({
//         origin: "*",
//     })
// )

let SHEET_ID = '1UMhBQ4YpLINKImoNDp9xfNpRCUSJ87S2k3BMiD8PJkE'
let SHEET_TITLE = 'testSheet';
let SHEET_RANGE = 'B2:D7'

let FULL_URL = ('https://docs.google.com/spreadsheets/d/' + SHEET_ID + '/gviz/tq?sheet=' + SHEET_TITLE + '&range=' + SHEET_RANGE);

    fetch(FULL_URL)
    .then(res => res.text())
    .then(rep => {
        let data = JSON.parse(rep.substr(47).slice(0,-2));
    
        // let plantName = document.getElementById('player_Name_title');
    
        console.log(rep)
    })



var plantDetails = {
    plant_1: "SUNFLOWER|50|Day",
    plant_2: "PEASHOOTER|100|Day",
    plant_3: "CHERRY BOMB|125|Day",
    plant_4: "WALL-NUT|50|Day",
    plant_5: "SQUASH|50|Pool",
    plant_6: "JALAPENO|150|Pool",
    plant_7: "CHOMPER|150|Day",
    plant_8: "SEA-SHROOM|50|Fog",
    plant_9: "KERNEL-PULT|100|Roof",
    plant_10: "CABBAGE-PULT|100|Roof",
    plant_11: "MELON-PULT|300|Roof",
    plant_12: "ICE-SHROOM|75|Night",
    plant_13: "PLANTERN|25|Fog",
    plant_14: "TANGLE KELP|25|Pool",
    plant_15: "GRAVE BUSTER|75|Pool",
    plant_16: "UMBRELLA LEAF|100|Roof",
    plant_17: "PUFF-SHROOM|0|Night",
    plant_18: "FUME-SHROOM|75|Night",
    plant_19: "CACTUS|125|Fog",
    plant_20: "FLOWER POT|25|Roof",
    plant_21: "BLOVER|100|Fog",
    plant_22: "LILY PAD|25|Pool",
    plant_23: "SUN-SHROOM|25|Night",
    plant_24: "SPLEAT PEA|125|Fog",
},
    numberOfPlants = Object.keys(plantDetails).length,
    plantDivContainer,
    plantImgContainer,
    plantImages,
    plantNameContainer,
    plantNames,
    attributesContainer,
    plantSunsContainer,
    plantCost,
    plantSuns,
    plantTypeContainer,
    plantType,
    
    checkType;

for (counter = 1; counter <= numberOfPlants; counter++){
    // Creating plant containers
    plantDivContainer = document.createElement("div");
    plantDivContainer.id = "plant_" + counter;
    plantDivContainer.classList.add("plantsContainer", "transition2ms");

    // Creating plant images container
    plantImgContainer = document.createElement("div");
    plantImgContainer.id = "plantImg_" + counter;
    plantImgContainer.classList.add("plantImagesContainer", "relative", "transition2ms");
    // Adding image files on images container
    plantImages = document.createElement("img");
    plantImages.id = "plantImage_" + counter;
    plantImages.classList.add("images");

    // Creating plant names container
    plantNameContainer = document.createElement("div");
    plantNameContainer.id = "plantNameContainer_" + counter;
    plantNameContainer.classList.add("plantNamesContainer", "flexCenter", "boldText", "relative");
    // Adding plant names on names container
    plantNames = document.createElement("p");
    plantNames.id = "plantName_" + counter;
    plantNames.classList.add("plantNames", "boldText", "flexCenter", "transition2ms");

    // Creating plant attributes container
    attributesContainer = document.createElement("div");
    attributesContainer.id = "attributesContainer_" + counter;
    attributesContainer.classList.add("attributesContainer", "flexCenter", "relative")
    
    // Creating plant suns container
    plantSunsContainer = document.createElement("div");
    plantSunsContainer.id = "plantSuns_" + counter;
    plantSunsContainer.classList.add("costContainer", "relative", "flexCenter");
    // Adding sun cost to suns container
    plantCost = document.createElement("p");
    plantCost.id = "plantCost_" + counter;
    plantCost.classList.add("costs", "medText");
    // Adding sun images to suns container
    plantSuns = document.createElement("img");
    plantSuns.id = "sun_" + counter;
    plantSuns.classList.add("suns", "images")

    // Creating plant type container
    plantTypeContainer = document.createElement("div");
    plantTypeContainer.id = "plantTypeContainer_" + counter;
    plantTypeContainer.classList.add("typeContainer", "relative", "flexCenter")
    // Adding plant type to type container
    plantType = document.createElement("p");
    plantType.id = "plantType_" + counter;
    plantType.classList.add("types", "medText")

    // ====
    // Appending elements
    document.querySelector("#plants_container").append(plantDivContainer);
    plantDivContainer.append(plantImgContainer, plantNameContainer, attributesContainer);

    // Appending plant images
    plantImgContainer.append(plantImages)
    document.querySelector("#plantImage_" + counter).src = "images/plants/plant_" + counter + ".png";

    // Appending plant names
    plantNameContainer.append(plantNames)
    document.querySelector("#plantName_" + counter).innerHTML = plantDetails["plant_" + counter].split("|")[0];

    attributesContainer.append(plantTypeContainer, plantSunsContainer)

    // Appending sun costs and image
    plantSunsContainer.append(plantSuns, plantCost);
    document.querySelector("#plantCost_" + counter).innerHTML = plantDetails["plant_" + counter].split("|")[1];
    document.querySelector("#sun_" + counter).src = "images/extras/sun.png";

    // Appending plant type
    plantTypeContainer.append(plantType);
    document.querySelector("#plantType_" + counter).innerHTML = plantDetails["plant_" + counter].split("|")[2];
    // Adding plant type background color
    checkType = plantDetails["plant_" + counter].split("|")[2]; //getting hex color on object
    document.querySelector("#plantType_" + counter).style.backgroundColor = setBackgroundColor();
}

function setBackgroundColor(){
    if (checkType == "Day"){
        document.querySelector("#plantTypeContainer_" + counter).style.backgroundColor = "#70D000";
    } else if (checkType == "Pool"){
        document.querySelector("#plantTypeContainer_" + counter).style.backgroundColor = "#1A88BC";
    } else if (checkType == "Night"){
        document.querySelector("#plantTypeContainer_" + counter).style.backgroundColor = "#20475A";
    } else if (checkType == "Fog"){
        document.querySelector("#plantTypeContainer_" + counter).style.backgroundColor = "#7896A5";
    } else if (checkType == "Roof"){
        document.querySelector("#plantTypeContainer_" + counter).style.backgroundColor = "#B54E36";
    }
}

document.querySelector("#nav_plant").addEventListener("click", function(){
    console.log("Plant");
    document.querySelector("#activeCharacterImage").src = "images/blank_images/blank_plant.png";
})
document.querySelector("#nav_zombie").addEventListener("click", function(){
    document.querySelector("#activeCharacterImage").src = "images/blank_images/blank_zombie.png";
})
