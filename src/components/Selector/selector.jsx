import React, {useState} from 'react';
import styles from "./selector.module.css"
const Selector = ({ onChange }) => {

    const [value, setValue] = useState("")

    const handleChange = (event) => {
        onChange(event.target.value)
    }


    return (
        <>
            <div className="selector">
                <h1>Поиск курса</h1>
                <form>
                    <input type="text" className={styles.inputText} onChange={handleChange} placeholder="Введите название курса"/>
                    <input type="submit" className={styles.smtSubmit} value="Поиск"/>
                </form>
            </div>
        </>
    );
};

export {Selector};