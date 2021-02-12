export interface IVacation {
  startDate: string,
  endDate: string,
  type: 'Paid' | 'UnPaid'
}

export interface IMember {
  name: string,
  vacations: IVacation[]  
}


export interface ITeam {
  name: string,
  percentageOfAbsent: number[],
  members: IMember[]
}

export interface IDepartmentTeams {
  teams: ITeam[]
}
// ==========================================================
 
export type TTheme = [string, string]


