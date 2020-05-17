import React from "react";
import PageProps from "../PageProps";
import {BasePage} from "../BasePage";
import {Layout} from "../Layout";
import * as styles from "../css/PageStyle";




export class Page3 extends BasePage {
  constructor(props:PageProps) {
    super(props);
  }
    render(): React.ReactElement {
        return(
          <Layout>
            <h1 style={styles.textStyleH1}>  Wie viele Verbandskästen möchten Sie ungefähr spenden? </h1>
            <input type="range" min="1" max=">50" /*value="1" class="slider"*/ id="mySlider"></input>
            <button style={styles.buttonStyle} onClick ={()=>this.setCurrentPage(7)}>Weiter</button>
            <button style={styles.buttonStyle} onClick ={()=>this.goBack()}>Zurück</button>
         </Layout>);
        /*Schieberegler von 1 bis >50 und dann <5 zu Fenster4​ <20 zu Fenster 5​ >20 zu Fenster 12 */
}


}