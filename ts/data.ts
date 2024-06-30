/* exported data */
interface Data {
  favorites: SimpleExercise[];
  workouts: Workout[];
  nextWorkoutId: number;
  viewing: null | SimpleExercise;
  currentView: string;
}

let fitlogData: Data = {
  favorites: [],
  workouts: [],
  nextWorkoutId: 1,
  viewing: null,
  currentView: 'home',
};

window.addEventListener('beforeunload', () => {
  const dataJSON = JSON.stringify(fitlogData);
  localStorage.setItem('fitlog-data', dataJSON);
});

const previousJSON = localStorage.getItem('fitlog-data');
if (previousJSON) {
  const parsedDataJSON = JSON.parse(previousJSON);
  fitlogData = parsedDataJSON;
}
