import React from "react";
import Cascader from "rmc-cascader/lib/Cascader";
import PopupCascader from "rmc-cascader/lib/Popup";
// import arrayTreeFilter from "array-tree-filter";
import "rmc-picker/assets/index.css";
import "rmc-cascader/assets/index.css";
import "rmc-picker/assets/popup.css";

const COLS = 3;
class Index extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  static defaultProps = {
    visible: false,
    okText: '确定',
    dismissText: '取消',
  }

  onChange = value => {
    console.log("onChange", value);
    let {onChange, togglePicker} = this.props
    togglePicker()
    onChange && onChange(value)
  };

  onScrollChange = value => {
    console.log("onScrollChange", value);
    let {onScrollChange} = this.props
    onScrollChange && onScrollChange(value)
  };

  onDismiss = () => {
    console.log("onDismiss");
    let {onDismiss, togglePicker} = this.props
    togglePicker()
    onDismiss && onDismiss()
  };

  onPickerChange = value => {
    console.log("picker change", value);
    let {onPickerChange} = this.props
    onPickerChange && onPickerChange(value)
  };

  render() {
    let {data, togglePicker, visible, value, dismissText, okText} = this.props
    const cascader = (
      <Cascader
        rootNativeProps={{ "data-xx": "yy" }}
        onChange={this.onPickerChange}
        data={data}
        cols={COLS}
        onScrollChange={this.onScrollChange}
      />
    );
    return (
      <div>
        <button onClick={togglePicker}>点击选择地区</button>
        <PopupCascader
          cascader={cascader}
          visible={visible}
          value={value}
          onDismiss={this.onDismiss}
          onChange={this.onChange}
          okText={okText}
          dismissText={dismissText}
        />
      </div>
    );
  }
}

export default Index;
