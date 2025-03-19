import { logger } from "@/utils/Logger.js"
import { api } from "./AxiosService.js"
import { AppState } from "@/AppState.js"
import { House } from "../models/Houses.js"


class HousesService {
  async getHouses() {
    const response = await api.get('api/houses')
    logger.log('gothouses', response.data)
    const houses = response.data.map(pojo => new House(pojo))
    AppState.houses = houses
  }
}

export const housesService = new HousesService()