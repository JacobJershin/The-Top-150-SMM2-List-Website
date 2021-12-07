function PlayerClears () {
Counter = 0
LevelID = 0
index = 0
PlayerID = 0
while (LevelID < 130) {
      while (PlayerID < PlayerNameArray.length) {
      	    while (index < MasterClears[PlayerID].length) {
	    if (MasterClears[PlayerID][index] == LevelID) {
	       ListPage.getRange(LevelID, Counter + 7).setValue(PlayerNameArray[PlayerID])
	       Counter++
	    }
	    index++
      }
      index = 0
      PlayerID++
}
PlayerID = 0
index = 0
Counter = 0
LevelID++
}
}