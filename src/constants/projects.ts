import project_1 from './../assets/hoops-league-registration-app.png'
import project_2 from './../assets/sorting-algorithm-visualizer-app.png'
import project_3 from './../assets/iris-predictor-web-app.png'
import project_4 from './../assets/dofus-book.png'
import type {ProjectCardProp} from '@/types'

export const projects: ProjectCardProp[] = [
  {
    name: 'Hoops-League registration app',
    description:
      'A full-stack basketball game registration app. It allows users to view upcoming games, register for the next available event, and lets an admin manage the schedule and player registrations.',
    liveDemo: 'http://starshipghost.github.io/hoops-league-registration-app',
    repo: 'http://github.com/starshipghost/hoops-league-registration-app/tree/main',
    technologies: ['React', 'TypeScript', 'Tailwind CSS', 'Node.js', 'Express.js', 'MongoDB'],
    img: project_1,
  },
  {
    name: 'Sorting algorithms visualizer',
    description:
      "An interactive web application that demonstrates sorting algorithms operate through smooth, step-by-step animations. Users can generate custom datasets, control playback, adjust animation speed, and inspect each algorithm's behavior in detail.",
    liveDemo: 'http://starshipghost.github.io/sorting-algorithms-visualizer-app',
    repo: 'http://github.com/starshipghost/sorting-algorithms-visualizer-app/tree/main',
    technologies: ['React', 'TypeScript', 'Tailwind CSS'],
    img: project_2,
  },
  {
    name: 'Iris predictor web application',
    description:
      'An introductory ML application centered on Iris flower classification. It showcases how to take a well-known dataset, train a model with Python tools such as scikit-learn, and wrap it in a simple app so users can test predictions interactively.',
    liveDemo: 'https://starshipghost.github.io/iris-classification-app',
    repo: 'https://github.com/jalalk97/iris-classification-app/',
    technologies: ['React', 'TypeScript', 'Python', 'FastAPI', 'scikit-learn', 'pandas', 'matplotlib'],
    img: project_3,
  },
  {
    name: 'Dofus book clone',
    description:
      'A React and TypeScript web application that recreates part of the DofusDB experience. It extracts item and recipe data from the DofusDB API, transforms the raw responses into structured models, and displays information such as effects, conditions, descriptions, and recipe details through a clear game-data interface.',
    liveDemo: 'https://starshipghost.github.io/dofus-book/',
    repo: 'https://github.com/StarshipGhost/dofus-book/',
    technologies: ['React', 'TypeScript', 'CSS'],
    img: project_4,
  },
]
