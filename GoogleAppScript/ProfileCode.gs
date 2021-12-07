function ProfilePageCode (PlayerID) {
  index = 0
    while (index < MasterClears[PlayerID].length) {
        var Level = ListPage.getRange(MasterClears[PlayerID][index], 1).getValues()
	    ProfilePage.getRange(index + 2, 1).setValue(Level)
	        index++
		  }

  ProfilePage.getRange(index + 2, 1).setValue("Bio:")
    ProfilePage.getRange(index + 3, 1).setValue(Bios[PlayerID])

  ProfilePage.getRange("E2").setValue(MasterPoints(MasterPlayerProgress[PlayerID], MasterProgressLevel[PlayerID], MasterClears[PlayerID])*(((MasterClears[PlayerID].length * 0.01)/2)+1))
    ProfilePage.getRange("B1").setValue(PlayerNameArray[PlayerID])

  Counter = 1

  while (Counter < PlayerNameArray.length) {
      if (PlayerNameArray[PlayerID] == LeaderBoardPage.getRange(Counter, 2).getValue()) {
            ProfilePage.getRange("E4").setValue(Counter)
	        }
		    Counter++
		      }

  index = 0
    while (index < MasterPlayerProgress[PlayerID].length) {
        if (MasterProgressLevel[PlayerID][index] > 0) {
	    var ProgressLevel = ListPage.getRange(MasterProgressLevel[PlayerID][index], 1).getValues()
	        ProfilePage.getRange(index + 2, 2).setValue(ProgressLevel)
		    ProfilePage.getRange(index + 2, 3).setValue(MasterPlayerProgress[PlayerID][index])
		        }
			    index++
			      }

  index = 0
    ProfilePage.getRange("E7").setValue(FavoritesList[PlayerID])
      ProfilePage.getRange("E8").setValue(FriendsList[PlayerID])
        ProfilePage.getRange("E9").setValue(Verifications[PlayerID])

  //Standard things such as global rank and Total Points: will always been in these spots

  ProfilePage.getRange("D2").setValue("Total Points:")
    ProfilePage.getRange("D4").setValue("Global Ranking:")
      ProfilePage.getRange("D7").setValue("Favorite levels:")
        ProfilePage.getRange("D8").setValue("Friends:")
	  ProfilePage.getRange("D9").setValue("Uploaded Levels:")
	  }


