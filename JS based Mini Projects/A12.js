const apiKey = "53e32af087c348dd96c1683a18867ee6";
const searchForm = document.querySelector("#search-form");
const searchInput = document.querySelector("#search-input");
const searchResults = document.querySelector("#search-results");
const savedRecipes = document.querySelector("#saved-recipes");

searchForm.addEventListener("submit", event => {
	event.preventDefault();
	const query = searchInput.value;
	getRecipes(query);
});

function getRecipes(query) {
	const apiUrl = `https://api.spoonacular.com/recipes/complexSearch?apiKey=${apiKey}&query=${query}`;
	fetch(apiUrl)
		.then(response => response.json())
		.then(data => {
			const recipes = data.results;
			displayResults(recipes);
		});
}

function displayResults(recipes) {
	searchResults.innerHTML = "";
	recipes.forEach(recipe => {
		const recipeCard = `
			<div class="recipe-card">
				<img src="${recipe.image}" alt="${recipe.title}">
				<h3>${recipe.title}</h3>
				<button class="save-recipe-btn" data-id="${recipe.id}">Save Recipe</button>
			</div>
		`;
		searchResults.insertAdjacentHTML("beforeend", recipeCard);
	});
	addSaveRecipeListeners();
}

function saveRecipe(id) {
	const apiUrl = `https://api.spoonacular.com/recipes/${id}/information?apiKey=${apiKey}`;
	fetch(apiUrl)
		.then(response => response.json())
		.then(recipe => {
			const savedRecipeItem = `
				<li>
					<a href="${recipe.sourceUrl}" target="_blank">${recipe.title}</a>
					<button class="delete-recipe-btn" data-id="${recipe.id}">Delete</button>
				</li>
			`;
			savedRecipes.insertAdjacentHTML('beforeend', savedRecipeItem);
			addDeleteRecipeListeners();
		});
}

function addSaveRecipeListeners() {
	const saveRecipeBtns = document.querySelectorAll('.save-recipe-btn');
	saveRecipeBtns.forEach(btn => {
		btn.addEventListener('click', () => {
			const recipeId = btn.dataset.id;
			saveRecipe(recipeId);
		});
	});
}

function addDeleteRecipeListeners() {
	const deleteRecipeBtns = document.querySelectorAll('.delete-recipe-btn');
	deleteRecipeBtns.forEach(btn => {
		btn.addEventListener('click', () => {
			const recipeId = btn.dataset.id;
			const recipeItem = btn.parentElement;
			deleteRecipe(recipeId, recipeItem);
		});
	});
}

function deleteRecipe(id, item) {
	const apiUrl = `https://api.spoonacular.com/recipes/${id}/information?apiKey=${apiKey}`;
	fetch(apiUrl, { method: 'DELETE' })
		.then(response => {
			if (response.ok) {
				item.remove();
			}
		});
}
