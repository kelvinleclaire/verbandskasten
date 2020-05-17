import React from "react";
import PageProps from "../PageProps";
import {BasePage} from "../BasePage";
import {Layout} from "../Layout";
import * as styles from "../css/PageStyle";


export class Page2 extends BasePage {
  constructor(props:PageProps) {
    super(props);
  }
    render(): React.ReactElement {
        return(
          <Layout>
            <h1 style={styles.textStyleH1}>  Sie sind: </h1>
            <button style={styles.buttonStyle} onClick ={()=>this.setCurrentPage(3)}>Privatperson</button>
            <button style={styles.buttonStyle} onClick ={()=>this.setCurrentPage(6)}>Unternehmensvertreter</button>
            <button style={styles.buttonStyle} onClick ={()=>this.setCurrentPage(7)}>Vereinsvertreter</button>
            <button style={styles.buttonStyle} onClick ={()=>this.goBack()}>Zurück</button>
        </Layout>
        );

}

}
