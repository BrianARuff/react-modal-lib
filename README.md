## React Modal Lib

### Basic Usage Example
```

import React, { useState } from "react";
import Modal from "react-modal-lib";

function App() {
  const [showModal, setShowModal] = useState(false);

  const handleSetShowModal = () => {
    setShowModal(!showModal);
  };

  return (
    <div>
      {showModal ? (
        <Modal>
          <h1>Hello World</h1>{" "}
          <button onClick={handleSetShowModal}>Close Modal</button>
        </Modal>
      ) : (
        <React.Fragment>
          <div>
            <h1>Hello World</h1>
            <button onClick={handleSetShowModal}>Open Modal</button>
          </div>
        </React.Fragment>
      )}
    </div>
  );
}

export default App;

```

## react-modal-lib
