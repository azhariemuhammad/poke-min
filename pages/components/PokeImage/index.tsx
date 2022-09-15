import React from "react";
import Image from "next/image";

import styles from "./poke-image.module.css";

interface PokeImageProps {
  src: string;
}
const PokeImage = ({ src }: PokeImageProps) => {
  return (
    <div className={styles.img}>
      <Image src={src} width="300px" height="200px" layout="responsive" />
    </div>
  );
};

export default PokeImage;
