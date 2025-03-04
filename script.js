let communitySuggestionsHTML = "";
const popularIdeasMap = {
    "Achievement/learning": [
      {
        name: "Ann's idea",
        desc: "A covered pavilion for live painting, sketching, or craft workshops would be a great way to encourage creativity in the park.",
        img: "./images/achievement1.webp",
        likes: 18
      },
      {
        name: "Marcus's idea",
        desc: "An open-air amphitheater for music, storytelling, and cultural performances to inspire and educate.",
        img: "./images/achievement2.png",
        likes: 12
      },
      {
        name: "Juliana's idea",
        desc: "A disc golf course would be fantastic—an awesome and quickly growing sport for people of all ages.",
        img: "./images/achievement3.png",
        likes: 22
      }
    ],
    "Escape": [
      {
        name: "Xiaohan's idea",
        desc: "A scenic viewpoint overlooking the Otay River would be a peaceful retreat away from the crowds.",
        img: "./images/escape1.png",
        likes: 15
      },
      {
        name: "Chris's idea",
        desc: "A garden featuring indigenous plants, providing a calm space for reflection and relaxation.",
        img: "./images/escape2.png",
        likes: 10
      },
      {
        name: "Matthew's idea",
        desc: "Install benches with proper back support, offering a quiet spot for reading and unwinding.",
        img: "./images/escape3.png",
        likes: 20
      }
    ],
    "Social": [
      {
        name: "Simon's idea",
        desc: "Eight lighted pickleball courts with fencing and nearby parking—ideal for community play.",
        img: "./images/social1.png",
        likes: 25
      },
      {
        name: "Ananya's idea",
        desc: "Reservable picnic areas with long tables for group meals and celebrations.",
        img: "./images/social2.png",
        likes: 18
      },
      {
        name: "Naomi's idea",
        desc: "Sports fields for community recreation and events where neighbors can gather.",
        img: "./images/social3.png",
        likes: 30
      }
    ],
    "Physical fitness": [
      {
        name: "Kahlil's idea",
        desc: "A challenging pump track and jump lanes for mountain bike enthusiasts to hone their skills.",
        img: "./images/fitness1.jpg",
        likes: 12
      },
      {
        name: "Maria's idea",
        desc: "Dedicated courts for handball or racquetball to keep physically active.",
        img: "./images/fitness2.png",
        likes: 16
      },
      {
        name: "Oscar's idea",
        desc: "Exciting downhill mountain bike trails to test your endurance and agility.",
        img: "./images/fitness3.png",
        likes: 14
      }
    ],
    "Nature": [
      {
        name: "Ethan's idea",
        desc: "Restore areas along the Otay River to native wetlands to support local wildlife and ecology.",
        img: "./images/nature1.png",
        likes: 20
      },
      {
        name: "Daniela's idea",
        desc: "Create a trail system with plants and interpretive signs about the ecosystem.",
        img: "./images/nature2.png",
        likes: 22
      },
      {
        name: "Kai's idea",
        desc: "A scenic viewpoint where visitors can enjoy expansive views and the tranquility of nature.",
        img: "./images/nature3.png",
        likes: 19
      }
    ]
  };
  

