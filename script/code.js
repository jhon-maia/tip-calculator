const bill=document.getElementById('input-value');
const btn=document.querySelectorAll('.btn');
const numberOfPeople=document.getElementById("total-people");
const results=document.querySelectorAll(".value");
const resetBtn=document.querySelector(".btn-reset")


numberOfPeople.addEventListener('input',setPeopleValue);
btn.forEach(btn=>{
btn.addEventListener("click",setValueTip);
});
bill.addEventListener("input",setValueBill);
resetBtn.addEventListener("click",reset)

let valueBill=0.0;
let tipValue=0.15;
let peopleValue=1;


function setValueBill()
{
	if(bill.value.includes(','))
	{
		bill.value=bill.value.replace(',','.');

	}


	console.log(bill.value);
	valueBill=parseFloat(bill.value);
	calculateTip();
	
}








function setValueTip()
{
	btn.forEach(btn=>{ 
		btn.classList.remove('btn-active');

		if(event.target.innerHTML==btn.innerHTML)
		{
			btn.classList.add('btn-active');
		    tipValue=parseFloat(btn.innerHTML)/100;
        }

        console.log(tipValue);


	});

	calculateTip();
}

function setPeopleValue()
{
	console.log(numberOfPeople.value);
	peopleValue=parseFloat(numberOfPeople.value);
	calculateTip();
	
}


function calculateTip()
{

	if(peopleValue>=1)
	{
		let tipAmount=valueBill*tipValue/peopleValue;
		let total=valueBill*(tipValue+1)/peopleValue;
		results[0].innerHTML="$"+tipAmount.toFixed(2);
		results[1].innerHTML="$"+total.toFixed(2);


	}



}

function reset()
{
	bill.value='0.0'
	setValueBill();

	numberOfPeople.value='1';
	setPeopleValue();


	btn[1].click();

}