| ![IE](https://github.com/alrra/browser-logos/blob/master/src/edge/edge_48x48.png?raw=true) | ![Chrome](https://github.com/alrra/browser-logos/blob/master/src/chrome/chrome_48x48.png?raw=true) | ![Firefox](https://github.com/alrra/browser-logos/blob/master/src/firefox/firefox_48x48.png?raw=true) | ![Opera](https://github.com/alrra/browser-logos/blob/master/src/opera/opera_48x48.png?raw=true) | ![Safari](https://github.com/alrra/browser-logos/blob/master/src/safari/safari_48x48.png?raw=true) |
| ------------------------------------------------------------------------------------------ | -------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- |
| IE 10+ ✔                                                                                   | Chrome 31.0+ ✔                                                                                     | Firefox 31.0+ ✔                                                                                       | Opera 30.0+ ✔                                                                                   | Safari 7.0+ ✔                                                                                      |

![NPM version](http://img.shields.io/npm/v/xy-steps.svg?style=flat-square)
![node version](https://img.shields.io/badge/node.js-%3E=_0.10-green.svg?style=flat-square)
![npm download](https://img.shields.io/npm/dm/xy-steps.svg?style=flat-square)

[![xy-steps](https://nodei.co/npm/xy-steps.png)](https://npmjs.org/package/xy-steps)

# xy-steps

步骤条组件

## 安装

```bash
# yarn
yarn add xy-steps classnames @fortawesome/react-fontawesome @fortawesome/free-solid-svg-icons
```

## 使用例子

```tsx
import React from "react";
import ReactDOM from "react-dom";
import { Steps, Step } from "xy-steps";
ReactDOM.render(
    <Steps step={2}>
        <Step title="Finished">This is a description.</Step>
        <Step title="In Progress">This is a description.</Step>
        <Step title="Waiting">This is a description.</Step>
    </Steps>,
    container
);
```

## API

### Steps

| 属性      | 说明                                                               | 类型   | 默认值     |
| --------- | ------------------------------------------------------------------ | ------ | ---------- |
| step      | 当前步骤, 从数字 1 开始                                            | number | 1          |
| status    | 当前步骤状态, 可选值为 `wait` `process` `finnish` `error` 或者不设 | string | -          |
| direction | 方向, 可选值为 `horizontal` `vertical`                             | string | horizontal |
| size      | 设置按钮大小，可选值为 `small` `large` 或者不设                    | string | default    |

### Step

| 属性     | 说明                    | 类型            | 默认值 |
| -------- | ----------------------- | --------------- | ------ |
| step     | 当前步骤, 从数字 1 开始 | number          | 1      |
| title    | 步骤标题                | React.ReactNode | -      |
| children | 步骤描述                | React.ReactNode | -      |
| icon     | 步骤图标                | React.ReactNode | -      |

## 开发

```sh
yarn run start
```

## 例子

http://localhost:6006

## 测试

```
yarn run test
```

## 开源许可

xy-steps is released under the MIT license.
