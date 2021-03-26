export interface Hero {
  name: string;
  value: number;
  active?: boolean;
}
export const HEROES: Hero[] = [
  {
    name: 'One',
    value: 1
  },
  {
    name: '',
    value: 2,
    active: true
  },
  {
    name: 'Three',
    value: 3
  },
];

