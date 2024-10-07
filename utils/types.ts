export interface PhotoStoreInterface {
    id: string;
    img: string;
    fullImg: string;
    name: string;
    location: string;
}

export interface PhotosInterface {
    id: string;
    created_at: string;
    updated_at: string;
    width: number;
    height: number;
    color: string;
    blur_hash: string;
    likes: number;
    liked_by_user: boolean;
    description: string;
    user: UserInterface;
    current_user_collections: CollectionInterface[];
    urls: UrlsInterface;
    links: PhotoLinksInterface;
  }
  
  export interface UserInterface {
    id: string;
    username: string;
    name: string;
    portfolio_url: string;
    bio: string;
    location: string;
    total_likes: number;
    total_photos: number;
    total_collections: number;
    instagram_username: string;
    twitter_username: string;
    profile_image: ProfileImageInterface;
    links: UserLinksInterface;
  }
  
  export interface ProfileImageInterface {
    small: string;
    medium: string;
    large: string;
  }
  
  export interface UserLinksInterface {
    self: string;
    html: string;
    photos: string;
    likes: string;
    portfolio: string;
  }
  
  export interface CollectionInterface {
    id: number;
    title: string;
    published_at: string;
    last_collected_at: string;
    updated_at: string;
    cover_photo: null;
    user: null;
  }
  
  export interface UrlsInterface {
    raw: string;
    full: string;
    regular: string;
    small: string;
    thumb: string;
  }
  
  export interface PhotoLinksInterface {
    self: string;
    html: string;
    download: string;
    download_location: string;
  }
  