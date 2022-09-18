import fetch from "node-fetch";
import { z } from "zod";
// type Person = {
// 	name: string;
// 	age: number;
// 	lightSaberColors: string[];
// };
const person = z.object({
    name: z.string(),
    age: z.number(),
    lightSaberColors: z.array(z.string()),
});
async function fetchPerson() {
    const results = await fetch("https://swapi.dev/api/people/1/").then((res) => res.json());
    const parsedResults = person.parse(results);
    return parsedResults;
}
fetchPerson().then((person) => {
    console.log(person.name);
    // console.log(person.age);
    // console.log(person.lightSaberColors[0]);
});
