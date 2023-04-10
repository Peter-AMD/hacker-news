import { CSSProperties, FC } from "react";
import NextImage, { ImageProps } from "next/image";

import { blurDataUrl } from "@/constants/image";
import styles from "./Image.module.scss";
import Link from "next/link";

type CustomImageProps = {
  wrapperStyle?: CSSProperties;
  link?: string;
} & ImageProps;

export const Image: FC<CustomImageProps> = ({
  alt,
  src,
  wrapperStyle = {},
  link = "",
}) => {
  return (
    <div className={`image-component ${styles.main}`} style={wrapperStyle}>
      {link ? (
        <Link href={link} target="_blank">
          <NextImage
            alt={alt}
            src={src}
            placeholder="blur"
            blurDataURL={blurDataUrl}
            fill
          />
        </Link>
      ) : (
        <NextImage
          alt={alt}
          src={src}
          placeholder="blur"
          blurDataURL={blurDataUrl}
          fill
        />
      )}
    </div>
  );
};
