// airport itinerary

// When you travel around the world you pass through different airports.
// TRN -> FC0 -> JFK
// and then return back to home
// JFK -> TRN

// In order to propose the unique list of airports that your trip uses ww have to create an itinerary feature that can compress the list of airports including only the list of unique in/out combination.

// For example, a trip with:
// [TRN-FCO] [FCO-JFK] [JFK-TRN]
// Should be representd as :
// TRN-FCO-JFK-TRN

// That is the unique list of airport steps. 
// Now in our database we save the travel as a list of objects with in/out properties and you will receive that list always sorted in the right way.

/*
[
    {in: "TRN", out: "FCO"},
    {in: "FCO", out: "JFK"},
    {in: "JFK", out: "FCO"}
]
*/

// Now we have to create a helper function itinerary for JS that extract the unique airport list:

/*
travel = itinerary([
  {in: "TRN", out: "FCO"},
  {in: "FCO", out: "JFK"},
  {in: "JFK", out: "FCO"}
]); // TRN-FCO-JFK-FCO
*/

// Or a helper class Route for C#/C++:

/*
public class Route
{
  public string In;
  public string Out;
}
*/




// Will we be given strings? Will we be given an empty string? Will we be given special characters? Will we be given floats? Will we be given integers?




// Return a new string where it will show all of the airports you will be stopping at without any repeats.




// If we were given [EWR - JFK], should return EWR-JFK
// If we were given [TRN-FCO] [FCO-JFK] [JFK-TRN], should return TRN-FCO-JFK-TRN




function itinerary(travel) {
    return travel.reduce((r, x) => r.concat(r[r.length-1] != x.in ? [x.in, x.out] : x.out), []).join('-');
}






function itinerary(travel) {
    const result = [];
    let prevAirport = '';
    for (let i = 0; i < travel.length; i++) {
      if (travel[i].in !== prevAirport)
        result.push(travel[i].in);
      result.push(prevAirport = travel[i].out);
    }
    return result.join('-');
}






function itinerary(travel) {
    return travel.map(x=>x.in + '-' + x.out).join('-').replace(/(...)-(?=\1)/g, '')
}






function itinerary(travel) {
    let result = [];
    travel.forEach((x,i,a) => {
      if(!result.includes(x.in,i))
      {
        result.push(x.in);
      }
      result.push(x.out);
    });
    return result.join('-');
}






function itinerary(travel) {
    let ret = "";
    let travelOut;
    for (let airport of travel) {
      if (airport.in !== travelOut){
        ret+= airport.in + "-";
      }
      ret+= airport.out + "-";
      travelOut = airport.out;
    }
    ret = ret.slice(0,ret.length-1);
    return ret;
}