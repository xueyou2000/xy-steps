import React from "react";
import { Steps, Step } from "../src";

export default function() {
    return (
        <div>
            <Steps step={2} size="small">
                <Step title="Finished">This is a description.</Step>
                <Step title="In Progress">This is a description.</Step>
                <Step title="Waiting">This is a description.</Step>
            </Steps>
            <br />
            <Steps step={2} size="large">
                <Step title="Finished">This is a description.</Step>
                <Step title="In Progress">This is a description.</Step>
                <Step title="Waiting">This is a description.</Step>
            </Steps>
        </div>
    );
}
