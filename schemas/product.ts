export default {
    name: 'product',
    title: 'Product',
    type: 'document',
    fields: [
        {
            name: 'image',
            title: 'Image',
            type: 'array',
            of: [{ type: 'image' }],
            option: {
                hotspot: 'true',
            }
        },
        {
            name: 'name',
            title: 'Nome',
            type: 'string',
        },
        {
            name: 'slug',
            title: 'Slug',
            type: 'slug',
            options: {
                source: 'name',
                maxLength: 90,
            }
        },
        {
            name: 'price',
            title: 'Preço',
            type: 'number',
        },
        {
            name: 'details',
            title: 'Detalhes',
            type: 'string',
        }
    ]
}