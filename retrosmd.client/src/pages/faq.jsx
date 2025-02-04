import classes from '../styles/layout.module.css';
import sClasses from '../styles/components/faq.module.css';

function About() {
    return (
        <div className={`${classes._}`}>
            <p className={`${classes.SectionTitle}`}>FAQ</p>
            <div className={`${classes._}`}>
                <div className={`${sClasses.RepairSection}`}>
                    <div className={`${classes.SectionTitleWrapper} ${sClasses.RepairSectionTitle} `}>
                        <i className='bx bxs-wrench'></i>
                        <p className={`${classes.SectionSubTitle}`}>How does the repair process work?</p>
                    </div>
                    <div className={`${sClasses.RepairSteps}`}>
                        <div>
                            <p>1. Reach out to us via email, include information about the items you want serviced. We will follow up with you and provide and initial price.</p>
                            {/*<p>1. Start a quote, select your desired mod(s) or repair(s) and fill out the necessary info. We will provide you with an initial price and follow up with you via email.</p>*/}
                        </div>

                        <div>
                            <p>2. Once we have followed up we will provide the information needed for you to send in your item(s).</p>
                        </div>

                        <div>
                            <p>3. We will keep you up to date on each step of the repair process and reach out to you if we have any questions.</p>
                        </div>

                        <div>
                            <p>4. After the job is complete, we will send over an invoice for repair/modifications.</p>
                        </div>

                        <div>
                            <p>5. Once the invoice is paid, we will ship the item(s) back.</p>
                        </div>
                    </div>
                </div>

                <div className={`${sClasses.RepairSection}`}>
                    <div className={`${classes.SectionTitleWrapper} ${sClasses.RepairSectionTitle}`}>
                        <i className='bx bxs-calendar' ></i>
                        <p className={`${classes.SectionSubTitle}`}>What is the turn around time on services?</p>
                    </div>
                    <div className={`${sClasses.SectionContent}`}>
                        <p>The turn around time can vary based on many things:</p>
                        <ul>
                            <li>Shipping times, unfortunately we do not control the shipping services. If a repair is urgent you can upgrade the shipping with your carrier.</li>
                            <li>Parts availability, Since we cover a wide range of consoles it is impossible to keep all of the parts on hand.</li>
                            <li>Backlog, we try our best to process repairs that have been waiting first.</li>
                        </ul>
                        <p>Rest assured that we will keep you up to date with what is going on with your order regularly, and if you have any questions about the order shoot an email over to <a href="Mailto:Support@RetroSMD.com">Support@RetroSMD.com</a></p>
                    </div>
                </div>

                <div className={`${sClasses.RepairSection}`}>
                    <div className={`${classes.SectionTitleWrapper} ${sClasses.RepairSectionTitle}`}>
                        <i className='bx bx-store-alt' ></i>
                        <p className={`${classes.SectionSubTitle}`}>Do you have a physical store?</p>
                    </div>
                    <div className={`${sClasses.SectionContent}`}>
                        <p>No, we operate exclusively online.</p>
                    </div>
                </div>

                <div className={`${sClasses.RepairSection}`}>
                    <div className={`${classes.SectionTitleWrapper} ${sClasses.RepairSectionTitle}`}>
                        <i className='bx bx-disc' ></i>
                        <p className={`${classes.SectionSubTitle}`}>Do you do disc resurfacing?</p>
                    </div>
                    <div className={`${sClasses.SectionContent}`}>
                        <p>Not currently, it is something we are looking into.</p>
                    </div>
                </div>

                <div className={`${sClasses.RepairSection}`}>
                    <div className={`${classes.SectionTitleWrapper} ${sClasses.RepairSectionTitle}`}>
                        <i className='bx bx-memory-card' ></i>
                        <p className={`${classes.SectionSubTitle}`}>Do you do soft mods like installing cfw?</p>
                    </div>
                    <div className={`${sClasses.SectionContent}`}>
                        <p>We do not. However, we can do things like installing swiss or FreeMcboot on user provided memory cards.</p>
                    </div>
                </div>

                <div className={`${sClasses.RepairSection}`}>
                    <div className={`${classes.SectionTitleWrapper} ${sClasses.RepairSectionTitle}`}>
                        <i className='bx bx-notepad'></i>
                        <p className={`${classes.SectionSubTitle}`}>Do you offer a warranty on your work?</p>
                    </div>
                    <div className={`${sClasses.SectionContent}`}>
                        <p>Yes, If a repair or mod is unsatisfactory, reach out to us at <a href="Mailto:Support@RetroSMD.com">Support@RetroSMD.com</a> with your order number and we will follow up. Most Repairs are covered under a 90 day limited warranty.</p>

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

                <div className={`${sClasses.RepairSection}`}>
                    <div className={`${classes.SectionTitleWrapper} ${sClasses.RepairSectionTitle}`}>
                        <i className='bx bx-gift' ></i>
                        <p className={`${classes.SectionSubTitle}`}>Do you accept donations?</p>
                    </div>
                    <div className={`${sClasses.SectionContent}`}>
                        <p>Yes! We accept donatations of games, game consoles, and electronics in varying conditions! Our mission is to keep these awesome pieces of tech out of dumps, so we will work to fix them up and find them a home. We will be donating 50% of all the profits from donations to <a className="linkinline" href="https://girlswhocode.com/about-us">Girls who code</a> for 2025.</p>
                        <p>If you are interested in donating use our quoting page and select &quot;I would like to make a donation&quot;.</p>
                    </div>
                </div>

            </div>
        </div>
    );
}

export default About;