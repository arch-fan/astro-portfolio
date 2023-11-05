export interface Technology {
    tech: string;
    icon: string;
    percentage: number;
}

export const technologies: Technology[] = [
    {
        tech: "Python",
        icon: "akar-icons:python-fill",
        percentage: 45
    },
    {
        tech: "TailwindCSS",
        icon: "mdi:tailwind",
        percentage: 70
    },
    {
        tech: "JavaScript",
        icon: "akar-icons:javascript-fill",
        percentage: 70
    },
    {
        tech: "TypeScript",
        icon: "simple-icons:typescript",
        percentage: 70
    },
    {
        tech: "Rust",
        icon: "simple-icons:rust",
        percentage: 20
    },
    {
        tech: "NextJS",
        icon: "akar-icons:nextjs-fill",
        percentage: 60
    },
    {
        tech: "Astro",
        icon: "simple-icons:astro",
        percentage: 85
    },
    {
        tech: "Java",
        icon: "cib:java",
        percentage: 20
    },
    {
        tech: "React",
        icon: "mdi:react",
        percentage: 40
    },
    {
        tech: "SEO",
        icon: "icon-park-outline:seo",
        percentage: 50
    }
]