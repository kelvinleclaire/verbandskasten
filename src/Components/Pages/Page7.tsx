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
              <div></div>
              <div>
                <h1 style={styles.textStyleH1}>  Wie häufig möchten Sie spenden? </h1>
                </div>
                
                <table style={styles.tableStyle}>
                  <tr>
                    <td>
                    <button style={styles.buttonStyle} onClick ={()=>this.setCurrentPage(3, PersonType.Unknown)}>Einmalig</button>
                    </td>
                    <td>
                      <button style={styles.buttonStyle} onClick ={()=>this.setCurrentPage(10, PersonType.Unknown)}>Sammelaktion für Mitglieder und/ oder Mitarbeiter</button>
                    </td>
                    <td>
                      <button style={styles.buttonStyle} onClick ={()=>this.setCurrentPage(8, PersonType.Unknown)}>Regelmäßig</button>
                    </td>                                                          
                  </tr>
                </table>
                
                <div>
                <button style={styles.backButtonStyle} onClick ={()=>this.goBack()}>Zurück</button>
              </div>
            </div>
          </Layout>
         );

}

}