import fetch from "node-fetch";
import { z } from "zod";

// type Person = {
// 	name: string;
// 	age: number;
// 	lightSaberColors: string[];
// };

const person = z.object({
  name: z.string().min(1).max(100),
  hair_color: z.string().transform((val) => val.toUpperCase()),
});

type Person = z.infer<typeof person>;

async function fetchPerson(): Promise<Person> {
  const results = await fetch("https://swapi.dev/api/people/1/").then((res) =>
    res.json()
  );
  console.log("results before parse", results);
  const parsedResults = person.parse(results);
  console.log("parsed results", parsedResults);
  return parsedResults;
}

fetchPerson().then((person) => {
  console.log(person.name);
  console.log(person.hair_color);
});
