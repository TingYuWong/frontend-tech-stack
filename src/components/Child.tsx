import * as React from "react";

const Child = React.forwardRef<HTMLInputElement>((props, ref) => {
  return <input ref={ref} />;
});

export default Child;
