import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { Page2 } from "./Components/Page2";
import { Page1 } from "./Components/Page1";
import { Page3 } from "./Components/Page3";
import { Page4 } from "./Components/Page4";
import { Page5 } from "./Components/Page5";
import { Page6 } from "./Components/Page6";
import { Page7 } from "./Components/Page7";
import { Page8 } from "./Components/Page8";
import { Page9 } from "./Components/Page9";
import { Page10 } from "./Components/Page10";
import { Page11 } from "./Components/Page11";
import { Page12 } from "./Components/Page12";


type MainProps = {
};
type MainState = {
  currentPage : number;
  previousPage : number;
};

export default class Main extends React.Component<MainProps, MainState> {
  constructor(props:MainProps) {
    super(props);
    this.state = {currentPage: 1, previousPage: 0};
 
  }
  render(): React.ReactElement {
  return (
    <div className="App">{(() => {
      switch (this.state.currentPage) {
        case 1:
          return (<Page1 name = {"Wir sind auf Page " + this.state.currentPage} setCurrentPage={this.setCurrentPage.bind(this)} goBack={this.goBack.bind(this)}></Page1>);
        case 2:
          return (<Page2 name = {"Wir sind auf Page " + this.state.currentPage} setCurrentPage={this.setCurrentPage.bind(this)} goBack={this.goBack.bind(this)}></Page2>);
        case 3:
          return (<Page3 name = {"Wir sind auf Page " + this.state.currentPage} setCurrentPage={this.setCurrentPage.bind(this)} goBack={this.goBack.bind(this)}></Page3>);  
        case 4:
          return (<Page4 name = {"Wir sind auf Page " + this.state.currentPage} setCurrentPage={this.setCurrentPage.bind(this)} goBack={this.goBack.bind(this)}></Page4>);
        case 5:
          return (<Page5 name = {"Wir sind auf Page " + this.state.currentPage} setCurrentPage={this.setCurrentPage.bind(this)} goBack={this.goBack.bind(this)}></Page5>);
        case 6:
          return (<Page6 name = {"Wir sind auf Page " + this.state.currentPage} setCurrentPage={this.setCurrentPage.bind(this)} goBack={this.goBack.bind(this)}></Page6>);
        case 7:
          return (<Page7 name = {"Wir sind auf Page " + this.state.currentPage} setCurrentPage={this.setCurrentPage.bind(this)} goBack={this.goBack.bind(this)}></Page7>);
        case 8:
          return (<Page8 name = {"Wir sind auf Page " + this.state.currentPage} setCurrentPage={this.setCurrentPage.bind(this)} goBack={this.goBack.bind(this)}></Page8>);
        case 9:
          return (<Page9 name = {"Wir sind auf Page " + this.state.currentPage} setCurrentPage={this.setCurrentPage.bind(this)} goBack={this.goBack.bind(this)}></Page9>);
        case 10:
          return (<Page10 name = {"Wir sind auf Page " + this.state.currentPage} setCurrentPage={this.setCurrentPage.bind(this)} goBack={this.goBack.bind(this)}></Page10>);
        case 11:
          return (<Page11 name = {"Wir sind auf Page " + this.state.currentPage} setCurrentPage={this.setCurrentPage.bind(this)} goBack={this.goBack.bind(this)}></Page11>);
        case 12:
          return (<Page12 name = {"Wir sind auf Page " + this.state.currentPage} setCurrentPage={this.setCurrentPage.bind(this)} goBack={this.goBack.bind(this)}></Page12>);
  
        default:
          break;
      }
      })()}
    </div>
  );
}

private setCurrentPage(openPage:number):void {
  this.setState({previousPage: this.state.currentPage});
  this.setState({currentPage: openPage});
}
private goBack(): void {
  let safeCurrentPage:number = this.state.currentPage;
  this.setState({currentPage: this.state.previousPage});
  this.setState({previousPage: safeCurrentPage});
}
}

