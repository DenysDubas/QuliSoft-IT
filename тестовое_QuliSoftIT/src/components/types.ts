export type Galleryes = {
  id: string;
  urls: {
    thumb: string;
  };
  alt_description: string;
  user: {
    name: string;
  };
};

export type Photo = {
  id: string;
  urls: {
    regular: string;
  };
  alt_description: string;
  user: {
    name: string;
  };
};
