import React from "react";
import PageProps from "./PageProps";
import {BasePage} from "./BasePage";


export class Page11 extends BasePage {
  constructor(props:PageProps) {
    super(props);
  }
    render(): React.ReactElement {
        return(
        <h1>  Hello, {this.props.name}
        <p>
            Vielen Dank für Ihr Interesse und Ihre Anfrage! Wir setzen uns​
            schnellstmöglich mit Ihnen in Verbindung. Bitte haben Sie​
            dafür Verständnis, dass die Antwort einige Tage dauern kann,​
            da wir alle ehrenamtlich tätig sind.​
            Bleiben Sie darüber hinaus über unsere Social Media Kanäle auf dem Laufenden!​​
        ​​</p>
        <button onClick ={()=>this.setCurrentPage(1)}>home</button>
        <button onClick ={()=>this.goBack()}>Zurück</button>

        </h1>
        );

}

}