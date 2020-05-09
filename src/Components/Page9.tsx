import React from "react";
import PageProps from "./PageProps";
import {BasePage} from "./BasePage";


export class Page9 extends BasePage {
  constructor(props:PageProps) {
    super(props);
    this.setCurrentPage.bind(this);
  }
    render(): React.ReactElement {
        return(
        <h1>  Hello, {this.props.name}
        <p>
            Wir freuen uns sehr, dass Sie Ihren Kunden und/oder Mitarbeitern das Spenden 
            abgelaufener Verbandsmaterialien ermöglichen möchten. 
            Setzen Sie sich dazu bitte über das unten stehende Formular mit uns in Verbindung.
        ​​</p>
        <button onClick ={()=>this.setCurrentPage(11)}>Kontaktformular Abfrage Name, Mail, Text, DSGVO Häckchen</button>
        <button onClick ={()=>this.goBack()}>Zurück</button>

        </h1>
        );

}

}