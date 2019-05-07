import React, { useState } from "react";
import { Steps, Step } from "../src";

export default function() {
    const [step, setStep] = useState(1);
    const [status, setStatus] = useState(null);

    return (
        <div>
            <Steps step={step} status={status}>
                <Step title="First">这是步骤一</Step>
                <Step title="Second">这是步骤2</Step>
                <Step title="Last">这是步骤3</Step>
            </Steps>
            <button onClick={() => setStep(step + 1 <= 3 ? step + 1 : 3)}>下一步</button>

            <br />
            <button onClick={() => setStep(step - 1 > 0 ? step - 1 : 1)}>上一步</button>
            <br />
            <button onClick={() => setStatus(status === null ? "error" : null)}>切换错误状态</button>
        </div>
    );
}
