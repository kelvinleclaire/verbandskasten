import React from "react";
import PageProps from "./PageProps";
import {BasePage} from "./BasePage";


export class Page6 extends BasePage {
  constructor(props:PageProps) {
    super(props);
    this.setCurrentPage.bind(this);
  }
    render(): React.ReactElement {
        return(
        <h1>  Hello, {this.props.name}
        <button onClick ={()=>this.setCurrentPage(3)}>Einmalig</button>
        <button onClick ={()=>this.setCurrentPage(9)}>Sammelaktion für Kunden und/ oder Mitarbeiter</button>
        <button onClick ={()=>this.setCurrentPage(8)}>Regelmäßig</button>
        <button onClick ={()=>this.goBack()}>Zurück</button>

        </h1>
        );

}

}