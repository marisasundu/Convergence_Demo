let communitySuggestionsHTML = "";
const popularIdeasMap = {
    "Achievement/learning": [
      {
        name: "Ann's idea",
        desc: "A covered pavilion for live painting, sketching, or craft workshops would be a great way to encourage creativity in the park.",
        img: "./images/achievement1.webp",
        likes: 11
      },
      {
        name: "Marcus's idea",
        desc: "An open-air amphitheater for music, storytelling, and cultural performances to inspire and educate.",
        img: "./images/achievement2.png",
        likes: 8
      },
      {
        name: "Juliana's idea",
        desc: "A disc golf course would be fantastic—an awesome and quickly growing sport for people of all ages.",
        img: "./images/achievement3.png",
        likes: 14
      }
    ],
    "Escape": [
      {
        name: "Xiaohan's idea",
        desc: "A scenic viewpoint overlooking the Otay River would be a peaceful retreat away from the crowds.",
        img: "./images/escape1.png",
        likes: 7
      },
      {
        name: "Chris's idea",
        desc: "A garden featuring indigenous plants, providing a calm space for reflection and relaxation.",
        img: "./images/escape2.png",
        likes: 6
      },
      {
        name: "Matthew's idea",
        desc: "Install benches with proper back support, offering a quiet spot for reading and unwinding.",
        img: "./images/escape3.png",
        likes: 5
      }
    ],
    "Social": [
      {
        name: "Simon's idea",
        desc: "Eight lighted pickleball courts with fencing and nearby parking—ideal for community play.",
        img: "./images/social1.png",
        likes: 18
      },
      {
        name: "Ananya's idea",
        desc: "Reservable picnic areas with long tables for group meals and celebrations.",
        img: "./images/social2.png",
        likes: 13
      },
      {
        name: "Naomi's idea",
        desc: "Sports fields for community recreation and events where neighbors can gather.",
        img: "./images/social3.png",
        likes: 23
      }
    ],
    "Physical fitness": [
      {
        name: "Kahlil's idea",
        desc: "A challenging pump track and jump lanes for mountain bike enthusiasts to hone their skills.",
        img: "./images/fitness1.png",
        likes: 16
      },
      {
        name: "Maria's idea",
        desc: "Dedicated courts for handball or racquetball to keep physically active.",
        img: "./images/fitness2.png",
        likes: 14
      },
      {
        name: "Oscar's idea",
        desc: "Exciting downhill mountain bike trails to test your endurance and agility.",
        img: "./images/fitness3.png",
        likes: 10
      }
    ],
    "Nature": [
      {
        name: "Ethan's idea",
        desc: "Restore areas along the Otay River to native wetlands to support local wildlife and ecology.",
        img: "./images/nature1.png",
        likes: 9
      },
      {
        name: "Daniela's idea",
        desc: "Create a trail system with plants and interpretive signs about the ecosystem.",
        img: "./images/nature2.png",
        likes: 6
      },
      {
        name: "Kai's idea",
        desc: "A scenic viewpoint where visitors can enjoy expansive views and the tranquility of nature.",
        img: "./images/nature3.png",
        likes: 4
      }
    ]
  };
  
const valueColors = {
  "Social": "#AEC6CF",             // Pastel blue
  "Achievement/learning": "#FFB7C5", // Pastel pink
  "Nature": "#FDFD96",             // Pastel yellow
  "Physical fitness": "#77DD77",   // Pastel green
  "Escape": "#FFB347"              // Pastel orange
};

