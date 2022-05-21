import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Box, CardActionArea } from "@mui/material";
import Rating from "@mui/material/Rating";

import { getTravelDateTimeFormatted } from "../../utils/Utils";

export default function RepertoireItem(props) {
    return (
        <Box p={1}>
            <Card sx={{ maxWidth: 345 }}>
                <CardActionArea href="https://google.com">
                    <CardMedia
                        component="img"
                        height="540"
                        image={props.projection.movie.image}
                        alt="green iguana"
                    />
                    <CardContent>
                        <Typography variant="body2" color="text.secondary">
                            {getTravelDateTimeFormatted(
                                props.projection.dateTime
                            ).toString()}
                        </Typography>

                        <hr></hr>

                        <Typography gutterBottom variant="h5" component="div">
                            {props.projection.movie.title}
                        </Typography>

                        <Typography
                            gutterBottom
                            variant="overline"
                            component="div"
                        >
                            {props.projection.movie.genres
                                .map((genre) => genre.genre)
                                .join(" | ")}
                        </Typography>

                        <Typography variant="body2" color="text.secondary">
                            {props.projection.movie.description}
                        </Typography>

                        <Typography
                            gutterBottom
                            variant="overline"
                            component="div"
                        >
                            Runtime :{" "}
                            {Math.floor(props.projection.movie.runtime / 60)}h{" "}
                            {props.projection.movie.runtime % 60}m
                        </Typography>

                        <Typography component="legend">
                            Average rating
                        </Typography>

                        <Rating
                            name="movie-rating-read"
                            value={props.projection.movie.avarageRating}
                            precision={0.5}
                            readOnly
                        />
                    </CardContent>
                </CardActionArea>
            </Card>
        </Box>
    );
}
