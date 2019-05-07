import React from "react";
import { render } from "react-testing-library";
import { Steps, Step } from "../src";

describe("Steps", () => {
    test("step 1", () => {
        const wrapper = render(
            <Steps step={1}>
                <Step title="Finished">This is a description.</Step>
                <Step title="In Progress">This is a description.</Step>
                <Step title="Waiting">This is a description.</Step>
            </Steps>
        );
        const stepList = wrapper.container.querySelectorAll(".xy-step") as NodeListOf<HTMLElement>;
        expect(stepList[0].classList.contains("xy-step-status-process")).toBeTruthy();
        expect(stepList[1].classList.contains("xy-step-status-wait")).toBeTruthy();
        expect(stepList[2].classList.contains("xy-step-status-wait")).toBeTruthy();
    });

    test("step 2", () => {
        const wrapper = render(
            <Steps step={2}>
                <Step title="Finished">This is a description.</Step>
                <Step title="In Progress">This is a description.</Step>
                <Step title="Waiting">This is a description.</Step>
            </Steps>
        );
        const stepList = wrapper.container.querySelectorAll(".xy-step") as NodeListOf<HTMLElement>;
        expect(stepList[0].classList.contains("xy-step-status-finnish")).toBeTruthy();
        expect(stepList[1].classList.contains("xy-step-status-process")).toBeTruthy();
        expect(stepList[2].classList.contains("xy-step-status-wait")).toBeTruthy();
    });

    test("step 3", () => {
        const wrapper = render(
            <Steps step={3}>
                <Step title="Finished">This is a description.</Step>
                <Step title="In Progress">This is a description.</Step>
                <Step title="Waiting">This is a description.</Step>
            </Steps>
        );
        const stepList = wrapper.container.querySelectorAll(".xy-step") as NodeListOf<HTMLElement>;
        expect(stepList[0].classList.contains("xy-step-status-finnish")).toBeTruthy();
        expect(stepList[1].classList.contains("xy-step-status-finnish")).toBeTruthy();
        expect(stepList[2].classList.contains("xy-step-status-process")).toBeTruthy();
    });
});
