export type StepStatus = "wait" | "process" | "finnish" | "error";

export interface StepProps {
    /**
     * 附加类名
     */
    prefixCls?: string;
    /**
     * 根节点的附加类名
     */
    className?: string;
    /**
     * 内联样式
     */
    style?: React.CSSProperties;
    /**
     * 当前步骤数
     */
    step?: number;
    /**
     * 步骤标题
     */
    title?: React.ReactNode;
    /**
     * 步骤描述
     */
    children?: React.ReactNode;
    /**
     * 步骤图标
     */
    icon?: React.ReactNode;
}

export interface StepsProps {
    /**
     * 附加类名
     */
    prefixCls?: string;
    /**
     * 根节点的附加类名
     */
    className?: string;
    /**
     * 内联样式
     */
    style?: React.CSSProperties;
    /**
     * 步骤内容
     */
    children?: React.ReactNode;
    /**
     * 当前步骤
     * @description 从数字1开始
     */
    step?: number;
    /**
     * 当前步骤状态
     */
    status?: StepStatus;
    /**
     * 方向
     */
    direction?: "horizontal" | "vertical";
    /**
     * 尺寸
     */
    size?: "default" | "small" | "large";
}

export interface StepsContextState {
    /**
     * 当前进度
     */
    step?: number;
    /**
     * 指定状态
     */
    status?: StepStatus;
}
