import { useState } from "react";
import s from "../styles/contact.module.css";

const Contact = () => {
    const [value, setValue] = useState(0);

    const handleChange = (e) => {
        setValue(e.target.value);
    };

    const sendForm = (event) => {
        event.preventDefault(); // Запобігає перезавантаженню сторінки
        console.log("Form submitted");
        console.log("Budget:", value);
        // Додайте код для надсилання даних форми
    };

    return (
        <section className={s.contactbox}>
            <p className={s.subtitle}>Contact us</p>
            <h3 className={s.title}>Ready to bring your idea to life?</h3>

            <form className={s.contactForm} onSubmit={sendForm}>
                <div className={s.contactHead}>
                    <input type="text" placeholder="Name" required className={s.contactName} />
                    <input type="email" placeholder="Email" required className={s.contactEmail} />
                </div>
                <textarea
                    placeholder="Tell us about your project"
                    className={s.aboutProject}
                    rows="8"
                    cols="50"
                    required
                ></textarea>
                <input
                    className={s.inputFile}
                    type="file"
                    title="Attach a file related to your project"
                />
                <label htmlFor="budgetRange" className={s.labelBudget}>
                    What is your budget for this project?
                </label>
                <p className={s.money}>Up to <span className={s.moneyAmount}>{value} DKK</span></p>
                <input
                    className={s.inputRange}
                    id="budgetRange"
                    type="range"
                    min={1000}
                    max={50000}
                    step={1000}
                    value={value}
                    onChange={handleChange}
                />
                <button type="submit">Submit</button>
            </form>
        </section>
    );
};

export default Contact;
