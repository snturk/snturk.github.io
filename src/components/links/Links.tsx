import { LinkComponentProps } from './types';
import classes from './Links.module.css';

const iconProps = {
    xmlns: 'http://www.w3.org/2000/svg',
    width: 20,
    height: 20,
    viewBox: '0 0 24 24',
    strokeWidth: 1.75,
    stroke: 'currentColor',
    fill: 'none',
    strokeLinecap: 'round' as const,
    strokeLinejoin: 'round' as const,
};

const IconBrandGithub = () => (
    <svg {...iconProps}>
        <path d="M9 19c-4.3 1.4 -4.3 -2.5 -6 -3m12 5v-3.5c0 -1 .1 -1.4 -.5 -2c2.8 -.3 5.5 -1.4 5.5 -6a4.6 4.6 0 0 0 -1.3 -3.2a4.2 4.2 0 0 0 -.1 -3.2s-1.1 -.3 -3.5 1.3a12.3 12.3 0 0 0 -6.2 0c-2.4 -1.6 -3.5 -1.3 -3.5 -1.3a4.2 4.2 0 0 0 -.1 3.2a4.6 4.6 0 0 0 -1.3 3.2c0 4.6 2.7 5.7 5.5 6c-.6 .6 -.6 1.2 -.5 2v3.5" />
    </svg>
);

const IconBrandMedium = () => (
    <svg {...iconProps}>
        <path d="M4 4m0 2a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2z" />
        <path d="M8 9h1l3 3l3 -3h1" />
        <path d="M8 15l2 0" />
        <path d="M14 15l2 0" />
        <path d="M9 9l0 6" />
        <path d="M15 9l0 6" />
    </svg>
);

const IconBrandLinkedin = () => (
    <svg {...iconProps}>
        <path d="M4 4m0 2a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2z" />
        <path d="M8 11l0 5" />
        <path d="M8 8l0 .01" />
        <path d="M12 16l0 -5" />
        <path d="M16 16v-3a2 2 0 0 0 -4 0" />
    </svg>
);

const links: LinkComponentProps[] = [
    { label: 'GitHub', linkTo: 'https://github.com/snturk', icon: <IconBrandGithub /> },
    { label: 'LinkedIn', linkTo: 'https://www.linkedin.com/in/snturk', icon: <IconBrandLinkedin /> },
    { label: 'Medium', linkTo: 'https://medium.com/@mcsnturk', icon: <IconBrandMedium /> },
];

const Links = () => (
    <nav className={classes.root}>
        {links.map((link) => (
            <a key={link.label} className={classes.pill} href={link.linkTo} target="_blank" rel="noreferrer">
                {link.icon}
                <span>{link.label}</span>
            </a>
        ))}
    </nav>
);

export default Links;
