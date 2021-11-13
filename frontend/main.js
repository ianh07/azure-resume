window.addEventListener('DOMContentLoaded' , (event) =>{
    getVisitCount();
})

const functionApiUrl = 'https://getresumecounterih.azurewebsites.net/api/GetResumeCounter?code=Kahk1xRBY5/gikw6ISnpNsZyrwrX5W5YSK3LDbo6CJ4Bx6D6Uss/ug==';
const localfunctionApi = 'http://localhost:7071/api/GetResumeCounter';

const getVisitCount = () => {
        let count = 30;
        fetch(functionApiUrl).then(response => {
            return response.json()
        }).then(response => {
            console.log("Website called function API.")
            count = response.count;
            document.getElementById("counter").innerText = count;
        }).catch(function(error){
            console.log(error);
        });
        return count;
}