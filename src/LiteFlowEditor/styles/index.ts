import { createInstance, FullToken } from 'antd-style';

const styleInstance = createInstance<FullToken>({
  // **** 样式生成相关 **** //
  key: 'abc', // 设定生成 hash 类名的前缀，结果为 .abc-xxxx
  speedy: false, // 目前的 cssinjs 方案中默认的 cssom 的插入方式与 qiankun 微应用兼容性都不太理想，所以建议关闭
  hashPriority: 'low', // 将生成 hash 的样式选择器设为 :where 选择器降低权重。这样可以让用户自定义的样式覆盖组件的样式

  // ***** 主题相关 ***** //
  // 配置默认传给 ThemeProvider 的 props，而该 Provider 同样可以被外部覆盖 props
  // 配置后的值也会成为相关方法消费的默认值，这样一来不需要包裹 ThemeProvider 即可消费到默认值

  prefixCls: 'tna', // 设定 antd 组件的 类名前缀，例如 Button 的类型将会是 .tna-btn
});

export const {
  createStyles,
  createStylish,
  createGlobalStyle,
  cx,
  css,
  keyframes,
  injectGlobal,
  styleManager,
  useTheme,
  StyleProvider,
  ThemeProvider,
} = styleInstance;
