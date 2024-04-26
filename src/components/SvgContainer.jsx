import React from "react";
import "../styles/SvgContainer.css";

const SvgContainer = ({ class_name, svg_key, value }) => {
  const svgElement = {

    //view-source:file:///C:/Users/dinis/Downloads/sun-fill-svgrepo-com%20(1).svg
    sunny:
      <svg style={{"animation": "spin 10s linear infinite"}} viewBox="0 0 16 16">
  <path d="M8 12a4 4 0 1 0 0-8 4 4 0 0 0 0 8zM8 0a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 0zm0 13a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 13zm8-5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2a.5.5 0 0 1 .5.5zM3 8a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2A.5.5 0 0 1 3 8zm10.657-5.657a.5.5 0 0 1 0 .707l-1.414 1.415a.5.5 0 1 1-.707-.708l1.414-1.414a.5.5 0 0 1 .707 0zm-9.193 9.193a.5.5 0 0 1 0 .707L3.05 13.657a.5.5 0 0 1-.707-.707l1.414-1.414a.5.5 0 0 1 .707 0zm9.193 2.121a.5.5 0 0 1-.707 0l-1.414-1.414a.5.5 0 0 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .707zM4.464 4.465a.5.5 0 0 1-.707 0L2.343 3.05a.5.5 0 1 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .708z"/>
</svg>,
    

    //https://www.svgrepo.com/svg/344110/clouds-fill
    cloudy: (
      <svg  style={{"animation": "almostFadeInAndOut 3s ease-in-out infinite"}} viewBox="0 0 16 16" fill="#000000">
        <path d="M11.473 9a4.5 4.5 0 0 0-8.72-.99A3 3 0 0 0 3 14h8.5a2.5 2.5 0 1 0-.027-5z" />
        <path d="M14.544 9.772a3.506 3.506 0 0 0-2.225-1.676 5.502 5.502 0 0 0-6.337-4.002 4.002 4.002 0 0 1 7.392.91 2.5 2.5 0 0 1 1.17 4.769z" />
      </svg>
    ),
    //https://www.svgrepo.com/svg/97795/fire-risk
    smoky: (
      <svg style={{"animation": "scaleDescale 3s ease-in-out infinite"}} viewBox="0 0 975.47 975.471">
        <g>
          <path d="M243.745,879.436c0,11,8.5,20.1,19.6,20.1h121.9c11,0,19.5-9,19.5-20.1v-100.9h-161V879.436z" />
          <path
            d="M404.745,739.535h77.3c-0.1-1-0.2-0.6-0.3-0.799c-21.9-39.602-33.5-84.801-33.5-130.301c0-46.5,12.1-92.4,35-132.7
     c12.2-21.4,27.299-40.9,44.7-58.2l-108.5-145h23.7c16.5,0,25.899-19.1,15.899-32.3l-118.8-156.4c-4-5.3-10-7.9-15.9-7.9
     c-6,0-11.899,2.6-15.899,7.9l-119,156.4c-10,13.2-0.6,32.3,15.9,32.3h23.7l-154.6,207.1c-9.9,13.201-0.4,31.9,16,31.9h42.6
     l-129.7,196.9c-8.8,13.301,0.8,31.1,16.7,31.1h223.7H404.745z"
          />
          <path
            d="M749.945,135.436c-1.4-8.6-8.7-13.8-16.3-13.8c-4.5,0-9,1.8-12.301,5.7c-0.199,0.2-16.8,18.5-27.1,38.7
     c-8.9,17.3-16.1,35.5-20.2,54.4c-7.8,35.7-6.399,73.9,2.5,109.3c2.9,11.5,6.7,22.9,11.3,33.8c4.4,10.5,9.101,21.2,10,32.8
     c1.301,21.5-18.199,40.2-39.3,40.2c-17.5,0-32.3-9.8-37.6-28.3c-1.601-5.5-6.601-9-11.8-9c-2.2,0-4.4,0.6-6.4,1.8
     c-70.6,43.9-115.5,123.9-115.5,207.5c0,48,12.599,93.701,38,130.801c5.5,8.1,10.7,16,17.6,23.699c15.801,19.201,34.5,36,55.4,49.6
     c1.7,1.102,3.5,1.602,5.3,1.602c6.601,0,12.2-7.201,8.7-14.201c-9.2-18.1-14.4-38.699-14.4-60.4c0-50.398,27.9-90.799,69-117.6
     c36.4-23.699,26.4-54.4,32.4-90.9c3.3-20.199,15.3-38.6,26-51.699c2-2.4,4.7-3.5,7.4-3.5c4.399,0,8.6,2.899,9.699,7.899
     c8.601,41.401,60.101,108.901,89.9,153.299c36.7,54.701,32.8,102.5,32.8,102.5c0,21.701-5.2,42.201-14.399,60.301
     c-3.5,7,2.1,14.199,8.699,14.199c1.7,0,3.601-0.5,5.301-1.6c66.6-43.5,110.6-118.799,110.6-204.299c0,0,7.2-87.301-59.8-187.101
     C859.245,337.936,761.745,210.236,749.945,135.436z"
          />
        </g>
      </svg>
    ),

    //https://www.svgrepo.com/svg/169955/medical-mask
    hazy: (
      <svg style={{"animation": "wave 2s linear infinite"}}  viewBox="0 0 462.467 462.467">
        <g>
          <g>
            <path
              d="M286.494,359.288V345.76c0-2.039-1.652-3.691-3.691-3.691H179.667c-2.038,0-3.691,1.652-3.691,3.691v13.528
       c0,2.038,1.653,3.692,3.691,3.692h103.137C284.842,362.98,286.494,361.326,286.494,359.288z"
            />
            <path
              d="M194.601,375.938c-2.039,0-3.692,1.652-3.692,3.689v13.529c0,2.039,1.653,3.691,3.692,3.691h73.267
       c2.039,0,3.691-1.652,3.691-3.691v-13.529c0-2.037-1.652-3.689-3.691-3.689H194.601z"
            />
            <path
              d="M408.504,207.571c-0.783-1.147-2.011-1.917-3.385-2.123l-19.77-2.972c-1.74-0.266-3.483,0.408-4.603,1.764l-68.779,83.417
       c-1.321,1.603-1.515,3.854-0.486,5.658c5.634,9.879,11.545,21.488,18.539,36.418l-0.938,2.707
       c-7.391,20.608-15.284,38.275-22.227,49.746l-0.281,0.465c-0.041,0.068-0.08,0.137-0.118,0.205l-0.263,0.484
       c-7.043,13.021-18.169,24.822-31.328,33.227c-13.734,8.771-28.822,13.406-43.631,13.406c-32.423,0-61.318-23.959-75.562-47.686
       c-0.013-0.021-0.047-0.08-0.061-0.102c-6.94-11.467-14.833-29.134-22.213-49.707c-0.005-0.017-0.401-1.156-0.924-2.809
       c6.977-14.891,12.877-26.48,18.511-36.359c1.028-1.804,0.835-4.056-0.486-5.658l-68.36-82.904
       c-1.086-1.316-2.767-1.986-4.463-1.782l-20.189,2.462c-1.459,0.179-2.767,0.99-3.574,2.219c-0.807,1.229-1.033,2.752-0.616,4.162
       l18.644,63.097c0.442,1.498,1.56,2.703,3.02,3.258c4.736,1.799,8.371,7.094,10.238,14.91c0.011,0.047,0.022,0.093,0.035,0.138
       c4.199,15.614,13.195,42.306,23.832,66.767c6.295,15.744,12.602,28.875,18.738,39.016c17.576,29.279,55.21,63.473,103.43,63.473
       c41.294,0,82.865-25.537,103.482-63.561c6.132-10.148,12.419-23.25,18.688-38.938c10.639-24.464,19.632-51.149,23.829-66.755
       c0.013-0.046,0.024-0.092,0.035-0.137c1.867-7.817,5.502-13.112,10.238-14.911c1.086-0.412,2.19-1.118,2.568-2.199l19.175-64.468
       C409.56,210.14,409.289,208.718,408.504,207.571z"
            />
            <path
              d="M267.868,329.109c2.039,0,3.691-1.652,3.691-3.691v-13.527c0-2.039-1.652-3.691-3.691-3.691h-73.267
       c-2.039,0-3.692,1.652-3.692,3.691v13.527c0,2.039,1.653,3.691,3.692,3.691H267.868z"
            />
            <path
              d="M369.247,196.787c1.087-1.318,1.425-3.102,0.896-4.728c-0.529-1.626-1.853-2.868-3.507-3.295
       c-24.756-6.375-43.877-18.36-56.831-35.623c-9.807-13.067-15.771-28.738-17.729-46.578c-0.174-1.59-1.099-3-2.485-3.794
       c-1.39-0.795-3.073-0.877-4.531-0.223c-17.554,7.878-43.418,17.269-66.949,17.271c-9.444,0-17.834-1.532-24.938-4.555
       c-10.288-4.378-18.129-11.755-23.309-21.925c-1.061-2.084-3.427-3.156-5.69-2.576c-52.69,13.424-72.854,64.792-80.183,94.217
       c-0.39,1.563-0.002,3.219,1.042,4.446l71.116,83.678c0.952,1.121,2.346,1.764,3.81,1.764c0.068,0,0.135-0.002,0.204-0.004
       c1.537-0.063,2.959-0.83,3.856-2.078c19.751-27.481,40.482-39.737,67.217-39.737s47.464,12.256,67.215,39.737
       c0.905,1.26,2.345,2.027,3.895,2.078c1.556,0.059,3.037-0.618,4.023-1.815L369.247,196.787z"
            />
            <path
              d="M75.828,93.594l2.292,35.57c0.155,2.412,1.897,4.427,4.262,4.93c2.362,0.5,4.774-0.629,5.898-2.771
       c20.036-38.182,51.499-60.919,90.989-65.754c0,0,6.037-0.816,8.073,1.151c1.698,1.642,2.896,6.464,2.896,6.464
       c2.393,9.979,7.305,16.426,15.017,19.706c4.468,1.9,9.862,2.864,16.035,2.864c27.084,0,65.771-19.812,76.617-25.603
       c9.665-5.161,17.532-3.341,14.917,10.573c-0.551,2.93-5.245,31.386,12.949,55.369c10.716,14.125,27.659,23.533,50.359,27.964
       c1.635,0.213,3.377-0.289,4.327-1.022c1.229-0.947,1.989-2.377,2.09-3.925l4.26-66.118c0,0,2.734-27.328-15.041-50.124
       C349.304,14.057,299.781,0,231.299,0c-68.481,0-117.58,14.394-140.47,42.868C72.397,65.8,75.673,88.626,75.828,93.594z"
            />
          </g>
        </g>
      </svg>
    ),

    //https://www.svgrepo.com/svg/311444/weather-duststorm
    dusty: (
      <svg style={{"animation": "wadle 3s linear infinite"}} viewBox="0 0 48 48">
        <path d="M16.5,35 C18.9852814,35 21,37.0147186 21,39.5 C21,41.9852814 18.9852814,44 16.5,44 C14.0147186,44 12,41.9852814 12,39.5 C12,37.0147186 14.0147186,35 16.5,35 Z M16.5,38.5 C15.9477153,38.5 15.5,38.9477153 15.5,39.5 C15.5,40.0522847 15.9477153,40.5 16.5,40.5 C17.0522847,40.5 17.5,40.0522847 17.5,39.5 C17.5,38.9477153 17.0522847,38.5 16.5,38.5 Z M5.74819564,30.5 C4.78169733,30.5 3.99819564,29.7164983 3.99819564,28.75 C3.99819564,27.8318266 4.70530591,27.0788077 5.60466843,27.0058012 L5.74819564,27 L37,27 C37.060061,27 37.1194152,27.0030257 37.1779187,27.0089329 L37.3528043,27 C39.0827216,27 40.5,25.5529694 40.5,23.75 C40.5,21.9470306 39.0827216,20.5 37.3528043,20.5 C36.0152651,20.5 34.9063816,21.2773158 34.5360147,22.4805459 L34.4881841,22.6552953 C34.2622317,23.5950104 33.3172715,24.1736294 32.3775564,23.947677 C31.4378412,23.7217245 30.8592223,22.7767643 31.0851747,21.8370492 C31.7867811,18.9191336 34.3744264,17 37.3528043,17 C41.03218,17 44,20.0301219 44,23.75 C44,27.4698781 41.03218,30.5 37.3528043,30.5 C37.2928266,30.5 37.2335536,30.4969827 37.1751288,30.4910916 L37,30.5 L35.4364319,30.4999536 C35.799835,31.262752 36.0029143,32.1124777 36.0029143,33.0096182 C36.0029143,36.3557711 33.3979614,39.0197586 30,39.0197586 C26.847384,39.0197586 25.0823824,37.6748702 24.1521439,35.4611742 C23.7777181,34.5701499 24.1965038,33.5442999 25.0875281,33.1698741 C25.9785524,32.7954482 27.0044024,33.214234 27.3788283,34.1052582 C27.7939201,35.0930556 28.3539156,35.5197586 30,35.5197586 C31.4471926,35.5197586 32.5029143,34.4401117 32.5029143,33.0096182 C32.5029143,31.699298 31.3938194,30.5885412 29.9633214,30.5050368 L29.7901693,30.5 L5.74819564,30.5 Z M22.4992824,5 C27.1933064,5 30.9985647,8.80525833 30.9985647,13.4992824 C30.9985647,18.1079605 27.3304215,21.8598979 22.7544211,21.9948084 L22.4994323,21.9985647 L5.75014996,22 C4.78365165,22 4.00000001,21.2166483 4.00000001,20.25015 C4.00000001,19.3319766 4.70696707,18.578897 5.60632333,18.5058135 L5.74985004,18.5 L22.4991324,18.4985647 C25.2603098,18.4985647 27.4985647,16.2603098 27.4985647,13.4992824 C27.4985647,10.738255 25.2603098,8.5 22.4992824,8.5 C19.7522948,8.5 17.6180939,10.4661065 17.5047382,13.0591859 L17.5,13.2766985 C17.5,14.2431968 16.7164983,15.0266985 15.75,15.0266985 C14.7835017,15.0266985 14,14.2431968 14,13.2766985 C14,8.60640673 17.7785575,5 22.4992824,5 Z M38.5,4 C40.9852814,4 43,6.01471863 43,8.5 C43,10.9852814 40.9852814,13 38.5,13 C36.0147186,13 34,10.9852814 34,8.5 C34,6.01471863 36.0147186,4 38.5,4 Z M7.49379061,2.99596459 C9.97787133,2.99596459 11.9916166,5.00970989 11.9916166,7.49379061 C11.9916166,9.97787133 9.97787133,11.9916166 7.49379061,11.9916166 C5.00970989,11.9916166 2.99596459,9.97787133 2.99596459,7.49379061 C2.99596459,5.00970989 5.00970989,2.99596459 7.49379061,2.99596459 Z M38.5,7.5 C37.9477153,7.5 37.5,7.94771525 37.5,8.5 C37.5,9.05228475 37.9477153,9.5 38.5,9.5 C39.0522847,9.5 39.5,9.05228475 39.5,8.5 C39.5,7.94771525 39.0522847,7.5 38.5,7.5 Z M7.49379061,6.49596459 C6.94270652,6.49596459 6.49596459,6.94270652 6.49596459,7.49379061 C6.49596459,8.04487471 6.94270652,8.49161663 7.49379061,8.49161663 C8.04487471,8.49161663 8.49161663,8.04487471 8.49161663,7.49379061 C8.49161663,6.94270652 8.04487471,6.49596459 7.49379061,6.49596459 Z"></path>
      </svg>
    ),

    //https://www.svgrepo.com/svg/339217/fog
    mist: <svg style={{"animation": "walk 10s linear infinite"}} viewBox="0 0 32 32">
 <path d="M30,26.36h-4v-0.72h4V26.36z M22,26.36h-4v-0.72h4V26.36z M14,26.36h-4v-0.72h4V26.36z M6,26.36H2v-0.72h4
   V26.36z M26,22.36h-4v-0.72h4V22.36z M18,22.36h-4v-0.72h4V22.36z M10,22.36H6v-0.72h4V22.36z M30,18.36h-4v-0.72h4V18.36z
    M22,18.36h-4v-0.72h4V18.36z M14,18.36h-4v-0.72h4V18.36z M6,18.36H2v-0.72h4V18.36z M26,14.36h-4v-0.72h4V14.36z M18,14.36h-4
   v-0.72h4V14.36z M10,14.36H6v-0.72h4V14.36z M30,10.36h-4V9.64h4V10.36z M22,10.36h-4V9.64h4V10.36z M14,10.36h-4V9.64h4V10.36z
    M6,10.36H2V9.64h4V10.36z M26,6.36h-4V5.64h4V6.36z M18,6.36h-4V5.64h4V6.36z M10,6.36H6V5.64h4V6.36z"/>
 </svg>,

    //https://www.svgrepo.com/svg/38629/mist
    foggy: <svg style={{"animation": "walk 10s linear infinite"}} viewBox="0 0 476.314 476.314">
 <g transform="translate(0 -540.36)">
   <g>
     <g>
       <path d="M472.733,706.417c-3.5-2.9-34.8-28.5-56.8-28.5c-13,0-23,8.1-31.9,15.3c-6.9,5.5-13.4,10.8-19.4,10.8
         c-5.4,0-11.6-5.1-18.2-10.5c-8.9-7.3-19-15.6-32.2-15.6c-13.1,0-22.9,8.2-31.6,15.4c-6.7,5.6-12.9,10.8-18.8,10.8
         c-6.1,0-12.6-5.3-19.5-11c-8.6-7.1-18.4-15.1-30.9-15.1c-13,0-23,8.1-31.9,15.3c-6.9,5.5-13.4,10.8-19.4,10.8
         c-5.9,0-12.2-5.3-18.8-10.8c-8.7-7.2-18.5-15.4-31.6-15.4c-13.1,0-22.9,8.2-31.6,15.4c-6.7,5.6-12.9,10.8-18.8,10.8
         c-10.6,0-32.7-14-45-23.9c-4.3-3.5-10.6-2.8-14.1,1.5s-2.8,10.6,1.5,14.1c3.6,2.9,35.7,28.4,57.6,28.4c13.1,0,22.9-8.2,31.6-15.4
         c6.7-5.6,12.9-10.8,18.8-10.8s12.2,5.3,18.8,10.8c8.7,7.2,18.5,15.4,31.6,15.4c13,0,23-8.1,31.9-15.3
         c6.9-5.5,13.4-10.8,19.4-10.8c5.4,0,11.6,5.1,18.2,10.5c8.9,7.3,19,15.6,32.2,15.6c13.1,0,22.9-8.2,31.6-15.4
         c6.7-5.6,12.9-10.8,18.8-10.8c6.1,0,12.6,5.3,19.5,11c8.6,7.1,18.4,15.1,30.9,15.1c13,0,23-8.1,31.9-15.3
         c6.9-5.5,13.4-10.8,19.4-10.8c10.5,0,32,13.9,43.9,23.8c1.9,1.5,4.1,2.3,6.4,2.3h0c2.9,0,5.7-1.2,7.8-3.6
         C477.533,716.217,476.933,709.917,472.733,706.417z"/>
       <path d="M3.733,618.317c3.6,2.9,35.7,28.4,57.6,28.4c13.1,0,22.9-8.2,31.6-15.4c6.7-5.6,12.9-10.8,18.8-10.8s12.2,5.3,18.8,10.8
         c8.7,7.2,18.5,15.4,31.6,15.4c13,0,23-8.1,31.9-15.3c6.9-5.5,13.4-10.8,19.4-10.8c5.4,0,11.6,5.1,18.2,10.5
         c8.9,7.3,19,15.6,32.2,15.6c13.1,0,22.9-8.2,31.6-15.4c6.7-5.6,12.9-10.8,18.8-10.8c6.1,0,12.6,5.3,19.5,11
         c8.6,7.1,18.4,15.1,30.9,15.1c13,0,23-8.1,31.9-15.3c6.9-5.5,13.4-10.8,19.4-10.8c10.5,0,32,13.9,43.9,23.8
         c1.9,1.5,4.1,2.3,6.4,2.3h0c2.9,0,5.7-1.2,7.8-3.6c3.5-4.3,2.9-10.6-1.3-14.1c-3.5-3-34.8-28.5-56.8-28.5c-13,0-23,8.1-31.9,15.3
         c-6.9,5.5-13.4,10.8-19.4,10.8c-5.4,0-11.6-5.1-18.2-10.5c-8.9-7.3-19-15.6-32.2-15.6c-13.1,0-22.9,8.2-31.6,15.4
         c-6.7,5.6-12.9,10.8-18.8,10.8c-6.1,0-12.6-5.3-19.5-11c-8.6-7.1-18.4-15.1-30.9-15.1c-13,0-23,8.1-31.9,15.3
         c-6.9,5.5-13.4,10.8-19.4,10.8c-5.9,0-12.2-5.3-18.8-10.8c-8.7-7.2-18.5-15.4-31.6-15.4c-13.1,0-22.9,8.2-31.6,15.4
         c-6.7,5.6-12.9,10.8-18.8,10.8c-10.6,0-32.7-14-45-23.9c-4.3-3.5-10.6-2.8-14.1,1.5S-0.567,614.817,3.733,618.317z"/>
       <path d="M472.733,861.317c-3.5-2.9-34.8-28.5-56.8-28.5c-13,0-23,8.1-31.9,15.3c-6.9,5.5-13.4,10.8-19.4,10.8
         c-5.4,0-11.6-5.1-18.2-10.5c-8.9-7.3-19-15.6-32.2-15.6c-13.1,0-22.9,8.2-31.6,15.4c-6.7,5.6-12.9,10.8-18.8,10.8
         c-6.1,0-12.6-5.3-19.5-11c-8.6-7.1-18.4-15.1-30.9-15.1c-13,0-23,8.1-31.9,15.3c-6.9,5.5-13.4,10.8-19.4,10.8
         c-5.9,0-12.2-5.3-18.8-10.8c-8.7-7.2-18.5-15.4-31.6-15.4c-13.1,0-22.9,8.2-31.6,15.4c-6.7,5.6-12.9,10.8-18.8,10.8
         c-10.6,0-32.7-14-45-23.9c-4.3-3.5-10.6-2.8-14.1,1.5s-2.8,10.6,1.5,14.1c3.6,2.9,35.7,28.4,57.6,28.4c13.1,0,22.9-8.2,31.6-15.4
         c6.7-5.6,12.9-10.8,18.8-10.8s12.2,5.3,18.8,10.8c8.7,7.2,18.5,15.4,31.6,15.4c13,0,23-8.1,31.9-15.3
         c6.9-5.5,13.4-10.8,19.4-10.8c5.4,0,11.6,5.1,18.2,10.5c8.9,7.3,19,15.6,32.2,15.6c13.1,0,22.9-8.2,31.6-15.4
         c6.7-5.6,12.9-10.8,18.8-10.8c6.1,0,12.6,5.3,19.5,11c8.6,7.1,18.4,15.1,30.9,15.1c13,0,23-8.1,31.9-15.3
         c6.9-5.5,13.4-10.8,19.4-10.8c10.5,0,32,13.9,43.9,23.8c1.9,1.5,4.1,2.3,6.4,2.3h0c2.9,0,5.7-1.2,7.8-3.6
         C477.533,871.117,476.933,864.817,472.733,861.317z"/>
       <path d="M472.733,783.917c-3.5-2.9-34.8-28.5-56.8-28.5c-13,0-23,8.1-31.9,15.3c-6.9,5.5-13.4,10.8-19.4,10.8
         c-5.4,0-11.6-5.1-18.2-10.5c-8.9-7.3-19-15.6-32.2-15.6c-13.1,0-22.9,8.2-31.6,15.4c-6.7,5.6-12.9,10.8-18.8,10.8
         c-6.1,0-12.6-5.3-19.5-11c-8.6-7.1-18.4-15.1-30.9-15.1c-13,0-23,8.1-31.9,15.3c-6.9,5.5-13.4,10.8-19.4,10.8
         c-5.9,0-12.2-5.3-18.8-10.8c-8.7-7.2-18.5-15.4-31.6-15.4c-13.1,0-22.9,8.2-31.6,15.4c-6.7,5.6-12.9,10.8-18.8,10.8
         c-10.6,0-32.7-14-45-23.9c-4.3-3.5-10.6-2.8-14.1,1.5s-2.8,10.6,1.5,14.1c3.6,2.9,35.7,28.4,57.6,28.4c13.1,0,22.9-8.2,31.6-15.4
         c6.7-5.6,12.9-10.8,18.8-10.8s12.2,5.3,18.8,10.8c8.7,7.2,18.5,15.4,31.6,15.4c13,0,23-8.1,31.9-15.3
         c6.9-5.5,13.4-10.8,19.4-10.8c5.4,0,11.6,5.1,18.2,10.5c8.9,7.3,19,15.6,32.2,15.6c13.1,0,22.9-8.2,31.6-15.4
         c6.7-5.6,12.9-10.8,18.8-10.8c6.1,0,12.6,5.3,19.5,11c8.6,7.1,18.4,15.1,30.9,15.1c13,0,23-8.1,31.9-15.3
         c6.9-5.5,13.4-10.8,19.4-10.8c10.5,0,32,13.9,43.9,23.8c1.9,1.5,4.1,2.3,6.4,2.3h0c2.9,0,5.7-1.3,7.8-3.6
         C477.533,793.717,476.933,787.417,472.733,783.917z"/>
       <path d="M472.733,938.817c-3.5-3-34.8-28.5-56.8-28.5c-13,0-23,8.1-31.9,15.3c-6.9,5.5-13.4,10.8-19.4,10.8
         c-5.4,0-11.6-5.1-18.2-10.5c-8.9-7.3-19-15.6-32.2-15.6c-13.1,0-22.9,8.2-31.6,15.4c-6.7,5.6-12.9,10.8-18.8,10.8
         c-6.1,0-12.6-5.3-19.5-11c-8.6-7.1-18.4-15.1-30.9-15.1c-13,0-23,8.1-31.9,15.3c-6.9,5.5-13.4,10.8-19.4,10.8
         c-5.9,0-12.2-5.3-18.8-10.8c-8.7-7.2-18.5-15.4-31.6-15.4c-13.1,0-22.9,8.2-31.6,15.4c-6.7,5.6-12.9,10.8-18.8,10.8
         c-10.6,0-32.7-14-45-23.9c-4.3-3.5-10.6-2.8-14.1,1.5s-2.8,10.6,1.5,14.1c3.6,2.9,35.7,28.4,57.6,28.4c13.1,0,22.9-8.2,31.6-15.4
         c6.7-5.6,12.9-10.8,18.8-10.8s12.2,5.3,18.8,10.8c8.7,7.2,18.5,15.4,31.6,15.4c13,0,23-8.1,31.9-15.3
         c6.9-5.5,13.4-10.8,19.4-10.8c5.4,0,11.6,5.1,18.2,10.5c8.9,7.3,19,15.6,32.2,15.6c13.1,0,22.9-8.2,31.6-15.4
         c6.7-5.6,12.9-10.8,18.8-10.8c6.1,0,12.6,5.3,19.5,11c8.6,7.1,18.4,15.1,30.9,15.1c13,0,23-8.1,31.9-15.3
         c6.9-5.5,13.4-10.8,19.4-10.8c10.5,0,32,13.9,43.9,23.8c1.9,1.5,4.1,2.3,6.4,2.3h0c2.9,0,5.7-1.2,7.8-3.6
         C477.533,948.617,476.933,942.317,472.733,938.817z"/>
     </g>
   </g>
 </g>
 </svg>,

    //https://www.svgrepo.com/svg/344104/cloud-lightning-rain-fill
    thunderstorm: <svg style={{"animation": "jump 0.7s linear infinite"}} viewBox="0 0 16 16">
    <path d="M2.658 11.026a.5.5 0 0 1 .316.632l-.5 1.5a.5.5 0 1 1-.948-.316l.5-1.5a.5.5 0 0 1 .632-.316zm9.5 0a.5.5 0 0 1 .316.632l-.5 1.5a.5.5 0 0 1-.948-.316l.5-1.5a.5.5 0 0 1 .632-.316zm-7.5 1.5a.5.5 0 0 1 .316.632l-.5 1.5a.5.5 0 1 1-.948-.316l.5-1.5a.5.5 0 0 1 .632-.316zm9.5 0a.5.5 0 0 1 .316.632l-.5 1.5a.5.5 0 0 1-.948-.316l.5-1.5a.5.5 0 0 1 .632-.316zm-7.105-1.25A.5.5 0 0 1 7.5 11h1a.5.5 0 0 1 .474.658l-.28.842H9.5a.5.5 0 0 1 .39.812l-2 2.5a.5.5 0 0 1-.875-.433L7.36 14H6.5a.5.5 0 0 1-.447-.724l1-2zm6.352-7.249a5.001 5.001 0 0 0-9.499-1.004A3.5 3.5 0 1 0 3.5 10H13a3 3 0 0 0 .405-5.973z"/>
  </svg>,

    //https://www.svgrepo.com/svg/344107/cloud-rain-fill
    rain: (
      <svg style={{"animation": "jump 1.5s linear infinite"}} viewBox="0 0 32 32">
        <g transform="translate(-155.000000, -829.000000)">
          <path d="M174,856 C173.448,856 173,856.447 173,857 L173,860 C173,860.553 173.448,861 174,861 C174.552,861 175,860.553 175,860 L175,857 C175,856.447 174.552,856 174,856 L174,856 Z M178.067,834.028 C176.599,831.053 173.543,829 170,829 C165.25,829 161.37,832.682 161.033,837.345 C157.542,838.34 155,841.39 155,845 C155,849.26 158.54,852.731 163,852.977 C163,852.977 177.331,853 177.5,853 C182.747,853 187,848.747 187,843.5 C187,838.445 183.048,834.323 178.067,834.028 L178.067,834.028 Z M180,856 C179.448,856 179,856.447 179,857 L179,860 C179,860.553 179.448,861 180,861 C180.552,861 181,860.553 181,860 L181,857 C181,856.447 180.552,856 180,856 L180,856 Z M162,856 C161.448,856 161,856.447 161,857 L161,860 C161,860.553 161.448,861 162,861 C162.552,861 163,860.553 163,860 L163,857 C163,856.447 162.552,856 162,856 L162,856 Z M168,856 C167.448,856 167,856.447 167,857 L167,860 C167,860.553 167.448,861 168,861 C168.552,861 169,860.553 169,860 L169,857 C169,856.447 168.552,856 168,856 L168,856 Z"></path>
        </g>
      </svg>
    ),
    //https://www.svgrepo.com/svg/344112/cloud-snow-fill
    snowy: <svg style={{"animation": "jump 2s linear infinite"}} viewBox="0 0 16 16">
    <path d="M2.625 11.5a.25.25 0 0 1 .25.25v.57l.501-.287a.25.25 0 0 1 .248.434l-.495.283.495.283a.25.25 0 0 1-.248.434l-.501-.286v.569a.25.25 0 1 1-.5 0v-.57l-.501.287a.25.25 0 0 1-.248-.434l.495-.283-.495-.283a.25.25 0 0 1 .248-.434l.501.286v-.569a.25.25 0 0 1 .25-.25zm2.75 2a.25.25 0 0 1 .25.25v.57l.5-.287a.25.25 0 0 1 .249.434l-.495.283.495.283a.25.25 0 0 1-.248.434l-.501-.286v.569a.25.25 0 1 1-.5 0v-.57l-.501.287a.25.25 0 0 1-.248-.434l.495-.283-.495-.283a.25.25 0 0 1 .248-.434l.501.286v-.569a.25.25 0 0 1 .25-.25zm5.5 0a.25.25 0 0 1 .25.25v.57l.5-.287a.25.25 0 0 1 .249.434l-.495.283.495.283a.25.25 0 0 1-.248.434l-.501-.286v.569a.25.25 0 0 1-.5 0v-.57l-.501.287a.25.25 0 0 1-.248-.434l.495-.283-.495-.283a.25.25 0 0 1 .248-.434l.501.286v-.569a.25.25 0 0 1 .25-.25zm-2.75-2a.25.25 0 0 1 .25.25v.57l.5-.287a.25.25 0 0 1 .249.434l-.495.283.495.283a.25.25 0 0 1-.248.434l-.501-.286v.569a.25.25 0 1 1-.5 0v-.57l-.501.287a.25.25 0 0 1-.248-.434l.495-.283-.495-.283a.25.25 0 0 1 .248-.434l.501.286v-.569a.25.25 0 0 1 .25-.25zm5.5 0a.25.25 0 0 1 .25.25v.57l.5-.287a.25.25 0 0 1 .249.434l-.495.283.495.283a.25.25 0 0 1-.248.434l-.501-.286v.569a.25.25 0 0 1-.5 0v-.57l-.501.287a.25.25 0 1 1-.248-.434l.495-.283-.495-.283a.25.25 0 0 1 .248-.434l.501.286v-.569a.25.25 0 0 1 .25-.25zm-.22-7.223a5.001 5.001 0 0 0-9.499-1.004A3.5 3.5 0 1 0 3.5 10.25H13a3 3 0 0 0 .405-5.973z"/>
  </svg>,

    //https://www.svgrepo.com/svg/344114/cloud-sleet-fill
    hail: <svg style={{"animation": "jump 0.7s linear infinite"}} viewBox="0 0 16 16">
    <path d="M2.375 13.5a.25.25 0 0 1 .25.25v.57l.501-.287a.25.25 0 0 1 .248.434l-.495.283.495.283a.25.25 0 1 1-.248.434l-.501-.286v.569a.25.25 0 1 1-.5 0v-.57l-.501.287a.25.25 0 1 1-.248-.434l.495-.283-.495-.283a.25.25 0 1 1 .248-.434l.501.286v-.569a.25.25 0 0 1 .25-.25zm1.849-2.447a.5.5 0 0 1 .223.67l-.5 1a.5.5 0 0 1-.894-.447l.5-1a.5.5 0 0 1 .67-.223zM6.375 13.5a.25.25 0 0 1 .25.25v.57l.5-.287a.25.25 0 0 1 .249.434l-.495.283.495.283a.25.25 0 1 1-.248.434l-.501-.286v.569a.25.25 0 1 1-.5 0v-.57l-.501.287a.25.25 0 1 1-.248-.434l.495-.283-.495-.283a.25.25 0 1 1 .248-.434l.501.286v-.569a.25.25 0 0 1 .25-.25zm1.849-2.447a.5.5 0 0 1 .223.67l-.5 1a.5.5 0 0 1-.894-.447l.5-1a.5.5 0 0 1 .67-.223zm2.151 2.447a.25.25 0 0 1 .25.25v.57l.5-.287a.25.25 0 0 1 .249.434l-.495.283.495.283a.25.25 0 1 1-.248.434l-.501-.286v.569a.25.25 0 0 1-.5 0v-.57l-.501.287a.25.25 0 1 1-.248-.434l.495-.283-.495-.283a.25.25 0 1 1 .248-.434l.501.286v-.569a.25.25 0 0 1 .25-.25zm1.849-2.447a.5.5 0 0 1 .223.67l-.5 1a.5.5 0 1 1-.894-.447l.5-1a.5.5 0 0 1 .67-.223zm1.181-7.026a5.001 5.001 0 0 0-9.499-1.004A3.5 3.5 0 1 0 3.5 10H13a3 3 0 0 0 .405-5.973z"/>
  </svg>,

    "total-rain": (
      <svg viewBox="-6 0 32 32">
        <path d="M9 23.563v-7.563c0.313-0.094 0.625-0.125 0.813-0.125s0.5 0.031 0.813 0.125v7.563c0 1.313-0.875 3.281-3.281 3.281-2.375 0-3.25-1.969-3.25-3.281 0-0.438 0.344-0.813 0.813-0.813 0.438 0 0.813 0.375 0.813 0.813 0 0.406 0.156 1.656 1.625 1.656 1.563 0 1.656-1.375 1.656-1.656zM10.625 6.406v0.875c5.031 0.406 9 4.625 9 9.75h-0.125c-0.375-1.406-1.625-2.156-3.156-2.156s-2.781 0.75-3.156 2.156h-0.219c-0.313-1.125-1.188-1.719-2.344-2.031v0c-0.25-0.063-0.531-0.094-0.813-0.094s-0.563 0.031-0.813 0.094v0c-1.156 0.313-2.063 0.906-2.344 2.031h-0.25c-0.344-1.406-1.625-2.156-3.125-2.156-1.531 0-2.813 0.75-3.156 2.156h-0.125c0-5.125 3.969-9.344 9-9.75v-0.875c0-0.438 0.344-0.813 0.813-0.813 0.438 0 0.813 0.375 0.813 0.813z"></path>
      </svg>
    ),

    "avg-humidity": (
      <svg viewBox="0 0 24 24">
        <path
          strokeWidth="0.1"
          d="M15.0066 3.25608C16.8483 2.85737 19.1331 2.8773 22.2423 3.65268C22.7781 3.78629 23.1038 4.32791 22.9699 4.86241C22.836 5.39691 22.2931 5.7219 21.7573 5.58829C18.8666 4.86742 16.9015 4.88747 15.4308 5.20587C13.9555 5.52524 12.895 6.15867 11.7715 6.84363L11.6874 6.89494C10.6044 7.55565 9.40515 8.28729 7.82073 8.55069C6.17734 8.82388 4.23602 8.58235 1.62883 7.54187C1.11607 7.33724 0.866674 6.75667 1.0718 6.24513C1.27692 5.73359 1.85889 5.48479 2.37165 5.68943C4.76435 6.6443 6.32295 6.77699 7.492 6.58265C8.67888 6.38535 9.58373 5.83916 10.7286 5.14119C11.855 4.45445 13.1694 3.6538 15.0066 3.25608Z"
        />
        <path
          strokeWidth="0.1"
          d="M22.2423 7.64302C19.1331 6.86765 16.8483 6.84772 15.0066 7.24642C13.1694 7.64415 11.855 8.44479 10.7286 9.13153C9.58373 9.8295 8.67888 10.3757 7.492 10.573C6.32295 10.7673 4.76435 10.6346 2.37165 9.67977C1.85889 9.47514 1.27692 9.72393 1.0718 10.2355C0.866674 10.747 1.11607 11.3276 1.62883 11.5322C4.23602 12.5727 6.17734 12.8142 7.82073 12.541C9.40515 12.2776 10.6044 11.546 11.6874 10.8853L11.7715 10.834C12.895 10.149 13.9555 9.51558 15.4308 9.19621C16.9015 8.87781 18.8666 8.85777 21.7573 9.57863C22.2931 9.71224 22.836 9.38726 22.9699 8.85275C23.1038 8.31825 22.7781 7.77663 22.2423 7.64302Z"
        />
        <path
          strokeWidth="1.7"
          fill="none"
          d="M18.9998 10.0266C18.6526 10.0266 18.3633 10.2059 18.1614 10.4772C18.0905 10.573 17.9266 10.7972 17.7089 11.111C17.4193 11.5283 17.0317 12.1082 16.6424 12.7555C16.255 13.3996 15.8553 14.128 15.5495 14.8397C15.2567 15.5213 14.9989 16.2614 14.9999 17.0117C15.0006 17.2223 15.0258 17.4339 15.0604 17.6412C15.1182 17.9872 15.2356 18.4636 15.4804 18.9521C15.7272 19.4446 16.1131 19.9674 16.7107 20.3648C17.3146 20.7664 18.0748 21 18.9998 21C19.9248 21 20.685 20.7664 21.2888 20.3648C21.8864 19.9674 22.2724 19.4446 22.5192 18.9522C22.764 18.4636 22.8815 17.9872 22.9393 17.6413C22.974 17.4337 22.9995 17.2215 22.9998 17.0107C23.0001 16.2604 22.743 15.5214 22.4501 14.8397C22.1444 14.128 21.7447 13.3996 21.3573 12.7555C20.968 12.1082 20.5803 11.5283 20.2907 11.111C20.073 10.7972 19.909 10.573 19.8382 10.4772C19.6363 10.2059 19.3469 10.0266 18.9998 10.0266ZM20.6119 15.6257C20.3552 15.0281 20.0049 14.3848 19.6423 13.782C19.4218 13.4154 19.2007 13.0702 18.9998 12.7674C18.7989 13.0702 18.5778 13.4154 18.3573 13.782C17.9948 14.3848 17.6445 15.0281 17.3878 15.6257L17.3732 15.6595C17.1965 16.0704 16.9877 16.5562 17.0001 17.0101C17.0121 17.3691 17.1088 17.7397 17.2693 18.0599C17.3974 18.3157 17.574 18.5411 17.8201 18.7048C18.06 18.8643 18.4248 19.0048 18.9998 19.0048C19.5748 19.0048 19.9396 18.8643 20.1795 18.7048C20.4256 18.5411 20.6022 18.3156 20.7304 18.0599C20.8909 17.7397 20.9876 17.3691 20.9996 17.01C21.0121 16.5563 20.8032 16.0705 20.6265 15.6597L20.6119 15.6257Z"
        />
        <path
          strokeWidth="0.1"
          d="M14.1296 11.5308C14.8899 11.2847 15.4728 12.076 15.1153 12.7892C14.952 13.1151 14.7683 13.3924 14.4031 13.5214C13.426 13.8666 12.6166 14.3527 11.7715 14.8679L11.6874 14.9192C10.6044 15.5799 9.40516 16.3115 7.82074 16.5749C6.17735 16.8481 4.23604 16.6066 1.62884 15.5661C1.11608 15.3615 0.866688 14.7809 1.07181 14.2694C1.27694 13.7578 1.8589 13.509 2.37167 13.7137C4.76436 14.6685 6.32297 14.8012 7.49201 14.6069C8.67889 14.4096 9.58374 13.8634 10.7286 13.1654C11.8166 12.5021 12.9363 11.9171 14.1296 11.5308Z"
        />
      </svg>
    ),
    "total-snow": (
      <svg viewBox="0 0 24 24">
        <path d="M11.9994 3V7M11.9994 7V17M11.9994 7L8.99943 4M11.9994 7L14.9994 4M11.9994 17V21M11.9994 17L8.99943 20M11.9994 17L14.9994 20M4.20624 7.49999L7.67034 9.49999M7.67034 9.49999L16.3306 14.5M7.67034 9.49999L3.57227 10.5981M7.67034 9.49999L6.57227 5.40191M16.3306 14.5L19.7947 16.5M16.3306 14.5L17.4287 18.5981M16.3306 14.5L20.4287 13.4019M4.2067 16.5L7.6708 14.5M7.6708 14.5L16.3311 9.49999M7.6708 14.5L3.57273 13.4019M7.6708 14.5L6.57273 18.5981M16.3311 9.49999L19.7952 7.49999M16.3311 9.49999L17.4291 5.40192M16.3311 9.49999L20.4291 10.5981" />
      </svg>
    ),
    "avg-wind": (
      <svg viewBox="0 0 24 24">
        <path
          fill="none"
          strokeWidth="1.75"
          d="M15.7639 7C16.3132 6.38625 17.1115 6 18 6C19.6569 6 21 7.34315 21 9C21 10.6569 19.6569 12 18 12H3M8.50926 4.66667C8.87548 4.2575 9.40767 4 10 4C11.1046 4 12 4.89543 12 6C12 7.10457 11.1046 8 10 8H3M11.5093 19.3333C11.8755 19.7425 12.4077 20 13 20C14.1046 20 15 19.1046 15 18C15 16.8954 14.1046 16 13 16H3"
        />
      </svg>
    ),
    "total-solar-energy": (
      <svg viewBox="0 0 260 244">
        <path
          d="M258,54v-8h-25.176c-0.596-3.416-1.941-6.576-3.86-9.307l17.806-17.806l-5.656-5.657l-17.803,17.802
	c-2.731-1.926-5.892-3.275-9.311-3.876V2h-8v25.148c-3.433,0.596-6.609,1.947-9.35,3.879L178.87,13.248l-5.656,5.657l17.781,17.78
	c-1.922,2.733-3.269,5.896-3.866,9.315H162v8h25.129c0.598,3.428,1.95,6.597,3.88,9.335L173.23,81.112l5.656,5.657l17.783-17.782
	c2.737,1.924,5.906,3.271,9.331,3.865V98h8V72.844c3.41-0.599,6.565-1.944,9.292-3.862l17.804,17.805l5.656-5.656l-17.803-17.804
	c1.927-2.735,3.276-5.902,3.874-9.326H258z M209.976,34.8c8.382,0,15.2,6.819,15.2,15.2s-6.818,15.2-15.2,15.2
	c-8.381,0-15.199-6.819-15.199-15.2S201.595,34.8,209.976,34.8z M80,236v6H43v-6h15v-22h6v22H80z M63.537,82l9.723,38h24.545
	l-9.773-38H63.537z M84.518,164h24.603l-9.773-38H74.795L84.518,164z M78.325,164l-9.723-38h-24.52l9.723,38H78.325z M26.632,82H2
	l9.772,38h24.582L26.632,82z M67.067,120l-9.723-38H32.825l9.723,38H67.067z M95.776,208h24.661l-9.773-38H86.053L95.776,208z
	 M55.34,170l9.723,38h24.52l-9.723-38H55.34z M37.89,126H13.315l9.772,38h24.525L37.89,126z M24.631,170l9.772,38H58.87l-9.723-38
	H24.631z M178.667,190h17.055l6.686,26h-17.089L178.667,190z M163,237v-16h-5v16h-11v5h27v-5H163z M155.259,185l-7.164-28h16.968
	l7.164,28H155.259z M146.815,152l-6.652-26h16.968l6.652,26H146.815z M173.506,190l6.652,26H163.19l-6.652-26H173.506z M151.377,190
	l6.652,26h-16.834l-6.686-26H151.377z M141.654,152h-16.917l-6.686-26h16.951L141.654,152z M150.098,185h-16.874l-7.201-28h16.911
	L150.098,185z M179.264,126l6.686,26h-17.006l-6.652-26H179.264z M170.223,157h17.013l7.201,28h-17.049L170.223,157z M240,238v4h-16
	v-4h6v-9h4v9H240z M230.721,210l3.838,15h9.591l-3.838-15H230.721z M248.279,225H258l-3.858-15h-9.702L248.279,225z M217.049,210
	l3.858,15h9.524l-3.838-15H217.049z M243.417,206h9.696l-4.115-16h-9.675L243.417,206z M216.358,170h-9.596l4.115,16h9.575
	L216.358,170z M234.206,170l4.094,16h9.67l-4.115-16H234.206z M221.475,190h-9.57l4.115,16h9.549L221.475,190z M239.288,206
	l-4.094-16h-9.591l4.094,16H239.288z M234.171,186l-4.094-16h-9.591l4.094,16H234.171z"
        />
      </svg>
    ),
  };

  return (
    <div className={class_name}>
      {svgElement[svg_key] || null}
      {value && <p>{value}</p>}
    </div>
  );
};

export default SvgContainer;
