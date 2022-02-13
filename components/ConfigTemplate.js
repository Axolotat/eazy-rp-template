import * as chakra from "@chakra-ui/react";
import { TemplateField } from "./TemplateField";

export function ConfigTemplate() {
    return (
        <>
            <TemplateField title='Mon css' defaultValue='Template Css'>
                {`<style>@import url('url');/**
                    variable
                    **/:root{/**
                    image
                    **/--image: url("url");/**
                    couleur fond
                    **/--bcgk: #F9F9F9;/**
                    couleur trait
                    **/--trait: #b3bcd3;}.tet-wrapper{background-color:var(--bcgk)}</style>
                    `}
            </TemplateField>

            <TemplateField title='Mon template paroles' defaultValue='Template paroles'>
                {`<style></style>`}
            </TemplateField>


            <TemplateField title='Mon template texte' defaultValue='Template texte'>
                {`<style></style>`}
            </TemplateField>

        </>
    )
}