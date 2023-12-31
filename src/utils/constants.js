
export const BACKGROUND_IMAGE = "https://assets.nflxext.com/ffe/siteui/vlv3/fc164b4b-f085-44ee-bb7f-ec7df8539eff/d23a1608-7d90-4da1-93d6-bae2fe60a69b/IN-en-20230814-popsignuptwoweeks-perspective_alpha_website_large.jpg"

export const LOGO = "https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png";

const profileImageUrl = ["https://wallpapers.com/images/hd/netflix-profile-pictures-1000-x-1000-qo9h82134t9nv0j0.jpg",
    "https://wallpapers.com/images/hd/netflix-profile-pictures-1000-x-1000-dyrp6bw6adbulg5b.jpg",
    "https://wallpapers.com/images/hd/netflix-profile-pictures-1000-x-1000-88wkdmjrorckekha.jpg",
    "https://wallpapers.com/images/hd/netflix-profile-pictures-1000-x-1000-vnl1thqrh02x7ra2.jpg",
    "https://wallpapers.com/images/hd/netflix-profile-pictures-5yup5hd2i60x7ew3.jpg"
];
export const getNetflixProfileImageUrl = () => {
    const i = Math.floor(Math.random() * profileImageUrl.length);
    return profileImageUrl[i];
};


export const options = {
    method: 'GET',
    headers: {
        accept: 'application/json',
        Authorization: 'Bearer '+ process.env.REACT_APP_TMDB_KEY
    }
};


export const IMG_CDN_URL = "https://image.tmdb.org/t/p/w500";

export const SUPPORTED_LANGUAGES = [{identifier: 'en', language: 'English'},
{identifier: 'hindi', language: 'Hindi'},{identifier: 'spanish', language: 'Spanish'}]


export const OPENAI_key = process.env.REACT_APP_OPENAI_KEY;

export const GPT_PAGE_BG_IMAGE = "https://media.istockphoto.com/id/1295114854/photo/empty-red-armchairs-of-a-theater-ready-for-a-show.jpg?s=612x612&w=0&k=20&c=0rDtwzMmLbqe_8GuGw2dpjkD0MsXGywJmdmg0jDbMxQ="