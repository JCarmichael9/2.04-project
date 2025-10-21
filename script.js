const schedules = ["JamesSchedule.json", "AnthonySchedule.json", "WyattSchedule.json", "HankSchedule.json"]
let s = 0





async function loadProfile() {
    try {
        const response = await fetch(schedules[s]);
        const data = await response.json();

        let html = '';
        for (let i = 0; i < data.length; i++) {
            html += `
            <div class="col-md-4 mb-3 mx-auto">
                <div class="card h-100">
                    <div class="card-body">
                        <p class="card-title fs-2"><strong>${data[i].className}</strong></p>
                        <p class="card-subtitle mb-2 fs-3">${data[i].teacher} - ${data[i].subjectArea}</p>
                        <p class="fs-5 card-text">Room Number: <strong>${data[i].roomNumber}</strong></p>
                        <p class="fs-5 card-text">Period <strong>${data[i].period}</strong></p>
                    </div>
                </div>
            </div>
            `;
        }

        document.getElementById("schedules").innerHTML = html;

    } catch (error) {
        document.getElementById("schedules").textContent = "Error."
    }
}





document.addEventListener("keydown", e => {
    if (e.key === "ArrowRight") {
        if (s === schedules.length-1) {
           
        } else {
            s++
            loadProfile()
        }
        
    }   else if (e.key === "ArrowLeft") {
        if (s === 0) {
           
        } else {
            s--
            loadProfile()
        }
    } 
})

loadProfile();