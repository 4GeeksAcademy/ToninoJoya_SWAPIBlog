export const getAllPlanets = async () => {
        try {
            // 1. Obtener la lista inicial de planetas
            const responseList = await fetch("https://www.swapi.tech/api/planets/");
            if (!responseList.ok) { // Buena práctica: verificar si la respuesta fue exitosa
                throw new Error(`Error HTTP: ${responseList.status}`);
            }
            const data = await responseList.json();
            console.log("Lista inicial de resultados:", data.results);

            // 2. Crear un array de promesas para obtener los detalles de cada planeta
            const detailPromises = data.results.map(async (item) => {
                const respuestaDetalle = await fetch(item.url);
                if (!respuestaDetalle.ok) {
                    throw new Error(`Error HTTP al obtener detalle de ${item.url}: ${respuestaDetalle.status}`);
                }
                const detalles = await respuestaDetalle.json();
                return detalles.result;
            });
            const arrAux = await Promise.all(detailPromises);
            console.log("Detalles de todos los planetas:", arrAux);
            return arrAux;

        } catch (err) {
            console.error("Hubo un error:", err);
        }
    };
