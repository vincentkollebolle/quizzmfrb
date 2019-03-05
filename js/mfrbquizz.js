var myFullpage = new fullpage('#fullpage', {
    sectionsColor: [
      '#fee70e', 
      '#fee70e', 
      '#fee70e', 
      '#fee70e', 
      '#fee70e',
      '#fee70e',
      '#fee70e',
      '#fee70e',
      '#fee70e',
      '#fee70e',
      '#fee70e'
      ],
    anchors: [
      'intro', 
      'q1', 
      'q2', 
      'q3', 
      'q4', 
      'q5', 
      'q6', 
      'surf',
      'hamster',
      'robot',
      'philo',
    ],
    menu: '#menu',
    controlArrows: false,
    keyboardScrolling: false,
    keyboardScrolling: false,
    continuousVertical: false,
    afterLoad: function(anchorLink, index){
      //console.log("AFTER LOAD - anchorLink:" +anchorLink + " index:" +index );
    },
    onLeave: function(index, nextIndex, direction){
      //console.log("ONLEAVE - index:" +index + " nextIndex:" +nextIndex  + " direction:" + direction);

    },
  });

  //forbid scroll with mouse
  fullpage_api.setAllowScrolling(false);

  $( document ).ready(function() {

    var score = {
      hamster: 0, 
      philo: 0, 
      robot: 0,
      surf:0
    };
    
    function updateCounter() {
      $("#hamsterCounterValue").html(score.hamster);
      $("#philoCounterValue").html(score.philo);
      $("#robotCounterValue").html(score.robot);
      $("#surfCounterValue").html(score.surf);
    }

    //if click on .btn.btn-next step ! 
    $( ".btn.btn-next" ).click(function(e) {
      //prevent default
      e.preventDefault();
      
      //update counter
      if($(this).hasClass( "hamster" )) {
        score.hamster++;
      } else if ($(this).hasClass( "philo" )) {
        score.philo++;
      } else if ($(this).hasClass( "surf" )) {
        score.surf++;
      } else if ($(this).hasClass( "robot" )) {
        score.robot++;
          
      }
      //update counter
      updateCounter();

      //Go to next slide
      if(fullpage_api.getActiveSection().anchor == "q6") {
        //pick max counter (see https://stackoverflow.com/questions/27376295/getting-key-with-the-highest-value-from-object )
        var result = Object.keys(score).reduce(function(a, b){ return score[a] > score[b] ? a : b });

        //goto correspondig answer
        if(result == "hamster") {
          fullpage_api.moveTo('hamster', 1);
        } else if(result == "robot") {
          fullpage_api.moveTo('robot', 1);
        } else if(result == "philo") {
          fullpage_api.moveTo('philo', 1);
        } else if(result == "surf") {
          fullpage_api.moveTo('surf', 1);
        }
        
      } else {
        //move to next session
        fullpage_api.moveSectionDown();
      }

    });
  });