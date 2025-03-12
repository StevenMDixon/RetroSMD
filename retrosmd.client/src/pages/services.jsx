import classes from '../styles/layout.module.css';
import sClasses from '../styles/services.module.css';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';

const services = [
  //  { platform: "", System: "", name: "", price: "Starint at ", description: "" },
    { id: 0, platform: "All", System: "All", name: "System Recapping", price: "Starting at $30" },
    { id: 45, platform: "All", System: "All", name: "Shell/Case Swap", price: "Starting at $20" },
    { id: 1, platform: "Nintendo", System: "Gameboy", name: "Gameboy Color IPS screen Install", price: "$50", description: "" },
    { id: 2, platform: "Nintendo", System: "Gameboy", name: "Gameboy IPS screen Install", price: " $50", description: "" },
    { id: 3, platform: "Nintendo", System: "Gameboy", name: "Gameboy Pocket IPS screen Install", price: "$50", description: "" },
    { id: 4, platform: "Nintendo", System: "Gameboy", name: "Gameboy Advanced IPS screen Install", price: " $50", description: "" },
    { id: 5, platform: "Nintendo", System: "NES", name: "RGB Install", price: " $50", description: "" },
    { id: 6, platform: "Nintendo", System: "NES", name: "Top Loader AV Install", price: " $50", description: "" },
    { id: 7, platform: "Nintendo", System: "NES", name: "Controller 8Bitdo Bluetooth Mod Install", price: " $50", description: "" },
    { id: 8, platform: "Nintendo", System: "SNES", name: "SNES JR. RGB Mod Install", price: "$20", description: "" },
    { id: 9, platform: "Nintendo", System: "SNES", name: "Controller 8Bitdo Bluetooth Mod Install", price: "$20", description: "" },
    { id: 11, platform: "Nintendo", System: "Nintendo 64", name: "Hispeedido HDMI Install", price: "$50", description: ""},
    { id: 12, platform: "Nintendo", System: "Nintendo 64", name: "RGB Install", price: "$50", description: "" },
    { id: 13, platform: "Nintendo", System: "Nintendo 64", name: "Pixel FX Retro Gem HDMI Upscaler Install", price: "$50", description: "" },
    { id: 14, platform: "Nintendo", System: "Nintendo 64", name: "Ultra HDMI/HW2 Install", price: "$50", description: ""},
    { id: 15, platform: "Nintendo", System: "Nintendo 64", name: "N64Digital PixelFX HDMI Mod Install", price: "$50", description: "" },
    { id: 16, platform: "Nintendo", System: "Nintendo 64", name: "Region Free Mod Install", price: "$10", description: "" },
    { id: 17, platform: "Nintendo", System: "Nintendo 64", name: "Controller 8Bitdo Bluetooth Mod Install", price: "$20", description: "" },
    { id: 18, platform: "Nintendo", System: "Gamecube", name: "USA/JPN Region Switch Install", price: "$40", description: "" },
    { id: 19, platform: "Nintendo", System: "Gamecube", name: "Xeno Mod Chip Install", price: "$50", description: "" },
    { id: 21, platform: "Nintendo", System: "Gamecube", name: "Picoboot Install", price: "$20", description: "" },
    { id: 22, platform: "Nintendo", System: "Gamecube", name: "Silent Fan Install", price: "$20", description: "" },
    { id: 23, platform: "Nintendo", System: "Gamecube", name: "Optical Drive Repair", price: "$30", description: "" },
    { id: 24, platform: "Nintendo", System: "Gamecube", name: "Controller 8Bitdo Bluetooth Mod Install", price: "$20", description: "" },
    { id: 25, platform: "Nintendo", System: "Wii", name: "HDMI Install", price: "$80", description: "" },
    { id: 26, platform: "Playstation", System: "Playstation", name: "Region Free/Backup disc Mod Install(psnee)", price: "$60", description: "" },
    { id: 27, platform: "Playstation", System: "Playstation", name: "Pixel FX Retro Gem HDMI Upscaler Install", price: "$80", description: "" },
    { id: 28, platform: "Playstation", System: "Playstation", name: "XStation Optical Disc Emulator Install", price: "$80", description: "" },
    { id: 29, platform: "Playstation", System: "Playstation", name: "PS1Digital Install", price: "$80", description: "" },
    { id: 31, platform: "Playstation", System: "Playstation", name: "Controller 8Bitdo Bluetooth Mod Install", price: "$20", description: "" },
    { id: 32, platform: "Playstation", System: "Playstation 2", name: "Pixel FX Retro Gem HDMI Upscaler Install", price: "$80", description: "" },
    { id: 33, platform: "Sega", System: "Dreamcast", name: "Dreamcast Noctua Fan Install", price: "$50", description: "Parts Included" },
    { id: 34, platform: "Sega", System: "Dreamcast", name: "Pixel FX Retro Gem HDMI Upscaler Install", price: "$80", description: "" },
    { id: 35, platform: "Sega", System: "Game Gear", name: "LCD Install", price: "$80", description: "" },
    { id: 36, platform: "Sega", System: "Sega Saturn", name: "Controller 8Bitdo Bluetooth Mod Install", price: "$20", description: "" },
    { id: 37, platform: "Sega", System: "Genesis", name: "Controller 8Bitdo Bluetooth Mod Install", price: "$20", description: "" },
    { id: 38, platform: "Nintendo", System: "Gameboy", name: "Save Game Backup", price: "$5", description: "" },
    { id: 39, platform: "Nintendo", System: "SNES", name: "Save Game Backup", price: "$5", description: "" },
    { id: 40, platform: "Nintendo", System: "NES", name: "Save Game Backup", price: "$5", description: "" },
    { id: 41, platform: "Nintendo", System: "DS", name: "DS Lite USB-C install", price: "$20", description: "" },
    { id: 42, platform: "Nintendo", System: "3DS", name: "3DS USB-C install", price: "$20", description: "" },
    { id: 43, platform: "Nintendo", System: "SNES", name: "Super Gameboy Clock Mod Install", price: "$20", description: "" },
    { id: 44, platform: "Xbox", System: "Xbox", name: "MakeMhz HDMI Install", price: "$80", description: "" },
    { id: 45, platform: "Sega", System: "Dreamcast", name: "DCHDMI Install", price: "$80", description: "" },
    { id: 46, platform: "Sega", System: "Dreamcast", name: "GDEMU Install", price: "$80", description: "" },
    { id: 47, platform: "Sega", System: "Dreamcast", name: "PolySwitch Install", price: "$50", description: "" },
    { id: 48, platform: "Sega", System: "Dreamcast", name: "PICO PSU Install", price: "$50", description: "" },


]
const repairs = [
    { id: 0, System: "DS", name: "Top Screen Replacement", price: "$40", description: "" },
    { id: 1, System: "3DS", name: "Top Screen Replacement", price: "$50", description: "" },
    //{ id: 2, System: "SNES", name: "Thumbstick Replacement", price: "$20", description: "" },
    { id: 3, System: "Gameboy", name: "Cartridge Battery Replacement", price: "$10", description: "" },
    { id: 4, System: "NES", name: "Cartridge Battery Replacement", price: "$10", description: "" },
    { id: 5, System: "SNES", name: "Cartridge Battery Replacement", price: "$10", description: "" },
    { id: 6, System: "N64", name: "Cartridge Battery Replacement", price: "$10", description: "" },
    { id: 7, System: "GB", name: "Board Swap", price: "$40", description: "" },
    { id: 8, System: "GB", name: "Board Swap - User Provides Board ", price: "$25", description: "" },
    { id: 9, System: "GBA", name: "Board Swap", price: "$40", description: "" },
    { id: 10, System: "GBA", name: "Board Swap - User Provides Board ", price: "$25", description: "" },
    { id: 11, System: "NES", name: "Board Swap", price: "$40", description: "" },
    { id: 12, System: "NES", name: "Board Swap - User Provides Board ", price: "$25", description: "" },
    { id: 13, System: "SNES", name: "Board Swap", price: "$40", description: "" },
    { id: 14, System: "SNES", name: "Board Swap - User Provides Board ", price: "$25", description: "" },
    { id: 15, System: "Nintendo 64", name: "Board Swap", price: "$40", description: "" },
    { id: 16, System: "Nintendo 64", name: "Board Swap - User Provides Board ", price: "$25", description: "" },
    { id: 17, System: "Playstation 2", name: "Slim - Power Port Replacement", price: "$25", description: "" },
    { id: 18, System: "Playstation 2", name: "Slim - Power Supply Replacement", price: "$30", description: "" },
    { id: 19, System: "Playstation 2", name: "Phat - Power Supply Replacement", price: "$30", description: "" },
    { id: 20, System: "Playstation 2", name: "Phat - Power Supply Replacement", price: "$30", description: "" },
    { id: 21, System: "Playstation", name: "Laser Replacement", price: "20", description: "" },
    { id: 22, System: "Gamecube", name: "Laser Replacement", price: "20", description: "" },
    { id: 23, System: "PSP", name: "Charging port Replacement", price: "20", description: "" },
    { id: 24, System: "PSP", name: "Joystick Replacement", price: "25", description: "" },
    { id: 25, System: "Nintendo 64", name: "Joystick Replacement - Generic", price: "20", description: "" },
    { id: 26, System: "Nintendo 64", name: "Joystick Replacement - 8Bitdo", price: "20", description: "" },
    { id: 27, System: "Gamecube", name: "Joystick Replacement", price: "20", description: "" },
    { id: 28, System: "3DS", name: "Joystick Replacement", price: "30", description: "" },
    { id: 29, System: "PSVita", name: "Joystick Replacement", price: "20", description: "" },
    { id: 30, System: "PSVita", name: "Screen Replacement", price: "30", description: "" },
    { id: 31, System: "3DS", name: "Bottom Screen Replacement", price: "30", description: "" },
    { id: 32, System: "DS", name: "Bottom Screen Replacement", price: "20", description: "" },
    { id: 33, System: "All", name: "System Battery Replacement", price: "15", description: "" },
    { id: 34, System: "PSP", name: "Screen replacement", price: "30", description: "" },

];

