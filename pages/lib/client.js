import  SanityClient from "@sanity/client";
import ImageUrlBuilder from "@sanity/image-url";

export const cliente = SanityClient({
    projectId:'xqnz9v84',
    dataser:'production',
    apiVersion:'2022-09-15',
    useCdn:true,
    token: process.env.NEXT_PUBLIC_SANITY_TOKEN
});

const builder = ImageUrlBuilder(cliente);

export const urlFor = (source) => builder.image(source);