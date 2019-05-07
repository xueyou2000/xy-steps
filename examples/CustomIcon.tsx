import React from "react";
import { Steps, Step } from "../src";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faAddressCard, faCircleNotch, faLaughWink } from "@fortawesome/free-solid-svg-icons";

export default function() {
    return (
        <div>
            <Steps step={3}>
                <Step title="Login" icon={<FontAwesomeIcon icon={faUser} />} />
                <Step title="Verification" icon={<FontAwesomeIcon icon={faAddressCard} />} />
                <Step title="Pay" icon={<FontAwesomeIcon icon={faCircleNotch} spin={true} />} />
                <Step title="Done" icon={<FontAwesomeIcon icon={faLaughWink} />} />
            </Steps>
        </div>
    );
}
