import qs from "qs";
import { get } from "./client";
import { WeatherForecast } from "./types";

export type WeatherUrlParams = {
  appid: string;
  lat: string;
  lon: string;
  units: string;
}

const path = 'https://api.openweathermap.org/data/2.5/forecast';

export const getWeatherForecast = async (params: WeatherUrlParams) =>
  get<WeatherForecast>(`${path}?${qs.stringify(params)}`);