function populateCommunitySuggestions() {
    const suggestionsContainer = document.getElementById('communitySuggestions');
    if (!suggestionsContainer || !selectedValue) return;
    
    suggestionsContainer.innerHTML = ""; // Clear previous suggestions
    
    console.log("Populating suggestions for value:", selectedValue); // Debug log
    
    // Get suggestions for the selected value
    const suggestions = popularIdeasMap[selectedValue];
    if (!suggestions) {
      console.log("No suggestions found for value:", selectedValue);
      return;
    }
    
    // Shuffle the suggestions
    const shuffledSuggestions = [...suggestions];
    for (let i = shuffledSuggestions.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffledSuggestions[i], shuffledSuggestions[j]] = [shuffledSuggestions[j], shuffledSuggestions[i]];
    }
    
    // Create and append suggestion cards
    shuffledSuggestions.forEach((idea) => {
      const card = document.createElement('div');
      card.classList.add('idea');
      card.innerHTML = `
        <div class="idea-rectangle2" style="position: relative;">
          <div class="idea-strip" style="display: flex; justify-content: space-between; align-items: center;">
            <span style="font-weight: bold;">${idea.name}</span>
          </div>
          <div class="idea-details">
            <div class="thumb">
              <img src="${idea.img}" class="idea-card-image" alt="Popular Idea Thumbnail">
            </div>
            <div class="desc">
              ${idea.desc}
            </div>
          </div>
        </div>
      `;
      card.addEventListener('click', function() {
        Array.from(suggestionsContainer.children).forEach(c => c.classList.remove('selected'));
        this.classList.add('selected');
        favoriteSuggestion = idea.name;
      });
      suggestionsContainer.appendChild(card);
    });
  }

  function generateFinalSuggestions(value) {
    const popularIdeasContainer = document.getElementById('popularIdeasContainer');
    popularIdeasContainer.innerHTML = ""; // Clear previous content
    
    const chosenSuggestions = popularIdeasMap[value] || [];
    
    // Sort suggestions by likes in descending order
    const sortedSuggestions = [...chosenSuggestions].sort((a, b) => b.likes - a.likes);
    
    sortedSuggestions.forEach((idea, index) => {
      const rank = index + 1;
      const card = document.createElement('div');
      card.classList.add('idea');
      card.innerHTML = `
        <div class="idea-rectangle2" style="position: relative;">
          <div class="idea-strip" style="display: flex; justify-content: space-between; align-items: center;">
            <span style="font-weight: bold;">${idea.name}</span>
            <span class="likes-count">${idea.likes} likes</span>
          </div>
          <div class="idea-details">
            <div class="thumb">
              <img src="${idea.img}" class="idea-card-image" alt="Popular Idea Thumbnail">
            </div>
            <div class="desc">
              ${idea.desc}
            </div>
          </div>
        </div>
      `;
      popularIdeasContainer.appendChild(card);
    });
  }

// Initialize variables (remove Frame 1 related vars)
let selectedValue = '';
let selectedActivity = '';
let favoriteSuggestion = '';
let selectedBarValue = '';

// Get DOM elements (remove Frame 1 elements)
const frame2 = document.getElementById('frame2');
const frame5 = document.getElementById('frame5');
const frame6 = document.getElementById('frame6');
const frame7 = document.getElementById('frame7');
const frame8 = document.getElementById('frame8');
const frame9 = document.getElementById('frame9');
const continueButtonFrame2 = document.getElementById('continueButtonFrame2');
const backButtonFrame2 = document.getElementById('backButtonFrame2');
const userIdea = document.getElementById('userIdea');
const continueButton = document.getElementById('continueButton');
const continueButtonFrame5 = document.getElementById('continueButtonFrame5');
const backButtonFrame5 = document.getElementById('backButtonFrame5');
const continueButtonFrame6 = document.getElementById('continueButtonFrame6');
const backButtonFrame6 = document.getElementById('backButtonFrame6');
const continueButtonFrame7 = document.getElementById('continueButtonFrame7');
const backButtonFrame7 = document.getElementById('backButtonFrame7');
const continueButtonFrame8 = document.getElementById('continueButtonFrame8');
const backButtonFrame8 = document.getElementById('backButtonFrame8');
const backButtonFrame9 = document.getElementById('backButtonFrame9');
const backButtonFrame1 = document.getElementById('backButtonFrame1');

// Frame 2 -> Frame 5
if (continueButtonFrame2) {
  continueButtonFrame2.addEventListener('click', () => {
    frame2.classList.remove('active');
    frame5.classList.add('active');
  });
}

// Frame 2 back button
if (backButtonFrame2) {
  backButtonFrame2.addEventListener('click', () => {
    window.history.back(); // Goes back to previous page
  });
}

// -------------------- Frame 5: Choose a Value --------------------
const valueOptions = document.querySelectorAll('#frame5 .value-option');

valueOptions.forEach(item => {
  item.addEventListener('click', function() {
    valueOptions.forEach(o => o.classList.remove('selected'));
    this.classList.add('selected');
    selectedValue = this.getAttribute('data-value');
    console.log("Selected value:", selectedValue);
  });
});

