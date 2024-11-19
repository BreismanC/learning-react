import { useRef } from "react";

export const BookReader = () => {
  const currentPageRef = useRef<number>(1);

  const nextPage = () => {
    currentPageRef.current += 1;
    console.log(
      `Avanzaste una página, estás en la página ${currentPageRef.current}`
    );
  };

  const previusPage = () => {
    if (currentPageRef.current === 1) {
      console.log(
        `No se puede retroceder la página porque estás en la página ${currentPageRef.current}`
      );
      return;
    }

    currentPageRef.current -= 1;
    console.log(
      `Retrocediste una pàgina, estàs en la pàgina ${currentPageRef.current}`
    );
  };

  const goToPage = (page: number) => {
    if (page < 1) {
      console.log(`No se puede ir a la página ${page}, valor inválido`);
      return;
    }

    currentPageRef.current = page;
    console.log(`Avanzaste a la pàgina ${currentPageRef.current}`);
  };

  return (
    <div>
      <h2>Lectura de libro</h2>
      <p>Página actual {currentPageRef.current}</p>
      <button onClick={previusPage}>Anterior</button>
      <button onClick={nextPage}>Siguiente</button>
      <button onClick={() => goToPage(50)}>Ir a la página 50</button>
    </div>
  );
};
