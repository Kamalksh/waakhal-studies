export type NavigationItem = {
    name: string;
    path: string;
};

export const SITE = {
    name: "Waakhal Studies",
    title: "Shaping Minds for Caring Hands",
    description: "An educational and research platform by Yoombi Conservation Consultancy, exploring Art Conservation, Art History, Museology, Cultural Heritage Studies, Preventive Conservation, and Museum Studies.",
    url: "https://waakhal-studies.pages.dev",
    defaultImage: "/default-og-image.jpg",
} as const;

export const NAVIGATION: {
    main: NavigationItem[];
} = {
    main: [
        { name: "Home", path: "/" },
        { name: "About", path: "/#about" },
        { name: "Explore", path: "/#explore" }
    ],
} as const;

export const CONTENT = {
    postsPerPage: 10,
    recentPostsLimit: 3,
    featuredProjectsLimit: 3,
} as const;

export const META = {
    openGraph: {
        type: "website",
        locale: "en_US",
    },
    twitter: {
        cardType: "summary_large_image",
    }
} as const;
