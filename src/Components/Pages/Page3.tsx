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
          <Layout className="regularPage">
            <div style={styles.gridContainer}>
              <div></div>
              <div>
            <h1 style={styles.textStyleH1}>  Wie viele Verbandskästen möchten Sie ungefähr spenden? </h1>
            </div>
            <div>
              1
            <input style={styles.sliderStyle} type="range" min="1" max="50" /*value="1" class="slider"*/ id="mySlider"></input>
            >50
            </div>
            <div>
            <button style={styles.buttonStyle} onClick ={()=>this.setCurrentPage(7)}>Weiter</button>
            </div>
            <div>
            <button style={styles.backButtonStyle} onClick ={()=>this.goBack()}>Zurück</button>
            </div>
            </div>
         </Layout>);
        /*Schieberegler von 1 bis >50 und dann <5 zu Fenster4​ <20 zu Fenster 5​ >20 zu Fenster 12 */
}


}