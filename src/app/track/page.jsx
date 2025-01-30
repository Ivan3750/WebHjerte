import s from "@/app/styles/track.module.css"
import { FaCheck } from "react-icons/fa6";

const Track = () => {
    return ( 
    <div className={s.track}>
    <h2 className={s.projectTitle}>Track project</h2>
        <div className={s.inputContainer}>
            <input type="number" className={s.projectCodeInput} placeholder="Enter project code"/>
            <button className={s.getDetailsButton}>Get details</button>
        </div>
        <div className={s.projectDetails}>
            <div className={s.projectPhases}>
                <div className={s.phase}>
                    <div className={s.phaseIndicator}><FaCheck className={s.phaseIndicatorIcon} /></div>
                    <p className={s.phaseName}>Get Ideas</p>
                </div>
                <div className={s.line}></div>
                <div className={s.phase}>
                    <div className={s.phaseIndicator}><FaCheck className={s.phaseIndicatorIcon} /></div>
                    <p className={s.phaseName}>Design</p>
                </div>
                <div className={s.line}></div>
                <div className={s.phase}>
                    <div className={s.phaseIndicator}><FaCheck className={s.phaseIndicatorIcon} /></div>
                    <p className={s.phaseName}>Development</p>
                </div>
                <div className={s.line}></div>
                <div className={s.phase}>
                    <div className={s.phaseIndicator}><FaCheck className={s.phaseIndicatorIcon} />
                    </div>
                    <p className={s.phaseName}>Done</p>
                </div>
            </div>
            <div className={s.projectTimer}>
                <p className={s.timeRemaining}>3d 5h 23min</p>
                <button className={s.openBetaButton}>Open beta-version</button>
            </div>
        </div>
        <div className={s.projectInfo}>
    <div>
            <div className={s.projectNameDetails}>
                <p className={s.projectName}>Name: Social Media</p>
                <p className={s.projectDescription}>
               <span className={s.projectDescriptionTitle}>Details:</span>  Website development process encompasses several key stages. We leverage expert development, rigorous
testing, and seamless.Website development process encompasses several key stages. We leverage expert development, rigorousWebsite development process encompasses several key stages. We leverage expert development, rigorous
testing, and seamless.Website development process encompasses several key stages. We leverage expert development, rigorous
testing, and seamless.
testing, and seamless.

                </p>
            </div>
            <div className={s.technologyInfo}>
                <p className={s.technologyTitle}>Technology</p>
                <div className={s.technologyIcons}>
                    <div className={s.techIcon}></div>
                    <div className={s.techIcon}></div>
                    <div className={s.techIcon}></div>
                </div>
            </div>
            </div>
            <div className={s.changePrompt}>
                <h3 className={s.promptTitle}>You want to change?</h3>
                <textarea className={s.textarea} name="" id=""></textarea>
                <button className={s.submitButton}>Submit</button>
            </div>
            </div>

        </div>  );
}
 
export default Track;