import React from "react";
import PageProps from "../PageProps";
import {BasePage} from "../BasePage";
import {Layout} from "../Layout";
import * as styles from "../css/PageStyle";
import PersonType from "../PersonType";



export class Page5 extends BasePage {
  constructor(props: PageProps) {
    super(props);
  }
  render(): React.ReactElement {
    return (
      <Layout className="regularPage">
        <h1 style={styles.textStyleH1}>
          {" "}
          Bitte senden Sie Ihre Sachspende an folgende Adresse:{" "}
        </h1>
        <button style={styles.fromularButtonStyle} onClick={() => this.setCurrentPage(3, PersonType.Unknown,"")}>Verbandskasten 2.0 e.V. <br></br>Hans-Stockmar Str. 26 <br></br> 24568 Kaltenkirchen</button>
        <h2 style={styles.textStyleH1}>
          Vielen Dank für die Spende Ihrer Verbandsmaterialien!
        </h2>
        <h2 style={styles.textStyleH2}>
          Beim Transport Ihrer Verbandsmaterialien in die Projektländer
          entstehen uns insgesamt Kosten von etwa 1€ pro Verbandskasten.
          Unterstützen Sie uns gerne mit einer Spende dabei, diese Kosten zu
          decken und unser Projekt auch in Zukunft erfolgreich durchführen zu
          können.
        </h2>
        <form
          action="https://www.paypal.com/cgi-bin/webscr"
          method="post"
          target="_top"
        >
          <input type="hidden" name="cmd" value="_s-xclick" />​
          <input type="hidden" name="hosted_button_id" value="TA4EN3GUKR57L" />​
          <input
            type="image"
            src="https://raw.githubusercontent.com/stefan-niedermann/paypal-donate-button/master/paypal-donate-button.png"
            name="submit"
            title="PayPal - The safer, easier way to pay online!"
            alt="Spenden mit dem PayPal-Button"
            style={styles.payPalButtonStyle}
          />
          ​
          <img
            alt=""
            src="https://www.paypal.com/de_DE/i/scr/pixel.gif"
            width="1"
            height="1"
          />
          ​
        </form>
        <button style={styles.backButtonStyle} onClick={() => this.goBack()}>
          Zurück
        </button>
      </Layout>
    );
  }
}