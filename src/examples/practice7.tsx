import { useState } from "react";

const practice7 = () => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [name, setName] = useState<string>("Tuan Nguyen");
    return (
    <div>practice7 {name}</div>
  )
}


export default practice7