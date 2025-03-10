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
  

function populateCommunitySuggestions() {
    const suggestionsContainer = document.getElementById('communitySuggestions');
    if (!suggestionsContainer) return;
    
    suggestionsContainer.innerHTML = ""; // Clear previous suggestions
    
    // Flatten all ideas into a single array
    const allIdeas = Object.values(popularIdeasMap).flat();
    
    // Shuffle all ideas
    const shuffledIdeas = [...allIdeas];
    for (let i = shuffledIdeas.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffledIdeas[i], shuffledIdeas[j]] = [shuffledIdeas[j], shuffledIdeas[i]];
    }
    
    // Take only the first 3 ideas
    const selectedIdeas = shuffledIdeas.slice(0, 3);
    
    // Create and append suggestion cards
    selectedIdeas.forEach((idea) => {
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

function generateFinalSuggestions() {
  const popularIdeasContainer = document.getElementById('popularIdeasContainer');
  popularIdeasContainer.innerHTML = ""; // Clear previous content
  
  // Flatten all ideas into a single array
  const allIdeas = Object.values(popularIdeasMap).flat();
  
  // Sort all ideas by likes in descending order
  const sortedIdeas = [...allIdeas].sort((a, b) => b.likes - a.likes);
  
  // Function to create idea card
  const createIdeaCard = (idea) => {
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
    return card;
  };

  // Function to show first 3 ideas
  const showInitialIdeas = () => {
    popularIdeasContainer.innerHTML = ""; // Clear container
    sortedIdeas.slice(0, 3).forEach(idea => {
      popularIdeasContainer.appendChild(createIdeaCard(idea));
    });
    popularIdeasContainer.appendChild(showMoreButton);
  };

  // Function to show 6 ideas
  const showMoreIdeas = () => {
    popularIdeasContainer.innerHTML = ""; // Clear container
    sortedIdeas.slice(0, 6).forEach(idea => {
      popularIdeasContainer.appendChild(createIdeaCard(idea));
    });
    popularIdeasContainer.appendChild(showLessButton);
  };

  // Create "Show more" button
  const showMoreButton = document.createElement('button');
  showMoreButton.classList.add('continue');
  showMoreButton.style.marginTop = '20px';
  showMoreButton.innerText = 'Show more ideas';
  showMoreButton.addEventListener('click', showMoreIdeas);

  // Create "Show less" button
  const showLessButton = document.createElement('button');
  showLessButton.classList.add('continue');
  showLessButton.style.marginTop = '20px';
  showLessButton.innerText = 'Show less ideas';
  showLessButton.addEventListener('click', showInitialIdeas);

  // Initially show first 3 ideas
  showInitialIdeas();
}

// Initialize variables
let selectedValue = '';
let favoriteSuggestion = '';
let selectedBarValue = '';

// Define value colors
const valueColors = {
  "Social": "#AEC6CF",             // Pastel blue
  "Achievement/learning": "#FFB7C5", // Pastel pink
  "Nature": "#FDFD96",             // Pastel yellow
  "Physical fitness": "#77DD77",   // Pastel green
  "Escape": "#FFB347"              // Pastel orange
};

// Get DOM elements
const frame2 = document.getElementById('frame2');
const frame7 = document.getElementById('frame7');
const frame9 = document.getElementById('frame9');
const continueButtonFrame2 = document.getElementById('continueButtonFrame2');
const continueButtonFrame7 = document.getElementById('continueButtonFrame7');
const backButtonFrame7 = document.getElementById('backButtonFrame7');
const backButtonFrame9 = document.getElementById('backButtonFrame9');

// Frame 2 -> Frame 7
if (continueButtonFrame2) {
  continueButtonFrame2.addEventListener('click', () => {
    // Populate community suggestions
    populateCommunitySuggestions();

    frame2.classList.remove('active');
    frame7.classList.add('active');
  });
}

// Frame 7 -> Frame 9
if (continueButtonFrame7) {
  continueButtonFrame7.addEventListener('click', function() {
    if (!favoriteSuggestion) {
      alert("Please select a favorite suggestion first.");
      return;
    }
    
    // Generate final suggestions
    generateFinalSuggestions();
    
    frame7.classList.remove('active');
    frame9.classList.add('active');
  });
}

// Frame 7 back button
if (backButtonFrame7) {
  backButtonFrame7.addEventListener('click', function() {
    frame7.classList.remove('active');
    frame2.classList.add('active');
  });
}

// Frame 9 back button
if (backButtonFrame9) {
  backButtonFrame9.addEventListener('click', function() {
    frame9.classList.remove('active');
    frame7.classList.add('active');
  });
}
