import AppDataSource from "../../data-source";
import { Propertie } from "../../entities/properties.entity";

const propertiesListService = async (): Promise<Propertie[]> => {
  const propertiesRepository = AppDataSource.getRepository(Propertie);

  const properties = await propertiesRepository.find();

  return properties;
};
export default propertiesListService;
