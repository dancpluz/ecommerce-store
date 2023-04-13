export default {
    name: 'banner',
    title: 'Banner',
    type: 'document',
    fields: [
        {
            name: 'images',
            title: 'Imagens do Outfit',
            desc: 'Todas do mesmo tamanho e fundo transparente',
            type: 'array',
            of: [{ type: 'image' }],
            options: {
                hotspot: true,
            },
        },
        
        {
            name: 'desc',
            title: 'Texto no Banner',
            type: 'string',
        },
    ],
};