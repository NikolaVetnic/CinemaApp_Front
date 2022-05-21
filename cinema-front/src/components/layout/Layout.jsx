import { Box } from "@mui/material";

import MainNavigation from "./MainNavigation";

export default function Layout(props) {
    return (
        <div>
            <MainNavigation />
            <Box sx={{ width: 4 / 5 }} m="auto">
                <main>{props.children}</main>
            </Box>
        </div>
    );
}
