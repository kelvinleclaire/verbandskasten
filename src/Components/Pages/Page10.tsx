import React from "react";
import PageProps from "../PageProps";
import {BasePage} from "../BasePage";
import {Layout} from "../Layout";
import * as styles from "../css/PageStyle";


export class Page10 extends BasePage {
  constructor(props:PageProps) {
    super(props);
    }
    render(): React.ReactElement {
        return(
          <Layout className="regularPage">
            <div style={styles.gridContainer}>
              
              <div>
                <h1 style={styles.textStyleH1}>  Wir freuen uns sehr, dass Sie Ihren Mitgliedern und Mitarbeitern das Spenden abgelaufener 
                Verbandsmaterialien ermöglichen möchten. Setzen Sie sich dazu bitte über das unten stehende Formular mit uns in Verbindung.​ </h1>
                <button style={styles.fromularButtonStyle} onClick ={()=>this.setCurrentPage(11)}>Kontaktformular Abfrage Name, Mail, Text, DSGVO Häckchen</button>
                </div>
                <div>
                <button style={styles.backButtonStyle} onClick ={()=>this.goBack()}>Zurück</button>
              </div>
              </div>
            </Layout>
        
        );

}
}