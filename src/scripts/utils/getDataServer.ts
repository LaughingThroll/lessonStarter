import departmentTeams from "../DB";

// import { IDepartmentTeams } from '../types'

async function getDataServer(url: string): Promise<any> {
  const response = await fetch(url, {
    method: "PUT",
    body: JSON.stringify(departmentTeams),
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  });
  const data: Promise<any> = await response.json();
  return data;
}

export default getDataServer;
