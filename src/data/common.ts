interface NavigationMenu {
    text: string;
    path: string;
}

export const navigationMenu: NavigationMenu[] = [
    {
        text: "Inicio",
        path: "#home",
    },
    {
        text: "Sobre mí",
        path: "#about-me",
    },
    {
        text: "Proyectos",
        path: "#projects",
    },
]