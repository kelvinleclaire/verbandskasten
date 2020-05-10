import React from "react";
import PageProps from "./PageProps";
import {BasePage} from "./BasePage";


export class Page8 extends BasePage {
  constructor(props:PageProps) {
    super(props);
  }
    render(): React.ReactElement {
        return(
        <h1>  Hello, {this.props.name}
        <p>Gerne finden wir eine individuelle Lösung für unsere regelmäßige Zusammenarbeit.
            Setzen Sie sich dafür über das unten stehende Formular mit uns in Verbindung.​</p>
        <button onClick ={()=>this.setCurrentPage(11)}>Kontaktformular Abfrage Name, Mail, Text, DSGVO Häckchen</button>
        <button onClick ={()=>this.goBack()}>Zurück</button>

        </h1>
        );

}

}