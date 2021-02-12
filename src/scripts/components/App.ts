import getDataServer from "../utils/getDataServer";
import { TEAMS_URL } from "../constant";

import Calendar from "./Calendar";
import Bar from "./Bar";

import { ITeam, IDepartmentTeams } from '../types';

class App {
  appElement: HTMLElement | null;
  currentDate: Date
  month: number
  teams: ITeam[]


  constructor(rootElement: HTMLElement | null) {
    this.appElement = rootElement;
    this.currentDate = new Date();
    this.month = new Date().getMonth();
    this.teams = [];

    this.render()
  }

  protected likeComponentDidMount = (): Promise<any> => {
    return getDataServer(TEAMS_URL).then(( { teams: teamsRes }: IDepartmentTeams) => {
      this.teams = teamsRes;
    });
  };

  protected prevMonth = (): void => {
    this.currentDate.setMonth(this.month - 1);
    this.update();
    if (this.month < 0) this.month = 11;
  };

  protected nextMonth = (): void => {
    this.currentDate.setMonth(this.month + 1);
    this.update();
    if (this.month > 11) this.month = 0;
  };

  protected update = () => {
    if (this.appElement) this.appElement.innerHTML = "";

    new Bar(this.appElement, this.currentDate, this.prevMonth, this.nextMonth).render();
    new Calendar(this.appElement, this.currentDate, this.teams).render();
  };

  private render = () => {
    this.likeComponentDidMount().then(() => {
      new Bar(this.appElement, this.currentDate, this.prevMonth, this.nextMonth).render();
      new Calendar(this.appElement, this.currentDate, this.teams).render();
    });
  };
}

export default App;
