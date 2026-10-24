
export interface Tag {
  name: string;
  icon: string;
}

export interface Project {
  id: number;
  title: string;
  description: string;
  tags: Tag[];
  image: string;
}

const vue: Tag = { name: 'Vue 3', icon: 'devicon-vuejs-plain colored'}
const ts: Tag = { name: 'Typescript', icon: 'devicon-typescript-plain colored'}
const supabase: Tag = { name: 'Supabase', icon: 'devicon-supabase-plain colored'}

export const projects: Project[] = [
  {
    id: 1,
    title: 'FindingDormy',
    description: 'Helps students and workers to find living spaces',
    tags: [vue, ts, supabase],
    image: 'public/images/FindingDormy.png'
  },
  {
    id: 2,
    title: 'HuddleUp',
    description: 'A room making platform that helps with managing tasks',
    tags: [vue, ts, supabase],
    image: 'public/images/HuddleUp.png'
  },
]
