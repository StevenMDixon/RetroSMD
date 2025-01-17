import classes from '../styles/about.module.css';

function About() {
    return (
        <div className={`${classes.aboutcontent}`}>
            <div>
                <p>About RetroSMD</p>
                <p>RetroSDM is a premier console modification and repair service located in Norcross, GA. Our mission is to prevent electronic waste by reviving and repurposing vintage technology. Recently launched, we offer a comprehensive range of repair and modification services for both classic and modern gaming consoles. Currently, we operate exclusively online.</p>
            </div>

            <p>FAQ</p>
            <div className={`${classes.qna_wrapper}`}>
                <div className={`${classes.qna_card}`}>
                    <div className={`${classes.qna_card_title}`}>
                        <p>How does the repair process work?</p>
                    </div>
                    <div className={`${classes.qna_card_content}`}>
                        <p>Simply start a quote, select your desired mods or repairs and fill out the necessary info. We will provide you with an initial quote and follow up with you via email.</p>
                        <p>Once we have followed up we will provide the information needed for you to send in your item(s).</p>
                        <p>We will keep you up to date on each step of the repair process and reach out to you if we have any questions.</p>
                        <p>After the repair is complete we will ship the item(s) back to you.</p>
                    </div>
                </div>

                <div className={`${classes.qna_card}`}>
                    <div className={`${classes.qna_card_title}`}>
                        <p>What is the turn around time on services?</p>
                    </div>
                    <div className={`${classes.qna_card_content}`}>
                        <p>The turn around time can vary based on many things:</p>
                        <ul>
                            <li>Shipping times, unfortunately we do not control the shipping services. If a repair is urgent we can work on upgrading the shipping with the carrier.</li>
                            <li>Parts availability, Since we cover a wide range of consoles it is impossible to keep all of the parts on hand.</li>
                            <li>Backlog, we try our best to process repairs that have been waiting first.</li>
                        </ul>
                        <p>Rest assured that we will keep you up to date with what is going on with your order regularly, and if you have any questions about the order shoot an email over to <a href="Mailto:Support@RetroSMD.com">Support@RetroSMD.com</a></p>
                    </div>
                </div>

                <div className={`${classes.qna_card}`}>
                    <div className={`${classes.qna_card_title}`}>
                        <p>Do you do disc resurfacing?</p>
                    </div>
                    <div className={`${classes.qna_card_content}`}>
                        <p>Not currently, it is something we are looking into.</p>
                        
                    </div>
                </div>

                <div className={`${classes.qna_card}`}>
                    <div className={`${classes.qna_card_title}`}>
                        <p>Do you offer any warranties on your work?</p>
                    </div>
                    <div className={`${classes.qna_card_content}`}>
                        <p>Yes, If a repair or mod is unsatisfactory, reach out to us at <a href="Mailto:Support@RetroSMD.com">Support@RetroSMD.com</a> with your order number and we will follow up. Most Repairs are covered under a 90 day limited warranty</p>
                        <p>Click here to read about our warranty.</p>

                        <div hidden={true}>
                            RetroSMD Limited Warranty for Console Repairs

                            Warranty Period: This limited warranty covers repairs performed by RetroSMD for a period of 90 days from the date of repair.

                            Coverage: During the warranty period, RetroSMD will repair or replace any parts that are found to be defective in materials or workmanship under normal use. This warranty applies exclusively to the specific repair performed and the parts replaced during that repair.

                            Exclusions: This warranty does not cover:

                            Damage caused by misuse, abuse, accident, neglect, or improper maintenance.

                            Damage resulting from unauthorized repairs, modifications, or alterations.

                            Issues arising from normal wear and tear.

                            Problems caused by software, firmware, or any external factors not related to the repair performed by RetroSMD.

                            Service Process: To claim warranty service, please contact RetroSMD at [contact information] within the warranty period. We will provide instructions for returning the console for evaluation. RetroSMD reserves the right to inspect the console and determine whether the defect falls under the warranty coverage.

                            Limitation of Liability: RetroSMD&apos;s liability under this warranty is limited to the repair or replacement of defective parts, as determined by RetroSMD. RetroSMD is not responsible for any indirect, incidental, or consequential damages arising from the use or inability to use the repaired console.

                            Governing Law: This warranty is governed by the laws of the state of Georgia.
                        </div>
                    </div>
                </div>

                <div className={`${classes.qna_card}`}>
                    <div className={`${classes.qna_card_title}`}>
                        <p>Do you accept donations?</p>
                    </div>
                    <div className={`${classes.qna_card_content}`}>
                        <p>Yes! We accept donatations of games, game consoles, and electronics in varying conditions! Our mission is to keep these awesome pieces of tech out of dumps, so we will work to fix them up and find them a home. We will be donating 50% of all the profits from donations to <a className="linkinline" href="https://girlswhocode.com/about-us">Girls who code</a> for 2025.</p>
                        <p>If you are interested in donating use our quoting page and select &quot;I would like to make a donation&quot;.</p>
                    </div>
                </div>

            </div>
        </div>
    );
}

export default About;