
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
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0ZWM3OGFiMzA1NTg4MWNmOWNlYzgxZjRmODcxODExNyIsInN1YiI6IjY1MTdjZTczOTNiZDY5MDEzOGZkNWE4MyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.TMYn0RkgbOQ_O0E2ZK-Jop8udw9Fr3k5rNBkrzulddU'
    }
};


export const IMG_CDN_URL = "https://image.tmdb.org/t/p/w500";

export const SUPPORTED_LANGUAGES = [{identifier: 'en', language: 'English'},
{identifier: 'hindi', language: 'Hindi'},{identifier: 'spanish', language: 'Spanish'}]
