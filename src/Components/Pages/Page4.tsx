import React from "react";
import PageProps from "../PageProps";
import { BasePage } from "../BasePage";
import { Layout } from "../Layout";
import * as styles from "../css/PageStyle";
import PersonType from "../PersonType";
import { SmallUserForm } from "../SmallUserForm";

export class Page4 extends BasePage {
  constructor(props: PageProps) {
    super(props);
  }
  render(): React.ReactElement {
    return (
      <Layout className="regularPage">
                   <div>
                <div style={styles.formHeaderStyle}>
                <h1 style={styles.textStyleH1}>Vielen Dank! Bitte tragen Sie ihren Namen und ihre E-Mail Adresse ein
                                              damit wir Ihnen die genauen Details zukommen lassen können.
                </h1>
                </div>
                <div>
                <SmallUserForm onSubmit = {() => window.open('https://verbandskasten-spenden.de/danke',"_self")} personType= {this.props.personType} frequency={this.props.frequency}></SmallUserForm>
                </div>

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

                <div>
                <button style={styles.backButtonStyle} onClick ={()=>this.goBack()}>Zurück</button>
              </div>
            </div> 
      </Layout>
    );
  }
}
