import * as chakra from "@chakra-ui/react";

export function Nav() {
    return (
        <nav>
            <chakra.Flex>
                <chakra.Box>
                    <chakra.Text
                        ml={2}
                        textTransform="uppercase"
                        fontSize="xl"
                        fontWeight="bold"
                        color="blue.900"
                    >
                        RPG Template
                    </chakra.Text>
                </chakra.Box>
                <chakra.Spacer />
                <chakra.Box>
                    <chakra.TabList>
                        <chakra.Tab>Mon template</chakra.Tab>
                        <chakra.Tab>Le texte</chakra.Tab>
                        <chakra.Tab>Le template à copier</chakra.Tab>
                        <chakra.Tab>Aperçu</chakra.Tab>
                    </chakra.TabList>
                </chakra.Box>
            </chakra.Flex>
        </nav>
    )
}