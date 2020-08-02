import React from "react";
import PageProps from "../PageProps";
import {BasePage} from "../BasePage";
import {Layout} from "../Layout";
import * as styles from "../css/PageStyle";
import { url } from "inspector";
import PersonType from "../PersonType";



export class Page11 extends BasePage {
  constructor(props:PageProps) {
    super(props);
  }
    render(): React.ReactElement {
        return(
          <Layout className="regularPage">
            <div style={styles.gridContainer}>
              <div></div>
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
          <button style={styles.buttonStyle} onClick ={()=>this.setCurrentPage(1, PersonType.Unknown,"")}>home</button>
          </div>
         { /*<div>
          <button style={styles.backButtonStyle} onClick ={()=>this.goBack()}>Zurück</button>
          </div>*/}
          <table style={styles.tableStyle}>
            <tr>
              <td>
                <a href="https://www.facebook.com/pages/category/Nonprofit-Organization/Verbandskasten-20-231756440729988/" target="_blank">
                <img src="./Assets/facebook.png" alt="facebook" style={styles.imgStyle}></img>
                </a>
              </td>
              <td>
                <a href="https://www.instagram.com/verbandskasten2.0/?hl=de" target="_blank">
                <img src="./Assets/instagram.jpg" alt="instagram" style={styles.imgStyle}></img>
                </a>
              </td>
              <td>
                <a href="https://twitter.com/vk_2_0" target="_blank">
                <img src="./assets/twitter.jpg" alt="twitter" style={styles.imgStyle}></img>
                </a>
              </td>
            </tr>
          </table>
          
          </div>
        </Layout>

        );

}

}