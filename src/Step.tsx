import classNames from "classnames";
import React, { useContext } from "react";
import { StepProps } from "./interface";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck, faTimes } from "@fortawesome/free-solid-svg-icons";
import { StepsContext } from "./Context";

export function Step(props: StepProps) {
    const { prefixCls = "xy-step", className, style, step = 1, children, title, icon } = props;
    const context = useContext(StepsContext);
    const status = getStatus();
    const classString = classNames(prefixCls, className, {
        [`${prefixCls}-status-${status}`]: !!status,
        [`${prefixCls}-custom-icon`]: !!icon,
        [`${prefixCls}-next-error`]: status === "error" && step === context.step - 1
    });

    function getStatus() {
        if (step < context.step) {
            return "finnish";
        } else if (step === context.step) {
            return context.status || "process";
        } else if (step > context.step) {
            return "wait";
        }
    }

    function renderIcon() {
        if (icon) {
            return icon;
        } else {
            switch (status) {
                case "finnish":
                    return <FontAwesomeIcon icon={faCheck} />;
                case "error":
                    return <FontAwesomeIcon icon={faTimes} />;
                default:
                    return step;
            }
        }
    }

    return (
        <div className={classString} style={style}>
            <div className={`${prefixCls}-tail`} />
            <div className={`${prefixCls}-icon`}>
                <span className={`${prefixCls}-icon-wrapper`}>{renderIcon()}</span>
            </div>
            <div className={`${prefixCls}-content`}>
                <div className={`${prefixCls}-title`}>{title}</div>
                <div className={`${prefixCls}-descriptionn`}>{children}</div>
            </div>
        </div>
    );
}

export default React.memo(Step);
