import React from "react";
import PageProps from "../PageProps";
import {BasePage} from "../BasePage";
import {Layout} from "../Layout";
import * as styles from "../css/PageStyle";
import PersonType from "../PersonType";



export class Page7 extends BasePage {
  constructor(props:PageProps) {
    super(props);
  }
    render(): React.ReactElement {
        return(
          <Layout className="regularPage">
            <div style={styles.gridContainer}>
              <div style={styles.rowStyle}>
                <h1 style={styles.textStyleH1}>  Wie häufig möchten Sie spenden? </h1>
              </div>
              <div style={styles.buttonContainer}>
                <div>
                  <button style={styles.buttonStyle} onClick ={()=>this.setCurrentPage(3, PersonType.Unknown, "Einmalig")}>Einmalig</button>
                </div>
                <div>
                  <button style={styles.buttonStyle} onClick ={()=>this.setCurrentPage(10, PersonType.Unknown, "Sammelaktion für Mitglieder und/ oder Mitarbeiter")}>Sammelaktion für Mitglieder und/ oder Mitarbeiter</button>
                </div>
                <div>
                  <button style={styles.buttonStyle} onClick ={()=>this.setCurrentPage(8, PersonType.Unknown, "Regelmäßig")}>Regelmäßig</button>
                </div>
              </div>
                <div>
                <button style={styles.backButtonStyle} onClick ={()=>this.goBack()}>Zurück</button>
              </div>
            </div>
          </Layout>
         );

}

}