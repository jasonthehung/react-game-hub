import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react"
import { BsChevronDown } from "react-icons/bs"

interface Props {
    onSelectedOrder: (sortedOreder: string) => void
    sortOrder: string
}
const SortSelector = ({ onSelectedOrder, sortOrder }: Props) => {
    const sortOrders = [
        {
            value: "",
            label: "Relevance",
        },
        {
            value: "-added",
            label: "Date added",
        },
        {
            value: "name",
            label: "Name",
        },
        {
            value: "-released",
            label: "Release date",
        },
        {
            value: "-rating",
            label: "Average rating",
        },
    ]

    const currentSortOrder = sortOrders.find(
        (ordre) => ordre.value === sortOrder
    )

    return (
        <Menu>
            <MenuButton as={Button} rightIcon={<BsChevronDown />}>
                Order by: {currentSortOrder?.label || "Relevance"}
            </MenuButton>
            <MenuList>
                {sortOrders.map((sortOrder) => (
                    <MenuItem
                        onClick={() => {
                            onSelectedOrder(sortOrder.value)
                        }}
                        key={sortOrder.value}
                        value={sortOrder.value}
                    >
                        {sortOrder.label}
                    </MenuItem>
                ))}
            </MenuList>
        </Menu>
    )
}

export default SortSelector
