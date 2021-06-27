//Javascript console script that generates a list of random exercise

//Takes in an object and returns random muscles and exercises for those muscles
function generateRandomExercises(obj) {
  let keys = Object.keys(obj);
  const todaysMuscles = [];
  const todaysExercises = [];
  let numOfExercises = 1;
  while(numOfExercises <= 4) {
    const muscle = keys[keys.length * Math.random() << 0];
    //Make sure there are no duplicate muscles
    if (!todaysMuscles.includes(muscle)) {
      todaysMuscles.push(muscle);
      const exercise = obj[muscle][obj[muscle].length * Math.random() << 0];
      todaysExercises.push({[muscle]: exercise});
      numOfExercises++;
    }
  }
  return todaysExercises;
}

//Exercises organised by body section and muscle
const exercises = {
    glutes: ['Barbell Glute Bridge', 'Barbell Hip Thrust', 'Step-Up With Knee Raise', 'Flutter Kicks'],
    quads: ['Olympic Squat', 'Jumping Rope', 'Barbell Walking Lunge', 'Front Squats With Two Kettlebells'],
    hamstrings: ['Barbell Deadlift', 'Sumo Deadlift', 'Lying Leg Curls', 'Power Snatch'],
    calves: ['Standing Calf Raises', 'Calf Press on Leg Press Machine', 'Seated Calf Raises', 'Balance Board'],
    neck: ['Neck Bridge Prone', 'Lying Face Down Plate Neck Resistance', 'Lying Face Up Plate Neck Resistance', 'Isometric Neck Exercise'],
    traps: ['Standing Dumbbell Shrug', 'Upright Row', 'Barbell Shrug', 'Barbell Behind-The-Back Shrug'],
    shoulders: ['Clean and Press', 'Military Press', 'Clean and Jerk', 'Dumbbell Front Raise to Lateral Raise'],
    chest: ['Pushups', 'Dumbbell Flyes', 'Bench Press', 'Chest Dip'],
    biceps: ['Hammer Curls', 'Barbell Curls', 'Concentration Curls', 'EZ-Bar Curls'],
    forearms: ['Dumbbell Farmers Walk', 'Wrist Roller', 'Seated Palms Up Wrist Curls', 'Rickshaw Carry'],
    abs: ['Plank', 'Spider Crawl', 'Decline Crunch', 'Cross Body Crunch'],
    triceps: ['Triceps Dip', 'Dumbbell Floor Press', 'Triceps Pushdown', 'Skullcrusher'],
    lats: ['Pull-Up', 'Shotgun Row', 'Muscle-Up', 'Rope Climb'],
    middleBack: ['Rower', 'One-Arm Dumbbell Row', 'Bent Over Barbell Row', 'Upside-Down Pull-Up'],
    lowerBack: ['Back Extension', 'Axle Deadlift', 'Superman', 'Hyperextensions'],
}
