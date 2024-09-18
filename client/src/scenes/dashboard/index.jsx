import {
  Box,
  Typography,
  Link,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import {
  Header,
} from "../../components";
import { tokens } from "../../theme";

function Dashboard() {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const isXlDevices = useMediaQuery("(min-width: 1260px)");
  const isMdDevices = useMediaQuery("(min-width: 724px)");
  const isXsDevices = useMediaQuery("(max-width: 436px)");
  return (
    <Box m="20px">
      <Box display="flex" justifyContent="space-between">
        <Header title="DASHBOARD" subtitle="Welcome to your dashboard" />
      </Box>

      {/* GRID & CHARTS */}
      <Box
        display="grid"
        gridTemplateColumns={
          isXlDevices
            ? "repeat(3, 1fr)"
            : isMdDevices
              ? "repeat(1, 1fr)"
              : "repeat(1, 1fr)"
        }
        gridAutoRows="140px"
        gap="8rem 1rem"
        paddingBottom={15}
      >
        {/* Cards */}
        <Box
          gridColumn="span 1"
          bgcolor={colors.primary[400]}
          borderRadius={"5px"}
          display="flex"
          flexDirection="column"
          alignItems="center"
          justifyContent="center"
          gap="10px"
          height="30vh"
          padding={1}
          margin={1}>

          <Typography variant="h4" colors="text.primary">
            Title
          </Typography>

          <Box
            borderRadius={"2px"}
            width={"100%"}
            height={"100%"}
            sx={{
              overflowY: "auto",
              alignItems: "flex-start",
            }}
          >

            <Link href="#" target="_blank" underline="none" color="inherit">
              <Box
                sx={{
                  "&:hover": {
                    backgroundColor: colors.primary[300]
                  },
                }}
                padding={1}
                borderRadius={"5px"}
              >
                <Typography variant="h6" color={colors.greenAccent[500]}>
                  Link

                </Typography>
              </Box>
            </Link>
            <Link href="#" target="_blank" underline="none" color="inherit">
              <Box
                sx={{
                  "&:hover": {
                    backgroundColor: colors.primary[300]
                  },
                }}
                padding={1}
                borderRadius={"5px"}
              >
                <Typography variant="h6" color={colors.greenAccent[500]}>
                  Link

                </Typography>
              </Box>
            </Link>
            <Link href="#" target="_blank" underline="none" color="inherit">
              <Box
                sx={{
                  "&:hover": {
                    backgroundColor: colors.primary[300]
                  },
                }}
                padding={1}
                borderRadius={"5px"}
              >
                <Typography variant="h6" color={colors.greenAccent[500]}>
                  Link

                </Typography>
              </Box>
            </Link>
            <Link href="#" target="_blank" underline="none" color="inherit">
              <Box
                sx={{
                  "&:hover": {
                    backgroundColor: colors.primary[300]
                  },
                }}
                padding={1}
                borderRadius={"5px"}
              >
                <Typography variant="h6" color={colors.greenAccent[500]}>
                  Link

                </Typography>
              </Box>
            </Link>


          </Box>

        </Box>

        <Box
          gridColumn="span 1"
          bgcolor={colors.primary[400]}
          borderRadius={"5px"}
          display="flex"
          flexDirection="column"
          alignItems="center"
          justifyContent="center"
          gap="10px"
          height="30vh"
          padding={1}
          margin={1}>

          <Typography variant="h4" colors="text.primary">
            Title
          </Typography>

          <Box
            borderRadius={"2px"}
            width={"100%"}
            height={"100%"}
            sx={{
              overflowY: "auto",
              alignItems: "flex-start",
            }}
          >

            <Link href="#" target="_blank" underline="none" color="inherit">
              <Box
                sx={{
                  "&:hover": {
                    backgroundColor: colors.primary[300]
                  },
                }}
                padding={1}
                borderRadius={"5px"}
              >
                <Typography variant="h6" color={colors.greenAccent[500]}>
                  Link

                </Typography>
              </Box>
            </Link>
            <Link href="#" target="_blank" underline="none" color="inherit">
              <Box
                sx={{
                  "&:hover": {
                    backgroundColor: colors.primary[300]
                  },
                }}
                padding={1}
                borderRadius={"5px"}
              >
                <Typography variant="h6" color={colors.greenAccent[500]}>
                  Link

                </Typography>
              </Box>
            </Link>
            <Link href="#" target="_blank" underline="none" color="inherit">
              <Box
                sx={{
                  "&:hover": {
                    backgroundColor: colors.primary[300]
                  },
                }}
                padding={1}
                borderRadius={"5px"}
              >
                <Typography variant="h6" color={colors.greenAccent[500]}>
                  Link

                </Typography>
              </Box>
            </Link>
            <Link href="#" target="_blank" underline="none" color="inherit">
              <Box
                sx={{
                  "&:hover": {
                    backgroundColor: colors.primary[300]
                  },
                }}
                padding={1}
                borderRadius={"5px"}
              >
                <Typography variant="h6" color={colors.greenAccent[500]}>
                  Link

                </Typography>
              </Box>
            </Link>


          </Box>

        </Box>

        <Box
          gridColumn="span 1"
          bgcolor={colors.primary[400]}
          borderRadius={"5px"}
          display="flex"
          flexDirection="column"
          alignItems="center"
          justifyContent="center"
          gap="10px"
          height="30vh"
          padding={1}
          margin={1}>

          <Typography variant="h4" colors="text.primary">
            Title
          </Typography>

          <Box
            borderRadius={"2px"}
            width={"100%"}
            height={"100%"}
            sx={{
              overflowY: "auto",
              alignItems: "flex-start",
            }}
          >

            <Link href="#" target="_blank" underline="none" color="inherit">
              <Box
                sx={{
                  "&:hover": {
                    backgroundColor: colors.primary[300]
                  },
                }}
                padding={1}
                borderRadius={"5px"}
              >
                <Typography variant="h6" color={colors.greenAccent[500]}>
                  Link

                </Typography>
              </Box>
            </Link>
            <Link href="#" target="_blank" underline="none" color="inherit">
              <Box
                sx={{
                  "&:hover": {
                    backgroundColor: colors.primary[300]
                  },
                }}
                padding={1}
                borderRadius={"5px"}
              >
                <Typography variant="h6" color={colors.greenAccent[500]}>
                  Link

                </Typography>
              </Box>
            </Link>
            <Link href="#" target="_blank" underline="none" color="inherit">
              <Box
                sx={{
                  "&:hover": {
                    backgroundColor: colors.primary[300]
                  },
                }}
                padding={1}
                borderRadius={"5px"}
              >
                <Typography variant="h6" color={colors.greenAccent[500]}>
                  Link

                </Typography>
              </Box>
            </Link>
            <Link href="#" target="_blank" underline="none" color="inherit">
              <Box
                sx={{
                  "&:hover": {
                    backgroundColor: colors.primary[300]
                  },
                }}
                padding={1}
                borderRadius={"5px"}
              >
                <Typography variant="h6" color={colors.greenAccent[500]}>
                  Link

                </Typography>
              </Box>
            </Link>


          </Box>

        </Box>

        <Box
          gridColumn="span 1"
          bgcolor={colors.primary[400]}
          borderRadius={"5px"}
          display="flex"
          flexDirection="column"
          alignItems="center"
          justifyContent="center"
          gap="10px"
          height="30vh"
          padding={1}
          margin={1}>

          <Typography variant="h4" colors="text.primary">
            Title
          </Typography>

          <Box
            borderRadius={"2px"}
            width={"100%"}
            height={"100%"}
            sx={{
              overflowY: "auto",
              alignItems: "flex-start",
            }}
          >

            <Link href="#" target="_blank" underline="none" color="inherit">
              <Box
                sx={{
                  "&:hover": {
                    backgroundColor: colors.primary[300]
                  },
                }}
                padding={1}
                borderRadius={"5px"}
              >
                <Typography variant="h6" color={colors.greenAccent[500]}>
                  Link

                </Typography>
              </Box>
            </Link>
            <Link href="#" target="_blank" underline="none" color="inherit">
              <Box
                sx={{
                  "&:hover": {
                    backgroundColor: colors.primary[300]
                  },
                }}
                padding={1}
                borderRadius={"5px"}
              >
                <Typography variant="h6" color={colors.greenAccent[500]}>
                  Link

                </Typography>
              </Box>
            </Link>
            <Link href="#" target="_blank" underline="none" color="inherit">
              <Box
                sx={{
                  "&:hover": {
                    backgroundColor: colors.primary[300]
                  },
                }}
                padding={1}
                borderRadius={"5px"}
              >
                <Typography variant="h6" color={colors.greenAccent[500]}>
                  Link

                </Typography>
              </Box>
            </Link>
            <Link href="#" target="_blank" underline="none" color="inherit">
              <Box
                sx={{
                  "&:hover": {
                    backgroundColor: colors.primary[300]
                  },
                }}
                padding={1}
                borderRadius={"5px"}
              >
                <Typography variant="h6" color={colors.greenAccent[500]}>
                  Link

                </Typography>
              </Box>
            </Link>


          </Box>

        </Box>

        <Box
          gridColumn="span 1"
          bgcolor={colors.primary[400]}
          borderRadius={"5px"}
          display="flex"
          flexDirection="column"
          alignItems="center"
          justifyContent="center"
          gap="10px"
          height="30vh"
          padding={1}
          margin={1}>

          <Typography variant="h4" colors="text.primary">
            Title
          </Typography>

          <Box
            borderRadius={"2px"}
            width={"100%"}
            height={"100%"}
            sx={{
              overflowY: "auto",
              alignItems: "flex-start",
            }}
          >

            <Link href="#" target="_blank" underline="none" color="inherit">
              <Box
                sx={{
                  "&:hover": {
                    backgroundColor: colors.primary[300]
                  },
                }}
                padding={1}
                borderRadius={"5px"}
              >
                <Typography variant="h6" color={colors.greenAccent[500]}>
                  Link

                </Typography>
              </Box>
            </Link>
            <Link href="#" target="_blank" underline="none" color="inherit">
              <Box
                sx={{
                  "&:hover": {
                    backgroundColor: colors.primary[300]
                  },
                }}
                padding={1}
                borderRadius={"5px"}
              >
                <Typography variant="h6" color={colors.greenAccent[500]}>
                  Link

                </Typography>
              </Box>
            </Link>
            <Link href="#" target="_blank" underline="none" color="inherit">
              <Box
                sx={{
                  "&:hover": {
                    backgroundColor: colors.primary[300]
                  },
                }}
                padding={1}
                borderRadius={"5px"}
              >
                <Typography variant="h6" color={colors.greenAccent[500]}>
                  Link

                </Typography>
              </Box>
            </Link>
            <Link href="#" target="_blank" underline="none" color="inherit">
              <Box
                sx={{
                  "&:hover": {
                    backgroundColor: colors.primary[300]
                  },
                }}
                padding={1}
                borderRadius={"5px"}
              >
                <Typography variant="h6" color={colors.greenAccent[500]}>
                  Link

                </Typography>
              </Box>
            </Link>


          </Box>

        </Box>

        <Box
          gridColumn="span 1"
          bgcolor={colors.primary[400]}
          borderRadius={"5px"}
          display="flex"
          flexDirection="column"
          alignItems="center"
          justifyContent="center"
          gap="10px"
          height="30vh"
          padding={1}
          margin={1}>

          <Typography variant="h4" colors="text.primary">
            Title
          </Typography>

          <Box
            borderRadius={"2px"}
            width={"100%"}
            height={"100%"}
            sx={{
              overflowY: "auto",
              alignItems: "flex-start",
            }}
          >

            <Link href="#" target="_blank" underline="none" color="inherit">
              <Box
                sx={{
                  "&:hover": {
                    backgroundColor: colors.primary[300]
                  },
                }}
                padding={1}
                borderRadius={"5px"}
              >
                <Typography variant="h6" color={colors.greenAccent[500]}>
                  Link

                </Typography>
              </Box>
            </Link>
            <Link href="#" target="_blank" underline="none" color="inherit">
              <Box
                sx={{
                  "&:hover": {
                    backgroundColor: colors.primary[300]
                  },
                }}
                padding={1}
                borderRadius={"5px"}
              >
                <Typography variant="h6" color={colors.greenAccent[500]}>
                  Link

                </Typography>
              </Box>
            </Link>
            <Link href="#" target="_blank" underline="none" color="inherit">
              <Box
                sx={{
                  "&:hover": {
                    backgroundColor: colors.primary[300]
                  },
                }}
                padding={1}
                borderRadius={"5px"}
              >
                <Typography variant="h6" color={colors.greenAccent[500]}>
                  Link

                </Typography>
              </Box>
            </Link>
            <Link href="#" target="_blank" underline="none" color="inherit">
              <Box
                sx={{
                  "&:hover": {
                    backgroundColor: colors.primary[300]
                  },
                }}
                padding={1}
                borderRadius={"5px"}
              >
                <Typography variant="h6" color={colors.greenAccent[500]}>
                  Link

                </Typography>
              </Box>
            </Link>


          </Box>

        </Box>

      </Box>
    </Box >
  );
}

export default Dashboard;
