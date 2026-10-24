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
    title: 'Bilat',
    description: 'Bahog Bilat',
    tags: ['yeah', 'bruh'],
    image: ''
  },
  {
    id: 2,
    title: 'Fuck',
    description: 'Oh yeah',
    tags: ['yeah', 'bruh'],
    image: ''
  },
]
