import React from "react";
import PageProps from "../PageProps";
import {BasePage} from "../BasePage";
import {Layout} from "../Layout";
import * as styles from "../css/PageStyle";



export class Page8 extends BasePage {
  constructor(props:PageProps) {
    super(props);
  }
    render(): React.ReactElement {
        return(
          <Layout className="regularPage">
            <h1 style={styles.textStyleH1}>Gerne finden wir eine individuelle Lösung für unsere regelmäßige Zusammenarbeit.
            Setzen Sie sich dafür über das unten stehende Formular mit uns in Verbindung.</h1>
            <button style={styles.buttonStyle} onClick ={()=>this.setCurrentPage(11)}>Kontaktformular Abfrage Name, Mail, Text, DSGVO Häckchen</button>
            <button style={styles.buttonStyle} onClick ={()=>this.goBack()}>Zurück</button>
          </Layout>
        );

}

}