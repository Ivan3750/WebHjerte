import s from "../styles/people.module.css"

const People = () => {
    
    const peoples = [{
        name: "Oliver",
        text: "Thank you, everything is really great. I made a great zombie tap game myself, helped with the website, and wrote instructions. I can recommend "
    },{
        name: "Oliver",
        text: "Thank you, everything is really great. I made a great zombie tap game myself, helped with the website, and wrote instructions. I can recommend "
    },{
        name: "Oliver",
        text: "Thank you, everything is really great. I made a great zombie tap game myself, helped with the website, and wrote instructions. I can recommend "
    },{
        name: "Oliver",
        text: "Thank you, everything is really great. I made a great zombie tap game myself, helped with the website, and wrote instructions. I can recommend "
    }]
    return (
        <section className={s.peoplesection}>
         <div>
        <p className={s.peopletitle} >What say people about us?</p>
        <div className={s.feedbackbox}>
        {peoples.map((people, index) => (
            <div key={index} className={s.feedback}>
                <div className={s.feedbackName}>
                    <p>{people.name}</p>
                </div>
                <p className={s.feedbackInfo}>{people.text}</p>
            </div>
            ))}
        </div>
    </div> 
            </section>
    );
}
 
export default People;