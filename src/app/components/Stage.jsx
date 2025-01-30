import s from "../styles/stage.module.css";

const Stage = () => {
    return (
        <>
        <section className={s.sectionStage}>
        <p className={s.title}>Stages of web service development</p>
            <div className={s.container}>
                <div className={s.stage}>
                    <p className={s.stageNumber}>1</p>
                    <p className={s.stageTitle}>Consulting and analytics</p>
                    <p className={s.stageDescription}>
                        We manage every aspect of the project that is entrusted to our
                        team, and provide you with detailed reports about what we’re
                        doing — along with updates from the project manager.
                    </p>
                </div>
                <div className={s.stage}>
                    <p className={s.stageNumber}>2</p>
                    <p className={s.stageTitle}>UI/UX design</p>
                    <p className={s.stageDescription}>
                        We manage every aspect of the project that is entrusted to our
                        team, and provide you with detailed reports about what we’re
                        doing — along with updates from the project manager.
                    </p>
                </div>
                <div className={s.stage}>
                    <p className={s.stageNumber}>3</p>
                    <p className={s.stageTitle}>Developing a web service</p>
                    <p className={s.stageDescription}>
                        We manage every aspect of the project that is entrusted to our
                        team, and provide you with detailed reports about what we’re
                        doing — along with updates from the project manager.
                    </p>
                </div>
            </div>
        </section>
        </>
    );
};

export default Stage;
