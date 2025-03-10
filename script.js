document.addEventListener('DOMContentLoaded', () => {
	// Initialize variables
	let userIdeaText = '';
	
	// Get DOM elements
	const frame1 = document.getElementById('frame1');
	const frame2 = document.getElementById('frame2');
	const frame5 = document.getElementById('frame5');
	const userIdea = document.getElementById('userIdea');
	const continueButton = document.getElementById('continueButton');
	const continueButtonFrame2 = document.getElementById('continueButtonFrame2');

	// Frame 1 -> Frame 2
	if (continueButton) {
		continueButton.addEventListener('click', () => {
			userIdeaText = userIdea.value.trim();
			
			if (!userIdeaText) {
				alert('Please enter your idea before continuing');
				return;
			}

			// Update Frame 2 content
			const ideaDesc = document.querySelector('#frame2 .desc');
			if (ideaDesc) {
				ideaDesc.textContent = userIdeaText;
			}

			// Switch frames
			frame1.classList.remove('active');
			frame2.classList.add('active');
		});
	}

	// Frame 2 -> Frame 5
	if (continueButtonFrame2) {
		continueButtonFrame2.addEventListener('click', () => {
			// Update Frame 5 content
			const frame5Card = document.getElementById('ideaCardFrame5');
			if (frame5Card) {
				frame5Card.innerHTML = `
					<div class="idea-rectangle2">
						<div class="idea-strip">Your idea</div>
						<div class="idea-details">
							<div class="desc">${userIdeaText}</div>
						</div>
					</div>
				`;
			}

			// Switch frames
			frame2.classList.remove('active');
			frame5.classList.add('active');
		});
	}
});
