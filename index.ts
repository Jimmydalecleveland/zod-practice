import fetch from "node-fetch";

type Person = {
	name: string;
	age: number;
	lightSaberColors: string[];
};

async function fetchPerson(): Promise<Person> {
	const results = await fetch("https://swapi.dev/api/people/1/").then(
		(res) => res.json() as Promise<Person>
	);
	return results;
}

fetchPerson().then((person) => {
	console.log(person.name);
	console.log(person.age);
	console.log(person.lightSaberColors[0]);
});
