app.factory('peopleService', function(){

  var people = [

    {name: "oriel", lname: "bachar"},
    {name: "yaniv", lname: "izaki"},
    {name:"marta", lname:"mireles"}

  ];

  return {
    people: people
  };
});
