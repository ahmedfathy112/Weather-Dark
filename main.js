// let cityName = document.getElementById("city-name");
// let btnSearch = document.getElementById("send-btn");
// let cardsSec = document.getElementById("cards");
// const baseUrl = "http://api.openweathermap.org/data/2.5/weather";

// const cityName1 = "cairo";
// const apiKey = "1b6ae829f4cbd5d93f56d4d02eb5d4eb";

// // fetch(url)
// //   .then((response) => {
// //     if (!response.ok) {
// //       throw new Error("فشل في جلب بيانات الطقس");
// //     }
// //     return response.json();
// //   })
// //   .then((data) => {
// //     // console.log("بيانات الطقس في", cityName);
// //     // console.log("درجة الحرارة:", data.main.temp, "درجة مئوية");
// //     // console.log("الضغط الجوي:", data.main.pressure, "hPa");
// //     // console.log("الرطوبة:", data.main.humidity, "%");
// //     // console.log("الحالة الجوية:", data.weather[0].description);
// //     console.log(data);
// //   })
// //   .catch((error) => {
// //     console.error(error);
// //   });

// btnSearch.addEventListener("click", () => {
//   const url = `${baseUrl}?q=${cityName.value}&appid=${apiKey}`;
//   fetch(url)
//     .then((response) => {
//       if (!response.ok) {
//         throw new Error("فشل في جلب بيانات الطقس");
//       }
//       return response.json();
//     })
//     .then((data) => {
//       cardsSec.innerHTML += `
//       <div class="card">
//           <img src="sun-cloud.png" alt="sun-cloud" />
//           <div class="city">
//             <h3>${cityName.value} : <span>${data.main.temp} C</span></h3>
//           </div>
//           <div class="wind">
//             <h3>الضغط الجوي : <span>${data.main.pressure} hPa</span></h3>
//           </div>
//           <div class="wind">
//             <h3>الرطوبه : <span>${data.main.humidity} %</span></h3>
//           </div>
//           <div class="statue">${data.weather[0].description}</div>
//         </div>
//       `;
//     })
//     .catch((error) => {
//       console.error(error);
//     });
// });

let cityName = document.getElementById("city-name");
let btnSearch = document.getElementById("send-btn");
let cardsSec = document.getElementById("cards");
const baseUrl = "https://api.openweathermap.org/data/2.5/weather";
const apiKey = "1b6ae829f4cbd5d93f56d4d02eb5d4eb";
let lastSearch = "";

btnSearch.addEventListener("click", () => {
  const city = cityName.value.trim();
  if (city !== lastSearch) {
    // Check if the input has changed
    lastSearch = city; // Update lastSearch with the new input
    const url = `${baseUrl}?q=${city}&appid=${apiKey}`;
    fetch(url)
      .then((response) => {
        if (!response.ok) {
          throw new Error("فشل في جلب بيانات الطقس");
        }
        return response.json();
      })
      .then((data) => {
        cardsSec.innerHTML = ""; // Clear previous results
        cardsSec.innerHTML += `
          <div class="card">
              <img src="sun-cloud.png" alt="sun-cloud" />
              <div class="city">
                <h3>${city} : <span>${data.main.temp} C</span></h3>
              </div>
              <div class="wind">
                <h3>الضغط الجوي : <span>${data.main.pressure} hPa</span></h3>
              </div>
              <div class="wind">
                <h3>الرطوبه : <span>${data.main.humidity} %</span></h3>
              </div>
              <div class="statue">${data.weather[0].description}</div>
            </div>
          `;
      })
      .catch((error) => {
        console.error(error);
      });
  }
});

cityName.addEventListener("input", () => {
  lastSearch = "";
});
