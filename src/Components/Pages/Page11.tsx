import React from "react";
import PageProps from "../PageProps";
import {BasePage} from "../BasePage";
import {Layout} from "../Layout";
import * as styles from "../css/PageStyle";



export class Page11 extends BasePage {
  constructor(props:PageProps) {
    super(props);
  }
    render(): React.ReactElement {
        return(
          <Layout className="regularPage">
            <div style={styles.gridContainer}>
              
              <div>
             <h1 style={styles.textStyleH1}>
              Vielen Dank für Ihr Interesse und Ihre Anfrage! Wir setzen uns​
              schnellstmöglich mit Ihnen in Verbindung. Bitte haben Sie​
              dafür Verständnis, dass die Antwort einige Tage dauern kann,​
             da wir alle ehrenamtlich tätig sind.​
              Bleiben Sie darüber hinaus über unsere Social Media Kanäle auf dem Laufenden!​​
            </h1>
            </div>
            <div>
          <button style={styles.buttonStyle} onClick ={()=>this.setCurrentPage(1)}>home</button>
          </div>
         { /*<div>
          <button style={styles.backButtonStyle} onClick ={()=>this.goBack()}>Zurück</button>
          </div>*/}
          Facebook Insta Twitter Icons
          </div>
        </Layout>

        );

}

}