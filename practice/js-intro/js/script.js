    let today = new Date();
    // alert(new Date());
    console.log(today);
    console.dir(today);
    let year = today.getFullYear()
    // alert(year);
    console.log(year);
    console.dir(year);

    let month = getMonthName(today.getMonth()+ 1);
    console.log(month);
    function getMonthName(monthIndex) {
        if (monthIndex === 2) {
            return "February!";
        } else {
            return "Not February!";
        }
    }
    // EVENT LISTENER
    document.querySelector("dateBtn").addEventListener("click", displayDate)
    document.querySelector("timeBtn").addEventListener("click", displayTime)


    function displayDate() {
        let h1el = document.querySelector("#header");
        h1el.textContent = today.toDateString();
    }
    function displayTime(){
        let h2el = document.querySelector("#subheader");
        h2el.textContent = today.toLocaleTimeString();
    }



