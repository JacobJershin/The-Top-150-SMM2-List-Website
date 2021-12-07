//function PointCalc(PlaceMent) {
//  return(((1/50*PlaceMent)*(1/50*PlaceMent)*PlaceMent)+1)/2
//}
//function PointCalc(PlaceMent) {
//  return Math.pow(1.1, ((PlaceMent/2.6299999999) + 14.5454545454545454545))
//}
//function PointCalc(PlaceMent) {
//  return 2 * PlaceMent
//}
//function PointCalc(PlaceMent) {
//  return Math.pow(1.05, (((PlaceMent)/1.3) + 31.67088767815)) // this is the current way we are giving points
//}
function PointCalc(PlaceMent) {
  return Math.pow(1.054411903089, ((PlaceMent+40)/1.4))
  }

//This function is what decides how many points a level is worth for a clear
function ClearPoints(Array) {
  var index = 0
    var total = 0
      while (index < Array.length) {
          total += PointCalc(101 - Array[index] + Daphnes_Finale - 1)
	      index += 1
	        }
		  return total
		  }

//this function is the first of 2 that decide how many points progress should give
function ProgressCalc(x, Progress) {
    var PointPrecent = ((Progress/10.0)*(Progress/10.0) * 0.01)
        return (PointCalc(x + Daphnes_Finale - 1)*PointPrecent)*0.90
	}

//this function is the second function that decides how many points progress should give
function ProgressPoint(ProgressArray, LevelArray) {
  index = 0
    total = 0
      while (index < ProgressArray.length) {
          total += ProgressCalc(101 - LevelArray[index], ProgressArray[index])
	      index += 1
	        }
		  return total
		  }

//this function prints out how many points each level is worth on the list page
for (i=1;i<= 150;i+=1) {
  var numb = (PointCalc(101-i + Daphnes_Finale - 1))
    ListPage.getRange(i , 6).setValue(numb.toFixed(2))
    }

//this function allows us to pick any player and see how many total points that player has from their progress and clears
function MasterPoints(ProgressArray, ProgressLevelArray, ClearArray) {
  return ProgressPoint(ProgressArray, ProgressLevelArray) +  ClearPoints(ClearArray)
  }


//this is kinda useless but this shows you how many points you can possibly get
function MaxPoints(x) {
 total = 0
   while (x > 0) {
       total += PointCalc(101-x)*2
           x -= 1
	     }
	       return total
	       }


