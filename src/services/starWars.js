export const getAllCharacters = async () => {
        try {
            const response = await fetch(`https://swapi.tech/api/people`)
            const data = await response.json()
            console.log(data)
            const arrAux = await Promise.all(
                data.results.map(async (item)=>{
                    const respuestaDetalle = await fetch(item.url)
                    const detalles = await respuestaDetalle.json()
                    return detalles.result
                })
            )
            console.log(arrAux)
            return arrAux
        } catch (error) {
            
        }
    }
