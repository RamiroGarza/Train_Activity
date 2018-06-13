// 1. Initialize Firebase

// Initialize Firebase
var config = {
  apiKey: "AIzaSyCCN0CBWsOYxs8yWUHo2iusxt1bGvKojVc",
  authDomain: "train-eb37f.firebaseapp.com",
  databaseURL: "https://train-eb37f.firebaseio.com",
  projectId: "train-eb37f",
  storageBucket: "train-eb37f.appspot.com",
  messagingSenderId: "784637435183"
};
firebase.initializeApp(config);

var database = firebase.database();

// 2. Create button for adding new train - then update the html + update the database
$("#btn-primary").on("click", function (event) {
  event.preventDefault();

  var trainName = $("#input-train-name").val().trim();
  var destination = $("#destination").val().trim();
  var firstTraintime = $("#first-train-time").val().trim();
  var frequency = $("#frequency").val().trim();
  var minsAway = $("#mins-away").val().trim();

  // Creates local "temporary" object for holding train data
  var trainData = {
    name: trainName,
    dest: destination,
    trainTime: firstTraintime,
    freq: frequency,
    nextArrival: minsAway
  };

  // Uploads train data to the database
  database.ref().set(trainData);

  // Logs everything to console
  console.log(trainData.name);
  console.log(trainData.dest);
  console.log(trainData.trainTime);
  console.log(trainData.freq);
  console.log(trainData.nextArrival);

  // Alert
  alert("train time added successfully");

  // Clears all of the text-boxes
  $("#input-train-name").val("");
  $("#destination").val("");
  $("#first-train-time").val("");
  $("#frequency").val("");
  $("#mins-away").val("");
});

// 4. Create a way to calculate the months worked. Using difference between start and current time.
//    Then use moment.js formatting to set difference in months.
// 5. Calculate Total billed

//3. Create a way to retrieve employees from the employee database.
database.ref().on("child_added", function (childSnapshot, prevChildKey) {

  console.log(childSnapshot.val());

  // store everything into a variable
  var trainName = childSnapshot.val().name;
  var destination = childSnapshot.val().dest;
  var firstTraintime = childSnapshot.val().trainTime;
  var frequency = childSnapshot.val().freq;
  var minsAway = childSnapshot.val().nextArrival;

  // console log
  console.log(trainName);
  console.log(destination);
  console.log(firstTraintime);
  console.log(frequency);
  console.log(minsAway);

  // Add each train's data into the table
  $("#train-table > tbody").append("<tr><td>" + trainName + "</td><td>" + destination + "</td><td>" + firstTraintime + "</td><td>" +
    frequency + "</td><td>" + minsAway + "</td></td>");
});