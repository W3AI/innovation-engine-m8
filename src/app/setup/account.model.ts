export interface Account {
  id: string;
  name: string;
  email: string;
  osTitle: string;
  type?: string;        // dev, biz, fin, etc = 'dev' | 'biz' | 'fin'
  dateOpen?: Date;
  dateChange?: Date;
  msLoopCycle?: number;  // nr of milisecs for the ToDo loop
  interests?: [string];
  locationLonLat?: [number];
  mapZoom?: number;
}