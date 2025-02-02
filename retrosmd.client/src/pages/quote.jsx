import classes from '../styles/quote.module.css';
import { useEffect, useState } from 'react';


import TypeSelector from '../modules/quote/typeSelector';
import ServiceSelector from '../modules/quote/serviceSelector';
import GenericSelector from '../modules/quote/genericSelector';

function Quote() {
    const [currentStep, setCurrentStep] = useState(0);

    const [selectedServices, setSelectedServices] =  useState([]);

    const [selectedConsole, setSelectedConsole] = useState("");

    // Platform is [Cartridge, Console, Controller]
    const [selectedPlatform, setSelectedPlatform] = useState("");
    const [selectedType, setSelectedType] = useState("");

    const [services, setServices] = useState([]);
    const [consoles, setConsoles] = useState([]);

    useEffect(() => {
        populateServices();
    }, []);

    useEffect(() => {
        populateConsoles();
    }, []);

    //const displayItems = () => selectedItems.map((x, i) => <li key={i} >{x}</li>)

    //const addItemToList = (item) => {
    //    setSelectedItems([...selectedItems, item])
    //}

    const moveToNextStep = (fn, val) => {
        console.log(val)
        fn(val)
         if(currentStep + 1 < steps.length) setCurrentStep(currentStep + 1)
    }

    const moveBackToLastStep = () => {
         if (currentStep > 0) setCurrentStep(currentStep - 1)   
    }

    const displayRepairs = () => { return (<div></div>)};
    const displayMods = () => { return (<div></div>)};

    const DisplaySelectedType = () => {
        switch (selectedType) {
            case "Mod": return displayMods()
            case "Repair": return displayRepairs()
            default: return (<div></div>)
        }
    };

    const steps = [
        <GenericSelector key={0} subText={"I have a:"} classes={classes} options={["Console", "Controller", "Game Cart", "Donation"]} setSelected={setSelectedPlatform} moveToNextStep={moveToNextStep} />,
        <TypeSelector key={1} classes={classes} selectedPlatform={selectedPlatform} setSelectedType={setSelectedType} moveToNextStep={moveToNextStep} />,
        <GenericSelector key={2} subText={"Choose a console:"} classes={classes} options={consoles.map(x => x.name)} setSelected={setSelectedConsole} moveToNextStep={moveToNextStep} />,
        <ServiceSelector key={3} classes={classes} options={services} setSelected={setSelectedServices} moveToNextStep = {moveToNextStep} />
    ]
   
    return (
        <div className={`${classes._}`}>
            {currentStep > 0 && <p onClick={moveBackToLastStep} >Go Back</p>}
            {steps[currentStep]}
        </div>
    );

    async function populateServices() {
        const response = await fetch('services');
        if (response.ok) {
            const data = await response.json();
            console.log(data)
            setServices(data);
        }
    }

    async function populateConsoles() {
        const response = await fetch('consoles');
        if (response.ok) {
            const data = await response.json();
            console.log(data)
            setConsoles(data);
        }
    }
}

export default Quote;