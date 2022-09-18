import fetch from "node-fetch";
import { z } from "zod";
// type Person = {
// 	name: string;
// 	age: number;
// 	lightSaberColors: string[];
// };
const person = z.object({
    name: z.string().transform((val) => val.toUpperCase()),
    hair_color: z.string(),
});
async function fetchPerson() {
    const results = await fetch("https://swapi.dev/api/people/1/").then((res) => res.json());
    console.log(results);
    const parsedResults = person.parse(results);
    console.log(parsedResults);
    return parsedResults;
}
fetchPerson().then((person) => {
    console.log(person.name);
    console.log(person.hair_color);
});
