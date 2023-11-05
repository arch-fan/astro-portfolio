import type { ImageMetadata } from "astro";
import contratarSeguroOnline from '@/media/images/projects/contratar-seguro-online.png'
import laurelBroker from '@/media/images/projects/laurelbroker.png'

export interface Project {
    name: string;
    link: string;
    image: ImageMetadata;
    description: string;
    technologiesIcons: string[]
}

export const projects: Project[] = [
    {
        name: "Contratar Seguro Online",
        link: "https://adeslas.saludyseguromedico.es/",
        image: contratarSeguroOnline,
        description: "Contratar Seguro Online es una de las dos webs en la que estuve trabajando en mi tiempo como desarrollador de WordPress en Adeslas. Esta web trata sobre Seguros de Salud Adeslas. También cree videos publicitarios con After Effects en YouTube sobre los planes de salud de adeslas.",
        technologiesIcons: ['bi:wordpress', 'icon-park-outline:seo', 'cib:adobe-after-effects', 'akar-icons:css-fill', 'akar-icons:html-fill', 'teenyicons:javascript-solid']
    },
    {
        name: "LaurelBroker",
        link: "https://laurelbroker.com/",
        image: laurelBroker,
        description: "LaurelBroker es una de las dos webs en la que estuve trabajando en mi tiempo como desarrollador de WordPress en Adeslas. Esta web es un comparador de seguros de salud entre diferentes compañias. También cree videos publicitarios con After Effects en YouTube sobre los planes de diferentes .",
        technologiesIcons: ['bi:wordpress', 'icon-park-outline:seo', 'cib:adobe-after-effects', 'akar-icons:css-fill', 'akar-icons:html-fill', 'teenyicons:javascript-solid']
    }
]