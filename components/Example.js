import * as chakra from "@chakra-ui/react";

export function Example({children}) {
    return (
        <>
            <chakra.Heading as='h4' size='md'>Exemple</chakra.Heading>
            <pre>
                <chakra.Code mb={10}>
                    {children}
                </chakra.Code>
            </pre>
        </>
    )
}