export type WeatherForecast = {
    cod: string;
    list: [];
    city: {
        id: number,
        name: string,
        coord: {
            lat: number,
            lon: number,
        },
        country: string,
        population: number,
        timezone: number,
        sunrise: number,
        sunset: number
    };
};


// const dataExample = {
//     "cod": "200",
//     "message": 0,
//     "cnt": 40,
//     "list": [
//         {
//             "dt": 1697392800,
//             "main": {
//                 "temp": 23.29,
//                 "feels_like": 23.63,
//                 "temp_min": 22.83,
//                 "temp_max": 23.29,
//                 "pressure": 1012,
//                 "sea_level": 1012,
//                 "grnd_level": 1009,
//                 "humidity": 75,
//                 "temp_kf": 0.46
//             },
//             "weather": [
//                 {
//                     "id": 802,
//                     "main": "Clouds",
//                     "description": "scattered clouds",
//                     "icon": "03n"
//                 }
//             ],
//             "clouds": {
//                 "all": 40
//             },
//             "wind": {
//                 "speed": 1.69,
//                 "deg": 229,
//                 "gust": 3.19
//             },
//             "visibility": 10000,
//             "pop": 0.07,
//             "sys": {
//                 "pod": "n"
//             },
//             "dt_txt": "2023-10-15 18:00:00"
//         },
//         {
//             "dt": 1697403600,
//             "main": {
//                 "temp": 22.79,
//                 "feels_like": 23.06,
//                 "temp_min": 22.43,
//                 "temp_max": 22.79,
//                 "pressure": 1013,
//                 "sea_level": 1013,
//                 "grnd_level": 1011,
//                 "humidity": 74,
//                 "temp_kf": 0.36
//             },
//             "weather": [
//                 {
//                     "id": 802,
//                     "main": "Clouds",
//                     "description": "scattered clouds",
//                     "icon": "03n"
//                 }
//             ],
//             "clouds": {
//                 "all": 33
//             },
//             "wind": {
//                 "speed": 1.57,
//                 "deg": 251,
//                 "gust": 2.8
//             },
//             "visibility": 10000,
//             "pop": 0.05,
//             "sys": {
//                 "pod": "n"
//             },
//             "dt_txt": "2023-10-15 21:00:00"
//         },
//         {
//             "dt": 1697414400,
//             "main": {
//                 "temp": 22,
//                 "feels_like": 22.24,
//                 "temp_min": 22,
//                 "temp_max": 22,
//                 "pressure": 1014,
//                 "sea_level": 1014,
//                 "grnd_level": 1011,
//                 "humidity": 76,
//                 "temp_kf": 0
//             },
//             "weather": [
//                 {
//                     "id": 803,
//                     "main": "Clouds",
//                     "description": "broken clouds",
//                     "icon": "04n"
//                 }
//             ],
//             "clouds": {
//                 "all": 51
//             },
//             "wind": {
//                 "speed": 1.34,
//                 "deg": 272,
//                 "gust": 2.56
//             },
//             "visibility": 10000,
//             "pop": 0.19,
//             "sys": {
//                 "pod": "n"
//             },
//             "dt_txt": "2023-10-16 00:00:00"
//         },
//         {
//             "dt": 1697425200,
//             "main": {
//                 "temp": 21.52,
//                 "feels_like": 21.74,
//                 "temp_min": 21.52,
//                 "temp_max": 21.52,
//                 "pressure": 1014,
//                 "sea_level": 1014,
//                 "grnd_level": 1011,
//                 "humidity": 77,
//                 "temp_kf": 0
//             },
//             "weather": [
//                 {
//                     "id": 500,
//                     "main": "Rain",
//                     "description": "light rain",
//                     "icon": "10n"
//                 }
//             ],
//             "clouds": {
//                 "all": 99
//             },
//             "wind": {
//                 "speed": 0.89,
//                 "deg": 34,
//                 "gust": 1.23
//             },
//             "visibility": 10000,
//             "pop": 0.36,
//             "rain": {
//                 "3h": 0.17
//             },
//             "sys": {
//                 "pod": "n"
//             },
//             "dt_txt": "2023-10-16 03:00:00"
//         },
//         {
//             "dt": 1697436000,
//             "main": {
//                 "temp": 20.94,
//                 "feels_like": 21.05,
//                 "temp_min": 20.94,
//                 "temp_max": 20.94,
//                 "pressure": 1015,
//                 "sea_level": 1015,
//                 "grnd_level": 1011,
//                 "humidity": 75,
//                 "temp_kf": 0
//             },
//             "weather": [
//                 {
//                     "id": 500,
//                     "main": "Rain",
//                     "description": "light rain",
//                     "icon": "10d"
//                 }
//             ],
//             "clouds": {
//                 "all": 100
//             },
//             "wind": {
//                 "speed": 1.74,
//                 "deg": 51,
//                 "gust": 2.66
//             },
//             "visibility": 10000,
//             "pop": 0.49,
//             "rain": {
//                 "3h": 0.45
//             },
//             "sys": {
//                 "pod": "d"
//             },
//             "dt_txt": "2023-10-16 06:00:00"
//         },
//         {
//             "dt": 1697446800,
//             "main": {
//                 "temp": 22.11,
//                 "feels_like": 22,
//                 "temp_min": 22.11,
//                 "temp_max": 22.11,
//                 "pressure": 1015,
//                 "sea_level": 1015,
//                 "grnd_level": 1012,
//                 "humidity": 62,
//                 "temp_kf": 0
//             },
//             "weather": [
//                 {
//                     "id": 500,
//                     "main": "Rain",
//                     "description": "light rain",
//                     "icon": "10d"
//                 }
//             ],
//             "clouds": {
//                 "all": 100
//             },
//             "wind": {
//                 "speed": 2.06,
//                 "deg": 68,
//                 "gust": 2.52
//             },
//             "visibility": 10000,
//             "pop": 0.47,
//             "rain": {
//                 "3h": 1.15
//             },
//             "sys": {
//                 "pod": "d"
//             },
//             "dt_txt": "2023-10-16 09:00:00"
//         },
//         {
//             "dt": 1697457600,
//             "main": {
//                 "temp": 22.73,
//                 "feels_like": 22.55,
//                 "temp_min": 22.73,
//                 "temp_max": 22.73,
//                 "pressure": 1015,
//                 "sea_level": 1015,
//                 "grnd_level": 1012,
//                 "humidity": 57,
//                 "temp_kf": 0
//             },
//             "weather": [
//                 {
//                     "id": 500,
//                     "main": "Rain",
//                     "description": "light rain",
//                     "icon": "10d"
//                 }
//             ],
//             "clouds": {
//                 "all": 100
//             },
//             "wind": {
//                 "speed": 1.33,
//                 "deg": 65,
//                 "gust": 1.71
//             },
//             "visibility": 10000,
//             "pop": 0.47,
//             "rain": {
//                 "3h": 0.35
//             },
//             "sys": {
//                 "pod": "d"
//             },
//             "dt_txt": "2023-10-16 12:00:00"
//         },
//         {
//             "dt": 1697468400,
//             "main": {
//                 "temp": 22.69,
//                 "feels_like": 22.48,
//                 "temp_min": 22.69,
//                 "temp_max": 22.69,
//                 "pressure": 1014,
//                 "sea_level": 1014,
//                 "grnd_level": 1011,
//                 "humidity": 56,
//                 "temp_kf": 0
//             },
//             "weather": [
//                 {
//                     "id": 804,
//                     "main": "Clouds",
//                     "description": "overcast clouds",
//                     "icon": "04d"
//                 }
//             ],
//             "clouds": {
//                 "all": 100
//             },
//             "wind": {
//                 "speed": 1.76,
//                 "deg": 65,
//                 "gust": 1.98
//             },
//             "visibility": 10000,
//             "pop": 0.19,
//             "sys": {
//                 "pod": "d"
//             },
//             "dt_txt": "2023-10-16 15:00:00"
//         },
//         {
//             "dt": 1697479200,
//             "main": {
//                 "temp": 22.03,
//                 "feels_like": 21.8,
//                 "temp_min": 22.03,
//                 "temp_max": 22.03,
//                 "pressure": 1015,
//                 "sea_level": 1015,
//                 "grnd_level": 1012,
//                 "humidity": 58,
//                 "temp_kf": 0
//             },
//             "weather": [
//                 {
//                     "id": 804,
//                     "main": "Clouds",
//                     "description": "overcast clouds",
//                     "icon": "04n"
//                 }
//             ],
//             "clouds": {
//                 "all": 100
//             },
//             "wind": {
//                 "speed": 1.28,
//                 "deg": 63,
//                 "gust": 1.51
//             },
//             "visibility": 10000,
//             "pop": 0.15,
//             "sys": {
//                 "pod": "n"
//             },
//             "dt_txt": "2023-10-16 18:00:00"
//         },
//         {
//             "dt": 1697490000,
//             "main": {
//                 "temp": 21.12,
//                 "feels_like": 20.93,
//                 "temp_min": 21.12,
//                 "temp_max": 21.12,
//                 "pressure": 1016,
//                 "sea_level": 1016,
//                 "grnd_level": 1013,
//                 "humidity": 63,
//                 "temp_kf": 0
//             },
//             "weather": [
//                 {
//                     "id": 500,
//                     "main": "Rain",
//                     "description": "light rain",
//                     "icon": "10n"
//                 }
//             ],
//             "clouds": {
//                 "all": 100
//             },
//             "wind": {
//                 "speed": 0.99,
//                 "deg": 32,
//                 "gust": 1.29
//             },
//             "visibility": 10000,
//             "pop": 0.36,
//             "rain": {
//                 "3h": 0.25
//             },
//             "sys": {
//                 "pod": "n"
//             },
//             "dt_txt": "2023-10-16 21:00:00"
//         },
//         {
//             "dt": 1697500800,
//             "main": {
//                 "temp": 19.38,
//                 "feels_like": 19.36,
//                 "temp_min": 19.38,
//                 "temp_max": 19.38,
//                 "pressure": 1015,
//                 "sea_level": 1015,
//                 "grnd_level": 1012,
//                 "humidity": 76,
//                 "temp_kf": 0
//             },
//             "weather": [
//                 {
//                     "id": 500,
//                     "main": "Rain",
//                     "description": "light rain",
//                     "icon": "10n"
//                 }
//             ],
//             "clouds": {
//                 "all": 100
//             },
//             "wind": {
//                 "speed": 2.09,
//                 "deg": 22,
//                 "gust": 2.16
//             },
//             "visibility": 10000,
//             "pop": 0.97,
//             "rain": {
//                 "3h": 1.4
//             },
//             "sys": {
//                 "pod": "n"
//             },
//             "dt_txt": "2023-10-17 00:00:00"
//         },
//         {
//             "dt": 1697511600,
//             "main": {
//                 "temp": 18.62,
//                 "feels_like": 18.7,
//                 "temp_min": 18.62,
//                 "temp_max": 18.62,
//                 "pressure": 1014,
//                 "sea_level": 1014,
//                 "grnd_level": 1011,
//                 "humidity": 83,
//                 "temp_kf": 0
//             },
//             "weather": [
//                 {
//                     "id": 500,
//                     "main": "Rain",
//                     "description": "light rain",
//                     "icon": "10n"
//                 }
//             ],
//             "clouds": {
//                 "all": 100
//             },
//             "wind": {
//                 "speed": 1.46,
//                 "deg": 6,
//                 "gust": 1.5
//             },
//             "visibility": 8105,
//             "pop": 1,
//             "rain": {
//                 "3h": 1.73
//             },
//             "sys": {
//                 "pod": "n"
//             },
//             "dt_txt": "2023-10-17 03:00:00"
//         },
//         {
//             "dt": 1697522400,
//             "main": {
//                 "temp": 18.73,
//                 "feels_like": 18.83,
//                 "temp_min": 18.73,
//                 "temp_max": 18.73,
//                 "pressure": 1015,
//                 "sea_level": 1015,
//                 "grnd_level": 1012,
//                 "humidity": 83,
//                 "temp_kf": 0
//             },
//             "weather": [
//                 {
//                     "id": 501,
//                     "main": "Rain",
//                     "description": "moderate rain",
//                     "icon": "10d"
//                 }
//             ],
//             "clouds": {
//                 "all": 100
//             },
//             "wind": {
//                 "speed": 1.65,
//                 "deg": 96,
//                 "gust": 1.96
//             },
//             "visibility": 10000,
//             "pop": 0.97,
//             "rain": {
//                 "3h": 5.54
//             },
//             "sys": {
//                 "pod": "d"
//             },
//             "dt_txt": "2023-10-17 06:00:00"
//         },
//         {
//             "dt": 1697533200,
//             "main": {
//                 "temp": 21.1,
//                 "feels_like": 21.12,
//                 "temp_min": 21.1,
//                 "temp_max": 21.1,
//                 "pressure": 1015,
//                 "sea_level": 1015,
//                 "grnd_level": 1012,
//                 "humidity": 71,
//                 "temp_kf": 0
//             },
//             "weather": [
//                 {
//                     "id": 500,
//                     "main": "Rain",
//                     "description": "light rain",
//                     "icon": "10d"
//                 }
//             ],
//             "clouds": {
//                 "all": 90
//             },
//             "wind": {
//                 "speed": 0.7,
//                 "deg": 163,
//                 "gust": 0.95
//             },
//             "visibility": 10000,
//             "pop": 0.35,
//             "rain": {
//                 "3h": 0.13
//             },
//             "sys": {
//                 "pod": "d"
//             },
//             "dt_txt": "2023-10-17 09:00:00"
//         },
//         {
//             "dt": 1697544000,
//             "main": {
//                 "temp": 22.2,
//                 "feels_like": 22.2,
//                 "temp_min": 22.2,
//                 "temp_max": 22.2,
//                 "pressure": 1014,
//                 "sea_level": 1014,
//                 "grnd_level": 1011,
//                 "humidity": 66,
//                 "temp_kf": 0
//             },
//             "weather": [
//                 {
//                     "id": 500,
//                     "main": "Rain",
//                     "description": "light rain",
//                     "icon": "10d"
//                 }
//             ],
//             "clouds": {
//                 "all": 63
//             },
//             "wind": {
//                 "speed": 2.16,
//                 "deg": 230,
//                 "gust": 2.41
//             },
//             "visibility": 10000,
//             "pop": 0.41,
//             "rain": {
//                 "3h": 0.49
//             },
//             "sys": {
//                 "pod": "d"
//             },
//             "dt_txt": "2023-10-17 12:00:00"
//         },
//         {
//             "dt": 1697554800,
//             "main": {
//                 "temp": 21.84,
//                 "feels_like": 21.86,
//                 "temp_min": 21.84,
//                 "temp_max": 21.84,
//                 "pressure": 1014,
//                 "sea_level": 1014,
//                 "grnd_level": 1011,
//                 "humidity": 68,
//                 "temp_kf": 0
//             },
//             "weather": [
//                 {
//                     "id": 500,
//                     "main": "Rain",
//                     "description": "light rain",
//                     "icon": "10d"
//                 }
//             ],
//             "clouds": {
//                 "all": 89
//             },
//             "wind": {
//                 "speed": 2.21,
//                 "deg": 238,
//                 "gust": 2.37
//             },
//             "visibility": 10000,
//             "pop": 0.35,
//             "rain": {
//                 "3h": 0.25
//             },
//             "sys": {
//                 "pod": "d"
//             },
//             "dt_txt": "2023-10-17 15:00:00"
//         },
//         {
//             "dt": 1697565600,
//             "main": {
//                 "temp": 20.98,
//                 "feels_like": 21.01,
//                 "temp_min": 20.98,
//                 "temp_max": 20.98,
//                 "pressure": 1015,
//                 "sea_level": 1015,
//                 "grnd_level": 1012,
//                 "humidity": 72,
//                 "temp_kf": 0
//             },
//             "weather": [
//                 {
//                     "id": 500,
//                     "main": "Rain",
//                     "description": "light rain",
//                     "icon": "10n"
//                 }
//             ],
//             "clouds": {
//                 "all": 95
//             },
//             "wind": {
//                 "speed": 0.68,
//                 "deg": 295,
//                 "gust": 0.88
//             },
//             "visibility": 10000,
//             "pop": 0.34,
//             "rain": {
//                 "3h": 0.25
//             },
//             "sys": {
//                 "pod": "n"
//             },
//             "dt_txt": "2023-10-17 18:00:00"
//         },
//         {
//             "dt": 1697576400,
//             "main": {
//                 "temp": 20.77,
//                 "feels_like": 20.78,
//                 "temp_min": 20.77,
//                 "temp_max": 20.77,
//                 "pressure": 1015,
//                 "sea_level": 1015,
//                 "grnd_level": 1012,
//                 "humidity": 72,
//                 "temp_kf": 0
//             },
//             "weather": [
//                 {
//                     "id": 804,
//                     "main": "Clouds",
//                     "description": "overcast clouds",
//                     "icon": "04n"
//                 }
//             ],
//             "clouds": {
//                 "all": 100
//             },
//             "wind": {
//                 "speed": 1.03,
//                 "deg": 48,
//                 "gust": 1.45
//             },
//             "visibility": 10000,
//             "pop": 0,
//             "sys": {
//                 "pod": "n"
//             },
//             "dt_txt": "2023-10-17 21:00:00"
//         },
//         {
//             "dt": 1697587200,
//             "main": {
//                 "temp": 20.28,
//                 "feels_like": 20.24,
//                 "temp_min": 20.28,
//                 "temp_max": 20.28,
//                 "pressure": 1015,
//                 "sea_level": 1015,
//                 "grnd_level": 1012,
//                 "humidity": 72,
//                 "temp_kf": 0
//             },
//             "weather": [
//                 {
//                     "id": 804,
//                     "main": "Clouds",
//                     "description": "overcast clouds",
//                     "icon": "04n"
//                 }
//             ],
//             "clouds": {
//                 "all": 100
//             },
//             "wind": {
//                 "speed": 1.22,
//                 "deg": 62,
//                 "gust": 1.44
//             },
//             "visibility": 10000,
//             "pop": 0.03,
//             "sys": {
//                 "pod": "n"
//             },
//             "dt_txt": "2023-10-18 00:00:00"
//         },
//         {
//             "dt": 1697598000,
//             "main": {
//                 "temp": 19.72,
//                 "feels_like": 19.68,
//                 "temp_min": 19.72,
//                 "temp_max": 19.72,
//                 "pressure": 1014,
//                 "sea_level": 1014,
//                 "grnd_level": 1011,
//                 "humidity": 74,
//                 "temp_kf": 0
//             },
//             "weather": [
//                 {
//                     "id": 804,
//                     "main": "Clouds",
//                     "description": "overcast clouds",
//                     "icon": "04n"
//                 }
//             ],
//             "clouds": {
//                 "all": 100
//             },
//             "wind": {
//                 "speed": 1.58,
//                 "deg": 51,
//                 "gust": 1.77
//             },
//             "visibility": 10000,
//             "pop": 0,
//             "sys": {
//                 "pod": "n"
//             },
//             "dt_txt": "2023-10-18 03:00:00"
//         },
//         {
//             "dt": 1697608800,
//             "main": {
//                 "temp": 19.5,
//                 "feels_like": 19.39,
//                 "temp_min": 19.5,
//                 "temp_max": 19.5,
//                 "pressure": 1015,
//                 "sea_level": 1015,
//                 "grnd_level": 1011,
//                 "humidity": 72,
//                 "temp_kf": 0
//             },
//             "weather": [
//                 {
//                     "id": 804,
//                     "main": "Clouds",
//                     "description": "overcast clouds",
//                     "icon": "04d"
//                 }
//             ],
//             "clouds": {
//                 "all": 100
//             },
//             "wind": {
//                 "speed": 1.81,
//                 "deg": 54,
//                 "gust": 2.06
//             },
//             "visibility": 10000,
//             "pop": 0,
//             "sys": {
//                 "pod": "d"
//             },
//             "dt_txt": "2023-10-18 06:00:00"
//         },
//         {
//             "dt": 1697619600,
//             "main": {
//                 "temp": 21.8,
//                 "feels_like": 21.65,
//                 "temp_min": 21.8,
//                 "temp_max": 21.8,
//                 "pressure": 1015,
//                 "sea_level": 1015,
//                 "grnd_level": 1012,
//                 "humidity": 62,
//                 "temp_kf": 0
//             },
//             "weather": [
//                 {
//                     "id": 804,
//                     "main": "Clouds",
//                     "description": "overcast clouds",
//                     "icon": "04d"
//                 }
//             ],
//             "clouds": {
//                 "all": 100
//             },
//             "wind": {
//                 "speed": 1.13,
//                 "deg": 117,
//                 "gust": 1.54
//             },
//             "visibility": 10000,
//             "pop": 0,
//             "sys": {
//                 "pod": "d"
//             },
//             "dt_txt": "2023-10-18 09:00:00"
//         },
//         {
//             "dt": 1697630400,
//             "main": {
//                 "temp": 23.23,
//                 "feels_like": 23.2,
//                 "temp_min": 23.23,
//                 "temp_max": 23.23,
//                 "pressure": 1014,
//                 "sea_level": 1014,
//                 "grnd_level": 1011,
//                 "humidity": 61,
//                 "temp_kf": 0
//             },
//             "weather": [
//                 {
//                     "id": 804,
//                     "main": "Clouds",
//                     "description": "overcast clouds",
//                     "icon": "04d"
//                 }
//             ],
//             "clouds": {
//                 "all": 100
//             },
//             "wind": {
//                 "speed": 2.45,
//                 "deg": 181,
//                 "gust": 3.01
//             },
//             "visibility": 10000,
//             "pop": 0,
//             "sys": {
//                 "pod": "d"
//             },
//             "dt_txt": "2023-10-18 12:00:00"
//         },
//         {
//             "dt": 1697641200,
//             "main": {
//                 "temp": 22.96,
//                 "feels_like": 23.11,
//                 "temp_min": 22.96,
//                 "temp_max": 22.96,
//                 "pressure": 1013,
//                 "sea_level": 1013,
//                 "grnd_level": 1010,
//                 "humidity": 69,
//                 "temp_kf": 0
//             },
//             "weather": [
//                 {
//                     "id": 804,
//                     "main": "Clouds",
//                     "description": "overcast clouds",
//                     "icon": "04d"
//                 }
//             ],
//             "clouds": {
//                 "all": 100
//             },
//             "wind": {
//                 "speed": 2.83,
//                 "deg": 162,
//                 "gust": 3.07
//             },
//             "visibility": 10000,
//             "pop": 0,
//             "sys": {
//                 "pod": "d"
//             },
//             "dt_txt": "2023-10-18 15:00:00"
//         },
//         {
//             "dt": 1697652000,
//             "main": {
//                 "temp": 22.11,
//                 "feels_like": 22.31,
//                 "temp_min": 22.11,
//                 "temp_max": 22.11,
//                 "pressure": 1013,
//                 "sea_level": 1013,
//                 "grnd_level": 1010,
//                 "humidity": 74,
//                 "temp_kf": 0
//             },
//             "weather": [
//                 {
//                     "id": 804,
//                     "main": "Clouds",
//                     "description": "overcast clouds",
//                     "icon": "04n"
//                 }
//             ],
//             "clouds": {
//                 "all": 97
//             },
//             "wind": {
//                 "speed": 0.93,
//                 "deg": 169,
//                 "gust": 1.63
//             },
//             "visibility": 10000,
//             "pop": 0,
//             "sys": {
//                 "pod": "n"
//             },
//             "dt_txt": "2023-10-18 18:00:00"
//         },
//         {
//             "dt": 1697662800,
//             "main": {
//                 "temp": 21.71,
//                 "feels_like": 21.89,
//                 "temp_min": 21.71,
//                 "temp_max": 21.71,
//                 "pressure": 1013,
//                 "sea_level": 1013,
//                 "grnd_level": 1010,
//                 "humidity": 75,
//                 "temp_kf": 0
//             },
//             "weather": [
//                 {
//                     "id": 802,
//                     "main": "Clouds",
//                     "description": "scattered clouds",
//                     "icon": "03n"
//                 }
//             ],
//             "clouds": {
//                 "all": 47
//             },
//             "wind": {
//                 "speed": 1.92,
//                 "deg": 141,
//                 "gust": 2.57
//             },
//             "visibility": 10000,
//             "pop": 0,
//             "sys": {
//                 "pod": "n"
//             },
//             "dt_txt": "2023-10-18 21:00:00"
//         },
//         {
//             "dt": 1697673600,
//             "main": {
//                 "temp": 21.2,
//                 "feels_like": 21.31,
//                 "temp_min": 21.2,
//                 "temp_max": 21.2,
//                 "pressure": 1013,
//                 "sea_level": 1013,
//                 "grnd_level": 1010,
//                 "humidity": 74,
//                 "temp_kf": 0
//             },
//             "weather": [
//                 {
//                     "id": 802,
//                     "main": "Clouds",
//                     "description": "scattered clouds",
//                     "icon": "03n"
//                 }
//             ],
//             "clouds": {
//                 "all": 31
//             },
//             "wind": {
//                 "speed": 2.38,
//                 "deg": 119,
//                 "gust": 3.09
//             },
//             "visibility": 10000,
//             "pop": 0,
//             "sys": {
//                 "pod": "n"
//             },
//             "dt_txt": "2023-10-19 00:00:00"
//         },
//         {
//             "dt": 1697684400,
//             "main": {
//                 "temp": 21,
//                 "feels_like": 21.04,
//                 "temp_min": 21,
//                 "temp_max": 21,
//                 "pressure": 1012,
//                 "sea_level": 1012,
//                 "grnd_level": 1009,
//                 "humidity": 72,
//                 "temp_kf": 0
//             },
//             "weather": [
//                 {
//                     "id": 802,
//                     "main": "Clouds",
//                     "description": "scattered clouds",
//                     "icon": "03n"
//                 }
//             ],
//             "clouds": {
//                 "all": 31
//             },
//             "wind": {
//                 "speed": 2,
//                 "deg": 115,
//                 "gust": 2.89
//             },
//             "visibility": 10000,
//             "pop": 0,
//             "sys": {
//                 "pod": "n"
//             },
//             "dt_txt": "2023-10-19 03:00:00"
//         },
//         {
//             "dt": 1697695200,
//             "main": {
//                 "temp": 21.11,
//                 "feels_like": 21.1,
//                 "temp_min": 21.11,
//                 "temp_max": 21.11,
//                 "pressure": 1011,
//                 "sea_level": 1011,
//                 "grnd_level": 1008,
//                 "humidity": 70,
//                 "temp_kf": 0
//             },
//             "weather": [
//                 {
//                     "id": 803,
//                     "main": "Clouds",
//                     "description": "broken clouds",
//                     "icon": "04d"
//                 }
//             ],
//             "clouds": {
//                 "all": 59
//             },
//             "wind": {
//                 "speed": 3.41,
//                 "deg": 131,
//                 "gust": 4.39
//             },
//             "visibility": 10000,
//             "pop": 0,
//             "sys": {
//                 "pod": "d"
//             },
//             "dt_txt": "2023-10-19 06:00:00"
//         },
//         {
//             "dt": 1697706000,
//             "main": {
//                 "temp": 24.04,
//                 "feels_like": 23.96,
//                 "temp_min": 24.04,
//                 "temp_max": 24.04,
//                 "pressure": 1011,
//                 "sea_level": 1011,
//                 "grnd_level": 1008,
//                 "humidity": 56,
//                 "temp_kf": 0
//             },
//             "weather": [
//                 {
//                     "id": 804,
//                     "main": "Clouds",
//                     "description": "overcast clouds",
//                     "icon": "04d"
//                 }
//             ],
//             "clouds": {
//                 "all": 92
//             },
//             "wind": {
//                 "speed": 4.44,
//                 "deg": 149,
//                 "gust": 6.22
//             },
//             "visibility": 10000,
//             "pop": 0,
//             "sys": {
//                 "pod": "d"
//             },
//             "dt_txt": "2023-10-19 09:00:00"
//         },
//         {
//             "dt": 1697716800,
//             "main": {
//                 "temp": 25.34,
//                 "feels_like": 25.5,
//                 "temp_min": 25.34,
//                 "temp_max": 25.34,
//                 "pressure": 1010,
//                 "sea_level": 1010,
//                 "grnd_level": 1007,
//                 "humidity": 60,
//                 "temp_kf": 0
//             },
//             "weather": [
//                 {
//                     "id": 803,
//                     "main": "Clouds",
//                     "description": "broken clouds",
//                     "icon": "04d"
//                 }
//             ],
//             "clouds": {
//                 "all": 66
//             },
//             "wind": {
//                 "speed": 4.88,
//                 "deg": 167,
//                 "gust": 6.18
//             },
//             "visibility": 10000,
//             "pop": 0,
//             "sys": {
//                 "pod": "d"
//             },
//             "dt_txt": "2023-10-19 12:00:00"
//         },
//         {
//             "dt": 1697727600,
//             "main": {
//                 "temp": 24.68,
//                 "feels_like": 24.9,
//                 "temp_min": 24.68,
//                 "temp_max": 24.68,
//                 "pressure": 1009,
//                 "sea_level": 1009,
//                 "grnd_level": 1006,
//                 "humidity": 65,
//                 "temp_kf": 0
//             },
//             "weather": [
//                 {
//                     "id": 804,
//                     "main": "Clouds",
//                     "description": "overcast clouds",
//                     "icon": "04d"
//                 }
//             ],
//             "clouds": {
//                 "all": 89
//             },
//             "wind": {
//                 "speed": 4.13,
//                 "deg": 156,
//                 "gust": 5.32
//             },
//             "visibility": 10000,
//             "pop": 0,
//             "sys": {
//                 "pod": "d"
//             },
//             "dt_txt": "2023-10-19 15:00:00"
//         },
//         {
//             "dt": 1697738400,
//             "main": {
//                 "temp": 23.74,
//                 "feels_like": 23.84,
//                 "temp_min": 23.74,
//                 "temp_max": 23.74,
//                 "pressure": 1008,
//                 "sea_level": 1008,
//                 "grnd_level": 1005,
//                 "humidity": 64,
//                 "temp_kf": 0
//             },
//             "weather": [
//                 {
//                     "id": 803,
//                     "main": "Clouds",
//                     "description": "broken clouds",
//                     "icon": "04n"
//                 }
//             ],
//             "clouds": {
//                 "all": 74
//             },
//             "wind": {
//                 "speed": 3.49,
//                 "deg": 135,
//                 "gust": 5.86
//             },
//             "visibility": 10000,
//             "pop": 0,
//             "sys": {
//                 "pod": "n"
//             },
//             "dt_txt": "2023-10-19 18:00:00"
//         },
//         {
//             "dt": 1697749200,
//             "main": {
//                 "temp": 23.8,
//                 "feels_like": 23.67,
//                 "temp_min": 23.8,
//                 "temp_max": 23.8,
//                 "pressure": 1008,
//                 "sea_level": 1008,
//                 "grnd_level": 1005,
//                 "humidity": 55,
//                 "temp_kf": 0
//             },
//             "weather": [
//                 {
//                     "id": 804,
//                     "main": "Clouds",
//                     "description": "overcast clouds",
//                     "icon": "04n"
//                 }
//             ],
//             "clouds": {
//                 "all": 99
//             },
//             "wind": {
//                 "speed": 3.9,
//                 "deg": 119,
//                 "gust": 6.63
//             },
//             "visibility": 10000,
//             "pop": 0,
//             "sys": {
//                 "pod": "n"
//             },
//             "dt_txt": "2023-10-19 21:00:00"
//         },
//         {
//             "dt": 1697760000,
//             "main": {
//                 "temp": 23.11,
//                 "feels_like": 22.89,
//                 "temp_min": 23.11,
//                 "temp_max": 23.11,
//                 "pressure": 1006,
//                 "sea_level": 1006,
//                 "grnd_level": 1003,
//                 "humidity": 54,
//                 "temp_kf": 0
//             },
//             "weather": [
//                 {
//                     "id": 804,
//                     "main": "Clouds",
//                     "description": "overcast clouds",
//                     "icon": "04n"
//                 }
//             ],
//             "clouds": {
//                 "all": 95
//             },
//             "wind": {
//                 "speed": 3,
//                 "deg": 93,
//                 "gust": 4.59
//             },
//             "visibility": 10000,
//             "pop": 0,
//             "sys": {
//                 "pod": "n"
//             },
//             "dt_txt": "2023-10-20 00:00:00"
//         },
//         {
//             "dt": 1697770800,
//             "main": {
//                 "temp": 23.32,
//                 "feels_like": 23.01,
//                 "temp_min": 23.32,
//                 "temp_max": 23.32,
//                 "pressure": 1004,
//                 "sea_level": 1004,
//                 "grnd_level": 1001,
//                 "humidity": 50,
//                 "temp_kf": 0
//             },
//             "weather": [
//                 {
//                     "id": 804,
//                     "main": "Clouds",
//                     "description": "overcast clouds",
//                     "icon": "04n"
//                 }
//             ],
//             "clouds": {
//                 "all": 94
//             },
//             "wind": {
//                 "speed": 4.55,
//                 "deg": 121,
//                 "gust": 8.09
//             },
//             "visibility": 10000,
//             "pop": 0,
//             "sys": {
//                 "pod": "n"
//             },
//             "dt_txt": "2023-10-20 03:00:00"
//         },
//         {
//             "dt": 1697781600,
//             "main": {
//                 "temp": 23.22,
//                 "feels_like": 22.88,
//                 "temp_min": 23.22,
//                 "temp_max": 23.22,
//                 "pressure": 1003,
//                 "sea_level": 1003,
//                 "grnd_level": 1000,
//                 "humidity": 49,
//                 "temp_kf": 0
//             },
//             "weather": [
//                 {
//                     "id": 804,
//                     "main": "Clouds",
//                     "description": "overcast clouds",
//                     "icon": "04d"
//                 }
//             ],
//             "clouds": {
//                 "all": 96
//             },
//             "wind": {
//                 "speed": 6.16,
//                 "deg": 126,
//                 "gust": 10.79
//             },
//             "visibility": 10000,
//             "pop": 0,
//             "sys": {
//                 "pod": "d"
//             },
//             "dt_txt": "2023-10-20 06:00:00"
//         },
//         {
//             "dt": 1697792400,
//             "main": {
//                 "temp": 26.35,
//                 "feels_like": 26.35,
//                 "temp_min": 26.35,
//                 "temp_max": 26.35,
//                 "pressure": 1001,
//                 "sea_level": 1001,
//                 "grnd_level": 998,
//                 "humidity": 44,
//                 "temp_kf": 0
//             },
//             "weather": [
//                 {
//                     "id": 803,
//                     "main": "Clouds",
//                     "description": "broken clouds",
//                     "icon": "04d"
//                 }
//             ],
//             "clouds": {
//                 "all": 81
//             },
//             "wind": {
//                 "speed": 8.73,
//                 "deg": 144,
//                 "gust": 14.62
//             },
//             "visibility": 10000,
//             "pop": 0,
//             "sys": {
//                 "pod": "d"
//             },
//             "dt_txt": "2023-10-20 09:00:00"
//         },
//         {
//             "dt": 1697803200,
//             "main": {
//                 "temp": 25.93,
//                 "feels_like": 26.15,
//                 "temp_min": 25.93,
//                 "temp_max": 25.93,
//                 "pressure": 1000,
//                 "sea_level": 1000,
//                 "grnd_level": 997,
//                 "humidity": 60,
//                 "temp_kf": 0
//             },
//             "weather": [
//                 {
//                     "id": 804,
//                     "main": "Clouds",
//                     "description": "overcast clouds",
//                     "icon": "04d"
//                 }
//             ],
//             "clouds": {
//                 "all": 91
//             },
//             "wind": {
//                 "speed": 8.42,
//                 "deg": 152,
//                 "gust": 12.97
//             },
//             "visibility": 10000,
//             "pop": 0,
//             "sys": {
//                 "pod": "d"
//             },
//             "dt_txt": "2023-10-20 12:00:00"
//         },
//         {
//             "dt": 1697814000,
//             "main": {
//                 "temp": 25.67,
//                 "feels_like": 25.91,
//                 "temp_min": 25.67,
//                 "temp_max": 25.67,
//                 "pressure": 998,
//                 "sea_level": 998,
//                 "grnd_level": 995,
//                 "humidity": 62,
//                 "temp_kf": 0
//             },
//             "weather": [
//                 {
//                     "id": 804,
//                     "main": "Clouds",
//                     "description": "overcast clouds",
//                     "icon": "04d"
//                 }
//             ],
//             "clouds": {
//                 "all": 100
//             },
//             "wind": {
//                 "speed": 7.28,
//                 "deg": 137,
//                 "gust": 12.12
//             },
//             "visibility": 10000,
//             "pop": 0,
//             "sys": {
//                 "pod": "d"
//             },
//             "dt_txt": "2023-10-20 15:00:00"
//         }
//     ],
//     "city": {
//         "id": 3170116,
//         "name": "Portici",
//         "coord": {
//             "lat": 40.8141,
//             "lon": 14.3391
//         },
//         "country": "IT",
//         "population": 60218,
//         "timezone": 7200,
//         "sunrise": 1697346788,
//         "sunset": 1697387014
//     }
// }
