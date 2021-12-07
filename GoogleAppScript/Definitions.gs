var App = SpreadsheetApp //this is just kinda needed for any kind of App Script aplication, it sets up our spreadsheet in the directory of my google drive
var SS = App.getActiveSpreadsheet()  //SS is a set up variable that calls for the spread sheet so we can do things with it in later lines

var ListPage = SS.getSheetByName("List") //this is the page where the list is setup
var LeaderBoardPage = SS.getSheetByName("Leader Board")  //this is the page where the leader board is set up
var ListHistory = SS.getSheetByName("ListHistory ")  //This is the page where the list history will be running
var ProfilePage = SS.getSheetByName("Profile")  //this is where a desired profile will be displayed
var Charts_Test = SS.getSheetByName("charts")  //this is still a WIP but i plan on getting rank graphs to work for the profile page and im testing that out here
