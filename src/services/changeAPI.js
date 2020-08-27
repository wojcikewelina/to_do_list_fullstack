const API_HEROES = "https://us-central1-itfighters-hero.cloudfunctions.net/api/hero";

export function Add(url, methodType) {
  return fetch(API_PEOPLE_URL+url,
  {
    method: methodType,
                headers: {
                    "Content-type": "application/json; charset=UTF-8"
                },
                body: JSON.stringify({
                    superhero: inputSuperhero.value,
                    publisher: inputPublisher.value,
                    firstAppearance: inputfirstApperance.value,
                    characters: inputCharacters.value,
                    url: inputURL.value
                })
            })
            .then(clearInput())
            .then(resp => {
                if (resp.ok) {
                    return resp.json();
                } else {
                    Promise.reject("http code: ", resp.status);
                }
                console.log("response: ", resp);
            }).then(data => console.log("dane od serwera", data))
            .catch(err => console.warn("nie działa", err))
            .then(() => location.reload())


  })
  })
}  
