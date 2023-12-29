import React, { useState, useEffect } from 'react';
import { CV } from "../../cv/cv";

// Definición de un componente funcional llamado TuComponente
const TuComponente = () => {
  // Estado para almacenar datos de telemetría
  const [telemetriaData, setTelemetriaData] = useState([]);

  // Límite de registros a recuperar en cada solicitud
  const limit = 1000;

  // Función asincrónica para realizar la solicitud de datos de telemetría
  const fetchTelemetriaData = async (pageNumber) => {
    try {
      // Realiza una llamada a la función "getListOfTelemetryRecords" utilizando el objeto CV
      const result = await new Promise((resolve) => {
        CV.call(
          "getListOfTelemetryRecords",
          {
            sessionId: localStorage.getItem("sessionID"),
            offset: pageNumber,
            limit: limit,
          },
          (result) => resolve(result)
        );
      });

      // Verifica si la solicitud fue exitosa y actualiza el estado con los nuevos datos
      if (result.success) {
        const newData = result.answer;
        setTelemetriaData((prevData) => [...prevData, ...newData.telemetryRecordEntries]);
        console.log('Telemetria Data:', newData.telemetryRecordEntries);
        return result;
      } else {
        // Muestra un mensaje de error si la solicitud falla
        console.error('Failed to fetch result:', result.errorMessage);
        return result;
      }
    } catch (error) {
      // Captura y muestra errores en la consola si hay algún problema en la solicitud
      console.error('Error fetching telemetry data:', error);
      return { success: false, errorMessage: error.message };
    }
  };

  // Efecto secundario que se ejecuta después de que el componente se monta
  useEffect(() => {
    // Función para recuperar todos los datos de telemetría paginados
    const fetchAllData = async () => {
      let pageNumber = 0;
      try {
        // Itera hasta que se recuperen todos los datos o haya un error
        while (true) {
          const result = await fetchTelemetriaData(pageNumber);
          if (!result.success || result.answer.telemetryRecordEntries.length === 0) break;
          pageNumber += limit;
        }
      } catch (error) {
        // Muestra un mensaje de error si hay un problema durante la recuperación de datos
        console.error('Error fetching telemetry data:', error);
      }
    };

    // Llama a la función para recuperar todos los datos de telemetría
    fetchAllData();
  }, []); // El segundo argumento [] asegura que este efecto solo se ejecute una vez al montar el componente

  // Resto del componente...
};

// Exporta TuComponente como componente por defecto
export default TuComponente;
