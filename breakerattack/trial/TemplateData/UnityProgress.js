function UnityProgress(gameInstance, progress) {
	if (!gameInstance.Module)
		return;

	if (!gameInstance.progress) {    
		gameInstance.progress = document.createElement("div");
		gameInstance.progress.id = "Progress";
		gameInstance.progress.empty = document.createElement("div");
		gameInstance.progress.empty.id = "Empty";
		gameInstance.progress.appendChild(gameInstance.progress.empty);
		gameInstance.progress.full = document.createElement("div");
		gameInstance.progress.full.id = "Full";
		gameInstance.progress.appendChild(gameInstance.progress.full);
		gameInstance.container.appendChild(gameInstance.progress);
	}
	gameInstance.progress.full.style.width = (100 * progress) + "%";
	gameInstance.progress.empty.style.width = (100 * (1 - progress)) + "%";
	if (progress == 1)
		gameInstance.progress.style.display = "none";
}