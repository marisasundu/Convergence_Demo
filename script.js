function populateCommunitySuggestions() {
    const suggestionsContainer = document.getElementById('communitySuggestions');
    suggestionsContainer.innerHTML = ""; // Clear any old suggestions
    document.getElementById('frame7Subtitle').innerText = `You selected: ${selectedValue}`;
    
    // Map each value to an array of suggestion objects.
    const suggestionsMap = {
      "Achievement/learning": [
        { name: "Tom's idea", desc: "Gain a sense of self-confidence.", img: "../images/placeholder.png" },
        { name: "Sarah's idea", desc: "Develop your skills and abilities.", img: "../images/placeholder.png" },
        { name: "Alex's idea", desc: "Test your abilities and learn what you’re capable of.", img: "../images/placeholder.png" }
      ],
      "Escape": [
        { name: "Mia's idea", desc: "Give your mind a rest.", img: "../images/placeholder.png" },
        { name: "Jordan's idea", desc: "Have a change from your daily routine.", img: "../images/placeholder.png" },
        { name: "Priya's idea", desc: "Experience solitude away from crowds.", img: "../images/placeholder.png" }
      ],
      "Social": [
        { name: "Jean's idea", desc: "Do something with your family.", img: "../images/placeholder.png" },
        { name: "Riley's idea", desc: "Bring your family closer together.", img: "../images/placeholder.png" },
        { name: "Chris's idea", desc: "Meet other people in your area.", img: "../images/placeholder.png" }
      ],
      "Physical fitness": [
        { name: "Morgan's idea", desc: "Get exercise.", img: "../images/placeholder.png" },
        { name: "Devon's idea", desc: "Keep physically fit.", img: "../images/placeholder.png" },
        { name: "Skyler's idea", desc: "Relax and rest physically.", img: "../images/placeholder.png" }
      ],
      "Nature": [
        { name: "Taylor's idea", desc: "View the scenery.", img: "../images/placeholder.png" },
        { name: "Casey's idea", desc: "Be close to nature.", img: "../images/placeholder.png" },
        { name: "Alex's idea", desc: "Learn more about nature.", img: "../images/placeholder.png" }
      ]
    };
    
    const chosenSuggestions = suggestionsMap[selectedValue] || [];
    
    // For each suggestion, create an idea card using your .idea-rectangle2 markup.
    chosenSuggestions.forEach(sugg => {
      const card = document.createElement('div');
      card.classList.add('idea'); // Use the same styling as your idea cards
      card.innerHTML = `
        <div class="idea-rectangle2">
          <div class="idea-strip">Suggestion</div>
          <div class="idea-details">
            <div class="thumb">
              <img src="${sugg.img}" class="idea-card-image" alt="Suggestion Thumbnail">
            </div>
            <div class="desc">
              <strong>${sugg.name}</strong>: ${sugg.desc}
            </div>
          </div>
        </div>
      `;
      // When a suggestion card is clicked, highlight it and store the choice.
      card.addEventListener('click', function() {
        Array.from(suggestionsContainer.children).forEach(c => c.classList.remove('selected'));
        this.classList.add('selected');
        favoriteSuggestion = sugg.name;
        console.log("Favorite suggestion chosen:", favoriteSuggestion);
      });
      suggestionsContainer.appendChild(card);
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
        
        const popularIdeasContainer = document.getElementById('popularIdeasContainer');
        popularIdeasContainer.innerHTML = `
          <div class="option"><strong>Freya's idea</strong>: Some popular idea for ${selectedBarValue}.</div>
          <div class="option"><strong>Team's idea</strong>: Another popular idea for ${selectedBarValue}.</div>
          <div class="option"><strong>Alex's idea</strong>: Another interesting idea for ${selectedBarValue}.</div>
        `;
        
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
      