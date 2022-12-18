// useState is a named import, so we import it this way: Using one line!
import React, { useState } from 'react'

function App() {
  // invoke the useState function.
  let [counter, changeCounter] = useState(1)
  // Use declarative rendering to update the page automatically.
  window.changeCounter = changeCounter
  return (
    // interpolate the counter into an h1 tag.
    <div>
      <h1>{counter}</h1>
      <h4>{counter}</h4>
    </div>
  )
}

export default App;
// Open the developer tools console in your browser and type the following
// changeCounter(2)
// Render the counter in multiple places. h1, h4 tags.
// Activity: Declarative Counter!