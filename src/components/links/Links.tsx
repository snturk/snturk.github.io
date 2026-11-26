import { LinkModel } from './types';
import classes from './Links.module.css';

const links: LinkModel[] = [
    { label: 'medium ↗', linkTo: 'https://medium.com/@mcsnturk' },
    { label: 'github', linkTo: 'https://github.com/snturk' },
    { label: 'linkedin', linkTo: 'https://www.linkedin.com/in/snturk' },
];

const Links = () => (
    <nav className={classes.root}>
        {links.map((link) => (
            <a key={link.linkTo} className={classes.button} href={link.linkTo} target="_blank" rel="noreferrer">
                {link.label}
            </a>
        ))}
    </nav>
);

export default Links;
