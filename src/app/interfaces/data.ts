// export interface Data {
//   [key: string]: any;
// }
export interface Data {
  [key: string]: Section;
}

export interface Section {
  meta: SectionMeta;
  action?: SectionAction;
  type: string;
  _id: string;
  _v: number;
  content: SectionContent;
}

export interface SectionMeta {
  title: string;
  description?: string;
  location?: string;
  heroImage?: string;
}

export interface SectionAction {
  title: string;
  url: string;
}

export interface SectionContent {
  [key: string]: any;
}

export interface accessToken {
  access_token: string;
}

