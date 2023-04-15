export default {
    name: 'banner',
    title: 'Banner',
    type: 'document',
    fields: [
        {
            name: 'main_image',
            title: 'Imagem Principal',
            desc: 'Imagem com o outfit completo',
            type: 'image',
        },
        {
            name: 'images',
            title: 'Imagens do Outfit',
            desc: 'Todas do mesmo tamanho e fundo transparente',
            type: 'array',
            of: [
                {
                    type: 'image',
                    name: 'image',
                    title: 'Imagem Somente da Peça',
                    fields: [
                        { type: 'reference',to: [{ type: 'product' }],name: 'product',title: 'Produto' },
                        { type: 'string', name: 'text',title: 'Texto' },
                        { type: 'number', name: 'x',title: 'X' },
                        { type: 'number', name: 'y',title: 'Y' }
                    ]
                }],
        },
        {
            name: 'desc',
            title: 'Texto no Banner',
            desc: 'Texto que aparece do lado da imagem',
            type: 'string',
        },
    ],
};