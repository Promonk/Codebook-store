export interface Person {
  id: number;
  icon: string;
  name: string;
  title: string;
}
export interface TestimonialContent {
  id: number | string;
  title: string;
  text: string;
  person: Person;
}