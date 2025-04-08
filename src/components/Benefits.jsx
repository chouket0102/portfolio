import Heading from "./Heading"; 
import Section from "./Section"; 
import Skills from "./Skills";

const Benefits = () => { return ( <Section id="skills"> 
<Heading title="Skills" />
<Skills skillType="backend" />


<Skills skillType="frontend" />


<Skills skillType="aiData" />
</Section>
); };

export default Benefits;