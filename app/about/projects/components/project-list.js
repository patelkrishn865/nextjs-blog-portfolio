import Card from "@/components/card";

export default async function ProjectList() {
  const response = await fetch(
    "https://api.github.com/users/piotr-jura-udemy/repos"
    // { cache: 'no-store'}
  );
  const data = await response.json();

  return (
    <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
      {data.map((project) => (
        <li key={project.id} className="mb-4">
          <Card className="font-mono h-full">
            <div className="flex justify-between items-center mb-4">
              <div className="font-semibold">{project.name}</div>
              <div>🌟{project.stargazerCount}</div>
            </div>

            <div>{project.desc}</div>
          </Card>
        </li>
      ))}
    </ul>
  );
}
