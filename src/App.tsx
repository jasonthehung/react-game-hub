import NavBar from "./components/NavBar"
import GameGrid from "./components/GameGrid"
import GenreList from "./components/GenreList"
import SortSelector from "./components/SortSelector"
import PlatformSelector from "./components/PlatformSelector"
import { Genre } from "./hooks/useGenres"
import { Platform } from "./hooks/useGames"
import { useState } from "react"
import { Box, Grid, GridItem, HStack, Show } from "@chakra-ui/react"

import "./index.css"
import GameHeading from "./components/GameHeading"

export interface GameQuery {
    genre: Genre | null
    platform: Platform | null
    sortOrder: string
    searchText: string
}

const App = () => {
    const [gameQuery, setGameQuery] = useState<GameQuery>({} as GameQuery)

    return (
        <Grid
            templateAreas={{
                base: `"nav" "main"`,
                lg: `"nav nav" "aside main"`,
            }}
            templateColumns={{ base: "1fr", lg: "200px 1fr" }}
        >
            <GridItem area="nav">
                <NavBar
                    onSearch={(searchText) =>
                        setGameQuery({ ...gameQuery, searchText })
                    }
                />
            </GridItem>
            <Show above="lg">
                <GridItem area="aside" paddingX={5}>
                    <GenreList
                        selectedGenre={gameQuery.genre}
                        onSelectedGenre={(genre) =>
                            setGameQuery({ ...gameQuery, genre })
                        }
                    />
                </GridItem>
            </Show>
            <GridItem area="main">
                <Box paddingLeft={2}>
                    <GameHeading gameQuery={gameQuery} />
                    <Box paddingLeft={5}>
                        <HStack marginBottom={5}>
                            <Box marginRight={3}>
                                <PlatformSelector
                                    selectedPlatform={gameQuery.platform}
                                    onSelectedPlatform={(platform) => {
                                        setGameQuery({ ...gameQuery, platform })
                                    }}
                                />
                            </Box>
                            <SortSelector
                                sortOrder={gameQuery.sortOrder}
                                onSelectedOrder={(sortOrder) =>
                                    setGameQuery({ ...gameQuery, sortOrder })
                                }
                            />
                        </HStack>
                    </Box>

                    <GameGrid gameQuery={gameQuery} />
                </Box>
            </GridItem>
        </Grid>
    )
}

export default App
