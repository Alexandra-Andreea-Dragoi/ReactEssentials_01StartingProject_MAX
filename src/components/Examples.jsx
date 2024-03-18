import TabButton from "./TabButton";
import Section from "./Section";
import { useState } from "react";
import { EXAMPLES } from "../data";
import Tabs from "./Tabs";

export default function Examples() {
  const [selectedTopic, setSelectedTopic] = useState();

  function handleSelect(selectedButton) {
    setSelectedTopic(selectedButton);
  }

  let tabContent = <p>Please select a topic.</p>;
  if (selectedTopic) {
    tabContent = (
      <div id="tab-content">
        <h3>{EXAMPLES[selectedTopic].title}</h3>
        <p>{EXAMPLES[selectedTopic].description}</p>
        <pre>
          <code>{EXAMPLES[selectedTopic].code}</code>
        </pre>
      </div>
    );
  }
  return (
    <>
      <Section title="Examples" id="examples">
        <Tabs
          // ButtonsContainer="menu" - if we put in Tabs Containet ButtonsContainer = "menu" we do not need to add the this line
          // to be able to chose the type of element that we want to put our buttons in :D
          // we are transfering this information top the Tabs Component
          buttons={
            <>
              <TabButton
                isSelected={selectedTopic === "components"}
                //   onSelect={() => handleSelect("components")}
                // because we use spread operatopr ...props, we no longer need onSelect, we replace with onClick, to use the same prop forwording patern (lesson 65)
                onClick={() => handleSelect("components")}
              >
                Components
              </TabButton>

              <TabButton
                isSelected={selectedTopic === "jsx"}
                onClick={() => handleSelect("jsx")}
              >
                JSX
              </TabButton>

              <TabButton
                isSelected={selectedTopic === "props"}
                onClick={() => handleSelect("props")}
              >
                Props
              </TabButton>

              <TabButton
                isSelected={selectedTopic === "state"}
                onClick={() => handleSelect("state")}
              >
                State
              </TabButton>
            </>
          }
        >
          {tabContent}
        </Tabs>
      </Section>
    </>
  );
}

// options for {tabComponent}
{
  /* option I */
}
{
  /* {!selectedTopic ? <p>Please select a topic.</p>} : <div id="tab-content">
        <h3>{EXAMPLES[selectedTopic].title}</h3>
        <p>{EXAMPLES[selectedTopic].description}</p>
        <pre>
          <code>{EXAMPLES[selectedTopic].code}</code>
        </pre>
      </div> */
}

{
  /* option II */
}
{
  /* {!selectedTopic && <p>Please select a topic.</p>} */
}
{
  /* the && (end) operator -> if the condition is met, is true, is outputting the expresion the is coming after it <p>...</p> */
}
{
  /* {selectedTopic && (
      <div id="tab-content">
        <h3>{EXAMPLES[selectedTopic].title}</h3>
        <p>{EXAMPLES[selectedTopic].description}</p>
        <pre>
          <code>{EXAMPLES[selectedTopic].code}</code>
        </pre>
      </div>
    )} */
}

{
  /* option III */
}
// {tabComponent}
