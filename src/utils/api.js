const APP_ID = "daf0bf3c";
const APP_KEY = "ef5eaecdae3d38ef0fb1d0e0ffd2c216";
const authQuery = `app_id=${APP_ID}&app_key=${APP_KEY}`;

async function fetchData(resource) {
  const response = await fetch(
    `https://api.tfl.gov.uk${resource}?${authQuery}`
  );
  return response.json();
}

export async function getStations() {
  const { stopPoints } = await fetchData("/StopPoint/Mode/tube");
  return stopPoints.filter(item => item.stopType === "NaptanMetroStation");
}

export async function getAllArrivals(naptanId) {
  return await fetchData(`/StopPoint/${naptanId}/Arrivals`);
}

export async function getArrivalsByLine(lineId, naptanId) {
  return await fetchData(`/Line/${lineId}/Arrivals/${naptanId}`);
}