// Frame 5 -> Frame 6 (Continue)
continueButtonFrame5.addEventListener('click', function() {
  if (!selectedValue) {
    alert("Please select a value.");
    return;
  }
  // Create the HTML for the idea card
  const selectedIdeaHTML = `
        <div class="idea-rectangle2">
            <div class="idea-strip">Your idea</div>
            <div class="idea-details">
                <div class="desc">${userIdeaText}</div>
            </div>
        </div>
    `;
  // Insert the idea snippet into Frame 6's idea card
  document.getElementById('ideaCardFrame6').innerHTML = selectedIdeaHTML;
  // Update the value tag to display the chosen value with its color.
const valueTag = document.getElementById('valueTag');
valueTag.innerText = selectedValue;
valueTag.style.backgroundColor = valueColors[selectedValue] || "#ccc";
// --- NEW CODE END ---

frame5.classList.remove('active');
frame6.classList.add('active');
  
  // Populate Frame 6 with activity options based on selectedValue.
  // Define a mapping object for value-to-activities.
  const activityMapping = {
    "Achievement/learning": [
      "gain a sense of self-confidence",
      "develop my skills and abilities",
      "test my abilities/learn what I am capable of",
      "experience new and different things",
      "do something creative such as sketch, paint, take photographs"
    ],
    "Escape": [
      "give my mind a rest",
      "have a change from my daily routine/everyday life",
      "experience solitude",
      "be away from crowds of people",
      "be away from the family for awhile"
    ],
    "Social": [
      "do something with my family",
      "bring my family closer together",
      "be with friends or members of your group",
      "be with people having similar values",
      "meet other people in the area"
    ],
    "Physical fitness": [
      "get exercise",
      "keep physically fit",
      "relax/rest physically"
    ],
    "Nature": [
      "view the scenery",
      "be close to nature",
      "learn more about nature"
    ]
  };
  
  // Get the appropriate activity list for the chosen value
  const activities = activityMapping[selectedValue] || [];
  
  // Populate the container in Frame 6
  const activityContainer = document.getElementById('activityOptionsContainer');
  activityContainer.innerHTML = ""; // Clear any existing content
  
  activities.forEach(act => {
    const div = document.createElement('div');
    div.classList.add('option', 'activity-option');
    div.dataset.activity = act;
    div.innerText = act;
    div.addEventListener('click', function() {
      // Remove selection from all
      document.querySelectorAll('#activityOptionsContainer .activity-option').forEach(el => el.classList.remove('selected'));
      this.classList.add('selected');
      selectedActivity = this.dataset.activity;
      console.log("Selected activity:", selectedActivity);
    });
    activityContainer.appendChild(div);
  });
  
  frame5.classList.remove('active');
  frame6.classList.add('active');
});

// Frame 5 -> Frame 3 (Back)
backButtonFrame5.addEventListener('click', function() {
  frame5.classList.remove('active');
  frame3.classList.add('active');
});

// -------------------- Frame 6: Choose an Activity --------------------
// (Activity options are generated dynamically in Frame 5's continue handler.)
if (continueButtonFrame6) {
  continueButtonFrame6.addEventListener('click', () => {
    if (!selectedActivity) {
      alert('Please select an activity before continuing');
      return;
    }

    // Update Frame 7's value tag and populate suggestions
    const valueTagFrame7 = document.getElementById('valueTagFrame7');
    if (valueTagFrame7) {
      valueTagFrame7.textContent = selectedValue;
      valueTagFrame7.style.backgroundColor = valueColors[selectedValue] || "#ccc";
    }

    // Populate community suggestions based on selected value
    populateCommunitySuggestions();

    frame6.classList.remove('active');
    frame7.classList.add('active');
  });
}

// Frame 6 -> Frame 5 (Back)
backButtonFrame6.addEventListener('click', function() {
  frame6.classList.remove('active');
  frame5.classList.add('active');
});

// -------------------- Frame 7: Community Suggestions --------------------
continueButtonFrame7.addEventListener('click', function() {
  if (!favoriteSuggestion) {
    alert("Please select a favorite suggestion first.");
    return;
  }
  frame7.classList.remove('active');
  frame8.classList.add('active');
});

backButtonFrame7.addEventListener('click', function() {
  frame7.classList.remove('active');
  frame6.classList.add('active');
});

// -------------------- Frame 8: Community Value Chart --------------------
// Frame 8 -> Frame 9
if (continueButtonFrame8) {
  continueButtonFrame8.addEventListener('click', () => {
    if (!selectedBarValue) {
      alert('Please select a value to see more ideas');
      return;
    }

    // Update title with selected value
    const frame9Title = document.getElementById('frame9Title');
    if (frame9Title) {
      frame9Title.innerText = `These are the most popular ideas for ${selectedBarValue}:`;
    }

    // Generate suggestions using the selected bar value
    generateFinalSuggestions(selectedBarValue);
    
    frame8.classList.remove('active');
    frame9.classList.add('active');
  });
}

backButtonFrame8.addEventListener('click', function() {
  frame8.classList.remove('active');
  frame7.classList.add('active');
});

// Handle bar value selection in Frame 8
const barValueEls = document.querySelectorAll('.bar-value');
barValueEls.forEach(el => {
  el.addEventListener('click', () => {
    // Remove selected class from all bars
    barValueEls.forEach(b => b.classList.remove('selected'));
    // Add selected class to clicked bar
    el.classList.add('selected');
    // Update selectedBarValue with the data-value attribute
    selectedBarValue = el.getAttribute('data-value');
  });
});

// -------------------- Frame 9: Popular Ideas for Selected Value --------------------
backButtonFrame9.addEventListener('click', function() {
  frame9.classList.remove('active');
  frame8.classList.add('active');
});

// Frame 1 back button
if (backButtonFrame1) {
  backButtonFrame1.addEventListener('click', () => {
    window.history.back(); // Goes back to previous page
  });
}
