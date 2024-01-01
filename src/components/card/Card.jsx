import Image from 'next/image';
import styles from './card.module.css';
import Link from 'next/link';

const Card = () => {
  return (
    <div className={styles.container}>
        <div className={styles.imageContainer}>
            <Image 
                src='/p1.jpeg'
                alt='post'
                fill
                className={styles.image}
            />
        </div>
        <div className={styles.textContainer}>
            <div className={styles.detail}>
                <span className={styles.date}>11.02.2023 - </span>
                <span className={styles.category}>CULTURE</span>
            </div>
            <Link href='/'>
                  <h1>Lorem Ipsum is simply dummy text of the printing and typesetting industry</h1>
            </Link>
            <p className={styles.desc}>
                There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.
            </p>
            <Link href='/' className={styles.link}>Read More</Link>
        </div>
    </div>
  )
};

export default Card;