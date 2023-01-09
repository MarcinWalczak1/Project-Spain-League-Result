const laligaTable = document.querySelector('.laliga-table');
document.querySelector("#laliga-button").addEventListener('click', ()=>{
     laligaTable.classList.add("invisible");
     SegundaDivisionTable.classList.remove("invisible");
     primeraDivisionFeminaTable.classList.remove("invisible");
     primeraDivisionGroup1Table.classList.remove("invisible");


})
const SegundaDivisionTable = document.querySelector('.segunda-table');
document.querySelector("#segunda-button").addEventListener('click', ()=>{
    SegundaDivisionTable.classList.add("invisible");
    laligaTable.classList.remove("invisible");
    primeraDivisionFeminaTable.classList.remove("invisible");
    primeraDivisionGroup1Table.classList.remove("invisible");

   

})
const primeraDivisionFeminaTable = document.querySelector('.femina-table');
document.querySelector("#femina-button").addEventListener('click', ()=>{
    primeraDivisionFeminaTable.classList.add("invisible");
    SegundaDivisionTable.classList.remove("invisible");
    laligaTable.classList.remove("invisible");
    primeraDivisionGroup1Table.classList.remove("invisible");

})

const primeraDivisionGroup1Table = document.querySelector('.primera-table-group1');
document.querySelector("#primera-button").addEventListener('click', ()=>{
    primeraDivisionGroup1Table.classList.add("invisible");
    primeraDivisionFeminaTable.classList.remove("invisible");
    SegundaDivisionTable.classList.remove("invisible");
    laligaTable.classList.remove("invisible");
})


