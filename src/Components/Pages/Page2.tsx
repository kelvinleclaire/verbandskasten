import React from "react";
import PageProps from "../PageProps";
import { BasePage } from "../BasePage";
import { Layout } from "../Layout";
import * as styles from "../css/PageStyle";
import PersonType from "../PersonType";

export class Page2 extends BasePage {
  constructor(props: PageProps) {
    super(props);
  }
  render(): React.ReactElement {
    return (
      <Layout className="regularPage">
        <div style={styles.gridContainer}>
          <div></div>
          <div>
            <h1 style={styles.textStyleH1}> Sie sind: </h1>
          </div>
          <div>
            <table style={styles.tableStyle}>
              <tr>
                <td>
                <button
                  style={styles.buttonStyle}
                  onClick={() => this.setCurrentPage(3, PersonType.PrivatePerson)}
                >
                  Privatperson
                 </button>
                </td>
                <td>
                  <button
                    style={styles.buttonStyle}
                    onClick={() => this.setCurrentPage(6, PersonType.Company)}
                  >
                    Unternehmensvertreter
                  </button>
                </td>
                <td>
                  <button
                    style={styles.buttonStyle}
                    onClick={() => this.setCurrentPage(7, PersonType.Club)}
                  >
                    Vereinsvertreter
                 </button>
                </td>
              </tr>
            </table>
            </div>
            <div>
            <button style={styles.backButtonStyle} onClick={() => this.goBack()}>
              Zurück
            </button>
            </div>
        </div>
      </Layout>
    );
  }
}
