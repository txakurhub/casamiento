import { useEffect, useRef } from "react";

const Poem = () => {
  const textRef = useRef(null);

  useEffect(() => {
   const textElement = textRef.current;
    const text =
      "Que estamos aquí <br />" +
      "Y que por eso mismo nos merecemos<br />" +
      "El beso al alba, los cosquilleos<br />" +
      "trepar montañas, seguir despiertos<br />" +
      "la llamarada, el cielo abierto<br />" +
      "amar las ramas, sentirnos dentro<br />" +
      "sacar el alma, mojar el cuerpo<br />" +
      "cada calada, cada concierto<br />" +
      "las manos claras, el cuenco lleno<br />" +
      "lleno, lleno de verdad";

    let currentIndex = 0;

    const typeText = () => {
      const currentText = text.substring(0, currentIndex);
      textElement.innerHTML = currentText;
      currentIndex++;

      if (currentIndex <= text.length) {
        setTimeout(typeText, 100); // Ajusta el tiempo de retraso entre letras aquí
      }
    };

    typeText();
  }, []);

  return (
    <h4
      className="text-lg lg:text-5xl text-center leading-loose lg:leading-loose font-bold h-full animate-typing"
      ref={textRef}
    ></h4>
  );
};

export default Poem;
