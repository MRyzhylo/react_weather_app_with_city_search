export function fetchWeather (city="Dnipro") {

    return function (dispatch) {
        fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=219d0dabcadb73f4f993ceb867091930`)
        .then(res => {
            return res.json()
        })
        .then(JSONres=>{
            dispatch({
                type:'FETCH_WEATHER',
                payload: JSONres
            });
        }).catch(err => {
            console.log(err);
        })
    }
};