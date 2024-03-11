import { CORE_CONCEPTS } from "../data";
import CoreConcept from "./CoreConcept";

export default function CoreConcepts() {
  return (
    <section id="core-concepts">
      <h2>Core concepts</h2>
      <ul>
        {/* <CoreConcepts
        title={CORE_CONCEPTS[0].title}
        description={CORE_CONCEPTS[0].description}
        image={CORE_CONCEPTS[0].image}
      /> */}
        {/* option 2 */}
        {/* <CoreConcept {...CORE_CONCEPTS[0]} /> */}

        {/* <CoreConcepts
        title={CORE_CONCEPTS[1].title}
        description={CORE_CONCEPTS[1].description}
        image={CORE_CONCEPTS[1].image}
      /> */}
        {/* option 2 */}
        {/* <CoreConcept {...CORE_CONCEPTS[1]} />

      <CoreConcept
        title={CORE_CONCEPTS[2].title}
        description={CORE_CONCEPTS[2].description}
        image={CORE_CONCEPTS[2].image}
      />
      {/* option 2 */}
        {/* <CoreConcept {...CORE_CONCEPTS[2]]} />

      <CoreConcept
        title={CORE_CONCEPTS[3].title}
        description={CORE_CONCEPTS[3].description}
        image={CORE_CONCEPTS[3].image}
      /> */}
        {/* option 2 */}
        {/* <CoreConcept {...CORE_CONCEPTS[3]} />

      {/* a shorter method and more acurate, which is dinamicaly taking data form our data file is using the map() method */}

        {CORE_CONCEPTS.map((conceptItem) => (
          <CoreConcept key={conceptItem.title} {...conceptItem} />
        ))}
      </ul>
    </section>
  );
}
