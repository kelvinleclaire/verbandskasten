import React from "react";
import PageProps from "../PageProps";
import {BasePage} from "../BasePage";
import {Layout} from "../Layout";
import * as styles from "../css/PageStyle";



export class Page6 extends BasePage {
  constructor(props:PageProps) {
    super(props);
  }
    render(): React.ReactElement {
        return(
          <Layout>
            <h1>  Wie häufig möchten Sie spenden? </h1>
            <button style={styles.buttonStyle} onClick ={()=>this.setCurrentPage(3)}>Einmalig</button>
            <button style={styles.buttonStyle} onClick ={()=>this.setCurrentPage(9)}>Sammelaktion für Kunden und/ oder Mitarbeiter</button>
            <button style={styles.buttonStyle} onClick ={()=>this.setCurrentPage(8)}>Regelmäßig</button>
            <button style={styles.buttonStyle} onClick ={()=>this.goBack()}>Zurück</button>
         </Layout>
         );

}

}