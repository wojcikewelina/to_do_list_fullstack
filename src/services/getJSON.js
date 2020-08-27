
const API_PEOPLE_URL = "https://us-central1-itfighters-hero.cloudfunctions.net/api/hero";

export function getAllTasksApi() {
  return fetch(API_PEOPLE_URL).then(response => {
    return response.json();
  })
}



