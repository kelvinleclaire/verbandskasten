import React from "react";
import PageProps from "../PageProps";
import { BasePage } from "../BasePage";
import { Layout } from "../Layout";
import * as styles from "../css/PageStyle";

export class Page6 extends BasePage {
  constructor(props: PageProps) {
    super(props);
  }
  render(): React.ReactElement {
    return (
      <Layout className="regularPage">
        <div style={styles.gridContainer}>
          <div></div>
          <div>
            <h1> Wie häufig möchten Sie spenden? </h1>
          </div>
          <div>
            <table style={styles.tableStyle}>
              <tr>
                <td>
                <button
                  style={styles.buttonStyle}
                  onClick={() => this.setCurrentPage(3)}
                  >
                  Einmalig
                </button>
                </td>
                <td>
                  <button
                    style={styles.buttonStyle}
                    onClick={() => this.setCurrentPage(9)}
                      title="Sie veranstalten regelmäßig Sammelaktionen für Kunden und/ oder Mitarbeiter"
                    >
                    Sammelaktion
                  </button>
                </td>
                <td>
                  <button
                    style={styles.buttonStyle}
                    onClick={() => this.setCurrentPage(8)}
                    >
                    Regelmäßig
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
