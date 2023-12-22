import { Box, Button, Typography } from "@mui/material"
import WidgetWrapper from "components/WidgetWrapper"
import { useTheme } from "@emotion/react"
import FlexBetween from "components/FlexBetween"
import { useNavigate } from "react-router-dom"


export const DeletePatient = () => {

  const navigate = useNavigate()

  const { palette } = useTheme()
    return (
        <WidgetWrapper>
            <FlexBetween>
                <Box>
                    <Typography
                        color={palette.neutral.dark}
                        variant="h5"
                        fontWeight="500"
                    >
                        See All Patient
                    </Typography>
                    <Typography
                        color={palette.neutral.main}
                        variant="h6"
                        fontWeight="300"
                    >
                        You can Delete also
                    </Typography>
                </Box>
                <Button variant="outlined"
                    onClick={() => navigate("/home/admin/patients")}
                >Here</Button>
            </FlexBetween>
        </WidgetWrapper>
    )
}
