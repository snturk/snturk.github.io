import { BlogPostModel } from './types';
import classes from './BlogPost.module.css';

type BlogPostProps = {
    blogPost: BlogPostModel;
    index: number;
};

const formatDate = (date: string) => {
    const d = new Date(date);
    return isNaN(d.getTime()) ? '' : d.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });
};

const BlogPost = ({ blogPost, index }: BlogPostProps) => {
    const { title, link, tags, image, date } = blogPost;

    return (
        <a className={classes.row} href={link} target="_blank" rel="noreferrer">
            <span className={classes.number}>{String(index + 1).padStart(2, '0')}</span>
            <div>
                <h3 className={classes.title}>{title}</h3>
                <div className={classes.meta}>
                    {formatDate(date)}
                    {tags.map((tag) => (
                        <span key={tag} className={classes.tag}>
                            {tag}
                        </span>
                    ))}
                </div>
            </div>
            <img className={classes.image} src={image} alt="" loading="lazy" />
        </a>
    );
};

export default BlogPost;
