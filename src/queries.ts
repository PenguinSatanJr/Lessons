import { useQuery } from "react-query";
import { WeatherUrlParams, getWeatherForecast } from "./api";


export const useWeatherForecastQuery = (params: WeatherUrlParams) =>
    useQuery(['forecast'], () => getWeatherForecast(params));
