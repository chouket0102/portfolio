import { benefits } from "../constants";
 import Heading from "./Heading"; 
 import Section from "./Section"; 
 import Arrow from "../assets/svg/Arrow"; 
 import { GradientLight } from "./design/Benefits";
import ClipPath from "../assets/svg/ClipPath";
import Skills from "./Skills";

const Benefits = () => { return ( <Section id="skills"> 
<Heading title="Skills" />
<Skills skillType="backend" />


<Skills skillType="frontend" />


<Skills skillType="aiData" />
</Section>
); };

export default Benefits;