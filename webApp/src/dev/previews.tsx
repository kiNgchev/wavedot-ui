import {ComponentPreview, Previews} from "@react-buddy/ide-toolbox";
import {PaletteTree} from "./palette";
import {Greeting} from "../components/Greeting/Greeting.tsx";

const ComponentPreviews = () => {
  return (
    <Previews palette={<PaletteTree/>}>
      <ComponentPreview path="/Greeting">
        <Greeting/>
      </ComponentPreview>
    </Previews>
  );
};

export default ComponentPreviews;