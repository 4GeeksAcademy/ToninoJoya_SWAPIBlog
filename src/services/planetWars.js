export const getAllPlanets = async () => {
        try {
           
            const responseList = await fetch("https://www.swapi.tech/api/planets/");
            const data = await responseList.json();
            console.log("Lista inicial de resultados:", data.results);

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
