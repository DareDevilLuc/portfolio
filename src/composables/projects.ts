export interface Project {
  id: number;
  title: string;
  description: string;
  tags: string[];
  image: string;
}

export const projects: Project[] = [
  {
    id: 1,
    title: 'FindingDormy',
    description: 'Helps students and workers to find living spaces',
    tags: ['yeah', 'bruh'],
    image: 'public/images/FindingDormy.png'
  },
  {
    id: 2,
    title: 'HuddleUp',
    description: 'A room making platform that helps with managing tasks',
    tags: ['yeah', 'bruh'],
    image: 'public/images/HuddleUp.png'
  },
]
