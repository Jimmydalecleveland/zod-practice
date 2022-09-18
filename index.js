import fetch from "node-fetch";
async function fetchPerson() {
    const results = await fetch("https://swapi.dev/api/people/1/").then((res) => res.json());
    return results;
}
fetchPerson().then((person) => {
    console.log(person.name);
    console.log(person.age);
    console.log(person.lightSaberColors[0]);
});
