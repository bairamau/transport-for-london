const APP_ID = "daf0bf3c";
const APP_KEY = "ef5eaecdae3d38ef0fb1d0e0ffd2c216";
const authQuery = `app_id=${APP_ID}&app_key=${APP_KEY}`;

export async function fetchData(resource) {
  const response = await fetch(
    `https://api.tfl.gov.uk${resource}?${authQuery}`
  );
  return response.json();
}

export async function getStations() {
  const { stopPoints } = await fetchData("/StopPoint/Mode/tube");
  return stopPoints.filter(item => item.stopType === "NaptanMetroStation");
}

// https://api.tfl.gov.uk/bikepoint
// List all Santander Cycle hire docking stations, including 5 minute real-time bike and docking station status information.

// /Line/Meta/Modes
// bus
// cable-car
// coach
// cycle
// cycle-hire
// dlr
// interchange-keep-sitting
// interchange-secure
// national-rail
// overground
// replacement-bus
// river-bus
// river-tour
// taxi
// tflrail
// tram
// tube
// walking
