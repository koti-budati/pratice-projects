export interface serverDataType {
  title: string;
  channelTitle: string;
  description: string;
  thumbnails: string;
  videoId: string;
}

export const defaultYoutubeData: serverDataType[] = [
  {
    title: "",
    channelTitle: "",
    description: "",
    thumbnails: "",
    videoId: "",
  },
];
