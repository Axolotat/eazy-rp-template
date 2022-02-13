import * as chakra from "@chakra-ui/react";

export function Input({title, defaultValue}) {
    return (
        <>
            <chakra.Heading as='h3' size='lg' mb={5}>
                {title}
            </chakra.Heading>
            <chakra.Textarea defaultValue={defaultValue} mb={10} />
        </>
    )
}