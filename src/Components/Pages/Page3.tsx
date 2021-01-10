import React from "react";
import { BasePage } from "../BasePage";
import { Layout } from "../Layout";
import * as styles from "../css/PageStyle";
import PersonType from "../PersonType";




export class Page3 extends BasePage {

  render(): React.ReactElement {
    return (
      <Layout className="regularPage">
        <div style={styles.gridContainer}>
          <div style={styles.rowStyle}>
            <h1 style={styles.textStyleH1}>  Wie viele Verbandskästen möchten Sie ungefähr spenden? </h1>
          </div>

          <div style={styles.buttonContainer}>
            <div>
              <button style={styles.buttonStyle} onClick={() => window.open('https://www.verbandskasten-spenden.de/spenden/adresse/', "_self")}>1-5 Stück</button>
            </div>
            <div>
              <button style={styles.buttonStyle} onClick={() => window.open('https://www.verbandskasten-spenden.de/spenden/adresse/', "_self")}>6-20 Stück</button>
            </div>
            <div>
              <button style={styles.buttonStyle} onClick={() => this.setCurrentPage(12, PersonType.Unknown, "einmalig 21-50 oder mehr")}>21-50 oder mehr</button>
            </div>
          </div>

          <div>
            <button style={styles.backButtonStyle} onClick={() => this.goBack()}>Zurück</button>
          </div>
        </div>
      </Layout>);
  }


}