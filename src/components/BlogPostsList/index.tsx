import BlogPostCard from "../BlogPostCard";
import scss from "./BlogPostsList.module.scss";

const BLOG_POSTS_DETAILS = [
  {
    src: "/assets/images/mountain-landscape-410.jpg",
    alt: "malowniczy widok na miasto w górach w promieniach zachodzącego słońca",
    srcSet:
      "/assets/images/mountain-landscape-410.jpg 410w, /assets/images/mountain-landscape-820.jpg 820w, /assets/images/mountain-landscape-1230.jpg 1230w",
    text: "Pozwólmy sobię na odrobinę luksusu",
    date: "July 29, 2024",
  },
  {
    src: "/assets/images/venice-canals-410.jpg",
    alt: "kanały w Wenecji z gondolami i zabytkowymi budynkami",
    srcSet:
      "/assets/images/venice-canals-410.jpg 410w, /assets/images/venice-canals-820.jpg 820w, /assets/images/venice-canals-1230.jpg 1230w",
    text: "Urokliwe kanały Wenecji",
    date: "July 29, 2024",
  },
  {
    src: "/assets/images/autumn-park-410.jpg",
    alt: "jesienne drzewa w parku z włoskim krajobrazem w tle",
    srcSet:
      "/assets/images/autumn-park-410.jpg 410w, /assets/images/autumn-park-820.jpg 820w, /assets/images/autumn-park-1230.jpg 1230w",
    text: "Jesień we Włoszech",
    date: "July 29, 2024",
  },
] as const;

export default function BlogPostsList() {
  return (
    <ul className={`uk-flex uk-flex-center uk-flex-wrap ${scss.list}`}>
      {BLOG_POSTS_DETAILS.map(({ src, alt, srcSet, text, date }, i) => (
        <BlogPostCard
          key={i}
          src={src}
          alt={alt}
          srcSet={srcSet}
          text={text}
          date={date}
        />
      ))}
    </ul>
  );
}
