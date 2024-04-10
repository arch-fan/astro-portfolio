import type { ImageMetadata } from "astro";
import contratarSeguroOnline from '@/media/images/projects/contratar-seguro-online.png';
import laurelBroker from '@/media/images/projects/laurelbroker.png';
import slugify from "slugify";

export type ProjectInstance = InstanceType<typeof Project>

class Project {
    public name: string;
    public link: string;
    public image: ImageMetadata;
    public description: string;
    public technologiesIcons: string[];
    public slug: string;

    constructor(name: string, link: string, image: ImageMetadata, description: string, technologiesIcons: string[]) {
        this.name = name;
        this.link = link;
        this.image = image;
        this.description = description;
        this.technologiesIcons = technologiesIcons;
        this.slug = slugify(name, {lower: true})
    }
}

export const projects: ProjectInstance[] = [
    new Project(
        "Contratar Seguro Online",
        "https://saludyseguromedico.es/",
        contratarSeguroOnline,
        "Contratar Seguro Online es una de las dos webs en la que estuve trabajando en mi tiempo como desarrollador de WordPress en Adeslas. Esta web trata sobre Seguros de Salud Adeslas. También cree videos publicitarios con After Effects en YouTube sobre los planes de salud de adeslas.",
        ['bi:wordpress', 'icon-park-outline:seo', 'cib:adobe-after-effects', 'akar-icons:css-fill', 'akar-icons:html-fill', 'teenyicons:javascript-solid']
    ),
    new Project(
        "LaurelBroker",
        "https://laurelbroker.com/",
        laurelBroker,
        "LaurelBroker es una de las dos webs en la que estuve trabajando en mi tiempo como desarrollador de WordPress en Adeslas. Esta web es un comparador de seguros de salud entre diferentes compañias. También cree videos publicitarios con After Effects en YouTube sobre los planes de diferentes.",
        ['bi:wordpress', 'icon-park-outline:seo', 'cib:adobe-after-effects', 'akar-icons:css-fill', 'akar-icons:html-fill', 'teenyicons:javascript-solid']
    )
];