function populateCommunitySuggestions() {
    const suggestionsContainer = document.getElementById('communitySuggestions');
    suggestionsContainer.innerHTML = ""; // Clear any old suggestions
    // document.getElementById('frame7Subtitle').innerText = `Value: ${selectedValue}`;
    const valueTagFrame7 = document.getElementById('valueTagFrame7');
    valueTagFrame7.innerText = selectedValue;
    valueTagFrame7.style.backgroundColor = valueColors[selectedValue] || "#ccc";
    
    // Map each value to an array of suggestion objects.
    

    const chosenSuggestions = popularIdeasMap[selectedValue] || [];
    
    // For each suggestion, create an idea card using your .idea-rectangle2 markup.
    chosenSuggestions.forEach((idea, index) => {
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
          <p class="idea-likes">
            ${idea.likes} people liked this idea
          </p>
        `;
        card.addEventListener('click', function() {
          Array.from(suggestionsContainer.children).forEach(c => c.classList.remove('selected'));
          this.classList.add('selected');
          favoriteSuggestion = idea.name;
          console.log("Favorite suggestion chosen:", favoriteSuggestion);
        });
        suggestionsContainer.appendChild(card);
      });
      communitySuggestionsHTML = suggestionsContainer.innerHTML;
  }

  function generateFinalSuggestions(value) {
    const popularIdeasContainer = document.getElementById('popularIdeasContainer');
    popularIdeasContainer.innerHTML = ""; // Clear previous content
    
    // Use the same mapping object as before (popularIdeasMap)
    const chosenSuggestions = popularIdeasMap[value] || [];
    
    chosenSuggestions.forEach((idea, index) => {
      const rank = index + 1;
      const card = document.createElement('div');
      card.classList.add('idea');
      card.innerHTML = `
        <div class="idea-rectangle2" style="position: relative;">
          <div class="idea-strip" style="display: flex; justify-content: space-between; align-items: center;">
            <span style="font-weight: bold;">${idea.name}</span>
            <span style="margin-right: 8px; font-weight: bold;">#${rank}</span>
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
        <p class="idea-likes">
          ${idea.likes} people liked this idea
        </p>
      `;
      popularIdeasContainer.appendChild(card);
    });
  }
  
  
      // -------------------- Global Variables --------------------
      let selectedIdeaHTML = "";
      let selectedValue = "";
      let selectedActivity = "";
      let favoriteSuggestion = "";
      let selectedBarValue = "";
      
      // -------------------- Grab Frames --------------------
      const frame1 = document.getElementById('frame1');
      const frame2 = document.getElementById('frame2');
      const frame3 = document.getElementById('frame3');
      const frame5 = document.getElementById('frame5');
      const frame6 = document.getElementById('frame6');
      const frame7 = document.getElementById('frame7');
      const frame8 = document.getElementById('frame8');
      const frame9 = document.getElementById('frame9');
      
      // -------------------- Grab Buttons --------------------
      const continueButton       = document.getElementById('continueButton');
      const continueButtonFrame2 = document.getElementById('continueButtonFrame2');
      const backButton           = document.getElementById('backButton');
      const continueButtonFrame3 = document.getElementById('continueButtonFrame3');
      const backButtonFrame3     = document.getElementById('backButtonFrame3');
      const continueButtonFrame5 = document.getElementById('continueButtonFrame5');
      const backButtonFrame5     = document.getElementById('backButtonFrame5');
      const continueButtonFrame6 = document.getElementById('continueButtonFrame6');
      const backButtonFrame6     = document.getElementById('backButtonFrame6');
      const continueButtonFrame7 = document.getElementById('continueButtonFrame7');
      const backButtonFrame7     = document.getElementById('backButtonFrame7');
      const continueButtonFrame8 = document.getElementById('continueButtonFrame8');
      const backButtonFrame8     = document.getElementById('backButtonFrame8');
      const backButtonFrame9     = document.getElementById('backButtonFrame9');
      
      // -------------------- Frame 1 -> Frame 2 --------------------
      continueButton.addEventListener('click', function() {
        frame1.classList.remove('active');
        frame2.classList.add('active');
      });
      
      // Frame 2 -> Frame 1 (Back)
      backButton.addEventListener('click', function() {
        frame2.classList.remove('active');
        frame1.classList.add('active');
      });
      
      // Frame 2 -> Frame 3
      continueButtonFrame2.addEventListener('click', function() {
        frame2.classList.remove('active');
        frame3.classList.add('active');
      });
      
      // -------------------- Frame 3: Selecting an Idea --------------------
      document.querySelectorAll('#frame3 .idea').forEach(ideaEl => {
        ideaEl.addEventListener('click', function() {
          // Remove "selected" highlight from all ideas in Frame 3
          document.querySelectorAll('#frame3 .idea').forEach(el => el.classList.remove('selected'));
          this.classList.add('selected');
          // Grab the entire .idea-rectangle2 block as HTML
          const rect = this.querySelector('.idea-rectangle2');
          selectedIdeaHTML = rect.outerHTML;
          console.log("Selected idea snippet:", selectedIdeaHTML);
        });
      });
      
      // Frame 3 -> Frame 5 (Continue)
      continueButtonFrame3.addEventListener('click', function() {
        if (!selectedIdeaHTML) {
          alert("Please select an idea.");
          return;
        }
        // Insert the idea snippet into Frame 5's idea card
        document.getElementById('ideaCardFrame5').innerHTML = selectedIdeaHTML;
        frame3.classList.remove('active');
        frame5.classList.add('active');
      });
      
      // Frame 3 -> Frame 2 (Back)
      backButtonFrame3.addEventListener('click', function() {
        frame3.classList.remove('active');
        frame2.classList.add('active');
      });
      
      // -------------------- Frame 5: Choose a Value --------------------
      const valueOptions = document.querySelectorAll('#frame5 .value-option');
      const valueColors = {
    "Social": "#AEC6CF",             // Pastel blue
    "Achievement/learning": "#FFB7C5", // Pastel pink
    "Nature": "#FDFD96",             // Pastel yellow
    "Physical fitness": "#77DD77",   // Pastel green
    "Escape": "#FFB347"              // Pastel orange
  };
  
      valueOptions.forEach(item => {
        item.addEventListener('click', function() {
          valueOptions.forEach(o => o.classList.remove('selected'));
          this.classList.add('selected');
          selectedValue = this.dataset.value;
          console.log("Selected value:", selectedValue);
        });
      });
      
      // Frame 5 -> Frame 6 (Continue)
      continueButtonFrame5.addEventListener('click', function() {
        if (!selectedValue) {
          alert("Please select a value.");
          return;
        }
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
      continueButtonFrame6.addEventListener('click', function() {
    if (!selectedActivity) {
      alert("Please select an activity.");
      return;
    }
    // Call our new function to populate Frame 7 based on the value selected in Frame 5.
    populateCommunitySuggestions();
    
    frame6.classList.remove('active');
    frame7.classList.add('active');
  });
  
      
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
      const barValueEls = document.querySelectorAll('#frame8 .bar-value');
      barValueEls.forEach(el => {
        el.addEventListener('click', function() {
          barValueEls.forEach(b => b.classList.remove('selected'));
          this.classList.add('selected');
          selectedBarValue = this.dataset.value;
          console.log("Selected bar value:", selectedBarValue);
        });
      });
      
     continueButtonFrame8.addEventListener('click', function() {
  if (!selectedBarValue) {
    alert("Please select a value to see more ideas.");
    return;
  }
  document.getElementById('frame9Title').innerText = 
    `These are the most popular ideas for the value: ${selectedBarValue}`;
  
  // Generate final suggestions using the value chosen in Frame 8
  generateFinalSuggestions(selectedBarValue);
  
  frame8.classList.remove('active');
  frame9.classList.add('active');
});
      
      backButtonFrame8.addEventListener('click', function() {
        frame8.classList.remove('active');
        frame7.classList.add('active');
      });
      
      // -------------------- Frame 9: Popular Ideas for Selected Value --------------------
      backButtonFrame9.addEventListener('click', function() {
        frame9.classList.remove('active');
        frame8.classList.add('active');
      });
      