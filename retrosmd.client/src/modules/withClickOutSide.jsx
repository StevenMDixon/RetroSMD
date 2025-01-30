import { useState, useRef, useEffect } from "react";

export default function withClickOutside(WrappedComponent) {
    const Component = (props) => {
        const [open, setOpen] = useState(false);

        const clickRef = useRef(null);

        useEffect(() => {
            const handleClickOutside = (event) => {
                console.log(clickRef)
                if (!clickRef.current?.contains(event.target)) {
                    setOpen(false);
                }
            };
            document.addEventListener("mousedown", handleClickOutside);
        }, [clickRef]);

        return <WrappedComponent open={open} setOpen={setOpen} innerRef={clickRef} />;
    };

    return Component;
}
