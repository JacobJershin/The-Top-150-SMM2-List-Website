function LevelHistory (Day) {
  index = 0
    Counter = 0
      DateCounter = 0


  while (DateCounter < Day + 1) {
      while (index < MiniLevelsArray.length) {
          if (UploadDates[index][0] - 1 < DateCounter && UploadDates[index][0] + 1 > DateCounter) {
	          ListHistory.getRange(Counter + 1, 1).setValue(MiniLevelsArray[index])
		          ListHistory.getRange(Counter + 1, 2).setValue(UploadDates[index][0])
			          ListHistory.getRange(Counter + 1, 3).setValue(UploadDates[index][1])

        Counter++
	        }
		      index++
		        }
			    index = 0
			        DateCounter += 1
				  }
				  }