(this["webpackJsonpforecast-hooks"]=this["webpackJsonpforecast-hooks"]||[]).push([[0],{10:function(e,t,a){e.exports={weeksForecast:"WeeksForecast_weeksForecast__1kw5A",title:"WeeksForecast_title__1AzOD",day:"WeeksForecast_day__1zSlL",dayTitle:"WeeksForecast_dayTitle__2m8Kx",dayItems:"WeeksForecast_dayItems__DdVxN"}},14:function(e,t,a){e.exports={wrapper:"Loader_wrapper__3B_q5",lds_ellipsis:"Loader_lds_ellipsis__K7ng4","lds-ellipsis1":"Loader_lds-ellipsis1__T82Y6","lds-ellipsis2":"Loader_lds-ellipsis2__3Zb_4","lds-ellipsis3":"Loader_lds-ellipsis3__3fIHb"}},32:function(e,t,a){},4:function(e,t,a){e.exports={weather:"Weather_weather__3Hnsz",location:"Weather_location__J2mfK",mainInfo:"Weather_mainInfo__2xk3z",img:"Weather_img__SnwHS",temp:"Weather_temp__3-2kx",weatherType:"Weather_weatherType__FpgMP",feelsLike:"Weather_feelsLike__3y-G7",delete:"Weather_delete__3_Mnl",button:"Weather_button__1ievD"}},5:function(e,t,a){e.exports={weatherMini:"WeatherMini_weatherMini__1koQM",time:"WeatherMini_time__PvjOI",info:"WeatherMini_info__1DNmO",description:"WeatherMini_description__1tcgy",temp:"WeatherMini_temp__2J20d"}},52:function(e,t,a){},53:function(e,t,a){"use strict";a.r(t);var n=a(0),i=a(1),c=a(24),r=a.n(c),s=(a(32),a(26)),o=a(6),l=a(4),d=a.n(l),u=(a.p,a.p+"static/media/cloudy-night.4a43954d.svg"),_=a.p+"static/media/thunder.19ff3c30.svg",m=a.p+"static/media/drizzle.44fb8223.svg",f=a.p+"static/media/rainy.130d6250.svg",h=a.p+"static/media/snowy.dce3f5e7.svg",j=a.p+"static/media/day.c33ef664.svg",b=a(14),p=a.n(b),O=function(){return Object(n.jsx)("div",{className:p.a.wrapper,children:Object(n.jsxs)("div",{className:p.a.lds_ellipsis,children:[Object(n.jsx)("div",{}),Object(n.jsx)("div",{}),Object(n.jsx)("div",{}),Object(n.jsx)("div",{})]})})},x=function(e){var t;switch(e.icon){case"Clouds":t=u;break;case"Thunderstorm":t=_;break;case"Drizzle":t=m;break;case"Rain":t=f;break;case"Snow":t=h;break;case"Clear":default:t=j}return Object(n.jsx)("div",{className:d.a.weatherBlock,onClick:function(){return e.setWeekForecast({isOpen:!0,city:e.name})},children:Object(n.jsxs)("div",{className:d.a.weather,children:[e.deleteCity&&Object(n.jsx)("div",{className:d.a.delete,children:Object(n.jsx)("button",{className:d.a.button,onClick:function(){return e.deleteCity(e.name)},children:" X "})}),Object(n.jsx)("div",{className:d.a.location,children:e.name}),Object(n.jsxs)("div",{className:d.a.mainInfo,children:[Object(n.jsx)("div",{className:d.a.img,children:Object(n.jsx)("img",{src:t,alt:""})}),Object(n.jsx)("div",{className:d.a.temp,children:Math.round(e.temp)+"\xb0C"})]}),Object(n.jsx)("div",{className:d.a.weatherType,children:e.weather}),Object(n.jsxs)("div",{className:d.a.feelsLike,children:["\u041e\u0449\u0443\u0449\u0430\u0435\u0442\u0441\u044f \u043a\u0430\u043a: ",Math.round(e.feels_like),"\xb0C"]})]})})},g=a(8),k=a.n(g),y=function(e){var t=e.isFixed?"".concat(k.a.main," ").concat(k.a.fixed):"".concat(k.a.main);return Object(n.jsxs)("div",{className:t,children:[Object(n.jsx)(x,{name:e.currentGeo.name,temp:e.currentGeo.temp,weather:e.currentGeo.weather,feels_like:e.currentGeo.feels_like,icon:e.currentGeo.icon,setWeekForecast:e.setWeekForecast}),e.locations.map((function(t){return Object(n.jsx)(x,{deleteCity:e.deleteCity,name:t.name,temp:t.temp,weather:t.weather,feels_like:t.feels_like,icon:t.icon,setWeekForecast:e.setWeekForecast})})),e.isSearching?Object(n.jsx)("button",{className:k.a.modalButton,onClick:function(){return e.setIsSearching(!1)},children:"-"}):Object(n.jsx)("button",{className:k.a.modalButton,onClick:function(){return e.setIsSearching(!0)},children:"+"})]})},w=a(25).create({baseURL:"https://api.openweathermap.org/data/2.5/"}),v=function(e,t){return w.get("weather?lat=".concat(e,"&lon=").concat(t,"&units=metric&lang=ru&appid=471fb871540b1cabfd3ed0bce031cb0d"))},N=function(e){return w.get("weather?q=".concat(e,"&units=metric&lang=ru&appid=471fb871540b1cabfd3ed0bce031cb0d"))},S=function(e){return w.get("forecast?q=".concat(e,"&lang=ru&units=metric&appid=471fb871540b1cabfd3ed0bce031cb0d")).then((function(e){return e.data.list}))},W=a(9),F=a.n(W),M=function(e){return Object(n.jsx)("div",{className:F.a.modal,children:Object(n.jsx)("div",{className:F.a.modal__inner,children:Object(n.jsxs)("form",{onSubmit:function(t){t.preventDefault();var a=t.target.cityName.value.trim();a&&(e.getWeatherByName(a),t.target.cityName.value="",e.setIsSearching(!1))},className:F.a.form,children:[Object(n.jsx)("input",{name:"cityName",type:"text",className:F.a.input,placeholder:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u043c\u0435\u0441\u0442\u043e..."}),Object(n.jsx)("button",{type:"submit",className:F.a.button,children:"\u041f\u043e\u0438\u0441\u043a"})]})})})},I=a(10),C=a.n(I),L=(a(5),a(56)),B=a(55),z=(a(51),function(e){return console.log(e.week),alert(JSON.stringify(e.week[0])),Object(n.jsx)(n.Fragment,{children:Object(n.jsx)("div",{className:C.a.weeksForecast,children:e.week.length>0?Object(n.jsxs)("div",{className:"container",children:[Object(n.jsx)("div",{className:C.a.title,children:e.city}),e.week.map((function(e){return Object(n.jsxs)("div",{className:C.a.day,children:[Object(n.jsx)("div",{className:C.a.dayTitle,children:e.day}),Object(n.jsxs)("div",{className:C.a.dayItems,children:["test",Object(n.jsx)(L.a,{spaceBetween:50,slidesPerView:1,initialSlide:4,breakpoints:{600:{slidesPerView:2}},children:Object(n.jsx)(B.a,{children:"45"})})]})]})}))]}):Object(n.jsx)(O,{})})})}),T=function(e){function t(e,t){return new Date(e.dt_txt).toLocaleString("ru",{weekday:"long"})==t}function a(e){return e.map((function(e){return{time:new Date(e.dt_txt).toLocaleString("ru",{month:"long",day:"numeric",hour:"numeric",minute:"numeric"}),temp:e.main.temp,feels_like:e.main.feels_like,weather:e.weather[0]}}))}var c=Object(i.useState)([]),r=Object(o.a)(c,2),s=r[0],l=r[1];return Object(i.useEffect)((function(){S(e.city).then((function(e){alert(JSON.stringify(e));var n=[{day:"\u043f\u043e\u043d\u0435\u0434\u0435\u043b\u044c\u043d\u0438\u043a",data:a(e.filter((function(e){return t(e,"\u043f\u043e\u043d\u0435\u0434\u0435\u043b\u044c\u043d\u0438\u043a")})))},{day:"\u0432\u0442\u043e\u0440\u043d\u0438\u043a",data:a(e.filter((function(e){return t(e,"\u0432\u0442\u043e\u0440\u043d\u0438\u043a")})))},{day:"\u0441\u0440\u0435\u0434\u0430",data:a(e.filter((function(e){return t(e,"\u0441\u0440\u0435\u0434\u0430")})))},{day:"\u0447\u0435\u0442\u0432\u0435\u0440\u0433",data:a(e.filter((function(e){return t(e,"\u0447\u0435\u0442\u0432\u0435\u0440\u0433")})))},{day:"\u043f\u044f\u0442\u043d\u0438\u0446\u0430",data:a(e.filter((function(e){return t(e,"\u043f\u044f\u0442\u043d\u0438\u0446\u0430")})))},{day:"\u0441\u0443\u0431\u0431\u043e\u0442\u0430",data:a(e.filter((function(e){return t(e,"\u0441\u0443\u0431\u0431\u043e\u0442\u0430")})))},{day:"\u0432\u043e\u0441\u043a\u0440\u0435\u0441\u0435\u043d\u044c\u0435",data:a(e.filter((function(e){return t(e,"\u0432\u043e\u0441\u043a\u0440\u0435\u0441\u0435\u043d\u044c\u0435")})))}];l(n)})).catch((function(e){return alert(e)}))}),[]),Object(n.jsx)(z,{city:e.city,week:s})},D=function(){var e=Object(i.useState)(!0),t=Object(o.a)(e,2),a=t[0],c=t[1],r=Object(i.useState)({}),l=Object(o.a)(r,2),d=l[0],u=l[1],_=Object(i.useState)(!1),m=Object(o.a)(_,2),f=m[0],h=m[1],j=Object(i.useState)({isOpen:!1,city:null}),b=Object(o.a)(j,2),p=b[0],x=b[1],g=Object(i.useState)([]),k=Object(o.a)(g,2),w=k[0],S=k[1];Object(i.useEffect)((function(){navigator.geolocation.getCurrentPosition((function(e){v(e.coords.latitude,e.coords.longitude).then((function(e){var t=e.data.main,a=t.temp,n=t.feels_like,i=e.data.name,r=e.data.weather[0],s=r.description,o=r.main;u({temp:a,feels_like:n,name:i,description:s,icon:o}),c(!1)}))}),(function(){alert("\u041e\u0448\u0438\u0431\u043a\u0430! \u0412\u044b \u043d\u0435 \u0434\u0430\u043b\u0438 \u0434\u043e\u0441\u0442\u0443\u043f\u0430 \u043a \u0433\u0435\u043e-\u043f\u043e\u0437\u0438\u0446\u0438\u0438!")}))}),[]),Object(i.useEffect)((function(){(JSON.parse(localStorage.getItem("locations"))||[]).forEach((function(e){return W(e)}))}),[]),Object(i.useEffect)((function(){localStorage.setItem("locations",JSON.stringify(w.map((function(e){return e.name}))))}),[w]);var W=function(e){w.some((function(t){return t.name==e}))?alert("\u0412\u044b \u0443\u0436\u0435 \u0434\u043e\u0431\u0430\u0432\u0438\u043b\u0438 \u0433\u043e\u0440\u043e\u0434 ".concat(e)):(c(!0),N(e).then((function(t){var a=t.data.main,n=a.temp,i=a.feels_like,r=t.data.weather[0],o=r.description,l=r.main;S((function(t){return[{temp:n,feels_like:i,name:e,description:o,icon:l,id:1}].concat(Object(s.a)(t))})),c(!1)})).catch((function(t){alert("\u0413\u043e\u0440\u043e\u0434 ".concat(e," \u043d\u0435 \u043d\u0430\u0439\u0434\u0435\u043d :("))})))};return Object(n.jsxs)(n.Fragment,{children:[a?Object(n.jsx)(O,{}):Object(n.jsx)(y,{currentGeo:d,setIsSearching:h,isSearching:f,locations:w,deleteCity:function(e){S((function(t){return t.filter((function(t){return t.name!==e}))}))},setWeekForecast:x,isFixed:p.isOpen}),f&&Object(n.jsx)(M,{setIsSearching:h,getWeatherByName:W}),p.isOpen&&Object(n.jsx)(T,{city:p.city})]})},J=(a(52),function(){return Object(n.jsx)(D,{})});r.a.render(Object(n.jsx)(J,{}),document.getElementById("root"))},8:function(e,t,a){e.exports={main:"Main_main__3fzSv",modal:"Main_modal__12qLN",show:"Main_show__tU-hz",modal__inner:"Main_modal__inner__35MS-",modalButton:"Main_modalButton__25jSV",form:"Main_form__283FA",input:"Main_input__dhsNj",button:"Main_button__2FQPJ"}},9:function(e,t,a){e.exports={modal:"Searching_modal__2A60Y",show:"Searching_show__3DOmI",modal__inner:"Searching_modal__inner__3bhxZ",modalButton:"Searching_modalButton__liT8s",form:"Searching_form__2rToz",input:"Searching_input__1HoWC",button:"Searching_button__2iy_0"}}},[[53,1,2]]]);
//# sourceMappingURL=main.f9ce44fe.chunk.js.map