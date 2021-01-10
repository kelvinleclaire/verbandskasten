import CSS from "csstype";
import { url } from "inspector";
import backgroundImg from "../../Assets/background.png";
import "./PageStyle.css";

export const pageBackground: CSS.Properties = {
    backgroundImage: `url(${backgroundImg})`,
};

export const buttonStyle: CSS.Properties = {
    backgroundColor: "#E1112C",
    textAlign: "center",
    fontSize: "22px",
    borderRadius: "25px",
    width: "350px",
    height: "100px",
    fontFamily: "OpenSansBold",
    fontWeight: "bold",
    color: "white",
    marginBottom: "30px"
};
export const backButtonStyle: CSS.Properties = {
    backgroundColor: "#CDCDCD",
    textAlign: "center",
    borderRadius: "15px",
    fontSize: "16px",
    width: "150px",
    height: "50px",
    fontFamily: "OpenSansBold",
    color: "white",
    marginTop: "20px",
};

export const fromularButtonStyle: CSS.Properties = {
    backgroundColor: "#E1112C",
    textAlign: "center",
    fontSize: "30px",
    borderRadius: "25px",
    width: "500px",
    height: "300px",
    fontFamily: "OpenSansBold",
    fontWeight: "bold",
    color: "white",
};

export const payPalButtonStyle: CSS.Properties = {
    width: "200px",
    height: "100px",
};

export const textStyleH1: CSS.Properties = {
    fontFamily: "OpenSansExtraBold",
    fontWeight: "bold",
    fontSize: "28px",
};

export const textStyleH2: CSS.Properties = {
    fontFamily: "OpenSansBold",
    fontSize: "16px",
};

export const gridContainer: CSS.Properties = {
    display: "grid",
    gridTemplateColumns: "1fr",
    gridTemplateRows: "repeat(auto-fit, minmax(300px, 1fr))",
};

export const formHeaderStyle: CSS.Properties = {
    padding: "100px"
};

export const rowStyle: CSS.Properties = {
    paddingTop: "20%",
};


export const formBorderStyle: CSS.Properties = {
    border: "1px solid rgba(167,167,167,.4)"
};

export const sliderStyle: CSS.Properties = {
    width: "70%",
    height: "8.4px",
    background: "#E1112C",

};

export const tableStyle: CSS.Properties = {
    marginLeft: "auto",
    marginRight: "auto"
};

export const imgStyle: CSS.Properties = {
    width: "100px",
    height: "100px",
};

export const textAriaStyle: CSS.Properties = {
    height: "160px",
    lineHeight: "2",
    overflow: "auto",
    width: "100%",
    color: "#444",
    padding: "12px",
    fontSize: "1em",
    borderRadius: "2px",
    fontFamily: "inherit",
    boxSizing: "border-box",
    border: "1px solid rgba(167,167,167,.4)"
};

export const inputStyle: CSS.Properties = {
    width: "100%",
    color: "#444",
    padding: "12px",
    fontSize: "1em",
    borderRadius: "2px",
    fontFamily: "inherit",
    boxSizing: "border-box",
    border: "1px solid rgba(167,167,167,.4)"

};

export const checkboxStyle: CSS.Properties = {
    width: "auto !important",
    display: "inline-block !important",
    margin: "0 10px 0 0 !important",
    padding: "5px !important",
    verticalAlign: "middle !important",
    WebkitAppearance: "checkbox"
};

export const submitButtonStyle: CSS.Properties = {
    backgroundColor: "#E1112C",
    textAlign: "center",
    fontSize: "15px",
    borderRadius: "25px",
    width: "200px",
    height: "75px",
    fontFamily: "OpenSansBold",
    fontWeight: "bold",
    color: "white",
    marginTop: "20px",
};
export const skipButtonStyle: CSS.Properties = {
    backgroundColor: "#E1112C",
    textAlign: "center",
    fontSize: "15px",
    borderRadius: "25px",
    width: "200px",
    height: "75px",
    fontFamily: "OpenSansBold",
    fontWeight: "bold",
    color: "white",
    float: "right",
    marginTop: "20px",
};



export const sendStlye: CSS.Properties = {
    fontFamily: "OpenSansExtraBold",
    fontWeight: "bold",
    fontSize: "28px",
};

export const buttonContainer: CSS.Properties = {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))"
};


