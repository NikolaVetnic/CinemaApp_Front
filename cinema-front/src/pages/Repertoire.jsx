import { Box, Chip, Divider } from "@mui/material";
import axios from "axios";
import React, { useState, useEffect, useCallback } from "react";
import Layout from "../components/layout/Layout";

import RepertoireItem from "../components/repertoire/RepertoireItem";
import { getTravelDateFormatted } from "../utils/Utils";

export default function RepertoirePage() {
    const [repertoireDays, setRepertoireDays] = useState([]);

    const wrapperFetchRepertoireDays = useCallback(() => {
        axios
            .get("/api/movies/grouped/date")
            .then((res) => {
                setRepertoireDays(res.data.repertoireDays);
            })
            .catch((error) => {
                console.error(error);
            });
    }, []);

    useEffect(() => {
        wrapperFetchRepertoireDays();
    }, [wrapperFetchRepertoireDays]);

    return (
        <Layout>
            <h2>Repertoire for the Upcoming Week</h2>
            {repertoireDays.map((repertoireDay) => {
                return (
                    <div key={repertoireDay.date}>
                        <Divider>
                            <Chip
                                label={getTravelDateFormatted(
                                    repertoireDay.date
                                )}
                            />
                        </Divider>

                        <br />

                        <div>
                            {repertoireDay.movies.length == 0 && (
                                <Box p={1}>No movies today.</Box>
                            )}
                            {repertoireDay.movies.map((movie) => {
                                return (
                                    <Box
                                        key={
                                            "date" +
                                            repertoireDay.dateTime +
                                            "_movie" +
                                            movie.id
                                        }
                                        display="flex"
                                        alignItems="flex-start"
                                    >
                                        {movie.projections.map((projection) => {
                                            return (
                                                <RepertoireItem
                                                    key={projection.id}
                                                    projection={projection}
                                                ></RepertoireItem>
                                            );
                                        })}
                                    </Box>
                                );
                            })}
                        </div>

                        <br />
                    </div>
                );
            })}
        </Layout>
    );
}
