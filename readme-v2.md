<p align="center">
  <img src="https://raw.githubusercontent.com/PKief/vscode-material-icon-theme/ec559a9f6bfd399b82bb44393651661b08aaf7ba/icons/folder-markdown-open.svg" width="100" alt="project-logo">
</p>
<p align="center">
    <h1 align="center">WEATHER-APP-REACT</h1>
</p>
<p align="center">
    <em>Weather data at your fingertips!</em>
</p>
<p align="center">
	<img src="https://img.shields.io/github/license/diniscarvalho19/weather-app-react?style=default&logo=opensourceinitiative&logoColor=white&color=0080ff" alt="license">
	<img src="https://img.shields.io/github/last-commit/diniscarvalho19/weather-app-react?style=default&logo=git&logoColor=white&color=0080ff" alt="last-commit">
	<img src="https://img.shields.io/github/languages/top/diniscarvalho19/weather-app-react?style=default&color=0080ff" alt="repo-top-language">
	<img src="https://img.shields.io/github/languages/count/diniscarvalho19/weather-app-react?style=default&color=0080ff" alt="repo-language-count">
<p>
<p align="center">
	<!-- default option, no dependency badges. -->
</p>

<br><!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary><br>

- [ Overview](#-overview)
- [ Features](#-features)
- [ Repository Structure](#-repository-structure)
- [ Modules](#-modules)
- [ Getting Started](#-getting-started)
  - [ Installation](#-installation)
  - [ Usage](#-usage)
  - [ Tests](#-tests)
- [ Project Roadmap](#-project-roadmap)
- [ Contributing](#-contributing)
- [ License](#-license)
- [ Acknowledgments](#-acknowledgments)
</details>
<hr>

##  Overview

The weather-app-react project is a dynamic and responsive React application that allows users to input a location and retrieve historical weather data from OpenWeatherMap API. It provides various components, such as Stats, Error, Loading, App, Chart, and Table, ensuring an engaging UI with tooltips, icons, and customizable settings. The application supports smooth loading, error handling, and accessibility compliance. This projects purpose is to deliver weather insights with average temperature, rainfall, humidity, wind speed, solar energy potential, and interactive charts for better data exploration.

---

##  Features

|   Feature         | Description                                                                                            |
|-------------------|--------------------------------------------------------------------------------------------------------|
| Architecture    | React-based application with separate components, services, and styles.                                   |
| Components        | Defines various UI components for weather data display and user interactions.                          |
| Services         | Implements asynchronous data retrieval using OpenWeatherMap API. Retries failed fetches with delay.     |
| Styles            | CSS files for customizing various elements, including tables, charts, error containers, and tooltips.   |
| Chart            | Displays weather data in visually appealing charts, toggleable by interactive buttons.                    |
| Table            | Renders weather data in responsive, paginated tables with forward and back navigation buttons.            |
| CustomTooltip     | Defines a custom tooltip component for displaying hour, weather code, and other weather information.           |
| WeatherService    | Fetches weather data asynchronously from OpenWeatherMap API, handles retries with specified delay.           |
| Stats.css         | Styles responsive, centered tables with customizable settings for enhanced user experience.               |
| Error.css          | Designs appearance of error containers with custom animations, text shadows, and SVG icons for improved UX. |
| Chart.css         | Shapes chart container's dimensions, alignment, and incorporation of controls to optimize the user interface.   |
| App.css          | Configures global settings, such as fonts, layout, background gradients, and titles for optimally presenting data.|
| Stats.css        | Defines styles for weather app statistics, ensuring a visually appealing and accessible representation of data. |
| CustomTooltip.css   | Customizes tooltip visual style with a white background, grey border, and shadow effect to enhance user experience.     |

1. Architecture:
   This project is a React-based application with separate components, services, and styles for organizing the code.

2. Components:
   Various UI components are defined, including statistics, charts, tables, error containers, SVG containers, and tooltips. They use props and state to manage incoming weather data and user input while using JSX syntax for seamless integration between component logic and rendering the user interface. The project efficiently handles asynchronous calls using Promises and async/await to ensure efficient data fetching and rendering in the app.

3. Services:
   WeatherService.js exports an asynchronous function for weather data retrieval, featuring retry functionality when faced with API failures and defined delay between retries to ensure continuous data flow. This service is crucial for the React application's data-fetching mechanism.

4. Styles:

---

##  Repository Structure

```sh
└── weather-app-react/
    ├── README.md
    ├── index.html
    ├── package-lock.json
    ├── package.json
    ├── src
    │   ├── components
    │   ├── data
    │   ├── main.jsx
    │   ├── services
    │   └── styles
    ├── sunny.svg
    └── vite.config.js
```

---

##  Modules

<details closed><summary>.</summary>

| File                                                                                                    | Summary                                                                                                                                                                                                                                                                                                                                                                                 |
| ---                                                                                                     | ---                                                                                                                                                                                                                                                                                                                                                                                     |
| [package-lock.json](https://github.com/diniscarvalho19/weather-app-react/blob/master/package-lock.json) | Stores the precise version numbers for all installed npm packages and their dependencies.-Enables consistent reproduction of the development environment by using the recorded dependencies.-Helps ensure a reliable and secure production environment when deployed, as it includes exact dependency versions to minimize compatibility issues and potential security vulnerabilities. |
| [vite.config.js](https://github.com/diniscarvalho19/weather-app-react/blob/master/vite.config.js)       | Configures Vite for the weather app React project, enabling React support with a single plugin.                                                                                                                                                                                                                                                                                         |
| [package.json](https://github.com/diniscarvalho19/weather-app-react/blob/master/package.json)           | In this weather-app-react repository, the package.json file serves as the project's configuration hub. It defines scripts for development, build, linting, and previewing, and lists essential dependencies and devDependencies, ensuring a functional React weather application.                                                                                                       |
| [index.html](https://github.com/diniscarvalho19/weather-app-react/blob/master/index.html)               | Kickstarting our weather app, the index.html file sets up the projects fundamental structure. It establishes HTML language and includes vital meta tags, favicon link, and title definition. Mainly, it configures the entry point, signaling Vite to load /src/main.jsx and inject it into the <div id=root"></div>.                                                                   |

</details>

<details closed><summary>src</summary>

| File                                                                                      | Summary                                                                                                                                                                   |
| ---                                                                                       | ---                                                                                                                                                                       |
| [main.jsx](https://github.com/diniscarvalho19/weather-app-react/blob/master/src/main.jsx) | Initializes and renders the React application constructed within the weather-app-react repository, importing necessary components and styles from designated directories. |

</details>

<details closed><summary>src.components</summary>

| File                                                                                                                   | Summary                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| ---                                                                                                                    | ---                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| [Stats.jsx](https://github.com/diniscarvalho19/weather-app-react/blob/master/src/components/Stats.jsx)                 | Analyze weather data and display average temperature, rainfall, humidity, solar energy, and wind speed with respective tooltips. Design an engaging UI with icons and curiosity facts. Calculate total solar panel energy potential from given weather data. (Stats component)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| [Error.jsx](https://github.com/diniscarvalho19/weather-app-react/blob/master/src/components/Error.jsx)                 | Creates a custom error component in the React application, receiving an error message as prop and rendering it in a styled container. Adheres to prop types validation for correct data format.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| [Loading.jsx](https://github.com/diniscarvalho19/weather-app-react/blob/master/src/components/Loading.jsx)             | Create a loading component for your React weather app, which displays an animated SVG icon and a Searching message, enhancing user experience while data is fetched. The component imports custom Loading.css and utilizes dynamic SVG content with various paths for smooth animation.                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| [App.jsx](https://github.com/diniscarvalho19/weather-app-react/blob/master/src/components/App.jsx)                     | Create a weather app where users input a location, start and end dates to retrieve historical weather data from OpenWeatherMap API. Display options to view statistics, charts, and tables based on user selection. Optimize for responsive design. Ensure smooth loading, error handling, and accessibility compliance.                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| [Chart.jsx](https://github.com/diniscarvalho19/weather-app-react/blob/master/src/components/Chart.jsx)                 | Generate visually appealing charts based on provided weather data. Toggle chart visibility for temperature, humidity, rain, snow, sunshine duration, global tilted irradiance, wind speed, and weather code using interactive buttons.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| [Table.jsx](https://github.com/diniscarvalho19/weather-app-react/blob/master/src/components/Table.jsx)                 | Create and manage tables for rendering weather data within the React application. This custom Table component accepts data as prop, sets current page, and handles page navigation with forward and back buttons. It displays requested weather data per page, providing users an intuitive way to explore various data points.                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| [SvgContainer.jsx](https://github.com/diniscarvalho19/weather-app-react/blob/master/src/components/SvgContainer.jsx)   | Fetching and processing up-to-date weather information using external APIs (if applicable).2. Implementing UI components, such as icons, cards, or visualizations for displaying the weather data.3. Providing user interactions and functionalities to search for different locations or adjust app settings.The key features that distinguish this file from other parts of the architecture include:-React components definition, making use of props and state to manage incoming weather information and user input.-JSX syntax, enabling seamless integration between component logic and the rendered user interface.-Effective handling of asynchronous calls (using Promises, async/await), ensuring efficient data fetching and rendering in the app. |
| [CustomTooltip.jsx](https://github.com/diniscarvalho19/weather-app-react/blob/master/src/components/CustomTooltip.jsx) | This file defines the CustomTooltip component, rendering hour, weather code, and other data from props, utilizing styles from a separate CSS file and PropTypes validation.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |

</details>

<details closed><summary>src.services</summary>

| File                                                                                                                 | Summary                                                                                                                                                                                                                                                                                                      |
| ---                                                                                                                  | ---                                                                                                                                                                                                                                                                                                          |
| [weatherService.js](https://github.com/diniscarvalho19/weather-app-react/blob/master/src/services/weatherService.js) | Empowering seamless weather data retrieval, this service file exports an asynchronous function that retries failed fetches up to a specified limit with a defined delay between retries. Integral to the React apps data-fetching mechanism, it ensures uninterrupted weather data flow for our application. |

</details>

<details closed><summary>src.styles</summary>

| File                                                                                                               | Summary                                                                                                                                                                                                                                                                                  |
| ---                                                                                                                | ---                                                                                                                                                                                                                                                                                      |
| [Table.css](https://github.com/diniscarvalho19/weather-app-react/blob/master/src/styles/Table.css)                 | The `Table.css` file in this React application styles responsive, centered tables with customizable settings and improved user experience.                                                                                                                                               |
| [Error.css](https://github.com/diniscarvalho19/weather-app-react/blob/master/src/styles/Error.css)                 | The Error.css file in the repository styles folder designs the appearance of error containers, enhancing user experience by incorporating custom animations, text shadows, and SVG icons.                                                                                                |
| [Chart.css](https://github.com/diniscarvalho19/weather-app-react/blob/master/src/styles/Chart.css)                 | The Chart.css file, situated in src/styles, shapes the appearance of the container housing weather charts within the React application by determining its dimensions, alignment, and incorporation of controls.                                                                          |
| [App.css](https://github.com/diniscarvalho19/weather-app-react/blob/master/src/styles/App.css)                     | The CSS file adjusts global styling, setting the Chivo Mono font for text, establishing the overall layout with a center-aligned flex container, and configuring various elements like titles, buttons, and background gradients to optimally present data within the React application. |
| [Stats.css](https://github.com/diniscarvalho19/weather-app-react/blob/master/src/styles/Stats.css)                 | The Stats.css file shapes the layout and style of weather app statistics, defining container dimensions, alignments, colors, and font sizes for main and other data displays. It ensures a visually appealing and accessible representation of app statistics.                           |
| [CustomTooltip.css](https://github.com/diniscarvalho19/weather-app-react/blob/master/src/styles/CustomTooltip.css) | Enhance user experience in the weather app by customizing tooltips. This file defines the visual style for custom tooltips, featuring a white background, grey border, and shadow effect.                                                                                                |
| [DatePicker.css](https://github.com/diniscarvalho19/weather-app-react/blob/master/src/styles/DatePicker.css)       | Customizes the appearance of date picker inputs in the React-based weather app. Defines input width and margin, as well as navigation icon dimensions. Enhances user interface for improved user experience.                                                                             |
| [index.css](https://github.com/diniscarvalho19/weather-app-react/blob/master/src/styles/index.css)                 | The `src/styles/index.css` file in the weather-app-react repository serves as the entry point for defining and applying global styles across the entire application, contributing significantly to its consistent visual presentation.                                                   |
| [SvgContainer.css](https://github.com/diniscarvalho19/weather-app-react/blob/master/src/styles/SvgContainer.css)   | This CSS file defines keyframes for various icon animations such as spinning, almost fade in and out, scaling, waving, and jumping, enhancing the user experience in the React application.                                                                                              |
| [Loading.css](https://github.com/diniscarvalho19/weather-app-react/blob/master/src/styles/Loading.css)             | This CSS file animates a container with a fading text label Loading inside, using keyframes to animate the background position and text opacity. The dot elements fade in and out simultaneously, enhancing user experience during app wait times.                                       |

</details>

---

##  Getting Started


###  Installation

<h4>From <code>source</code></h4>

> 1. Clone the weather-app-react repository:
>
> ```console
> $ git clone https://github.com/diniscarvalho19/weather-app-react
> ```
>
> 2. Change to the project directory:
> ```console
> $ cd weather-app-react
> ```
>
> 3. Install the dependencies:
> ```console
> $ > npm intall
> ```

###  Usage

<h4>From <code>source</code></h4>

> Run weather-app-react using the command below:
> ```console
> $ > npm run dev
> ```

