// Initialize Firebase
var config = {
  apiKey: "AIzaSyBmMuEWylCvmnDq9fJnlSqBCou_rZtoJt8",
  authDomain: "train-schedule-1766e.firebaseapp.com",
  databaseURL: "https://train-schedule-1766e.firebaseio.com",
  projectId: "train-schedule-1766e",
  storageBucket: "train-schedule-1766e.appspot.com",
  messagingSenderId: "693426029702"
};
firebase.initializeApp(config);

var database = firebase.database();

//  create train information line
$("#submit-train-info").on("click", function () {

  // take user input
  var trainName = $("#train-name").val().trim();
  var destination = $("#destination").val().trim();
  var initialTrain = $("#initial-train").val().trim();
  var frequency = $("#frequency").val().trim();

  // create temp object for holding train data
  var tempTrain = {
    name: trainName,
    dest: destination,
    initial: initialTrain,
    freq: frequency
  };

  // push user input into firebase
  database.ref().push(tempTrain);

  // console.log(tempTrain.name);
  // console.log(tempTrain.dest);
  // console.log(tempTrain.initial);
  // console.log(tempTrain.freq);

  // clear all user entry fields
  $("#train-name").val("");
  $("#destination").val("");
  $("#initial-train").val("");
  $("#frequency").val("");
});

database.ref().on("child_added", function (childSnapshot) {
  // console.log(childSnapshot.val());

  // create variable to store snapshot
  var trainName = childSnapshot.val().name;
  var destination = childSnapshot.val().dest;
  var initialTrain = childSnapshot.val().initial;
  var frequency = childSnapshot.val().freq;

  // console.log(trainName);
  // console.log(destination);
  // console.log(initialTrain);
  // console.log(frequency);




  // calculations
// ------------------------------------------------------------------
  

  // var nextArrivingTrain =
  var currentTime = moment().format("HH:mm");
  
    // calculate difference between initial train and current time
  var tDiff= moment().diff(moment(initialTrain), "minutes");
    // convert to minutes

    // diff= (calculated difference) % (train frequency)

  // calculate the minutes away   
  //  var minsToNextTrain = 

    // (frequency)-(remainder of tDiff)


  
  


  // display to user input to html
  // need to add last two variables to the table
    $("#train-shedule-table > tbody").append("<tr><td>" + trainName + "</td><td>" + destination + "</td><td>" + frequency + "</td></tr>");

});