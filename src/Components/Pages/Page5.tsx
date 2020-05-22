import React from "react";
import PageProps from "../PageProps";
import {BasePage} from "../BasePage";
import {Layout} from "../Layout";
import * as styles from "../css/PageStyle";



export class Page5 extends BasePage {
  constructor(props:PageProps) {
    super(props);
  }
    render(): React.ReactElement {
        return(
          <Layout className="regularPage">
          <h1 style={styles.textStyleH1}>  Bitte senden Sie Ihre Sachspende an folgende Adresse: </h1>
          <button onClick ={()=>this.setCurrentPage(3)}>Ben Kolzau</button>
          <h2 style={styles.textStyleH2}>Vielen Dank für die Spende Ihrer Verbandsmaterialien!</h2>
          <h2 style={styles.textStyleH2}>Beim Transport Ihrer Verbandsmaterialien in die Projektländer entstehen uns insgesamt 
            Kosten von etwa 1€ pro
            Verbandskasten. Unterstützen Sie uns gerne mit einer Spende dabei, diese Kosten zu decken und unser Projekt auch in Zukunft
            erfolgreich durchführen zu können.</h2>
          <button style={styles.buttonStyle} onClick ={()=>this.goBack()}>Zurück</button>
        </Layout>);

/* Paypal link und so muss hier hin.*/
}

}