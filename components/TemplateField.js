import {Input} from "./Input";
import {Example} from "./Example";

export function TemplateField({title, defaultValue, children}) {
    return (
        <>
            <Input title={title} defaultValue={defaultValue} />
            <Example>
                {children}
            </Example>
        </>
    )
}