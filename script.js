//Javascript console script that generates a list of random exercise
//Exercises organised by body section and muscle
const exercises = {
  lowerBody: {
    glutes: ['Barbell Glute Bridge', 'Barbell Hip Thrust', 'Step-Up With Knee Raise', 'Flutter Kicks'],
    quads: ['Olympic Squat', 'Jumping Rope', 'Barbell Walking Lunge', 'Front Squats With Two Kettlebells'],
    hamstrings: ['Barbell Deadlift', 'Sumo Deadlift', 'Lying Leg Curls', 'Power Snatch'],
    calves: ['Standing Calf Raises', 'Calf Press on Leg Press Machine', 'Seated Calf Raises', 'Balance Board'],
  },
  upperBody: {
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
  },
}
