import  PropTypes from "prop-types"
import styles from "./Button.module.css";
function Button({ text }){
    return <button className={styles.btn}
    >
        {text}</button>;

}
Button.prototype = {
    text : PropTypes.string.isRequired, // Button 함수에는 props에 무조건 string이 들어가야함
}
export default Button;