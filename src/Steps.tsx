import classNames from "classnames";
import React from "react";
import { StepsProps } from "./interface";
import { StepsContext } from "./Context";

export function Steps(props: StepsProps) {
    const { prefixCls = "xy-steps", className, style, step = 1, status, direction = "horizontal", size = "default", children } = props;
    const classString = classNames(prefixCls, className, {
        [`${prefixCls}-direction-${direction}`]: !!direction,
        [`${prefixCls}-status-${status}`]: !!status,
        [`${prefixCls}-size-${size}`]: !!size
    });

    return (
        <div className={classString} style={style}>
            <StepsContext.Provider value={{ step, status }}>
                {React.Children.map(children, (step: any, i) => {
                    if (React.isValidElement(step)) {
                        return React.cloneElement(
                            step,
                            Object.assign({}, step.props, {
                                key: i,
                                step: i + 1
                            })
                        );
                    } else {
                        return null;
                    }
                })}
            </StepsContext.Provider>
        </div>
    );
}

export default React.memo(Steps);
