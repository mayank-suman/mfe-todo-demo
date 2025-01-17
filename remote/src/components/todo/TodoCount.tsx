import React from "react";

class TodoCount extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      // ADD THIS LINE
      totalComplete: props.items.filter((item) => item.isComplete === true)
        .length,
    };
  }

  render() {
    // ADD THIS LINE
    if (this.props.items.length === 0) {
      return null;
    }

    return (
      <p className="TodoCount">
        {this.state.totalComplete === this.props.items.length
          ? "All todos complete, well done!"
          : `${this.state.totalComplete} / ${this.props.items.length} complete`}
      </p>
    );
  }
}

export default TodoCount;
