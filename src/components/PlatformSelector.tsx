import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react"
import { BsChevronDown } from "react-icons/bs"
import usePlatforms from "../hooks/usePlatforms"
import { Platform } from "../hooks/useGames"

interface Props {
    onSelectedPlatform: (platform: Platform | null) => void
    selectedPlatform: Platform | null
}

const PlatformSelector = ({ onSelectedPlatform, selectedPlatform }: Props) => {
    const { data } = usePlatforms()

    return (
        <Menu>
            <MenuButton as={Button} rightIcon={<BsChevronDown />}>
                {selectedPlatform?.name || "Platforms"}
            </MenuButton>
            <MenuList>
                {data.map((platform) => (
                    <MenuItem
                        key={platform.id}
                        onClick={() => onSelectedPlatform(platform)}
                    >
                        {platform.name}
                    </MenuItem>
                ))}
            </MenuList>
        </Menu>
    )
}

export default PlatformSelector
