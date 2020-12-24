$(function () {
	$("#calculatebutton").click(calculations);
});
const result = $(".result");

const food = [
	{ name: "Chocolate milk (1 cup)", Carbohydrates: 26, Calories: 208 },
	{ name: "Low fat (2%) milk", Carbohydrates: 12, Calories: 180 },
	{ name: "Apple (1 medium)", Carbohydrates: 21, Calories: 81 },
	{ name: "Banana (1)", Carbohydrates: 21, Calories: 105 },
	{ name: "Dates (dried)(10)", Carbohydrates: 61, Calories: 228 },
	{ name: "Grapes (1 cup)", Carbohydrates: 28, Calories: 114 },
	{ name: "Orange (1)", Carbohydrates: 16, Calories: 65 },
	{ name: "Pineapple (1 cup)", Carbohydrates: 19, Calories: 77 },
	{ name: "Prunes (dried)(10)", Carbohydrates: 53, Calories: 201 },
	{ name: "Strawberries (1 cup)", Carbohydrates: 11, Calories: 45 },

	{ name: "Raspberries (1 cup)", Carbohydrates: 14, Calories: 61 },
];

const main = $(".main");
for (let i = 0; i < food.length; i++) {
	main.append(
		`<li class="list" calories="${food[i].Calories}" carbs="${food[i].Carbohydrates}"> ${food[i].name}  <span style="display:none"> ${food[i].Carbohydrates} or  ${food[i].Calories}</span> </li>`
	);
}
function calculations() {
	let calories = 0,
		carbs = 0;
	$(".add").each(function () {
		calories += parseInt($(this).attr("calories"));
		carbs += parseInt($(this).attr("carbs"));
	});
	$("#result").append("<h2 class='miralsty'>Calories:" + calories + " carbs:" + carbs + "</h2>");
}

var length = document.querySelectorAll(".list").length;

for (var i = 0; i < length; i++) {
	document.querySelectorAll(".list")[i].addEventListener("click", function () {
		$(this).toggleClass("add");
	});
}
