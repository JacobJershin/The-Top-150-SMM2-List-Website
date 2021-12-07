function LeaderBoard () {
  NerfDetector = 0

  while (PlayerID < PlayerNameArray.length) {

  //This is the start of the nerf insert vvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvv
          while (MasterClears[PlayerID].length > index) {
	          if (MasterClears[PlayerID][index] == Scarlet_Stronghold_Double || MasterClears[PlayerID][index] == VenetusDouble || MasterClears[PlayerID][index] == ScarletStrongholdPswitchx3) {
		            MasterClears[PlayerID][index] += 10  //Making Nerf
			                      NerfDetector += 1
					              }
						              index++
							              }
								        //This is the end of the nerf insert ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
									    var PointNumber = (MasterPoints(MasterPlayerProgress[PlayerID], MasterProgressLevel[PlayerID], MasterClears[PlayerID])*(((MasterClears[PlayerID].length * 0.01)/2)+1))
									        LeaderBoardPage.getRange(PlayerID + 1, 1).setValue(PointNumber.toFixed(2))

  //This is the start of the nerf insert vvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvv
        if (NerfDetector > 0) {
	        if (MasterClears[PlayerID][index] == Scarlet_Stronghold_Double + 10 || MasterClears[PlayerID][index] == VenetusDouble + 10 || MasterClears[PlayerID][index] == ScarletStrongholdPswitchx3 + 10) {
		          MasterClears[PlayerID][index] -= 10  //Removing Nerfs
			          NerfDetector -= NerfDetector
				            }
					          }
						        NerfDetector = 0
							      index = 0

  //This is the end of the nerf insert ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

    LeaderBoardPage.getRange(PlayerID + 1, 2).setValue(PlayerNameArray[PlayerID])
        LeaderBoardPage.getRange(PlayerID + 1, 3).setValue(MasterClears[PlayerID].length)
	    LeaderBoardPage.getRange(PlayerID + 1, 4).setValue(PlayerID)
	        PlayerID++
		  }
		  }