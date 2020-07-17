//feet To Mile Convaer convert
function feetToMile(feet) {
  if (feet < 0) {
    console.log("Feet can not be in negative");
  } else {
    mile = (feet / 5280).toFixed(4);
    return mile;
  }
}
//feet To Mile Convaer convert



//How much wood need for chair, tabile and bed. start.
function woodCalculator(chair, tabile, bed) {
  let woodNeedFor1Chair = 1; // that is one cubic feet
  let woodNeedFor1Tabile = 3; // that is three cubic feet
  let woodNeedFor1bed = 5; // that is five cubic feet

  if (chair < 0) {
    console.log("you can not put negative number in chair. That's why we set a default value 0.");
    chair = 0;
  }

  if (tabile < 0) {
    console.log("you can not put negative number in tabile. That's why we set a default value 0.");
    tabile = 0;
  }

  if (bed < 0) {
    console.log("you can not put negative number in bed.That's why we set a default value 0.");
    bed = 0;
  }

  totalWoodForChair = woodNeedFor1Chair * chair;

  totalWoodForTabile = woodNeedFor1Tabile * tabile;

  totalWoodForBed = woodNeedFor1bed * bed;

  return (totalWoodNeed = totalWoodForChair + totalWoodForTabile + totalWoodForBed);
}
//How much wood need for chair, tabile and bed. End.



// Brick Calculator. start.
/*
  upperFloor means 20 to upper floor.
  middleFloor means 11 - 20 floor.
  lowerFloor means 1-10 floor
*/
function brickCalculator (floor) {
  let perFeetBrick = 1000;
  let upperFloorFeet = 10;
  let middleFloodFeet = 12;
  let lowerFloorFeet = 15;

  if (floor < 0){
    console.log("floor can  not be in negative");

  }else if (floor > 20) {
    upperFloor = floor - 20;

    upperFloorBrick = upperFloor * upperFloorFeet * perFeetBrick;

    middleFloor = floor - upperFloor - 10;

    middleFloorBrick = middleFloor * middleFloodFeet * perFeetBrick;

    lowerFloor = middleFloor;

    lowerFloorBrick = lowerFloor * lowerFloorFeet * perFeetBrick;

    return totalBrick = upperFloorBrick + middleFloorBrick + lowerFloorBrick; 

  }else if (floor <= 20 && floor > 10){
    middleFloor = floor - 10;

    middleFloorBrick = middleFloor * middleFloodFeet * perFeetBrick;

    lowerFloor = floor - middleFloor;

    lowerFloorBrick = lowerFloor * lowerFloorFeet * perFeetBrick;

    return total = middleFloorBrick + lowerFloorBrick;

  }else if (floor <= 10) {
    lowerFloor = floor;

    return lowerFloor * lowerFloorFeet * perFeetBrick;

  }
}
// Brick Calculator. end.




//Tiny Friend. Start.
function tinyFriend (names) {
  let tinyName = names[0]

  for(let i = 0; i < names.length; i++){
    let currentName = names[i];

    if (currentName.length < tinyName.length){
      tinyName = currentName;
    }

  }
  return tinyName;
}
//Tiny Friend. end.
