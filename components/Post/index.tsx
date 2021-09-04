import React from "react";
import { Paper, Typography } from "@material-ui/core";
import Image from "next/image";
import styles from "./Post.module.scss";

export const Post: React.FC = () => {
  return (
    <Paper elevation={0} className="p-20" classes={{root: styles.paper}}>
      <Typography variant="h5" className={styles.title}>
        19 августа четвер Lorem ipsum dolor, sit amet consectetur adipisicing
        elit. Minima quo vitae possimus mollitia nihil. Voluptatibus minus
        exercitationem quidem unde amet earum nostrum nemo, incidunt commodi
        asperiores sint accusamus! Architecto, aspernatur?
      </Typography>
      <Typography className="mt-10 mb-15">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minima quo
        vitae possimus mollitia nihil. Voluptatibus minus exercitationem quidem
        unde amet earum nostrum nemo, incidunt commodi asperiores sint
        accusamus! Architecto, aspernatur?
      </Typography>
      <Image
        alt="image"
        src="https://leonardo.osnova.io/a21ca5a9-d95b-560d-9a6f-9fa87eff7fcd/-/preview/600/-/format/webp/"
        height={500}
        width={600}
      />
    </Paper>
  );
};
