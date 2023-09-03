import { useState } from 'react';

function ColorPickerHooks(colors) {
  const [activeIndex, setActiveIndex] = useState();
  return (
    <Container>
      {colors.map((color, index) => {
        return (
          <ColorTab
            key={color.id}
            active={index === activeIndex}
            onClick={() => {
              setActiveIndex();
            }}
            color={color.color}
          >
            {index === activeIndex && <Label>{color.label}</Label>}
          </ColorTab>
        );
      })}
    </Container>
  );
}

export default ColorPickerHooks;
