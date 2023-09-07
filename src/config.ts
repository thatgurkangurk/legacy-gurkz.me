export const SITE_TITLE = "gurkan -"

type ValidRedirectStatus = 300 | 301 | 302 | 303 | 304 | 307 | 308;

type SocialMediaPlatform = {
    status: ValidRedirectStatus;
    destination: string;
}

type Socials = Record<string, SocialMediaPlatform>

export const socials: Socials = {
    '/twitter': {
        status: 302,
        destination: 'https://twitter.com/thatgurkangurk'
    },
    '/github': {
        status: 302,
        destination: 'https://github.com/thatgurkangurk'
    }
}