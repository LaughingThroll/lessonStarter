import departmentTeams from "../DB";

async function getDataServer(url) {
  const response = await fetch(url, {
    method: "PUT",
    body: JSON.stringify(departmentTeams),
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  });
  const data = await response.json();
  return data;
}

export default getDataServer;
