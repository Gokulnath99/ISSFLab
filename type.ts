export type Attack = {
  title: string;
  path: string;
}[]


export type  groups = {
  title: string;
  audios: {
      name: string;
      url: {
          name: string;
          urls: string;
      }[];
  }[];
}[]