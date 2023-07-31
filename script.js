async function fetchData() {
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '64e9733247mshc07a1309deef8c4p1ba57fjsne08f150c0e4b',
            'X-RapidAPI-Host': 'concerts-artists-events-tracker.p.rapidapi.com'
        }
    };
    
    const res = await fetch('https://concerts-artists-events-tracker.p.rapidapi.com/venue/past?name=Paris&minDate=2022-01-25&maxDate=2023-01-30&page=1', options)
    const record = await res.json()

    document.getElementById("concerts").innerHTML = record.data.map(item => `<li>${item.name}</li>`).join('');
}
fetchData(); 