function Services() {
    const [selectedSystem, setSelectedSystem] = useState("");

    const handleSytemChange = (e) => setSelectedSystem(e.target.value);

    return (
        <div className={sClasses.ServiceContainer} >
            <p className={`${classes.SectionTitle}`}>Services</p>
            <div className={sClasses.ServiceWrapper}>
            <div className={`${sClasses.ServiceSection}`}>
                <p className={`${classes.SectionSubTitle}`} >Cartridge Repairs</p>
                    <div className={`${sClasses.ServiceContent}`}>
                    <p>We cover a wide range of repairs including but not limited to:</p>
                    <ul>
                        <li>Battery replacements</li>
                        <li>Board swaps</li>
                        <li>Trace repairs</li>
                        <li>Corrosion</li>
                        <li>And more....</li>
                    </ul>
                </div>
            </div>
            <div className={`${sClasses.ServiceSection}`}>
                <p className={`${classes.SectionSubTitle}`}>Console Repairs</p>
                    <div className={`${sClasses.ServiceContent}`}>
                    <p>We cover a wide range of repairs including but not limited to:</p>
                    <ul>
                        <li>Disc drives not reading</li>
                        <li>Broken or not working screens</li>
                        <li>Broken or damaged ports</li>
                        <li>Bad Capacitors</li>
                        <li>Broken shells/cases</li>
                        <li>Controllers not working</li>
                        <li>And more....</li>
                    </ul>
                </div>
            </div>
            <div className={`${sClasses.ServiceSection}`}>
                <p className={`${classes.SectionSubTitle}`}>Mod Installation</p>
                    <div className={`${sClasses.ServiceContent}`}>
                    <p>We have expierence installing all types of mods!</p>
                    <ul>
                        <li>IPS screens</li>
                        <li>HDMI output kits</li>
                        <li>Silent fan installations</li>
                        <li>Region free kits</li>
                        <li>USB-C ports</li>
                        <li>ODEs, RGB kits, and more!</li>
                    </ul>
                </div>
            </div>
            <div className={`${sClasses.ServiceSection}`}>
                <p className={`${classes.SectionSubTitle}`}>Reshelling/Case Swapping</p>
                    <div className={`${sClasses.ServiceContent}`}>
                    <p>Nothing wrong with adding a little flare to your favorite console!</p>
                    <p>We can professionally install any new case our shell for consoles and controllers.</p>                   
                </div>
            </div>
           
                
            </div>
            <Link className={`${sClasses.QuoteButton}`} to="/Quote">GET A QUOTE<i className='bx bx-right-arrow-alt'></i></Link>


            <p className={`${classes.SectionTitle}`}>Pricing: </p>
            <p>Please not that these prices do not include parts unless otherwise noted!</p>
            <div className={sClasses.DropDownWrapper} >
                <label htmlFor="console">Console</label>
                <select id="console" value={selectedSystem} onChange={handleSytemChange}>
                    {Array.from(new Set([...services, ...repairs].map(x => x.System))).map(x => <option key={x} value={x}>{x}</option>)}
                </select>
            </div>
            <p className={`${classes.SectionSubTitle}`}>Mods</p>
            <Pricing items={services} system={selectedSystem} />
            
            <p className={`${classes.SectionSubTitle}`}>Repairs</p>
                <Pricing items={repairs} system={selectedSystem} />
        </div>
    )
}

const Pricing = ({ items, system }) => {
    const displayItems = items.filter(x => x.System == system || system == "" || x.System == "All")

    const displayConsole = system == "All"

    const displaySystem = (x) => !x.name.includes("Gameboy") && !x.System.includes("All")

    return (
        <div className={`${sClasses.PriceWrapper}`}>
        {
                displayItems.map((x) => {
                    return (
                        <div key={x.id} className={`${sClasses.PriceLineWrapper}`} >
                            <p>{displayConsole && displaySystem(x) ? x.System + " - " : ""} {x.name}</p>
                            <p>{x.price}</p>
                        </div>
                    )
                }
            )
        }
        </div>
    )
}

export default Services;

//Cartridge Repair
//Console Repair
//Mod Installation
//Reshelling/Shell swapping
//3D Printing