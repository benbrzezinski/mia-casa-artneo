import scss from "./BlogPostCard.module.scss";

interface BlogPostCardProps {
  src: string;
  alt: string;
  srcSet: string;
  text: string;
  date: string;
}

export default function BlogPostCard({
  src,
  alt,
  srcSet,
  text,
  date,
}: BlogPostCardProps) {
  return (
    <li className={scss.card}>
      <img
        className={scss.img}
        loading="lazy"
        src={src}
        alt={alt}
        sizes="410px"
        srcSet={srcSet}
      />
      <p className={scss.text}>{text}</p>
      <p className={scss.date}>{date}</p>
    </li>
  );
}
